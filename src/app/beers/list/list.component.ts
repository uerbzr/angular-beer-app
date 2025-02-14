import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Beer } from '../../models/beer';
import { BeersService } from '../beers.service';
@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  beers: Beer[] = [];
  constructor(private readonly beerService: BeersService) {
    this.beers = this.beerService.beers;
  }
}
