import { StyleSheet, View, Share,Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import React from 'react';
import * as Linking from 'expo-linking';

export default function ShareData({ gameId, sport }) {

  const redirectUrl = Linking.createURL('path/into/app', {
    queryParams: { gameId, sport },
  });

  const onShare = async () => {
    // console.log(gameId, "shared")
    try {
      const result = await Share.share({
        message:
          `join the live ${sport} game hosted by ${redirectUrl}`,
        },
      );
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log(gameId, "shared with activity")
          console.log(result.activityType)
        } else {
          // shared
          console.log("shared")
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("dismissed")
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  return (
    <View>
      <Entypo name="share" size={24} color="black" onPress={onShare} />
    </View>
  )
}

const styles = StyleSheet.create({})