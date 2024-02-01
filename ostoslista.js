import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleAdd = () => {
    setMessages([...messages, message])
    setMessage('');
  }
  const removeAdd = () => {
    setMessages([])
  }
  
  console.log(messages);  

  return (
    <View style={styles.container}>
      <View style={{flex: 2}}>
        <TextInput
          style={{fontSize: 18, width: 200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => setMessage(text)}
          value={message}/>
        <View style={styles.buttoncontainer}>
          <Button title="Lisää" onPress={handleAdd} color="purple"/>
          <Button title="Poista" onPress={removeAdd} color="blue"/>
        </View>
      </View>
      <View style={{flex: 8, alignItems: 'center'}}>
        <Text style= {{fontSize:20, color: 'blue'}}>Shopping list</Text>
        <FlatList
          data={messages}
          renderItem={({item}) =>
          <View style={styles.listItem}>
            <Text>{item}</Text>
          </View>
        }
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem:{
    padding: 5,
    width: 300,
    flexDirection:'row',
    justifyContent: 'center'
  },
  buttoncontainer: {
    flex: 2,
    width: 150,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 5
    },
});
