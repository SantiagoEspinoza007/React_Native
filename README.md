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
If you not have the `metro.config.js` Run:
```
npx expo customize
```
And select `babel.config.js`
```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: ['react-native-reanimated/plugin'],
  };
};
```

4. Modify your metro.config.js
If you not have the `metro.config.js` Run:
```
npx expo customize
```
and select `metro.config.js`
```
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
 
module.exports = withNativeWind(config, { input: './global.css' })
```

5. Import your CSS file on your main `Layout`
```
import "./global.css"
 
export default App() {
  /* Your App */
}
```
6. Make sure that in your `app.json` your bundler has switch to metro.
```
{
  "expo": {
    "web": {
      "bundler": "metro"
    }
  }
}
```
7. Typescript file
If you are working on TypeScript Project you must need to create `nativewind-env.d.ts` file and add a triple-slash directive:

```
/// <reference types="nativewind/types" />
```
