import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from '../shared/firebase.service';

@Component({
  selector: 'app-create-unedited',
  templateUrl: './create-unedited.component.html',
  styleUrls: ['./create-unedited.component.css']
})
export class CreateUneditedComponent implements OnInit {
  chapterForm:FormGroup;
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.chapterForm = new FormGroup({
      'name':new FormControl("", Validators.required),
      'number':new FormControl(0),
      'content':new FormControl("", Validators.required),
    })
  }
  onSubmit(){
    console.log(this.chapterForm.value);
    this.firebaseService.saveItemAt("unedited/"+this.chapterForm.controls['number'].value,
     this.chapterForm.value);
  }
}
