import { Component } from '@angular/core';
import { TripList } from './trip-list/trip-list';
import { TripForm } from './trip-form/trip-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TripList, TripForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedTrip: any = null;

  onEditTrip(trip: any): void {
    this.selectedTrip = trip;
  }
}