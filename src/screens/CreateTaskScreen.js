import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import CustomButton from '../components/CustomButton';

Notifications.setNotificationHandler({
  handleNotification: async () => ({ shouldShowAlert: true, shouldPlaySound: true, shouldSetBadge: false }),
});

export default function CreateTaskScreen({ navigation }) {
  const [title, setTitle] = useState('');

  const saveTask = async () => {
    if (!title) return Alert.alert('Error', 'Ingresa una tarea');
    
    const newTask = { id: Date.now(), title };
    const stored = await AsyncStorage.getItem('tasks');
    const tasks = stored ? JSON.parse(stored) : [];
    
    await AsyncStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));

    await Notifications.scheduleNotificationAsync({
      content: { 
        title: "Recordatorio!", 
        body: `Tarea pendiente: ${title}` 
      },
      trigger: { 
        type: 'timeInterval',
        seconds: 5 
      },
    });

    Alert.alert('Éxito', 'Tarea guardada');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nueva Tarea</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Ej: Comprar pan" 
        onChangeText={setTitle} 
      />
      <CustomButton title="Guardar Tarea" onPress={saveTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 15, borderRadius: 5, fontSize: 16 }
});