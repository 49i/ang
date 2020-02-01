import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from "rxjs";

import { Subscription } from 'src/app/models/subscription';
import { SelfService } from 'src/app/plan/self.service';


@Component({
  selector: 'app-details',
  template: `
    <app-subscriptions [subscriptions]="subscriptions$ | async"></app-subscriptions>
  `,
  styles: []
})
export class DetailsComponent implements OnInit {
  subscriptions$: Observable<Subscription[]>;
  id: number;

  constructor(private activatedRoute: ActivatedRoute, private selfService: SelfService) { }

  ngOnInit() {
      this.activatedRoute.paramMap.subscribe( parameter => {
      this.id = +parameter.get('id');
      this.subscriptions$ = this.selfService.getSubscriptions(this.id);
    });
  }

}
