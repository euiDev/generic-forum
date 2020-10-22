import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/users';
import { UsersService } from '../../users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.css']
})
export class UsersHomeComponent implements OnInit {
  users$: Observable<Users[]>;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.users$ = this.usersService.getAllUsers();
  }
}
