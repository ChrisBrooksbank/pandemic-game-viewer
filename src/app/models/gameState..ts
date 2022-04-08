import { mapNode } from "./mapNode";

export class GameState {
    public gameOverReason: string = "";
    public actionsPlayed: number = 0;
    public outbreakCount: number = 0;
    public cities: mapNode[] = [];
}