import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import 'firebase/auth';
import firebase from '@firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RegistroComponent implements OnInit {
  email = 'kevin@example.com';
  pass = '123456';
  // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:no-shadowed-variable
  constructor(public auth: AngularFireAuth, private router: Router) {
  }

  ngOnInit() {
  }

  loginWith() {
    // tslint:disable-next-line:new-parens
    this.auth.auth.signInWithPopup(new auth.GoogleAuthProvider);
  }
  logout() {
    this.auth.auth.signOut();
  }
  showData() {
    this.auth.user.subscribe( res => {
      console.log(res);
    });
  }
  customLogin() {
    this.auth.auth.signInWithEmailAndPassword(this.email, this.pass)
    .then( res => {
      console.log(res);
    })
    .catch(err => console.log('Error cl:', err));
  }
}
