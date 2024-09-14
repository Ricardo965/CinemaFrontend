# Frontend de Gestión de Reservas de Cine
## React + Vite

Este proyecto es una aplicación frontend para la sección de manejo de reservas de un cine usando ReactJS + Vite + TailwindCSS. Permite a los usuarios ver películas disponibles, reservar asientos y cancelar reservas. 

## Requisitos

- **Node.js**: Asegúrate de tener Node.js instalado en tu máquina.

## Instalación

1. Clona este repositorio:

   ```sh
   git clone <URL-del-repositorio>
   cd <nombre-del-repositorio>
   ```

2. Instala las dependencias del proyecto:

   ```sh
   npm install
   ```

## Configuración

Antes de ejecutar el proyecto, debes configurar la URL del backend en el archivo `config.json`. Este archivo se encuentra en la raíz del proyecto y debe contener la URL del backend Spring Boot. Por defecto, el backend está configurado para ejecutarse en `http://localhost:8080`.

1. Abre el archivo `config.json` en la raíz del proyecto.
2. Actualiza el campo `backendUrl` con la URL de tu servidor backend:

   ```json
   {
     "backendUrl": "http://localhost:8080",
     "customerId": 1
   }
   ```

   Asegúrate de que el `customerId` esté configurado con un valor válido para tu aplicación. En el backend está configurado el usuario por defecto con customerId=1

## Ejecución

Para iniciar el servidor de desarrollo y ejecutar la aplicación, usa el siguiente comando:

```sh
npm run dev
```

Esto iniciará el servidor de desarrollo y abrirá la aplicación en tu navegador. 

## Customer por defecto

La aplicación tiene un `customer` por defecto con `customerId` configurado en `config.json`. Puedes ajustar este valor según sea necesario para coincidir con los datos de tu backend.

## Notas

- Asegúrate de que el backend Spring Boot esté en ejecución antes de iniciar el frontend.
- Si encuentras algún problema, verifica los logs del frontend y del backend para obtener detalles sobre posibles errores de conexión o de datos.

---

Este `README.md` proporciona instrucciones claras para configurar y ejecutar el proyecto, además de mencionar el `customer` por defecto y cómo ajustarlo.
