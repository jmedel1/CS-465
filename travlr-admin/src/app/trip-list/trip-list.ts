import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-list.html',
  styleUrl: './trip-list.css'
})
export class TripList implements OnInit {
  trips: any[] = [];

  @Output() editTripEvent = new EventEmitter<any>();

  constructor(
    private tripService: TripData,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.tripService.getTrips().subscribe({
      next: (data) => {
        console.log('Trips loaded:', data);
        this.trips = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  editTrip(trip: any): void {
    this.editTripEvent.emit(trip);
  }
}