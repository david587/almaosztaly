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
  const [firstClassBoxes, setFirstClassBoxes] = useState(0);
  const [secondClassBoxes, setSecondClassBoxes] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const percentage = calculatePercentage(firstClassBoxes, secondClassBoxes);
    setResult(percentage);
  };

  return (
    <View style={styles.container}>
      <Text>Elsőosztályú ládák száma:</Text>
      <TextInput
        keyboardType="numeric"
        value={firstClassBoxes.toString()}
        onChangeText={text => setFirstClassBoxes(parseInt(text))}
      />

      <Text>Másodosztályú ládák száma:</Text>
      <TextInput
        keyboardType="numeric"
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
});
