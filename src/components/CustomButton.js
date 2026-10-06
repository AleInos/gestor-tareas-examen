import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CustomButton({ title, onPress, color = '#007BFF' }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { padding: 15, borderRadius: 8, alignItems: 'center', marginVertical: 10 },
  text: { color: '#FFF', fontWeight: 'bold', fontSize: 16 }
});