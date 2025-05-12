import React from 'react';
import { Image, Pressable } from 'react-native';

interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
}



const MoviePoster = ({id, poster, smallPoster = false, className}:Props) => {
  return (
    <Pressable className={`active:opacity-85 px-2 ${className}`} >
      <Image 
        source={{ uri: poster }}
        className=" shadow-lg w-full h-full rounded-2xl"
        style={{
          width: smallPoster ? 90 : 160,
          height: smallPoster ? 150 : 240,
          borderRadius: 20,
        }}
        resizeMode='cover'
      />
    </Pressable>
  )
}

export default MoviePoster