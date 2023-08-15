const fs = require('fs');
const path = require('path');
const { EOL } = require('os');

// Lee los argumentos de la línea de comandos // This is comand npm run generate-controller MiControlador2
const args = process.argv.slice(2);
const controllerName = args[0];
const outputPath = args[1] || 'src/app/controllers';  // Ruta predeterminada

if (!controllerName) {
  console.error('Falta el nombre del controlador.');
  process.exit(1);
}

const controllerClassName = controllerName.charAt(0).toUpperCase() + controllerName.slice(1) + 'Controller';
const controllerContent 
= `import { Component } from '@angular/core';

class ${controllerClassName} {
  constructor() {
    // Inicialización si es necesario
  }

  openModalCreate() {
    // Lógica para abrir el modal de creación
  }

  // Otras funciones personalizadas aquí

}

export default ${controllerClassName};
`;

const outputFile = path.join(outputPath, `${controllerName}-controller.service.ts`);

fs.writeFile(outputFile, controllerContent, 'utf8', (err) => {
  if (err) {
    console.error('Error al escribir el archivo del controlador:', err);
  } else {
    console.log(`Controlador ${controllerName} creado exitosamente en ${outputFile}.`);
  }
});
