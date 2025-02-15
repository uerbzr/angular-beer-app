import { Injectable, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Beer } from '../../models/beer';
import { BeersService } from '../beers.service';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';
import { UsefulService } from '../useful.service';
@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  beers$ = new Observable<Beer[]>();

  constructor(
    private readonly beerService: BeersService,
    private readonly usefulService: UsefulService
  ) {
    console.log('url:', `${environment.api}`);
  }
  ngOnInit(): void {
    this.beers$ = this.beerService.getBeers();
    this.beers$.subscribe((beer) => {
      beer.forEach((beer) => {
        console.log(beer.name);
      });
    });
  }
  public deleteBeer(id: number): void {
    this.beerService.deleteBeer(String(id));
  }
  public Rate(rating: number): string {
    return this.usefulService.Rate(rating);
  }
  public onDeleteBeer(id: string) {
    if (confirm('Are you sure you want to delete this beer?')) {
      this.beerService.deleteSingleBeer(id).subscribe(() => {
        this.beers$ = this.beerService.getBeers(); //this.beers$.filter((beer) => beer.id !== id);
      });
    }
  }
}
