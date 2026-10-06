import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const stored = await AsyncStorage.getItem('tasks');
    if (stored) setTasks(JSON.parse(stored));
  };

  useFocusEffect(
    useCallback(() => { loadTasks(); }, [])
  );

  const deleteTask = async (id) => {
    const updated = tasks.filter(t => t.id !== id);
    setTasks(updated);
    await AsyncStorage.setItem('tasks', JSON.stringify(updated));
  };

  return (
    <View style={styles.container}>
      <CustomButton title="+ Nueva Tarea" onPress={() => navigation.navigate('Alta')} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.taskText}>{item.title}</Text>
            <CustomButton title="Eliminar" onPress={() => deleteTask(item.id)} color="#dc3545" />
          </View>
        )}
      />
      <CustomButton title="Cerrar Sesión" onPress={() => navigation.replace('Login')} color="#6c757d" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  card: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, borderWidth: 1, borderColor: '#eee', borderRadius: 8, marginVertical: 8 },
  taskText: { fontSize: 16, flex: 1 }
});