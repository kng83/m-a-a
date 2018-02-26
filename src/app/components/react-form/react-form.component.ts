import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import {UsersService} from '../../services/users.service';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss']
})
export class ReactFormComponent implements OnInit {

 signupForm: FormGroup;
 users: User[];
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email])
       
    });
  }
onSubmit(){
  console.log(this.signupForm);
  console.log(this.signupForm.controls.username.value);
  this.userService.addUser({
    name: this.signupForm.controls.username.value,
    email: this.signupForm.controls.email.value

  });
  this.users= this.userService.getUsers();

}
}
