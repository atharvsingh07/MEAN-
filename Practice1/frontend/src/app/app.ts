import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';


import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit
  {
  protected readonly title = signal('frontend');
  constructor(private http: HttpClient) {}

  recieveddata: any[] = [];
  ngOnInit() {
  this.http
    .get<any[]>('http://localhost:3000/api/student')
    .subscribe(data => {
      this.recieveddata = data;
      console.log(this.recieveddata);
    });
}
  poststudent = {
    name: '',
    rollno: null,
    course: '',
  };

  adddata() {
    this.http.post('http://localhost:3000/api/student', this.poststudent).subscribe(() => {
      console.log('Data sent to database');
      
    });

    console.log(this.poststudent);
    this.resetform();
  }
  resetform(): void {
    this.poststudent = {
      name: '',
      rollno: null,
      course: '',
    };
  }

//   getdata() {

//   this.http.get<any[]>('http://localhost:3000/api/student')

//     .subscribe(data => {

//       this.recieveddata = data;
//       console.log('Is array:', Array.isArray(data));
//     });

// }
 
}
