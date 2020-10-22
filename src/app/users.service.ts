import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
  // Merge data from (https://jsonplaceholder.typicode.com/users) to this
  customUsers: Users[] = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "Sincere@april.biz"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "Shanna@melissa.tv"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "Nathan@yesenia.net"

    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "Julianne.OConner@kory.org"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "Lucio_Hettinger@annie.ca"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "email": "Karley_Dach@jasper.info"
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "email": "Telly.Hoeger@billy.biz"
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "email": "Sherwood@rosamond.me"
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "email": "Chaim_McDermott@dana.io"
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "email": "Rey.Padberg@karina.biz"
    }
  ];
  lastUserId: number = this.customUsers[this.customUsers.length - 1].id;
  constructor(private http: HttpClient) { }

  getApiUsers() {
    return this.http.get<Users>(this.apiUrl);
  }

  getAllUsers() {
    // I've lost my internet connection that's why I've used the customUsers instead, originally gonna use (https://jsonplaceholder.typicode.com/users) endpoint but no way to test :(

    // return this.getApiUsers()
    //   .pipe(
    //     map(users => {
    //       return [...users, ...this.customUsers]
    //     }),
    //     map(users => users.map(({ id, name, email }) => {
    //       return { id, name, email }
    //     }))
    //   );
    return new Observable<Users[]>(o => o.next(this.customUsers));
  }

  addUser(name, email) {
    const id = this.lastUserId + 1;
    this.lastUserId = id;
    this.customUsers.push({ id, name, email });
  }

  getUserById(inputId) {
    return this.getAllUsers()
    .pipe(
      map(user => [user[inputId - 1]])
    );
  }
}
