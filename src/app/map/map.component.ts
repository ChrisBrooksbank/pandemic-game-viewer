import { Component, OnInit } from '@angular/core';
import { GameState } from '../models/gameState.';
import { PandemicService } from '../pandemic.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  gameState: GameState = new GameState;

  constructor(private pandemicService: PandemicService) { }

  ngOnInit(): void {
    this.pandemicService.playGame()
    .subscribe(
      (gameState: GameState) => this.gameState = gameState,
      (err: any) => console.log(err)
    );
  }

}
