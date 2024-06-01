import React from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { Movie } from '../../../core/entities/movie.entity'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/Navigation';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>()
    return (
        <Pressable
            onPress={() => navigation.navigate('Details', {movieId: movie.id})}
            style={ ({pressed}) => ({
                width, 
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7,
                opacity: (pressed) ? 0.9 : 1,
            })}
        >
            <View style={{...styles.imageContainer}}>
                <Image source={{uri: movie.poster}} style={styles.image}/>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 10
    },
    imageContainer: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9
    }
})