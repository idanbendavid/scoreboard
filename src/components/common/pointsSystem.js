export default function pointSystem(sportName) {
    switch (sportName.toLowerCase()) {
        case 'basketball':
            points = {
                onePoint: 1,
                twoPoint: 2,
                threePoint: 3,
            };
            break;
        default:
            points = 1;
    }

    return points;
}