import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  //login
  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      () => {
        alert('Login Successfull');
        localStorage.setItem('Logintoken', 'true');
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        alert(error.message);
        this.router.navigate(['/login']);
      }
    );
  }

  // sign In using Google
  signInWithGoogle() {
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider()).then(
      (res) => {
        console.log(res);
        
        this.router.navigate(['/dashboard']);
        localStorage.setItem('token', JSON.stringify(res.user?.uid));
      },
      (error) => {
        alert(error.message);
      }
    );
  }
}
