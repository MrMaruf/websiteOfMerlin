import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { HistoryService } from '../history.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Chapter } from 'src/app/models/chapter.model';
import { Skill } from 'src/app/models/skill.model';
import { Ability } from 'src/app/models/ability.model';
import { Spell } from 'src/app/models/spell.model';
import { Save } from 'src/app/models/save.model';
import { Character } from 'src/app/models/character.model';

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
  // showEmployees: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private historyService: HistoryService,

  ) { }

  ngOnInit() {
    this.subscriptionChapter = this.route.data.subscribe(
      (data: Data) => {
        this.selectedChapter = data['chapters'][0];
        this.previousChapter = data['chapters'][1];
        this.initForm(this.selectedChapter);
        console.log(this.chapterForm);
        this.chapterForm.controls['number'].disable();
        this.new = false;

      });
  }
  private initForm(chapter: Chapter) {
    let number = chapter.number;
    let name = chapter.name;
    let description = chapter.description;
    let character:Character = chapter.character;
    let saves: Save[] = chapter.saves;
    let skills: Skill[] = chapter.skills ? chapter.skills : [];
    let abilities: Ability[] = chapter.abilities ? chapter.abilities : [];
    let spells: Spell[] = chapter.spells ? chapter.spells : [];

    this.chapterForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'number': new FormControl(number, Validators.required),
      'description': new FormControl(description, Validators.required),
      'character':new FormGroup({
        'name':new FormControl(character.name, Validators.required),
        'age': new FormControl(character.age, Validators.required),
        'health':new FormControl(character.health, Validators.required),
        'magicka':new FormControl(character.magicka, Validators.required),
        'stamina':new FormControl(character.stamina, Validators.required),
        'magickaModifier':new FormControl(character.magickaModifier, Validators.required),
        'talent':new FormControl(character.talent, Validators.required),
        'talentCalculated':new FormControl(character.talentCalculated, Validators.required),
        'numSkillPoints':new FormControl(character.numSkillPoints, Validators.required),
      }),

      
    });
  }

  // onShowEmployees() {
  //   if (this.showEmployees) {
  //     this.showEmployees = false;
  //   } else {
  //     this.showEmployees = true;
  //   }
  // }

  onSubmit() {
    const newChapter: Chapter = this.chapterForm.value;
    // newChapter.employees = [];
    // newChapter.tasks = [];
    this.historyService.addChapter(newChapter);
    this.router.navigate(['/history']);
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
