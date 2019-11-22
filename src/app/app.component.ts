import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  createForm: FormGroup;
  constructor(){
    this.createForm = new FormGroup({
      'name': new FormControl(),
      'company': new FormControl()
    })
  }

  data=[];
  create(){
    var a = this.createForm.value;
    this.data.push(a);
    this.createForm.reset();
    console.log(this.data);
  }


  
}
