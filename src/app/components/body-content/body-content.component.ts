import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'body-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body-content.component.html',
  styleUrl: './body-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BodyContentComponent {}
