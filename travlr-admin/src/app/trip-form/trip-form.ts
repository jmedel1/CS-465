import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-trip-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './trip-form.html',
  styleUrl: './trip-form.css'
})
export class TripForm implements OnChanges {
  @Input() selectedTrip: any = null;

  trip = {
    code: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    perPerson: '',
    image: '',
    description: ''
  };

  isEditMode = false;
  originalCode = '';

  constructor(private tripService: TripData) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedTrip'] && this.selectedTrip) {
      this.trip = { ...this.selectedTrip };
      this.originalCode = this.selectedTrip.code;
      this.isEditMode = true;
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.tripService.updateTrip(this.originalCode, this.trip).subscribe({
        next: (response) => {
          console.log('Trip updated:', response);
          alert('Trip updated successfully');
          window.location.reload();
        },
        error: (err) => {
          console.error('Error updating trip:', err);
        }
      });
    } else {
      this.tripService.addTrip(this.trip).subscribe({
        next: (response) => {
          console.log('Trip added:', response);
          alert('Trip added successfully');
          window.location.reload();
        },
        error: (err) => {
          console.error('Error adding trip:', err);
        }
      });
    }
  }
}