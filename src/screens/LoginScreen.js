import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const savedUser = await AsyncStorage.getItem('user');
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      if (parsed.username === username && parsed.password === password) {
        navigation.replace('Home');
        return;
      }
    }
    Alert.alert('Error', 'Credenciales incorrectas');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput style={styles.input} placeholder="Usuario" onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry onChangeText={setPassword} />
      <CustomButton title="Ingresar" onPress={handleLogin} />
      <CustomButton title="Registrarse" onPress={() => navigation.navigate('Registro')} color="#6c757d" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 15, borderRadius: 5, fontSize: 16 }
});