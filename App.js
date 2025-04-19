import 'react-native-gesture-handler';
import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

///Common Login
import Login from './Components/Common/Login';
import ForgotPassword from './Components/Common/Forgot';
import HeaderOne from './Components/Common/Headers/HeaderOne';
import HeaderTwo from './Components/Common/Headers/HeaderTwo';
import HeaderThree from './Components/Common/Headers/Headerthree';
//Attorney dashbaord
import AttorneyHome from './Components/AttorneyDashboard/Home';
import Addcase from './Components/AttorneyDashboard/AddCase';
import InitalEVALUATION from './Components/AttorneyDashboard/InitalEVALUATION';
import Notification from './Components/AttorneyDashboard/Notification';
import Profile from './Components/AttorneyDashboard/Profile';
import CareCenter from './Components/AttorneyDashboard/CareCanter';
import CareCenterDetails from './Components/AttorneyDashboard/CareCenterDetails';
import Cases from './Components/AttorneyDashboard/Cases';
import CallSupport from './Components/AttorneyDashboard/CallSupport'
import Patient from './Components/AttorneyDashboard/PatientDashboard/Patient'
import Finance from './Components/AttorneyDashboard/PatientDashboard/Finance'
import AddExpenses from './Components/AttorneyDashboard/PatientDashboard/Finance-AddExpenses'
const Stack = createStackNavigator();
export default function App() {
  return (
    <React.Fragment>
      <SafeAreaView style={{backgroundColor: 'white'}} />
      <NavigationContainer>
        <Stack.Navigator headerMode={false}>
          <Stack.Screen
            name="Login"
            options={{
              headerTitle: props => null,
              headerStyle: {height: 20},
            }}
            component={Login}
          />
          <Stack.Screen
            name="ForgotPassword"
            options={{
              headerTitle: props => null,
              headerLeft: null,
              headerStyle: {height: 20},
              // headerRight: () => (
              //   <Button
              //     onPress={() => alert('This is a button!')}
              //     title="Info"
              //     color="#fff"
              //   />
              // ),
            }}
            component={ForgotPassword}
          />
          <Stack.Screen
            name="AttorneyHome"
            options={{
              header: () => null,
              headerLeft: null,
              headerRight: null,
              headerStyle: {height: 40},
              // headerRight: () => (
              //   <Button
              //     onPress={() => alert('This is a button!')}
              //     title="Info"
              //     color="#fff"
              //   />
              // ),
            }}
            component={AttorneyHome}
          />
          <Stack.Screen
            name="Addcase"
            options={{
              header: props => null,
              headerLeft: null,
              headerRight: null,
              headerStyle: {height: 40},
            }}
            component={Addcase}
          />
          <Stack.Screen
            name="InitalEVALUATION"
            options={{
              header: props => null,
              headerLeft: null,
              headerRight: null,
              headerStyle: {height: 40},
            }}
            component={InitalEVALUATION}
          />
          <Stack.Screen
            name="Notification"
            options={{
              header: props => null,
              headerLeft: null,
              headerRight: null,
              headerStyle: {height: 40},
            }}
            component={Notification}
          />
          <Stack.Screen
            name="Profile"
            options={{
              header: props => null,
              headerLeft: null,
              headerRight: null,
              headerStyle: {height: 40},
            }}
            component={Profile}
          />
          <Stack.Screen
            name="CareCenter"
            options={{
              header: props => null,
              headerLeft: null,
              headerRight: null,
              headerStyle: {height: 40},
            }}
            component={CareCenter}
          />
          <Stack.Screen
            name="CareCenterDetails"
            options={{
              header: () => null,
              headerLeft: null,
              headerRight: null,
              headerStyle: {height: 40},
              headerTitle: null,
              headerShown: false,
            }}
            component={CareCenterDetails}
          />
          <Stack.Screen name="Cases" component={Cases} />
          <Stack.Screen name="CallSupport" component={CallSupport} />
          <Stack.Screen name="Patient" component={Patient} />
          <Stack.Screen name="Finance" component={Finance} />
          <Stack.Screen name="AddExpenses" component={AddExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}
