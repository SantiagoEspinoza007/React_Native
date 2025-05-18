## Instalación Native Wind React Native with Expo

https://www.nativewind.dev/

1. Install Nativewind
Run in your terminal inside the project 
```
npm install nativewind tailwindcss@^3.4.17 react-native-reanimated@3.16.2 react-native-safe-area-context
```

2. Setup Tailwind CSS
Run in your terminal inside the project 
```
npx tailwindcss init
```
Add in your `tailwind.config.js` file the paths of your component
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Add in your `global.css`
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
  
3. Add the babel preset

babel.config.js
```
const { getDefaultConfig } = require("expo/metro-config")
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
 
module.exports = withNativeWind(config, { input: './global.css' })
```
