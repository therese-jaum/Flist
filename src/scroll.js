import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ScrollView, 
    Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 

const App = () =>{
     
const [list, setList] = useState([])

useEffect(()=>{
    getList();
}, [])

const getList = () =>{
    fetch("https://jsonplaceholder.typicode.com/users",{
        method : "GET",
        headers : {
            "Content-Type" : "application/json"
        }
        }).then(res=>{
          return res.json()
         
       }).then(res=>{
        setList(res)
       
       }).catch(err=>{
        console.log(err)
       })
}

return(
    <SafeAreaView
    style = {styles.container}
    >
         
         <View style = {{marginBottom: 15, marginTop: 100}}>
            <Text style = {styles.txtHeader}> LIST OF GUEST</Text>
            </View>
            <ScrollView
        contentContainerStyle={{
            padding : 20,
            
        }}
        > 
            <View>
    {list.map((item,index)=>(
        <View key = {index}>
            <View style = {styles.itemList}>
                <View>
                <Text style = {styles.nameStyle}>{item.name}</Text> 
                <Text style = {{fontWeight: 'bold'}}>{item.address.street}, {item.address.city}  </Text> 
                  </View>
            </View>
        </View>
    ))}
</View>

            </ScrollView>
    </SafeAreaView>
)
}
export default App;


const styles = StyleSheet.create({
    container : {
        backgroundColor: "white", 
        width: windowWidth,
        height: windowHeight,
    },
   nameStyle : {
    
       fontSize: 20,
       fontWeight: 'bold'
   },
    txtHeader:{
        fontSize :  25,
        fontWeight : "bold",
        
    },
    itemList: {
        paddingVertical : 15,
        borderBottomColor : "pink",
        borderBottomWidth : 0.5
    },
     

})