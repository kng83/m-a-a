import { Injectable } from '@angular/core';
import {User} from '../interfaces/user'

@Injectable()
export class UsersService {

  users: User[] =[{name:'pk', email:"test@test.com"}];
  constructor() { }


addUser(data: User) {
 this.users.push(data);
}
getUsers(){
  return this.users.slice()
}
}
