import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, Cart} from '@screens';
import {navigationRef} from '@routes/type';
import {Provider} from 'react-redux';
import store from './redux/store';
import {storage} from '@utils/storage';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={storage.getBoolean('isLogin') ? 'Home' : 'Login'}
          screenOptions={{
            headerShadowVisible: false,
          }}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
