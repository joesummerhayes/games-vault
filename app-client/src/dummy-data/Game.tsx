interface IGame {
  title: string;
  image: string[];
  score: number;
  synopsis: string;
  body: string;
}

export class Game {
  title;
  image;
  score;
  synopsis;
  body;
  constructor(game: IGame) {
    this.title = game.title;
    this.image = game.image;
    this.score = game.score;
    this.synopsis = game.synopsis;
    this.body = game.body;
  }
}