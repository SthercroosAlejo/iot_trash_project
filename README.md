# iot_trash_project

# Backend para Gestión de Basura con Firestore

## Descripción

Este proyecto es un backend construido con Firebase Functions para gestionar el estado de tachos de basura utilizando Firestore. Proporciona una API REST para interactuar con un modelo `Trash`, permitiendo marcar los tachos como llenos o vacíos, activarlos o desactivarlos, y realizar eliminaciones lógicas y físicas. Este backend se integrará con un proyecto de Arduino que proporcionará la información del estado de los tachos de basura.

## Estructura del Proyecto

functions/: Contiene el código fuente de las funciones de Firebase.
README.md: Este archivo.
package.json: Dependencias y scripts del proyecto.

## Requisitos Previos

Asegúrate de tener instaladas las siguientes herramientas:

Node.js >= 18
Firebase CLI

## Instalación

Pasos para configurar el entorno de desarrollo:

# Clona el repositorio
git clone https://github.com/tu-usuario/tu-proyecto.git

# Entra en el directorio del proyecto
cd tu-proyecto/functions

# Instala las dependencias
npm install

# Configura las variables de entorno
cp .env.example .env
# Edita el archivo .env con tus credenciales y configuraciones

# Inicia el emulador de Firebase Functions
firebase emulators:start

# Abre en tu navegador
http://127.0.0.1:puerto/endopoint/app/

# API Endpoints
Crear un nuevo tacho de basura
POST /trash

Obtener todos los tachos de basura
GET /trash

