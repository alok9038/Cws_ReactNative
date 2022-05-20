// import 'react-native-gesture-handler';
import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
const { createDrawerNavigator } = require('@react-navigation/drawer')
const { NavigationContainer } = require('@react-navigation/native')
import { FontAwesome, SimpleLineIcons, Octicons, AntDesign   } from '@expo/vector-icons';
import CustomSidebarMenu from './Components/custom';
import Slider from './Components/carousel';
import { Feather } from '@expo/vector-icons';
// import { Platform } from 'react-native'
// import {ViewPropTypes} from 'deprecated-react-native-prop-types';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: 'white',
            width: 240,
          },
          headerStyle:{
            elevation:0
          },
          drawerActiveBackgroundColor:'lightgrey',
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
      >
      
        <Drawer.Screen name="Hi Alok" 
          options={{
            drawerLabel: 'Homepage',
            drawerLabelStyle:{
              color:'grey'
            },
            headerTitleStyle:{
              fontSize:17,
            },
            drawerHideStatusBarOnOpen:true,

            // headerTitleAlign:'center',
            // headerTransparent:true,
            headerRight: () => (
            // <Button
            //   onClick={() => navigation.navigate('Login')}
            //   // onPress={() => alert('This is a button!')}
            //   title="Join now"
            //   color="teal"
            // />
              // <FontAwesome name="user-o" size={24} color="black" />
              <View style={styles.avatar}></View>
            ),
            drawerIcon: () => (
              <Octicons name="home" size={21} color="grey" />
           ),
          headerRightContainerStyle: {
            marginRight: 15,
          },
        }}
          component={HomePage} />
        <Drawer.Screen name="Login" component={Login} 
          options={{ 
            drawerLabelStyle:{
              color:'grey'
            },
            headerShown: false,
            drawerIcon: () =>(
              <AntDesign name="login" size={21} color="black" />
            )
           }}
        />
        <Drawer.Screen name="Carousel" component={Slider} 
          options={{ 
            drawerLabelStyle:{
              color:'grey'
            },
            headerShown: false,
            drawerIcon: () =>(
              <Feather name="align-left" size={24} color="black" />
            )
           }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  join: {
    flex: 1,
    padding: 40,
  },
  avatar:{
    height:40,
    width:40,
    borderRadius:50,
    backgroundColor:'white',
    padding:10,
    elevation:5
  }
})

export default App;