import { Injectable } from '@angular/core';
import { SharedActions } from 'src/root-store/shared';
import { RootStoreState } from 'src/root-store';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class SharedApiService {


  constructor(private store$: Store<RootStoreState.State>, private toster: ToastrService) {

  }
  updateLoadingState({ status }: { status: boolean }): void {
    this.store$.dispatch(SharedActions.setLoading({ status: status }));
  }
  formatErrorMessage(message: any): string {
    return message ? message : 'Something went wrong';
  }
}
