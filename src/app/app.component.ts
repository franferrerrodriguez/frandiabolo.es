import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BodyContentComponent } from './components/body-content/body-content.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoGalleryComponent } from './components/video-gallery/video-gallery.component';
import { TranslationModule } from './modules/translation.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TranslationModule,
    NavbarComponent,
    BodyContentComponent,
    VideoGalleryComponent,
    ContactComponent,
    FooterComponent,
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'frandiabolo.es';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  scrollToElement(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
