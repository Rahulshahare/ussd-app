import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


import { useUssd } from 'react-native-ussd-advanced';

export default function App() {
  const {
    runFullUssdSession,
    isSessionActive,
    currentResponse,
    isAccessibilityEnabled,
  } = useUssd({
    onUssdResponse: (response) => console.log('Response:', response),
    onUssdError: (error) => console.error('Error:', error),
    onSessionEnd: (message) => console.log('Session ended:', message),
  });

  const handleUssd = async () => {
    const result = await runFullUssdSession('*123*1*2*3#', 0);
  };

  return (
    <View>
      <Text>Session Active: {isSessionActive ? 'Yes' : 'No'}</Text>
      <Text>Response: {currentResponse}</Text>
      <Button onPress={handleUssd} title="Run USSD" />
    </View>
  );
}