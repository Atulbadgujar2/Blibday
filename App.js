import 'react-native-gesture-handler';
import 'react-native-reanimated';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
  Platform
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import { ThemeProvider } from './src/theme/ThemeProvider';
import { useThemeHelper } from './src/helper';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { RootNavigator } from './src/routes';
import { Styles } from './src/styles';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const App = () => {
  const { colors } = useThemeHelper();
  var themestyle = Styles(colors);
  return (
     <GestureHandlerRootView style={{ flex: 1 }}>
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaProvider>
        <SafeAreaView style={themestyle.mainContainerStyle} edges={['bottom', 'left', 'right']}>
          <ThemeProvider>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <RootNavigator />
              </PersistGate>
            </Provider>
          </ThemeProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </ApplicationProvider>
    </GestureHandlerRootView>
  );
};

export default App;
