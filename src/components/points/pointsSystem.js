export default function pointSystem(sportName) {
    let points;
    switch (sportName.toLowerCase()) {
        case 'basketball':
            points = {
                onePoint: 1,
                twoPoint: 2,
                threePoint: 3,
            };
            break;
        case 'american football':
            points = {
                TouchDown: 6,
                FieldGoal: 3,
                safety: 2,
                TDTryOrSafety: 1,
                TDExtraTD: 2,
                noScore: 0,
            }
            break;
        default:
            points = 1;
    }

    return points;
}