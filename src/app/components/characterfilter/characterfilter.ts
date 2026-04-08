import { Component, signal } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { HpService } from '../../services/hp';
import { Character } from '../../models/character';

@Component({
  selector: 'app-characterfilter',
  imports: [MatSelectModule, MatFormFieldModule, MatCardModule, MatProgressSpinnerModule, RouterLink],
  templateUrl: './characterfilter.html',
  styleUrl: './characterfilter.css'
})
export class Characterfilter {
  houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  characters = signal<Character[]>([]);
  isLoading = signal<boolean>(false);
  selectedHouse = signal<string>('');

  constructor(private hpService: HpService) {}

  onHouseChange(house: string): void {
    this.selectedHouse.set(house);
    this.isLoading.set(true);
    this.hpService.getCharactersByHouse(house).subscribe({
      next: (data) => {
        this.characters.set(data);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }
}