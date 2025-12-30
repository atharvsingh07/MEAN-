import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
  
  product = {
    productCode: 0,
    productName: '',
    category: '',
    price: 0
  };

  productInfo: any[] = [];
  selectedProductId: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.http.get<any[]>('http://localhost:8000/api/product')
      .subscribe(data => {
        this.productInfo = data;
      });
  }

  adddata(): void {
    this.http.post('http://localhost:8000/api/product', this.product)
      .subscribe(() => {
        this.resetForm();
        this.loadProducts();
      });
  }

  editProduct(pro: any): void {
    this.selectedProductId = pro._id;
    this.product = {
      productCode: pro.productCode,
      productName: pro.productName,
      category: pro.category,
      price: pro.price
    };
  }

  updateProduct(): void {
    if (!this.selectedProductId) return;

    this.http.put(
      `http://localhost:8000/api/product/${this.selectedProductId}`,
      this.product
    ).subscribe(() => {
      this.selectedProductId = null;
      this.resetForm();
      this.loadProducts();
    });
  }

  resetForm(): void {
    this.product = {
      productCode: 0,
      productName: '',
      category: '',
      price: 0
    };
  }
}
