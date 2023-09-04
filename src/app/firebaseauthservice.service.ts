import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Subject, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseauthserviceService {
   // expose all data
 public authErrorMessages$ = new Subject<string>();
 public isLoading$ = new BehaviorSubject<boolean>(true);
 public user$ = new Subject<User>();
 constructor(private afAuth: AngularFireAuth) {
 this.isLoggedIn().subscribe();
}
 private isLoggedIn() {
 return this.afAuth.authState.pipe(
 first(),
 tap(user => {
 this.isLoading$.next(false);
 if (user) {
 const { email, uid } = user;
 this.user$.next({ email, uid });
 }
 })
 );
 }


}
