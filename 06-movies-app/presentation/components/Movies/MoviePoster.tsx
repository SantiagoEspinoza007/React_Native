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
          width: smallPoster ? 100 : 175,
          height: smallPoster ? 150 : 250,
          borderRadius: 20,
        }}
        resizeMode='cover'
        blurRadius={0.5}
      />
    </Pressable>
  )
}

export default MoviePoster