import React from 'react';
import CreateStory from '../screens/CreateStory';
import Feed from '../screens/Feed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default class BottomTabNavigator extends React.Component{
  render(){
    return(
      <Tab.Navigator
      screensOptions = {({route})=>({
        tabBarIcon: ({focused, color, size}) =>{
          var iconName;
          if(route.name==='Feed'){
            iconName = focused? 'book' : 'book-outline'
          }
          else if(route.name === 'CreateStory'){
            iconName = focused? 'create' : 'create-outline'
          }
          return <Ionicons name = {iconName} size = {size} color = {color}/>
        }
      })}
      >
      <Tab.Screen name = 'Feed' component = {Feed}/>
 <Tab.Screen name = 'CreateStory' component = {CreateStory}/>
      </Tab.Navigator>
    )
  }
}