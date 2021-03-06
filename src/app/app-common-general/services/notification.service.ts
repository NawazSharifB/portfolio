import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  showLoader = new BehaviorSubject<boolean>(false);

  constructor(
    private snackBar: MatSnackBar
  ) { }


  openSnackBar(message: string): void {
    this.snackBar.open(message, '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
