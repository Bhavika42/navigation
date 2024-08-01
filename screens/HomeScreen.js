// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [floorNumber, setFloorNumber] = useState('');

  const handleNavigation = () => {
    navigation.navigate('FloorPlan', { floorNumber });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Floor Number:</Text>
      <TextInput
        style={styles.input}
        value={floorNumber}
        onChangeText={setFloorNumber}
        keyboardType="numeric"
      />
      <Button title="Show Path" onPress={handleNavigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default HomeScreen;
