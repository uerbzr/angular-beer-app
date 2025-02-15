import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BeersService } from '../beers.service';
import { Beer } from '../../models/beer';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  beerForm: FormGroup;
  beerId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private beerService: BeersService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.beerForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      description: ['', Validators.required],
      rating: [0, Validators.required],
    });
  }

  ngOnInit(): void {
    // Get beer ID from URL
    this.beerId = this.route.snapshot.paramMap.get('id');
    if (this.beerId) {
      this.loadBeer(this.beerId);
    }
  }

  loadBeer(id: string) {
    this.beerService.GetBeerById(id).subscribe((beer: Beer | undefined) => {
      this.beerForm.patchValue(beer!);
    });
  }

  updateBeer() {
    if (this.beerForm.valid && this.beerId) {
      const updatedBeer = { ...this.beerForm.value, id: this.beerId };
      this.beerService.updateSingleBeer(updatedBeer).subscribe(() => {
        alert('Beer updated successfully!');
        this.router.navigate(['/beers']); // Redirect to beer list
      });
    }
  }
}
