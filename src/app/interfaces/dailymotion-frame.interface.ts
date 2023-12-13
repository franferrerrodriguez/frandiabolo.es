import { SafeResourceUrl } from '@angular/platform-browser';

export interface DailymotionFrame {
  src: string;
  title?: string;
  frameborder?: string;
  allowAutoPlay?: boolean;
  safeResourceUrl?: SafeResourceUrl;
}
