import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { FormGroup, FormControl, Validators, FormArray, CheckboxControlValueAccessor } from '@angular/forms';
import { skip } from 'rxjs/operators';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Stat } from '../models/stat.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character: Character;
  characterForm: FormGroup;
  controls: { key: string, value: FormControl }[];
  groups: { key: string, value: FormGroup }[];
  arrays: { key: string, value: FormArray }[];
  stats:FormArray;
  constructor() {
    this.character = new Character();
    this.controls = [];
    this.groups = [];
    this.arrays = [];
    this.initForm(this.character);
  }
  onSubmit() {
    const newCharacter: Character = this.characterForm.getRawValue();
    console.log(this.characterForm);
    this.saveCharacter();
    this.character = newCharacter;
    this.saveCharacter();
  }
  checkControl(controlName): boolean {
    // console.log(this.characterForm.controls[controlName.key])
    // console.log(controlName)
    return this.characterForm.controls[controlName.key] instanceof FormControl;
  }
  saveCharacter() {
    // console.log(this.character);
    console.log(this.arrays);
    console.log(this.arrays[0].value.controls[0].value['_type']);
  }
  fillInFormGroup(object: Object): FormGroup {
    let newFormGroup: FormGroup = new FormGroup({});
    for (let internalFieldName in object) {
      let newControl = new FormControl(object[internalFieldName]);
      newFormGroup.addControl(internalFieldName, newControl);
    }
    return newFormGroup;
  }
  addStat(type:string){
    let stat = this.character.setUpStat(type);
    console.log(this.arrays);
    this.stats.push(this.fillInFormGroup(this.character.setUpStat(type)));
  }
  private initForm(input: Character) {

    this.characterForm = new FormGroup({});
    for (let fieldName in input) {

      if (!["string", "number"].includes(typeof input[fieldName])) {
        if (input[fieldName] instanceof Map) {
          let newFormArray: FormArray = new FormArray([]);
          let map: Map<string, Stat> = input[fieldName];
          map.forEach((value: Stat, key: string) => {
            let newFormGroup: FormGroup = this.fillInFormGroup(value);
            newFormArray.push(newFormGroup);
          });
          this.stats = newFormArray;
          this.characterForm.addControl(fieldName, newFormArray);
          this.arrays.push({key: fieldName, value:newFormArray});
        }
        else {
          let newFormGroup: FormGroup = this.fillInFormGroup(input[fieldName]);
          this.characterForm.addControl(fieldName, newFormGroup);
          this.groups.push({ key: fieldName, value: newFormGroup });
        }
        // this.characterForm.get(variable).disable();
        continue;
      }

      let newControl = new FormControl(input[fieldName]);
      this.characterForm.addControl(fieldName, newControl);
      this.controls.push({ key: fieldName, value: newControl });
    }
  }
  ngOnInit() {
  }

}
