import React,{useContext} from 'react';
import { StyleSheet, Text, View,FlatList,Button,TouchableOpacity } from 'react-native';
import { NoteContext } from '../Context/NoteContext';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const ListNoteScreen = ({navigation}) =>{
    const {state,dispatch} = useContext(NoteContext)
    return(
        <View style={{flex:1}}>

            <View style={{
                justifyContent:'center',
                alignItems:'flex-end'
            }}>
            <TouchableOpacity 
            style={{
                borderRadius:15,
                width:80,
                height:80,
                borderRadius:50,
                alignItems:'center',
                justifyContent:'center'
            }}

            onPress={()=>navigation.navigate("Create")}

            >
                <AntDesign name="pluscircle" size={55} color="#00aaff" />
            </TouchableOpacity>
            </View>
            

            <FlatList 
            data={state}
            keyExtractor={item=>item.title}
            renderItem={({item})=>{
                return(

                    <TouchableOpacity
                    onPress={()=>navigation.navigate("Show",{id:item.id})}
                    >
                        <View
                        style={{
                            flexDirection:'row',
                            justifyContent:'space-between',
                            marginHorizontal:10,
                            marginBottom:5,
                            backgroundColor:'white',
                            elevation:4,
                            padding:10
                        }}
                        
                        >
                            <Text style={{fontSize:20}}>{item.title}</Text>     
                            <MaterialCommunityIcons name="delete-circle" size={35} color="#00aaff" 
                            onPress={()=>dispatch({type:"REMOVE",payload:item.id})}
                            />
                        </View>
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    )
}

export default ListNoteScreen;