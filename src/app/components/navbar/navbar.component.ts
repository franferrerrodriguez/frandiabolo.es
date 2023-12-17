import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationModule } from 'src/app/modules/translation.module';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, TranslationModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  title = 'frandiabolo.es';

  @Output() scrollToContactEvent = new EventEmitter<void>();

  constructor(private translate: TranslateService) {}

  scrollToContact() {
    this.scrollToContactEvent.emit();
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
