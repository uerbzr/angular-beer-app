import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BeersService } from '../beers.service';
import { Beer } from '../../models/beer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  beerForm: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly beerService: BeersService,
    private readonly router: Router
  ) {
    this.beerForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      rating: ['', Validators.required],
    });
  }
  addBeer(): void {
    const newBeer: Beer = {
      id: 0,
      name: this.beerForm.value.name,
      price: this.beerForm.value.price,
      description: this.beerForm.value.description,
      rating: this.beerForm.value.rating,
    };
    this.beerService.AddBeer(newBeer);
    this.beerForm.reset();
    this.router.navigate(['/beers']);
  }
}
