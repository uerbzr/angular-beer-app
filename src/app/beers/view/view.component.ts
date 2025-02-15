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
  beerId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private beerService: BeersService
  ) {}

  ngOnInit(): void {
    this.beerId = this.route.snapshot.paramMap.get('id');
    console.log(this.beerId);
    this.beerService.GetBeerById(String(this.beerId)).subscribe((data) => {
      console.log(data);
      this.beer = data!;
    });
  }
}
