import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-layout',
  template: `
    <div class="contain">
      <h1 class="title" *ngIf="titleId === 100">Internet Bundle</h1>
      <h1 class="title" *ngIf="titleId === 101">Cool Offer 2017</h1>
      <ng-content select="app-subscriptions"></ng-content>
      <ng-content select=".loading"></ng-content>
      <button class="back-button" (click)="goBack()">
        <img src="assets/back.svg">Back
      </button>
    </div>
  `,
  styleUrls: ['./detail-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailLayoutComponent implements OnInit {
  @Input() titleId: number;

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

}
