import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Offer } from 'src/app/models/offer';
import { SelfService } from 'src/app/plan/self.service';

@Component({
  selector: 'app-plan',
  template: `
    <app-offers 
      [offers]="offers$ | async" 
      (viewDetails)="viewSubscriptions($event)">
    </app-offers>
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

  constructor(private router: Router, private selfService: SelfService) { }

  ngOnInit() {
    this.offers$ = this.selfService.getOffers();
  }

  viewSubscriptions(offer: Offer) {
    console.log(offer.name);
    this.router.navigate(['/offers', offer.id]);
  }

}
