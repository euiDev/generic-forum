import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formGroupBuilder = [
    { value: 'name', label: 'Name', placeholder: 'Name', type: 'text'},
    { value: 'email', label: 'Email', placeholder: 'Email', type: 'email'},
  ];
  userSignUpForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(26)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
  });

  constructor(private usersService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.usersService.addUser(this.userSignUpForm.value.name, this.userSignUpForm.value.email);
    this.onClickReset();
    this.router.navigate(['users']);
  }

  onClickReset() {
    this.userSignUpForm.reset();
  }
}
