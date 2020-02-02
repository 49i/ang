import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-layout',
  template: `
    <div class="contain">
      <h1 class="title">Your Plan</h1>
      <ng-content select="app-offers"></ng-content>
    </div>
  `,
  styleUrls: ['./plan-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlanLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
