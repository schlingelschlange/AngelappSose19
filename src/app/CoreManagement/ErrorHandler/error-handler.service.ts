import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler  {

  handleError(error: any): void {
    console.log("Global Error Handler", error);
  }

  constructor() { }
}
