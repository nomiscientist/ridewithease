import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

// Import screens
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import RideDetailsScreen from './screens/RideDetailsScreen';
import TrackingScreen from './screens/TrackingScreen';
import DriverProfileScreen from './screens/DriverProfileScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import SettingsScreen from './screens/SettingsScreen';
import SupportScreen from './screens/SupportScreen';
import FeedbackScreen from './screens/FeedbackScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Onboarding"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#4A90E2',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen 
              name="Onboarding" 
              component={OnboardingScreen} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="Login" 
              component={LoginScreen} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="Dashboard" 
              component={DashboardScreen} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="RideDetails" 
              component={RideDetailsScreen} 
              options={{ title: 'Ride Details' }}
            />
            <Stack.Screen 
              name="Tracking" 
              component={TrackingScreen} 
              options={{ title: 'Track Your Ride' }}
            />
            <Stack.Screen 
              name="DriverProfile" 
              component={DriverProfileScreen} 
              options={{ title: 'Driver Profile' }}
            />
            <Stack.Screen 
              name="Notifications" 
              component={NotificationsScreen} 
              options={{ title: 'Notifications' }}
            />
            <Stack.Screen 
              name="Settings" 
              component={SettingsScreen} 
              options={{ title: 'Settings' }}
            />
            <Stack.Screen 
              name="Support" 
              component={SupportScreen} 
              options={{ title: 'Help & Support' }}
            />
            <Stack.Screen 
              name="Feedback" 
              component={FeedbackScreen} 
              options={{ title: 'Rate & Review' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;