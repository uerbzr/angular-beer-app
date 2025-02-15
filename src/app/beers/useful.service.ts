import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsefulService {
  constructor() {}
  public Rate(rating: number): string {
    let stars = '';
    for (let i = 0; i < rating; i++) {
      stars += '⭐';
    }
    return stars;
  }
}
