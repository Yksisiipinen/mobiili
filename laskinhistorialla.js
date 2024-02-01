import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [numA, setNumA] = useState('');
  const [numB, setNumB] = useState('');
  const [result, setResult] = useState(0);

  const [calculations, setCalculations] = useState([]);

  

  const calculate = (operator) => {
    if (isNaN(parseFloat(numA)) || isNaN(parseFloat(numB))) {
      Alert.alert('Warning', "Type a number first");
    }
    else {
      const newResult = operator === '+' ? parseFloat(numA) + parseFloat(numB) : parseFloat(numA) - parseFloat(numB);
      const calculation = `${numA} ${operator} ${numB} = ${newResult}`;
      setResult(newResult);
      setCalculations((prevCalculations) => [...prevCalculations, calculation]);
    }
  }// Tässä kohtaa hyödynnetty tekoälyä.
  
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Result: {result.toFixed(2)}</Text>
      <TextInput 
        keyboardType="numeric" 
        style={{fontSize:18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={numA => setNumA(numA)}
        value={numA}
      />
      <TextInput 
        keyboardType="numeric" 
        style={{fontSize: 18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={numB => setNumB(numB)}
        value={numB}
      />

      <View style={styles.buttoncontainer}>
        <Button onPress={() => calculate('+')} title=" + " />
        <Button onPress={() => calculate('-')} title=" - " />
      </View>

      <View style={styles.listItem}>
      <FlatList
        data={calculations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttoncontainer: {
    flex: 2,
    width: 150,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 20,
  },
  listItem:{
    flex: 8,
    padding: 5,
    width: 300,
    flexDirection:'row',
    }  
});