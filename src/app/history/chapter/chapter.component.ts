import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { HistoryService } from '../history.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Chapter } from 'src/app/models/chapter.model';
import { Skill } from 'src/app/models/skill.model';
import { Ability } from 'src/app/models/ability.model';
import { Spell } from 'src/app/models/spell.model';
import { Save } from 'src/app/models/save.model';
import { Character } from 'src/app/models/character.model';
import { AuthService } from 'src/app/auth/auth.service';
import { Status, Complexity } from 'src/app/models/enums';
@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  subscriptionChapter: Subscription;
  selectedChapter: Chapter;
  previousChapter: Chapter;
  chapterIndex: number;
  chapterForm: FormGroup;
  new: boolean = true;
  tabs = {
    'skills': false,
    'abilities': false,
    'saves': false,
    'spells': false
  };
  isAuthor: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private historyService: HistoryService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.subscriptionChapter = this.route.data.subscribe(
      (data: Data) => {
        this.isAuthor = this.authService.getAuthState()['isAuthor'];
        this.selectedChapter = data['chapters'][0];
        this.previousChapter = data['chapters'][1];
        console.log(data);
        if (this.selectedChapter) {
          this.initForm(this.selectedChapter);
        }
        console.log(this.chapterForm);
        this.chapterForm.controls['number'].disable();
        this.new = false;
      });
      for(var item in Complexity){
      console.log(Complexity[item]);
      }
  }
  private initForm(chapter: Chapter) {
    let number = chapter.number;
    let name = chapter.name;
    let description = chapter.description;
    let character: Character = chapter.character;
    let saves: Save[] = chapter.saves;
    let skills: Skill[] = chapter.skills ? chapter.skills : [];
    let abilities: Ability[] = chapter.abilities ? chapter.abilities : [];
    let spells: Spell[] = chapter.spells ? chapter.spells : [];

    this.chapterForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'number': new FormControl(number, Validators.required),
      'description': new FormControl(description, Validators.required),
      'character': new FormGroup({
        'name': new FormControl(character.name, Validators.required),
        'age': new FormControl(character.age, Validators.required),
        'health': new FormControl(character.health, Validators.required),
        'magicka': new FormControl(character.magicka, Validators.required),
        'stamina': new FormControl(character.stamina, Validators.required),
        'magickaModifier': new FormControl(character.magickaModifier, Validators.required),
        'talent': new FormControl(character.talent, Validators.required),
        'talentCalculated': new FormControl(character.talentCalculated, Validators.required),
        'numSkillPoints': new FormControl(character.numSkillPoints, Validators.required),
      }),
      'skills': new FormArray([]),
      'abilities': new FormArray([]),
      'spells': new FormArray([]),
      'saves': new FormArray([]),

      
    });
    if(skills.length>0){
      for(let skill of skills){
        this.updateFormSkill(skill);
      }
    }
    if(abilities.length>0){
      for(let ability of abilities){
        this.updateFormAbility(ability);
      }
    }
    if(spells.length>0){
      for(let spell of spells){
        this.updateFormSpell(spell);
      }
    }
    for(let save of saves){
      this.updateFormSave(save);
    }
  }
  
  updateFormSkill(skill: Skill) {
    let name: string = "";
    let level: number;
    let description: string = "";
    let history: string = "";
    let changed:boolean = false;
    if (skill) {
      name = skill.name;
      level = skill.level;
      description = skill.description;
      history = skill.history;
      changed = skill.changed;
    }

    let skills = this.chapterForm.get('skills') as FormArray;
    let formGroup = this.formBuilder.group({
      name:name,
      level:level,
      description:description,
      history:history,
      changed:changed
    }) 
    skills.push(formGroup);
  }

  updateFormAbility(ability: Ability) {
    let name: string = "";
    let description: string = "";
    let tier: number;
    let skill:Skill;
    let status:Status = 1;

    if (ability) {
      name = ability.name;
      tier = ability.tier;
      description = ability.description;
      skill = ability.skill;
      status = ability.status;
    }

    let abilities = this.chapterForm.get('abilities') as FormArray;
    let formGroup = this.formBuilder.group({
      name:name,
      tier:tier,
      description:description,
      skill:skill,
      status:status
    }) 
    abilities.push(formGroup);
  }
  updateFormSpell(spell: Spell) {
    let name: string = "";
    let description: string = "";
    let complexity:Complexity = 1;
    
    if (spell) {
      name = spell.name;
      description = spell.description;
      complexity = spell.complexity;
    }

    let spells = this.chapterForm.get('spells') as FormArray;
    let formGroup = this.formBuilder.group({
      name:name,
      description:description,
      complexity:complexity
    }) 
    spells.push(formGroup);
  }
  updateFormSave(save: Save) {
    let name: string = "";
    let description: string = "";
    let index:number;

    if (save) {
      name = save.name;
      description = save.description;
      index = save.index;
    }

    let spells = this.chapterForm.get('saves') as FormArray;
    let formGroup = this.formBuilder.group({
      name:name,
      description:description,
      index:index
    }) 
    spells.push(formGroup);
  }

  onTabSwitch(tabName: string) {
    for (let tab in this.tabs) {
      this.tabs[tab] = (tab === tabName ? !this.tabs[tabName] : false);
    }
  }
  
  onSubmit() {
    const newChapter: Chapter = this.chapterForm.value;
    console.log(this.chapterForm);
    // this.historyService.addChapter(newChapter);
  }

  onUpdate() {
    this.chapterForm.controls['number'].enable();
    const chapterNumber = this.chapterForm.value['number'];
    const newChapter: Chapter = this.chapterForm.value;
    this.historyService.updateChapter(chapterNumber, newChapter);
  }

  onDelete() {
    this.chapterForm.controls['number'].enable();
    const chapterNumber = this.chapterForm.value['number'];
    this.historyService.deleteChapter(chapterNumber);
  }
}
