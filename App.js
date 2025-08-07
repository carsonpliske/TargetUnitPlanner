import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [hours, setHours] = useState('');

  const calculateOPUS = (hrs) => hrs * 55;
  const calculateSHIP = (hrs) => hrs * 45;
  const calculateSHIPOPUS = (hrs) => hrs * 50;
  const calculateSHIPPACK = (hrs) => hrs * 40;
  const calculateOPUSPACK = (hrs) => hrs * 50;

  const hoursNum = parseFloat(hours) || 0;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Goal Time Calculator</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter Hours:</Text>
        <TextInput
          style={styles.input}
          value={hours}
          onChangeText={setHours}
          placeholder="0"
          keyboardType="numeric"
          autoFocus={true}
        />
      </View>

      <View style={styles.calculationsContainer}>
        <View style={styles.row}>
          <View style={styles.calculationCard}>
            <Text style={styles.calculationType}>OPUS</Text>
            <Text style={styles.calculationResult}>
              {calculateOPUS(hoursNum).toFixed(0)}
            </Text>
          </View>
          
          <View style={styles.calculationCard}>
            <Text style={styles.calculationType}>SHIP</Text>
            <Text style={styles.calculationResult}>
              {calculateSHIP(hoursNum).toFixed(0)}
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.calculationCard}>
            <Text style={styles.calculationType}>SHIP & OPUS</Text>
            <Text style={styles.calculationResult}>
              {calculateSHIPOPUS(hoursNum).toFixed(0)}
            </Text>
          </View>
          
          <View style={styles.calculationCard}>
            <Text style={styles.calculationType}>SHIP & PACK</Text>
            <Text style={styles.calculationResult}>
              {calculateSHIPPACK(hoursNum).toFixed(0)}
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.calculationCard}>
            <Text style={styles.calculationType}>OPUS & PACK</Text>
            <Text style={styles.calculationResult}>
              {calculateOPUSPACK(hoursNum).toFixed(0)}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    width: 200,
    height: 50,
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 8,
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: 'white',
  },
  calculationsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  calculationCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    minWidth: 140,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  calculationType: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
    textAlign: 'center',
  },
  calculationResult: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});