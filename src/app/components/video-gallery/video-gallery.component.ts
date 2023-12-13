import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DailymotionFrame } from 'src/app/interfaces/dailymotion-frame.interface';
import { DailymotionFrameComponent } from '../dailymotion-frame/dailymotion-frame.component';

@Component({
  selector: 'video-gallery',
  standalone: true,
  imports: [CommonModule, DailymotionFrameComponent],
  templateUrl: './video-gallery.component.html',
  styleUrl: './video-gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoGalleryComponent {
  frameVideos: DailymotionFrame[] = [
    {
      title: 'string',
      frameborder: 'string',
      src: 'https://www.dailymotion.com/embed/video/kQQVaCpq0w3bY5wa9dh',
      allowAutoPlay: false,
    },
    {
      title: 'string',
      frameborder: 'string',
      src: 'https://www.dailymotion.com/embed/video/k3S54Y07TBnUoiyrDg4',
      allowAutoPlay: false,
    },

    {
      title: 'string',
      frameborder: 'string',
      src: 'https://www.dailymotion.com/embed/video/k4JzSOTLH7i5kGyrDfM',
      allowAutoPlay: false,
    },
    {
      title: 'string',
      frameborder: 'string',
      src: 'https://www.dailymotion.com/embed/video/k34nWCqkIVfhUeyrE8S',
      allowAutoPlay: false,
    },
    {
      title: 'string',
      frameborder: 'string',
      src: 'https://www.dailymotion.com/embed/video/k4wxAxk7PAu88ayrE9x',
      allowAutoPlay: false,
    },
    {
      title: 'string',
      frameborder: 'string',
      src: 'https://www.dailymotion.com/embed/video/k2Hb04ko2uJrc2yrE8H',
      allowAutoPlay: false,
    },
    {
      title: 'string',
      frameborder: 'string',
      src: 'https://www.dailymotion.com/embed/video/k38r6Egi6DZKjoyrDhW',
      allowAutoPlay: false,
    },
    {
      title: 'string',
      frameborder: 'string',
      src: 'https://www.dailymotion.com/embed/video/kXCkHhxZ4o7EN6yrDgT',
      allowAutoPlay: false,
    },
    {
      title: 'string',
      frameborder: 'string',
      src: 'https://www.dailymotion.com/embed/video/k4OUDsBDYz9wYkyrDgu',
      allowAutoPlay: false,
    },
    {
      title: 'string',
      frameborder: 'string',
      src: 'https://www.dailymotion.com/embed/video/k5AeWlbR9xCtB4yrDgJ',
      allowAutoPlay: false,
    },
    {
      title: 'string',
      frameborder: 'string',
      src: 'https://www.dailymotion.com/embed/video/k2QtMsR7yhwiqvyrDhI',
      allowAutoPlay: false,
    },
    {
      title: 'string',
      frameborder: 'string',
      src: 'https://www.dailymotion.com/embed/video/kYP86rMriup7OmyrDfR',
      allowAutoPlay: false,
    },
    {
      title: 'string',
      frameborder: 'string',
      src: 'https://www.dailymotion.com/embed/video/k11VLLtCai9HchyrDh5',
      allowAutoPlay: false,
    },
    {
      title: 'string',
      frameborder: 'string',
      src: 'https://www.dailymotion.com/embed/video/k4POpwe0WDt9RTyrDh7',
      allowAutoPlay: false,
    },
  ];
}
