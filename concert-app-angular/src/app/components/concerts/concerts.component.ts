import { Component, Input } from '@angular/core';
import { Concert } from 'src/app/models/concert.model';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent {
  @Input() concert!: Concert
}
