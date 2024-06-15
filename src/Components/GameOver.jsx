import GameState from "./GameState";

function GameOver({ gameState, playerTurn }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return <div className="game-over">Player O Won</div>;
    case GameState.playerXWins:
      return <div className="game-over">Player X Won</div>;
    case GameState.draw:
      return <div className="game-over">Draw</div>;
    default:
      return <></>;
  }
}

export default GameOver;