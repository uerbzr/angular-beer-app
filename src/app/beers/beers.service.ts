import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Beer } from '../models/beer';
import { BEERS } from '../data/beers';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  public beers: Beer[] = BEERS;

  public AddBeer(beer: Beer): void {
    this.beers.push(beer);
  }
  GetBeerById(id: number): Observable<Beer | undefined> {
    const beer = this.beers.find((b) => b.id === id);
    return of(beer);
  }
}
