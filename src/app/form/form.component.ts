import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./form.component.scss']
})

export class CreateFormComponent implements OnInit {
  @Input() name;
   //@Output() children:EventEmitter<any> = new EventEmitter();
  contactList=[];
  createForm: FormGroup;
  constructor(public activeModal: NgbActiveModal){
    this.createForm = new FormGroup({
      name: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    })
  }

  addContact(){
      var data = this.createForm.value;
      this.contactList.push(data);
      this.createForm.reset();
      this.activeModal.dismiss('Cross click');
      //this.children.emit(this.contactList)
      console.log(this.contactList);
  }

  ngOnInit(){

  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  updateForm: FormGroup;
  editShow:any;
  viewShow: any;
  viewData = [];
  getFromChildren:any;
  createForm: FormGroup;
  constructor(private modalService: NgbModal) { 
    this.createForm = new FormGroup({
      name: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),

      email: new FormControl('', Validators.required),
    })
    this.updateForm = new FormGroup({
      name: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    })
  }

  contactList=[
  ];

  open() {
    const modalRef = this.modalService.open(CreateFormComponent);
    modalRef.componentInstance.name = 'World';
    // modalRef.componentInstance.children.subscribe((receivedEntry) => {
    //   console.log(receivedEntry);
    // })
  }
  addContact(){
    var b = document.querySelector('.popclose');

      document.getElementById('exampleModal').style.display = "none";
      document.getElementById('exampleModal').setAttribute("class","hide");
    var data = this.createForm.value;
    this.contactList.push(data);
    this.createForm.reset();
    this.contactList;
    //this.children.emit(this.contactList)
    console.log(this.contactList);
}


  edit(name){
    var a = name;
    this.editShow = a;
    this.viewShow="";
    for(let i=0;i<this.contactList.length;i++){
      if(a == this.contactList[i].name){
        this.updateForm.patchValue({
          name:this.contactList[i].name,
          address:this.contactList[i].address,
          company:this.contactList[i].company,
          phone:this.contactList[i].phone,
          email:this.contactList[i].email
        })
      }
    }
  }

  view(name){
    this.viewData=[];
    var a = name;
    this.viewShow = a;
    this.editShow ='';
    for(let i=0;i<this.contactList.length;i++){
      if(a == this.contactList[i].name){
        this.viewData.push(this.contactList[i]);
      }
    }
  }

  delete(name){
    var a = name;
    this.viewData.map((data,index)=>{
      if(a == data.name){
        this.viewData.splice(index,1);
      }
      this.viewData;
    })
    this.contactList.map((data,index)=>{
      if(a == data.name){
        this.contactList.splice(index,1);
      }
    })

    // for(let i=0;i<this.contactList.length;i++){
    //   if(a == this.contactList[i].name){
    //     this.contactList.splice(i,1);
    //   }
    // }
    this.contactList;
  }

  updateContact(){
    // this.contactList.push(this.updateForm.value);
    // this.contactList;
    // console.log(this.contactList)
    // this.updateForm.reset();
    var a = this.updateForm.get('name').value;
    for(var i=0;i<this.contactList.length;i++){
      if(a == this.contactList[i].name){
        this.contactList.splice(i,1)
        this.contactList.push(this.updateForm.value);
      }
    }
    this.contactList;
    console.log(this.contactList)
    this.updateForm.reset();
  }
popup(data){
  console.log(data)
  data.style.display = "block";
}
  ngOnInit() {
    var a = document.querySelector('.popup');
    a.addEventListener("click", function(){
      document.getElementById('exampleModal').style.display = "block";
      document.getElementById('exampleModal').setAttribute("class","show");
    });
    var b = document.querySelector('.close');
    b.addEventListener("click", function(){
      document.getElementById('exampleModal').style.display = "none";
      document.getElementById('exampleModal').setAttribute("class","hide");
    });
  }


}
