import React from 'react'
import { View, ViewProps } from 'react-native'

interface Props extends ViewProps {
    className?: string
    margin?: boolean
    safe?: boolean
    bgColor?: string
}

const ThemedCard = ({ className, children, ...rest }:Props) => {
  return (
    <View
        {...rest}
        className={`bg-white dark:bg-black/10 rounded-xl shadow shadow-black/5 p-4 ${className}`}
    >
        {children}
    </View>
  )
}

export default ThemedCard