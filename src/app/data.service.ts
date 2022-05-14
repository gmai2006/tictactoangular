import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  history = [{ squares: Array(9).fill(undefined) }];
  nextStep: number = 0;
  isX: boolean = true;
  
  constructor() { }
}
