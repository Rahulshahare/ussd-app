// App.tsx
import React from 'react';
import { Button, View, Text, Alert } from 'react-native';
import UssdAdvanced from 'react-native-ussd-advanced';

export default function App() {
  const testUSSD = async () => {
    try {
      // Check if accessibility is enabled first
      const isEnabled = await UssdAdvanced.isAccessibilityEnabled();
      if (!isEnabled) {
        Alert.alert(
          'Accessibility Required',
          'Please enable accessibility service for USSD automation',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Open Settings', onPress: () => UssdAdvanced.openAccessibilitySettings() }
          ]
        );
        return;
      }

      // Test with a safe USSD code (check balance - varies by carrier)
      const response = await UssdAdvanced.sendAdvancedUssd('*123#', -1);
      Alert.alert('USSD Response', response || 'No response received');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ marginBottom: 20, textAlign: 'center' }}>
        USSD Test App
      </Text>
      <Button title="Send USSD" onPress={testUSSD} />
    </View>
  );
}