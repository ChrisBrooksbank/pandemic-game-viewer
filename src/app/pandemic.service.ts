import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PandemicService {

  constructor(private http: HttpClient) { }

  playGame(): Observable<object> {
    return this.http.get("https://autocardboardapi20220325114929.azurewebsites.net/play?game=pandemic");
  }
}
