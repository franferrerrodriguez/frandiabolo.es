import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DailymotionFrame } from 'src/app/interfaces/dailymotion-frame.interface';

@Component({
  selector: 'dailymotion-frame',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dailymotion-frame.component.html',
  styleUrl: './dailymotion-frame.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailymotionFrameComponent implements OnInit {
  @Input() frameVideo!: DailymotionFrame;

  defaultType = 'text/html';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    if (this.frameVideo.allowAutoPlay) {
      this.frameVideo.src += '?autoplay=1';
    }
    this.frameVideo = {
      ...this.frameVideo,
      safeResourceUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
        this.frameVideo.src
      ),
    };
  }
}
