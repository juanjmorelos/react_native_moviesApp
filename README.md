
# MoviesApp

## Descripción del proyecto
MoviesApp es un proyecto realizado en react native utilizando clean arquitecture y parte del domain driven design.

Este proyecto tiene como finalidad realizar una práctica de una aplicación real. 
Las funionalidades de la aplicación son:

- Mostrar las películas actuales
- Mostrar las películas que estan por estrenar
- Mostrar las películas que tienen mejor calificación
- Se puede acceder al detalle de la película y ver un resumen de la misma, además de los actores que participaron en ella, presupuesto, géneros y calificación

## Instrucciones para correr el proyecto

Para correr esta aplicación debes seguir los siguientes pasos:

1. Clona el repositorio utilizando el siguiente comando
```
git clone https://github.com/juanjmorelos/react_native_moviesApp.git
```

2. Si no tienes API Key en The Movie DB obtén una
3. Copiar el .env.template y renombrarlo a .env
4. Toma el API Key generado por The Movie DB y agregala en la variable de entorno 

```env
THE_MOVIE_DB_KEY=AQUI_VA_TU_API_KEY
```
5. Una vez hecho los cambios anteriores puedes correr el proyecto
### Para Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### Para iOS

```bash
npx pod-install

# using npm
npm run ios

# OR using Yarn
yarn ios
```
