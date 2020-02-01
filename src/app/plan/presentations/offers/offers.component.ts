import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Offer } from 'src/app/models/offer';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styles: []
})
export class OffersComponent implements OnInit {
  private _offers: Offer[] = [];

  @Input() set offers(offers: Offer[]) {
    if (offers !== undefined || true) {
       this._offers = offers;
    }
  }

  get offers(): Offer[] {
    return this._offers;
  }

  @Output() viewDetails: EventEmitter<Offer> = new EventEmitter<Offer>();

  constructor() { }

  ngOnInit() {
  }

  details(offer: Offer) {
    this.viewDetails.emit(offer);
  }

}
