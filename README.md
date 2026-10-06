Gestor de Tareas - Aplicación Móvil en React Native

Opción: Gestor de Tareas (Task Manager) con autenticación local, persistencia y recordatorios programados.
Cómo ejecutar la app
Clonar el repositorio:
git clone https://github.com/AleInos/gestor-tareas-examen.git
cd gestor-tareas-examen


Instalar las dependencias:
npm install

Iniciar el servidor de desarrollo:
npx expo start

(O usar npx expo start --tunnel para conexiones en redes distintas).
Ejecutar en dispositivo móvil:
Abrir la aplicación Expo Go (iOS / Android) y escanear el código QR provisto en la terminal.
Ejecutar la suite de pruebas unitarias:
npm test

 Funcionalidades Implementadas
Navegación: Configuración de Stack Navigation (@react-navigation/native-stack) con pantallas de Login, Registro, Listado de Tareas (Home) y Creación de Tareas.
Autenticación y Persistencia Local: Almacenamiento local mediante @react-native-async-storage/async-storage para persistir credenciales de usuario y el listado de tareas pendientes.
Gestión de Tareas: Alta, renderizado reactivo y eliminación de tareas.
Componentes Reutilizables: Componente modular CustomButton utilizado de forma uniforme en los formularios de la app.
Notificaciones Locales: Disparo de notificación local (expo-notifications) programada a los 5 segundos al crear una nueva tarea.

Testing Unitario: Suite con 3 pruebas implementadas bajo Jest:
Test de renderizado del componente reutilizable (CustomButton).
Test de interacción de usuario (evento onPress).
Test de lógica de negocio (función de validación validateTaskTitle).

🎥 Enlace Video DEMO
YouTube: https://www.youtube.com/shorts/GQwgEH9SppE
