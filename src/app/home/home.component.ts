import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myform=new FormGroup({
    nom:new FormControl('',[
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
    Validators.pattern('[a-zA-Z ]*')
    
  ]
    ),
    prenom:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern('[a-zA-Z ]*')
    ]),
  age:new FormControl('',[
    Validators.required,
    Validators.min(18),
    Validators.max(60)
  ]),
  })

}
