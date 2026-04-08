import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { HpService } from '../../services/hp';
import { Character } from '../../models/character';

@Component({
  selector: 'app-characterdetails',
  imports: [MatCardModule, MatProgressSpinnerModule, MatButtonModule, RouterLink],
  templateUrl: './characterdetails.html',
  styleUrl: './characterdetails.css'
})
export class Characterdetails implements OnInit {
  character = signal<Character | null>(null);
  isLoading = signal<boolean>(true);
  hasError = signal<boolean>(false);

  constructor(
    private route: ActivatedRoute,
    private hpService: HpService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.hpService.getCharacterById(id).subscribe({
        next: (data) => {
          this.character.set(data[0]);
          this.isLoading.set(false);
        },
        error: () => {
          this.hasError.set(true);
          this.isLoading.set(false);
        }
      });
    }
  }
}