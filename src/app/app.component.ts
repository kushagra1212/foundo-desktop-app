import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthSelectors, RootStoreState } from 'src/root-store';
import { SharedActions, SharedSelectors } from 'src/root-store/shared';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'foundo';
  isLoading: Observable<boolean>;
  isLoggedIn: Observable<boolean>;
  constructor(private store$: Store<RootStoreState.State>) {
    this.isLoading = this.store$.pipe(
      select(SharedSelectors.selectSharedIsLoading)
    );
    this.isLoggedIn = this.store$.pipe(
      select(AuthSelectors.selectUserIsLoggedIn)
    );
  }
  ngOnInit(): void {
    this.store$.dispatch(SharedActions.appStarted());
  }
}
