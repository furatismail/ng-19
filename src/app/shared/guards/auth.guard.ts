import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private router = inject(Router)
  
  canActivate(): Observable<boolean> {
    // mock false znamena, ze nejsem zalogovany
    // realne bychom zde volali servisu AuthService, ktera by vratila zalogovaneho uzivatele
    let loggedUser = false;
    if(loggedUser) {
      return of(true)
    } else {
      this.router.navigate(['/login'])
      return of(false)
    }

  
  }
}
