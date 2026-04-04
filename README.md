# Fiscalius

Proyecto frontend con React, TypeScript y Vite.

## Comandos utiles

Instalar dependencias:

```bash
npm install
```

Levantar el proyecto en desarrollo:

```bash
npm run dev
```

Generar el build de produccion:

```bash
npm run build
```

Publicar en GitHub Pages:

```bash
npm run deploy
```

`npm run deploy` ya ejecuta el build antes de publicar porque el proyecto tiene configurado `predeploy`.

## Deploy

El deploy publica la carpeta `dist` a la rama `gh-pages` usando el paquete `gh-pages`.

Flujo rapido cuando vuelvas a tocar el proyecto:

1. `npm install`
2. Haz los cambios
3. `npm run deploy`

## Nota sobre `base` en Vite

En [`vite.config.ts`](./vite.config.ts), `base: '/'` esta bien mientras el proyecto siga usando un dominio personalizado.

Si en algun momento se deja de usar ese dominio y el sitio vuelve a servirse desde la URL estandar de GitHub Pages del repo, cambia el `base` a:

```ts
base: '/fiscalius/'
```
