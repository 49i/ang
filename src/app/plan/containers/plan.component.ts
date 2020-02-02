import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Offer } from 'src/app/models/offer';
import { SelfService } from 'src/app/plan/self.service';

@Component({
  selector: 'app-plan',
  template: `
    <app-plan-layout>
      <app-offers 
        [offers]="offers$ | async" 
        (viewDetails)="viewSubscriptions($event)">
      </app-offers>
      <div class="loading" *ngIf="loading$ | async"><span>.</span><span>.</span><span>.</span></div>
    </app-plan-layout>
  `,
  styles: []
})
export class PlanComponent implements OnInit {
  offers$: Observable<Offer[]>;
  // = of([
  //   <Offer>{
  //     id: 100,
  //     name: 'Internet Bundle',
  //     contractEndDate: new Date('2016-05-01'),
  //     contractStartDate: new Date('2014-05-01')
  //   },
  //   <Offer>{
  //     id: 101,
  //     name: 'Cool Offer 2017',
  //     contractEndDate: new Date('2019-01-01'),
  //     contractStartDate: new Date('2017-01-01')
  //   } 
  // ]);

  loading$: Subject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private router: Router, private selfService: SelfService) { }

  ngOnInit() {
    this.offers$ = this.selfService.getOffers().pipe(tap(_ => {
      this.loading$.next(false);
    }));
  }

  viewSubscriptions(offer: Offer) {
    console.log(offer.name);
    this.router.navigate(['/offers', offer.id]);
  }

}
