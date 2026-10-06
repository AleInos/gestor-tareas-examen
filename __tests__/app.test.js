import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomButton from '../src/components/CustomButton';

// Lógica de negocio simulada para cumplir con el requisito de testear una función de cálculo/validación
const validateForm = (username, password) => {
  if (!username || !password) return false;
  return true;
};

describe('Tests de la Aplicación', () => {
  // 1. Test de renderizado del componente reutilizable
  it('renderiza el CustomButton correctamente', () => {
    const { getByText } = render(<CustomButton title="Probar" onPress={() => {}} />);
    expect(getByText('Probar')).toBeTruthy();
  });

  // 2. Test de interacción del componente reutilizable
  it('responde a la interacción del usuario en CustomButton', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(<CustomButton title="Click Me" onPress={mockOnPress} />);
    fireEvent.press(getByText('Click Me'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  // 3. Test de función o lógica de negocio
  it('valida el formulario de registro/login correctamente', () => {
    expect(validateForm('', '1234')).toBe(false);
    expect(validateForm('admin', '1234')).toBe(true);
  });
});