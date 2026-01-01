import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');

  notedata={
    user:'',
    note:''
  }

 

  constructor(private http:HttpClient){}

  addData(form: NgForm)
  {
    this.http.post('http://localhost:4000/api/notes',this.notedata).subscribe(()=>
    {
      console.log(this.notedata)
      console.log("added sucessfuly");
        form.resetForm();
        this.getData()
    })
  }
  note:any[]=[]
  getData()
  {
    this.http.get<any[]>('http://localhost:4000/api/notes').subscribe((data)=>
    {
        this.note=data;
        console.log("data loaded successfully");
        console.log(data);
    })
}
ngOnInit():void{

 this.getData();
}

mongoId:string=""
editData(n:any)
{
  this.mongoId = n._id;  
  this.notedata.user = n.user;
  this.notedata.note = n.note;
}
updateData()
{
   this.http.put(`http://localhost:4000/api/notes/${this.mongoId}`,this.notedata).subscribe(()=>
  {
    console.log("Data Updated")
    this.mongoId=""
  })
}
}
