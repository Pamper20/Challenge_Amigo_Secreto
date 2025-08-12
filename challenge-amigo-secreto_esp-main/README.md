# 🎁 Juego del Amigo Secreto

Aplicación web sencilla para registrar nombres de amigos y realizar un sorteo aleatorio del "Amigo Secreto".

## 📋 Descripción
Este proyecto permite:
- Ingresar nombres de amigos participantes.
- Mostrar la lista actualizada de amigos.
- Sortear aleatoriamente un amigo secreto.

Se ha desarrollado utilizando **HTML**, **CSS** y **JavaScript puro**, sin dependencias externas.

## 🚀 Funcionalidades
1. **Agregar amigo**  
   - Captura el nombre ingresado en el campo de texto.
   - Valida que el campo no esté vacío.
   - Añade el nombre al arreglo de amigos.
   - Limpia el campo de entrada.
   - Actualiza la lista en pantalla.

2. **Mostrar lista de amigos**  
   - Recorre el arreglo de amigos.
   - Muestra cada nombre como un elemento `<li>` dentro de la lista HTML.
   - Limpia la lista antes de mostrarla para evitar duplicados.

3. **Sortear amigo secreto**  
   - Valida que haya al menos un nombre en la lista.
   - Genera un índice aleatorio usando `Math.random()` y `Math.floor()`.
   - Muestra el nombre sorteado en pantalla.

## 🛠️ Tecnologías utilizadas
- **HTML5**  
- **CSS3**  
- **JavaScript** (DOM y manipulación de arrays)

## 📂 Estructura de archivos

📦 amigo-secreto
┣ 📂 assets
┃ ┣ amigo-secreto.png
┃ ┣ play_circle_outline.png
┣ 📜 index.html
┣ 📜 style.css
┣ 📜 app.js
┗ 📜 README.md


## 📖 Uso
1. Abrir `index.html` en un navegador.
2. Escribir un nombre en el campo de texto y presionar **Añadir**.
3. Repetir el paso anterior para todos los participantes.
4. Presionar **Sortear amigo** para obtener un resultado aleatorio.

## 📌 Ejemplo de uso
- Lista ingresada: Ana, Pedro, Luis, Marta
- Resultado del sorteo: 🎉 El amigo secreto es: **Luis**

## 📜 Licencia
Este proyecto es de uso libre para fines educativos y recreativos.
