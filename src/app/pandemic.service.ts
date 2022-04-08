import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameState } from './models/gameState.';

@Injectable({
  providedIn: 'root'
})
export class PandemicService {

  constructor(private http: HttpClient) { }
  playGame(): Observable<GameState> {
    return this.http.get<GameState>("https://autocardboardapi20220325114929.azurewebsites.net/play?game=pandemic");
  }
}
