# LAB CRUD - Frontend

React + Vite para consumir el backend del laboratorio.

## Requisitos

- Node.js 20+
- Backend ejecutadose en `http://localhost:3000`
- Base de datos `lab_crud`

## Instalar

```bash
nmp install
```

## Ejecutar

```bash
npm ru dev
```

Frontend: `http://localhost:5173`

## Usuarios de prueba

Admin:
- `admin@labcrud.local`
- `Password123!`

Cliente:
- `cliente@labcrud.local`
- `Password123!`

## Responsabilidades

- `assets`: estilos y recursos.
- `components`: componentes reutilizables.
- `config`: configuracion del frontend.
- `context`: estado global de autenticacion.
- `hooks`: hooks propios.
- `pages`: pantallas.
- `services`: comunicacion con la API.
- `utils`: almacenamiento de sesion.

## Flujo

Login → AuthContext → JWT en localStorage → `api.js` agrega Bearer token → backend verifica JWT → autorizacion por rol.

El boton Eliminar solo aparece para`admin`, pero el backend tambien verifica el rol. Ocultar un boton en React no constituye seguridad.