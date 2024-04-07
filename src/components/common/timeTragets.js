export default function calculateTimeTargets(gameTime, gameStyle) {
  let timeTargets = [];

  switch (gameStyle) {
    case 'Full Game':
      timeTargets = [gameTime * 60];
      break;
    case 'Halves':
      timeTargets = [(gameTime / 2) * 60, gameTime * 60];
      break;
    case 'Thirds':
      const thirdDuration = (gameTime * 60) / 3;
      timeTargets = [
        thirdDuration * 1,
        thirdDuration * 2,
        thirdDuration * 3,
      ];
      break;
    case 'Quarters':
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