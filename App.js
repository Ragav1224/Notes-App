import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListNoteScreen from './src/screens/ListNoteScreen';
import CreateNoteScreen from './src/screens/CreateNoteScreen'
import ShowNoteScreen from './src/screens/ShowNoteScreen'
import {NotesProvider} from './src/Context/NoteContext'
import EditNoteScreen from './src/screens/EditNoteScreen';

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Notes" 
        component={ListNoteScreen}
        options={{
          title:'All Notes',
          headerTitleAlign:'center'
        }}
        />
        <Stack.Screen 
        name="Create" 
        component={CreateNoteScreen}
        options={{
          title:'Create Note',
          headerTitleAlign:'center'
        }}
        />
        <Stack.Screen 
        name="Show" 
        component={ShowNoteScreen}
        options={{
          title:'Note',
          headerTitleAlign:'center'
        }}
        />
        <Stack.Screen 
        name="Edit" 
        component={EditNoteScreen}
        options={{
          title:'Update Note',
          headerTitleAlign:'center'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () =>{
  return(
    <NotesProvider>
      <App />
    </NotesProvider>
  )
}
