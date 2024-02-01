import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {
  const [result, setResult] = useState('Guess a number between 1-100');
  const [userGuess, setUserGuess] = useState('');
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [arvaukset, setArvaukset] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const makeAguess = () => {
    const parsedGuess = parseInt(userGuess, 10);

    setArvaukset(arvaukset + 1);
    if (parsedGuess === randomNumber) {
      Alert.alert(
        `You guessed the correct number in ${arvaukset} guesses.`

        
        );
      setRandomNumber(generateRandomNumber());
      setArvaukset(0);
      setUserGuess('');
    } else if (parsedGuess < randomNumber) {
      setResult(`Your guess ${parsedGuess} is too low`);
    } else {
      setResult(`Your guess ${parsedGuess} is too high`);
    }
  }

  return (
    <View style={styles.container}>
      <Text>{result}</Text>
      <TextInput
        keyboardType="numeric"
        style={{ fontSize: 18, width: 200, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setUserGuess(text)}
        value={userGuess}
      />
      <View style={styles.buttoncontainer}>
        <Button title="Make a guess" onPress={makeAguess} color="purple" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttoncontainer: {
    flex: 2,
    width: 150,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 5,
  },
});
// Tekoälyn apua käytetty mm. virheen etsintään.