# Aprendizaje de Comandos C# 📚💻

¡Bienvenido al Software de Aprendizaje de Comandos C#! Aquí encontrarás una herramienta diseñada para mejorar tu memoria mecánica en relación a los comandos. Este proyecto está destinado a apoyar tu aprendizaje en el uso de los comandos que se mencionarán y que hacen referencia al siguiente repositorio: [Repo_Konny](https://github.com/konnylisethalucematorresCAMPUS/KonnyWebApi):

## Tabla de Contenidos

- [Parte 1](#parte-1)
- [Parte 2](#parte-2)
- [Parte 3](#parte-3)
- [Instalar TypeScript](#instalación-de-typescript)
- [¿Cómo Utilizarlo?](#¿cómo-utilizarlo?)



<br>

<hr>

## Parte 1

- dotnet new sln

- dotnet new classlib -o Dominio

- dotnet new classlib -o Persistencia

- dotnet new classlib -o Aplicacion

- dotnet new webapi -o ApiIncidencias

- dir

  <br>

## Parte 2

- dotnet sln add Dominio

- dotnet sln add Persistencia

- dotnet sln add Aplicacion

- dotnet sln add ApiIncidencias

- dir

  <br>

## Parte 3

- cd Aplicacion
  - dotnet add reference ../Dominio/
  - dotnet add reference ../Persistencia/
- cd ..
- cd ApiIncidencias
  - dotnet add reference ../Aplicacion/
- cd ..
- cd Persistencia
  - dotnet add reference ../Dominio/
- cd ..

---

## Instalación de TypeScript

Sigue estos pasos para instalar TypeScript:

1. Verifica si tienes Node.js instalado.
2. Si no lo tienes, ejecuta los siguientes comandos para instalar Node.js:

   ```shell
   nvm list-remote
   ```

   Instala la última versión LTS:

   ```shell
   nvm install v18.18.1
   ```

4. Instala TypeScript:

   ```bash
   npm install -g typescript
   ```

¡Listo! Ahora tienes TypeScript instalado en tu sistema.

<br>

---

## ¿Cómo Utilizarlo?

> **IMPORTANTE:** 
>
> Para utilizar esta herramienta, es necesario tener TypeScript instalado. Si no lo tienes, sigue los pasos de [Instalación de TypeScript](#instalación-de-typescript).

Sigue estos pasos para aprovechar al máximo esta herramienta:

1. Clona el repositorio: `https://github.com/JuanDavidAvilaRaveloCampus/learning_dotnet_commands.git`

2. Accede a la carpeta raíz del repositorio y ejecuta los siguientes comandos:

   ```shell
   npm update
   ```

3. Ejecuta los siguientes archivos:

     ```shell
      tsc
      ```

    ```shell
      node ./dist/app.js
      ```

¡Listo! Ahora puedes usar este pequeño programa para mejorar tus habilidades en los comandos C#. ¡Mucho éxito! 🚀



## Contribuciones y licencia

Agradecemos tus contribuciones al proyecto! Si deseas colaborar, sigue los siguientes pasos:

1. Crea un nuevo "branch" para tus cambios.

   ```
   git checkout -b mi-nueva-funcionalidad    
   ```

   ​    

Realiza tus modificaciones y mejoras.

Haz un "commit" de tus cambios.

```
git commit -m "Agrego nueva funcionalidad"      
```

​    

Envía tus cambios al repositorio remoto.

```
git push origin mi-nueva-funcionalidad    
```

​    

1. Abre un "**Pull Request**" en GitHub para que revisemos tus cambios.

Este proyecto se encuentra bajo la Licencia MIT. Siéntete  libre de utilizar, modificar y distribuir el código según tus   necesidades.

¡Gracias por contribuir al proyecto "Aprendizaje de Comandos C# 📚💻"!