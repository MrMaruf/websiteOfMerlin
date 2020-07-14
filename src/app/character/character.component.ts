import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { FormGroup, FormControl, Validators, FormArray, CheckboxControlValueAccessor } from '@angular/forms';
import { skip } from 'rxjs/operators';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character: Character;
  characterForm: FormGroup;
  controls: {key:string, value:FormControl}[];
  groups: {key:string, value:FormGroup}[];
  constructor() {
    this.character = new Character();
    this.controls = [];
    this.groups = [];
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
    console.log(this.characterForm.controls[controlName.key])
    console.log(controlName)
    return this.characterForm.controls[controlName.key] instanceof FormControl;
  }
  saveCharacter() {
    console.log(this.character);
  }
  private initForm(input: Character) {

    this.characterForm = new FormGroup({});
    for (let fieldName in input) {

      // console.log(fieldName);

      if (!["string", "number"].includes(typeof input[fieldName])) {

        // console.log(input[fieldName]);
        if (input[fieldName] instanceof Map)
          continue;
        else {
          let newFormGroup: FormGroup = new FormGroup({});
          for (let internalFieldName in input[fieldName]) {
            // console.log(internalFieldName);
            // console.log(input[fieldName][internalFieldName]);
            let newControl = new FormControl(input[fieldName][internalFieldName]);
            newFormGroup.addControl(internalFieldName, newControl);
          }
          this.characterForm.addControl(fieldName, newFormGroup);
          this.groups.push({key: fieldName, value: newFormGroup});
        }
        // this.characterForm.get(variable).disable();
        continue;
      }

      let newControl = new FormControl(input[fieldName]);
      this.characterForm.addControl(fieldName, newControl);
      this.controls.push({key:fieldName, value:newControl});
    }
    //   'name': new FormControl(name, Validators.required),
    //   'number': new FormControl(number, Validators.required),
    //   'description': new FormControl(description, Validators.required),
    //   'character': new FormGroup({
    //     'name': new FormControl(character.name, Validators.required),
    //     'age': new FormControl(character.age, Validators.required),
    //     'health': new FormControl(character.health, Validators.required),
    //     'magicka': new FormControl(character.magicka, Validators.required),
    //     'stamina': new FormControl(character.stamina, Validators.required),
    //     'magickaModifier': new FormControl(character.magickaModifier, Validators.required),
    //     'talent': new FormControl(character.talent, Validators.required),
    //     'talentCalculated': new FormControl(character.talentCalculated, Validators.required),
    //     'numSkillPoints': new FormControl(character.numSkillPoints, Validators.required),
    //   }),
    //   'skills': new FormArray([]),
    //   'abilities': new FormArray([]),
    //   'spells': new FormArray([]),
    //   'saves': new FormArray([]),


    // });
  }
  ngOnInit() {
  }

}
