import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private matSnackBar: MatSnackBar
  ) {}

  public notifyMessage(message: string) {
    this.matSnackBar.open(message, undefined, {
      duration: 4000,
      verticalPosition: 'top'
    });
  }
}
