import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Offer } from 'src/app/models/offer';
import { Subscription } from 'src/app/models/subscription';

@Injectable({ providedIn: 'root' })
export class SelfService {

	private url = 'https://selfcare-service.demo.melita.com/interview/api/offers';

  constructor(private http: HttpClient) { }

  getOffers(): Observable<Offer[]> {
  	return this.http.get<any>(this.url).pipe(map(o => o.offers));
  }

  getSubscriptions(id: number): Observable<Subscription[]> {
  	return this.http.get<any>(`${this.url}/${id}/subscriptions`).pipe(map(s => s.subscriptions ));
  }
}
