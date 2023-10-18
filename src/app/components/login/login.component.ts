import { Component } from '@angular/core';
import { FirebaseAuthService } from 'src/app/services/shared/firebase-auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: any;
  password: any;
  constructor(private fireAuth: FirebaseAuthService) {}
  login() {
    if (this.email != null && this.password != null) {
      console.log('login', this.email, this.password);
    } else {
      alert('give email and pass');
    }
  }
  signInWithGoogle() {
    console.log('signInWithGoogle');
    this.fireAuth.signInWithGoogle();
  }
}
