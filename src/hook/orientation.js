import * as ScreenOrientation from "expo-screen-orientation";

const lockLandscapeOrientation = async () => {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
    );
};

const lockPortraitOrientation = async () => {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
};

export default { lockLandscapeOrientation, lockPortraitOrientation };