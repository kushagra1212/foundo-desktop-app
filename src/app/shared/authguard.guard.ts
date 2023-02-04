import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AuthSelectors, RootStoreState } from 'src/root-store';


@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private store$: Store<RootStoreState.State>, private router: Router,
    private route: ActivatedRoute
  ) { }


  canActivate(
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean {
    return this.store$.select(AuthSelectors.selectUserIsLoggedIn).pipe(
      map((isLoggedIn: boolean) => {
        console.log('isLoggedIn', isLoggedIn)
        if (!isLoggedIn) {
          this.router.navigate(['/auth']);
        }
        return isLoggedIn;
      }
      )
    )
  }

}
