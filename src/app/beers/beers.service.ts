import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Beer } from '../models/beer';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  private http = inject(HttpClient);

  public getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${environment.api}`);
  }

  public AddBeer(beer: Beer) {
    this.http.post(`${environment.api}`, beer).subscribe((response: any) => {
      console.log('Server response:', response);
    });
  }
  public updateBeer(beer: Beer): void {
    this.http
      .put(`${environment.api}/${beer.id}`, beer)
      .subscribe((response: any) => {
        console.log('Server response:', response);
      });
  }
  public deleteBeer(id: string): void {
    this.http.delete(`${environment.api}/${id}`).subscribe((response: any) => {
      console.log('Server response:', response);
    });
  }

  public GetBeerById(id: string): Observable<Beer | undefined> {
    return this.http.get<Beer>(`${environment.api}/${id}`);
  }
  public deleteSingleBeer(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.api}/${id}`);
  }
}
