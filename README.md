# Proyecto React Native

Este proyecto de React Native demuestra un sistema de autenticación simple, permitiendo a los usuarios ingresar al sistema utilizando su número de documento. La interfaz es intuitiva y está diseñada para ofrecer una experiencia de usuario fluida en dispositivos móviles.

## Tabla de Contenido

- [Descripción](#descripción)
- [Inicio Rápido](#inicio-rápido)
  - [Requisitos](#requisitos)
  - [Instalación](#instalación)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [Ejecución](#ejecución)
- [Autenticación](#autenticación)

## Descripción

El proyecto incluye un sistema de login donde los usuarios pueden acceder usando su número de documento. Está diseñado para ser intuitivo y fácil de usar, asegurando una experiencia fluida en dispositivos móviles.

## Inicio Rápido

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### Requisitos

- Node.js
- npm o yarn
- React Native CLI (si se requiere)
- Un emulador de Android/iOS o un dispositivo real

### Instalación

#### Frontend

1. Instala las dependencias del frontend ejecutando los siguientes comandos:

   ```bash
   npm install
    ```

1. Instala las librerías necesarias para el proyecto:

    ```bash
    npx react-native run-android
    npx react-native run-ios
    npm install axios
    npm install @react-navigation/native
    ```

#### Backend

1. Instala las dependencias del frontend ejecutando los siguientes comandos:

    ```bash
    npm install express 
    npm install cors
    ```

## Ejecución
1. Inicia el backend para tener acceso a la base de datos:


    ```bash
    cd server
    node service.js
    ```
2. Inicia el frontend para visualizar el proyecto en tu dispositivo o emulador:

    ```bash
    cd client
    npm start
    ```
3. Para ver la aplicación en tu dispositivo, instala la aplicación Expo desde Google Play Store o iOS App Store y escanea el código QR proporcionado en la consola.
## Autenticación
Usa las siguientes credenciales para acceder a la aplicación:

**Usuario:** cedula de ciudadania

**Contraseña:** 1

Estas credenciales son para fines de demostración y deben ser cambiadas en un entorno de producción.