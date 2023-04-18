### Proyecto base para iniciar con eslint confiurado

## Configuracion inicial proyecto expo con typescript

1 - creamos el proyecto

npx create-expo-app --template

2 - Intalar y configuracion de eslint

yarn add -D eslint

configuracion

npx eslint --init

pasos:

- ❯ To check syntax, find problems, and enforce code style
- ❯ JavaScript modules (import/export)
- ❯ React
- ? Does your project use TypeScript? (y/N) Y
- ❯◉ Node
- ❯ Answer questions about your style
- ❯ JSON
- ❯ Tabs
- ❯ Single
- ❯ Unix
- ? Do you require semicolons? (Y/n) y
  eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
- ? Would you like to install them now? › No / Yes yes

configuracion tsconfig.json

{
"extends": "expo/tsconfig.base",
"compilerOptions": {
"strict": true
},
"exclude": ["__tests__/**/*-test.ts"]
}

configuracion en .eslintrc.json

## react navigation

1 yarn add @react-navigation/native
2 npx expo install react-native-screens react-native-safe-area-context

3 importar react navigation en App.tsx y envolver la aplicaion

```
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```

4 yarn add @react-navigation/native-stack

5 yarn add @react-navigation/bottom-tabs

6 yarn add react-native-vector-icons
