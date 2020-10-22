import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../../users.service';
import { Users } from '../../users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent implements OnInit {
  userId: number;
  user$: Observable<Users[]>;
  constructor(private activatedRoute: ActivatedRoute,
              private usersService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.getRouteId();
    this.getUser();
  }

  getRouteId() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.id;
    });
  }

  getUser() {
    this.user$ = this.usersService.getUserById(this.userId);
  }
}
