import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularApp';

  constructor(public dataService: DataService) {

  }

  goto = (step) => { 
    this.dataService.nextStep = step;
  }
}
