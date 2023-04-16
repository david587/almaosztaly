import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Button } from 'react-native';

function calculatePercentage(firstClassBoxes, secondClassBoxes) {
  const totalBoxes = firstClassBoxes + secondClassBoxes;
  const firstClassPercentage = (firstClassBoxes / totalBoxes) * 100;
  const secondClassPercentage = (secondClassBoxes / totalBoxes) * 100;

  return { firstClassPercentage, secondClassPercentage };
}


export default function App() {
  const [firstClassBoxes, setFirstClassBoxes] = useState("");
  const [secondClassBoxes, setSecondClassBoxes] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const percentage = calculatePercentage(firstClassBoxes, secondClassBoxes);
    setResult(percentage);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alma arány számítás</Text>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        placeholder="elsőosztályú ládák"
        value={firstClassBoxes.toString()}
        onChangeText={text => setFirstClassBoxes(parseInt(text))}
      />

      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        placeholder="másodosztályú ládák"
        value={secondClassBoxes.toString()}
        onChangeText={text => setSecondClassBoxes(parseInt(text))}
      />

      <Button title="Számítás" onPress={handleCalculate} />

      {result && (
        <View>
          <Text>Elsőosztályú almák aránya: {result.firstClassPercentage}%</Text>
          <Text>Másodosztályú almák aránya: {result.secondClassPercentage}%</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
