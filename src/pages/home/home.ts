import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//local imports
import { User } from '../../models/user-model';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: User;
  
  constructor(public navCtrl: NavController) { }

  ionViewDidLoad(){}

  addUser(): void {
    this.navCtrl.push("AddUserPage");
  }

  renameUser(user): void { }

  viewUser(user): void {
    console.log("view user");
  }

  removeUser(user): void {}

  save(){}
}
