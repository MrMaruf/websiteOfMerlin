import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
  }
  @Input() chapterForm: FormGroup;
  @Input() skill: Skill;
  @Input() index;
  @Input() formGroup: FormGroup;

  showDetails: boolean = false;

  constructor(private formBuilder: FormBuilder) {
   
   }

  ngOnInit() {
  }
  

}
