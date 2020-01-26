import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../shared/firebase.service';

@Component({
  selector: 'app-unedited',
  templateUrl: './unedited.component.html',
  styleUrls: ['./unedited.component.css']
})
export class UneditedComponent implements OnInit {

  passedIndex;
  chapter;
  constructor(private route: ActivatedRoute, private firebaseService:FirebaseService) { }

  ngOnInit() {
    this.passedIndex = this.route.snapshot.params['index']; 
    this.firebaseService.getItemAt("unedited/"+this.passedIndex).then(data => this.chapter = data)
  }

}
