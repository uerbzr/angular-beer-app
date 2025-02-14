import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers.service';
import { ActivatedRoute } from '@angular/router';
import { Beer } from '../../models/beer';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent implements OnInit {
  beer: Beer | null = null;
  beerId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private beerService: BeersService
  ) {}

  ngOnInit(): void {
    this.beerId = Number(this.route.snapshot.paramMap.get('id'));
    this.beerService.GetBeerById(this.beerId).subscribe((data) => {
      this.beer = data!;
    });
  }
}
