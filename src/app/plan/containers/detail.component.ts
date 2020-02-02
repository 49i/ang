import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, Subject, BehaviorSubject } from "rxjs";
import { tap } from 'rxjs/operators';

import { Subscription } from 'src/app/models/subscription';
import { SelfService } from 'src/app/plan/self.service';


@Component({
  selector: 'app-detail',
  template: `
    <app-detail-layout [titleId]="id">
      <app-subscriptions [subscriptions]="subscriptions$ | async">
      </app-subscriptions>
      <div class="loading" *ngIf="loading$ | async"><span>.</span><span>.</span><span>.</span></div>
    </app-detail-layout>
  `,
  styles: []
})
export class DetailComponent implements OnInit {
  subscriptions$: Observable<Subscription[]>;
  id: number;

  loading$: Subject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private activatedRoute: ActivatedRoute, private selfService: SelfService) { }

  ngOnInit() {
      this.activatedRoute.paramMap.subscribe( parameter => {
      this.id = +parameter.get('id');
      this.subscriptions$ = this.selfService.getSubscriptions(this.id).pipe(tap(_ => {
        this.loading$.next(false);
      }));
    });
  }

}
