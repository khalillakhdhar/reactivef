import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrl: './cinema.component.css'
})
export class CinemaComponent {
  cinemaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.cinemaForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      age: ['', [Validators.required, Validators.min(14)]],
      accompanant: [''],
      type: ['', Validators.required],
      dateheur: ['', Validators.required],
      preference: ['', [Validators.minLength(10), Validators.maxLength(100)]]
    });
  }

  onSubmit() {
    if (this.cinemaForm.valid) {
      // Perform the form submission logic here
      alert('Form submitted successfully!');
    } else {
      // Handle form validation errors
      alert('Form has validation errors!');
    }
  }
}
