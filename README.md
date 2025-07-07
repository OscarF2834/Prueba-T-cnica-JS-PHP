# ✅ Lista de Tareas - Prueba Técnica Intermedia

Este es un proyecto de lista de tareas desarrollado como prueba técnica de nivel intermedio. Utiliza **PHP** (backend), **JavaScript Vanilla** (frontend), **MySQL** (base de datos) y **Bootstrap 5** (estilos).

---

## 📋 Funcionalidades

- ✔️ Crear tareas
- ✏️ Editar tareas
- ❌ Eliminar tareas
- ✅ Completar tareas (con tachado de texto)
- 🔄 Todas las acciones se realizan de forma **asíncrona** usando `fetch()`

---

## 📦 Requisitos del sistema

Asegúrate de tener instalado lo siguiente:

- [XAMPP](https://www.apachefriends.org/es/index.html) / WAMP / Laragon o LAMP
- PHP 7.4 o superior
- MySQL / MariaDB
- Navegador web moderno (Chrome, Firefox, etc.)

---

## ⚙️ Instalación y ejecución

### 1. Cargar el proyecto en XAMPP
Copiamos el proyecto o la carpeta del proyecto en la siguiente ruta: 

# Ejemplo para XAMPP:
C:\xampp\htdocs\tareas-app


### 2. Crear la base de datos

1. Inicia Apache y MySQL desde tu panel (XAMPP/WAMP/etc).
2. Abre `phpMyAdmin` en tu navegador:
   ```
   http://localhost/phpmyadmin
   ```
3. Crea una nueva base de datos llamada tareas, tal cual como se tiene en el archivo db.php:


4. Importa el archivo SQL:

- Ubicado en: `tareas-app/database/init.sql`
- O copia este SQL y ejecútalo manualmente:

```sql
CREATE DATABASE IF NOT EXISTS tareas;
USE tareas;
CREATE TABLE IF NOT EXISTS tareas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  completado BOOLEAN DEFAULT 0
);
```

### 3. Configurar la conexión a la base de datos

Abre el archivo:

```
tareas-app/api/db.php
```

Y asegúrate de que las credenciales sean correctas (para XAMPP normalmente es):

```php
$pdo = new PDO('mysql:host=localhost;dbname=tareas', 'root', '');
```

> Si usas contraseña para el usuario `root`, añádela en la cadena de conexión.

---

### 4. Ejecutar el proyecto

Abre tu navegador y accede a:

```
http://localhost/tareas-app/
```

Deberías ver la interfaz de lista de tareas con los botones: agregar, editar, eliminar y completar.

---

## 🛠️ Estructura del proyecto

```
tareas-app/
│
├── index.html              # Interfaz principal
├── style.css               # Estilos personalizados
├── script.js               # Lógica en JavaScript
│
├── api/                    # Lógica del servidor (PHP)
│   ├── db.php              # Conexión a MySQL
│   ├── leer.php            # Obtener tareas
│   ├── crear.php           # Crear tarea
│   ├── editar.php          # Editar tarea
│   ├── eliminar.php        # Eliminar tarea
│   └── completar.php       # Completar tarea
│
└── database/
    └── init.sql            # Script para crear base de datos y tabla
```

Se debe tener en cuenta que el SCRIPT de la base de datos, si no se desea ejecutar en el editor de
codigo, se puede eliminar. En mi caso lo elimine y la cree en MySQL workbeanch

---

## 🧠 Tecnologías utilizadas

- PHP 7.x
- MySQL
- JavaScript (Vanilla)
- Bootstrap 5 (CDN)

---



