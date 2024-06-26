export default function gameStyleLables(gameStyle, currnetStage) {
    let gameStyleLabel;
    switch (gameStyle) {
        case 'Halves':
            gameStyleLabel = `${currnetStage === 1 ? '1st Half' : '2nd Half'}`;
            break;
        case 'Thirds':
            gameStyleLabel = `${getOrdinalSuffix(currnetStage)} third`;
            break;
        case 'Quarters':
            gameStyleLabel = `${getOrdinalSuffix(currnetStage)} Quarter`;
            break;
        default:
            gameStyleLabel = '';
            break;
    }
    return gameStyleLabel;
}

const getOrdinalSuffix = (number) => {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const relevantDigits = number % 100;

    return number + (suffixes[(relevantDigits - 20) % 10] || suffixes[relevantDigits] || suffixes[0]);
};
