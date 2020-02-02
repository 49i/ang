import { Component, Input, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';

import { Usage } from 'src/app/models/subscription';

@Component({
  selector: 'app-usage',
  template: `
    <div class="body" #body></div>
    <p class="used">{{ usage.used }}</p>
    <p class="limit">{{ usage.limit }}
      <span *ngIf="usage.type === 'DATA'">MB</span>
      <span *ngIf="usage.type === 'SMS'">SMS</span>
    </p>
  `,
  styleUrls: ['./usage.component.scss']
})
export class UsageComponent implements OnInit {
  @Input() usage: Usage;

  @ViewChild('body', {static: true}) element: ElementRef;

  constructor() { }

  ngOnInit(): void {
    const percent = (this.usage.used / this.usage.limit) * 100;
    this.element.nativeElement.style.backgroundImage = `linear-gradient(to right, gray ${percent}%, transparent 0)`;
  }

}
