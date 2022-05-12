import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  numbers = Array(5).map((x,i)=>i+1);
  constructor() {
    this.numbers = Array(3).map((x,i)=>i+1);
  }

  ngOnInit(): void {
  }

}
