import { Component } from '@angular/core';
import { routeAnimation } from './animations/routable';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  	<div [@routeAnimation]="getAnimationData(outlet)">
    	<router-outlet #outlet="outlet"></router-outlet>
    </div>
  `,
  styles: [],
  animations: [routeAnimation]
})
export class AppComponent {
  title = 'ang';

  getAnimationData(outlet: RouterOutlet) {
  	return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
