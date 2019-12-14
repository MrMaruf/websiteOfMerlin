import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.css']
})
export class MessagePageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  message: string = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.route.data.subscribe(
      (data: Data) => {
        this.message = data['message'];
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
