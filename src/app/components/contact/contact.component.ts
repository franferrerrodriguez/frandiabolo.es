import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { finalize } from 'rxjs';
import { TranslationModule } from 'src/app/modules/translation.module';

@Component({
  selector: 'contact',
  standalone: true,
  imports: [
    CommonModule,
    TranslationModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  form!: FormGroup;
  submit: boolean = false;
  success: boolean = false;
  error: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submit = true;

    this.http
      .post('https://formspree.io/f/xnqkekwn', this.form.value)
      .pipe(
        finalize(() => {
          this.form.reset();
          this.submit = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: () => {
          this.showToast(true);
        },
        error: (error) => {
          this.showToast(false);
        },
      });
  }

  showToast(success: boolean) {
    if (success) {
      this.success = true;
    } else {
      this.error = true;
    }
    setTimeout(() => {
      this.success = false;
      this.cdr.detectChanges();
    }, 3000);
  }
}
