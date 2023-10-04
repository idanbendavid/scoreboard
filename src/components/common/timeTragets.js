export default function calculateTimeTargets(gameTime,gameStyle){
    let timeTargets = [];

    switch (gameStyle.toLowerCase()) {
      case 'full game':
        timeTargets = [gameTime * 60];
        break;
      case 'halves':
        timeTargets = [(gameTime / 2) * 60, gameTime * 60];
        break;
      case 'thirds':
        const thirdDuration = (gameTime * 60) / 3;
        timeTargets = [
          thirdDuration * 1,
          thirdDuration * 2,
          thirdDuration * 3,
        ];
        break;
      case 'quarters':
        const quarterDuration = (gameTime * 60) / 4;
        timeTargets = [
          quarterDuration * 1,
          quarterDuration * 2,
          quarterDuration * 3,
          quarterDuration * 4,
        ];
        break;
      default:
        timeTargets = [gameTime * 60];
        break;
    }
    return timeTargets;
}