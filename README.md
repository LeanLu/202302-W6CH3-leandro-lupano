# Week 6 - Challenge 3

## Teléfono React - Redux

Aquí tienes la maquetación HTML/CSS de una aplicación, tendrás que programarla en React - Redux.

Se debe poder escribir un número de teléfono clicando en los botones numéricos. La tecla borrar puede borrar el último dígito o borrar el número completo, como prefieras.
Sólo se verá o el botón Llamar o el botón Colgar, nunca los dos a la vez.
No se puede introducir un número de más de 9 cifras.
El botón Llamar sólo se puede pulsar si el número tiene 9 cifras. Cuando tenga 9 cifras el botón debe tener la clase "active".
El mensaje superior "Llamando..." sólo aparece cuando se pulsa el botón "Llamar" y mientras dure la llamada. Usa la clase "off" para controlar su visibilidad (el elemento HTML correspondiente debe seguir estando, aunque no se vea).
Al pulsar el botón "Llamar", éste debe desaparecer del DOM y debe aparecer en su lugar el botón "Colgar". El teclado tiene que quedar deshabilitado.
Al pulsar el botón "Colgar", éste debe desaparecer y debe aparecer en su lugar el botón "Llamar". El teclado tiene que habilitarse. Además, se debe borrar el número de teléfono.
Si no ocurre nada tras cinco segundos de llamada, ésta se debe colgar automáticamente.
Separa todo en los siguientes componentes:

- Info
- Display
- Actions
- Action
- Keyboard
- Key

### Entrega también un listado de responsabilidades:

### INFO:

- Pinta: Estado de la llamada.
- Recibe: Datos del componente "Actions" (el Call o Hang).
- Interactúa: Con componente "Actions".

### DISPLAY:

- Pinta: Números clickeados.
- Recibe: Datos de los números desde componente "Key".
- Interactúa: Con componente "Actions" para habilitar el "Call".

### ACTIONS:

- Pinta: Los "Action" (Botones de "Call" y "Hang").
- Recibe: De los componentes "Action" el estado de llamada.
- Interactúa: Con componentes "Display" and "Action".

### ACTION:

- Pinta: Cada "Action".
- Recibe: Evento de click del User.
- Interactúa: Con componentes "Info" y "Display".

### KEYBOARD:

- Pinta: Conjunto de "Key".
- Recibe: Cada "key".
- Interactúa: Con "key".

### KEY:

- Pinta: Cada "Key".
- Recibe: Evento de click del User.
- Interactúa: Con "Display".
