export default function pointSystem(sportName) {
    let points;
    switch (sportName) {
        case 'Basketball':
            points = {
                onePoint: 1,
                twoPoint: 2,
                threePoint: 3,
            };
            break;
        case 'American Football':
            points = {
                TouchDown: 6,
                FieldGoal: 3,
                safety: 2,
                TDTryOrSafety: 1,
                TDExtraTD: 2,
                noScore: 0,
            }
            break;
        case 'Tennis':
            points = {
                1: 15,
                2: 30,
                3: 40,
                ad: 'AD',
                duece: 'DUECE',
                set: 0
            };
            break;
        default:
            points = 1;
    }

    return points;
}