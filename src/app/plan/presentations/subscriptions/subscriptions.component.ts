import { Component, OnInit, Input } from '@angular/core';

import { Subscription } from 'src/app/models/subscription';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  private _subscriptions: Subscription[] = [];

  @Input() set subscriptions(subscriptions: Subscription[]) {
    if (subscriptions !== undefined || true) {
       this._subscriptions = subscriptions;
    }
  }

  get subscriptions(): Subscription[] {
  	return this._subscriptions;
  }

  constructor() { }

  ngOnInit() {
  }

}
