import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

export const FullScreenLoader = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
            <ActivityIndicator/>
        </View>
  )
}