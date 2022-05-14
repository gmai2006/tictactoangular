import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() id: number;

  constructor(public dataService: DataService) {
  }

  update = () => {
    const newBoard = { squares: Array(9).fill(undefined) }
    const [currentBoard] = this.dataService.history.slice(-1);
    newBoard.squares = currentBoard.squares.slice();
    newBoard.squares[this.id] = (this.dataService.isX) ? 'X' : '0';
    this.dataService.isX = !this.dataService.isX;
    this.dataService.nextStep++;
    this.dataService.history.push(newBoard);
  }

}
