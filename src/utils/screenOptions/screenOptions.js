
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export const screenOptions = ({route}) => {
    return {
      tabBarIcon: ({ color }) => {
        let iconName;
  
        if (route.name === 'Restaurants') {
          iconName = 'restaurant';
        } else if (route.name === 'Settings') {
          iconName = 'settings' 
        } else {
          iconName =  'map' 
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={20} color={color} />;
      },
    }
  }