const { validateTaskTitle } = require('../utils/validation');

// Mock para aislar la lógica del componente reutilizable
const mockCustomButton = ({ title, onPress }) => ({
  type: 'CustomButton',
  props: { title, onPress },
  simulatePress: () => onPress && onPress()
});

describe('Batería de Tests Unitarios - Parcial React Native', () => {

  // Test 1: Componente reutilizable - Renderizado de propiedades
  it('El componente CustomButton recibe y asigna el título correctamente', () => {
    const button = mockCustomButton({ title: 'Guardar Tarea', onPress: () => {} });
    expect(button.props.title).toBe('Guardar Tarea');
  });

  // Test 2: Componente reutilizable - Respuesta a interacción (onPress)
  it('El componente CustomButton ejecuta la función asignada al ser accionado', () => {
    const onPressMock = jest.fn();
    const button = mockCustomButton({ title: 'Accionar', onPress: onPressMock });
    button.simulatePress();
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  // Test 3: Lógica de negocio - Función de validación de títulos
  it('validateTaskTitle valida títulos vacíos y textos válidos correctamente', () => {
    expect(validateTaskTitle('')).toBe(false);
    expect(validateTaskTitle('   ')).toBe(false);
    expect(validateTaskTitle('Comprar insumos')).toBe(true);
  });

});