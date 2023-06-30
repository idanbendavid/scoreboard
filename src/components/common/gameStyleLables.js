export default function gameStyleLables(gameStyle, currnetStage) {
    let gameStylelabel;
    switch (gameStyle) {
        case 'halves':
            gameStylelabel = `${currnetStage === 1 ? '1st Half' : '2nd Half'}`;
            break;
        case 'third':
            gameStylelabel = `${getOrdinalSuffix(currnetStage)} third`;
            break;
        case 'quarters':
            gameStylelabel = `${getOrdinalSuffix(currnetStage)} Quarter`;
            break;
        default:
            gameStylelabel = '';
            break;
    }
    return gameStylelabel;
}

const getOrdinalSuffix = (number) => {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const relevantDigits = number % 100;

    return number + (suffixes[(relevantDigits - 20) % 10] || suffixes[relevantDigits] || suffixes[0]);
};
