# 🎁 Amigo Secreto (`Challenge_Amigo_Secreto`)

Aplicación web interactiva diseñada para registrar nombres de participantes y realizar un sorteo aleatorio de "Amigo Secreto" de forma rápida y sencilla.

---

## 📂 Estructura del Proyecto

El proyecto está organizado de manera limpia con JavaScript puro, sin librerías ni dependencias externas:

    Challenge_Amigo_Secreto/
    ├── assets/
    │   ├── amigo-secreto.png
    │   └── play_circle_outline.png
    ├── index.html          # Interfaz y estructura visual
    ├── style.css           # Estilos responsivos y diseño de componentes
    ├── app.js              # Lógica del sorteo y manipulación del DOM
    └── README.md

---

## 🚀 Funcionalidades Principales

1. **Agregar amigo**
   * Captura el nombre ingresado en el campo de texto.
   * Valida que el campo no esté vacío ni contenga espacios en blanco inválidos.
   * Añade el nombre al arreglo interno de participantes y limpia el input automáticamente.
   * Actualiza la lista en pantalla en tiempo real.

2. **Mostrar lista de amigos**
   * Recorre el arreglo de participantes.
   * Genera dinámicamente elementos `<li>` dentro de la lista HTML.
   * Limpia el contenedor antes de renderizar para evitar duplicados visuales.

3. **Sortear amigo secreto**
   * Valida que exista un número mínimo de participantes en la lista antes de ejecutar.
   * Utiliza `Math.random()` y `Math.floor()` para seleccionar un índice de manera completamente aleatória.
   * Muestra el resultado destacado en la interfaz.

---

## 🛠️ Stack Tecnológico

* **HTML5:** Maquetación semántica.
* **CSS3:** Estilos personalizados y diseño adaptable.
* **JavaScript (Vanilla):** Lógica algorítmica, manejo de arreglos y manipulación del DOM.

---

## 📖 Modo de Uso

1. Abre el archivo `index.html` en cualquier navegador web moderno.
2. Escribe el nombre de un participante en el campo de texto y haz clic en **Añadir**.
3. Repite el proceso para incorporar a todos los integrantes del grupo.
4. Presiona el botón de **Sortear amigo** para obtener el resultado aleatorio en pantalla.

---

## 📌 Ejemplo de Ejecución

* **Participantes ingresados:** Ana, Pedro, Luis, Marta
* **Resultado del sorteo:** 🎉 *El amigo secreto es: Luis*

---

## 📜 Licencia

Este proyecto es de uso libre para fines educativos, de práctica y recreativos.
