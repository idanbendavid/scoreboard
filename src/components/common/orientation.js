import * as ScreenOrientation from 'expo-screen-orientation';

const setOrientation = (orientation) => {
  if (orientation === 'landscape') {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  } else if (orientation === 'portrait') {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }
};

export default setOrientation;
