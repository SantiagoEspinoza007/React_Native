import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

interface Props extends PressableProps{

    className?: string;
    children: string;
    
}

const ThemedButton = ({className, children, ...rest}:Props) => {
  return (
    <Pressable
        className={["bg-light-primary dark:bg-dark-primary items-center rounded-xl px-5 py-2 active:opacity-80", className].join(" ")}
        {...rest}
    >
      <Text className='text-white text-2xl'>{children}</Text>
    </Pressable>
  )
}

export default ThemedButton