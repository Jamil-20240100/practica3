# Práctica 3: Pipeline CI/CD con GitHub Actions

## 📋 Descripción del Proyecto
Este repositorio contiene una aplicación web simple de Node.js, diseñada para demostrar la implementación de un **pipeline de Integración Continua (CI)** y **Despliegue Continuo (CD)** utilizando **GitHub Actions**. El objetivo es automatizar las pruebas y el despliegue cada vez que se suben cambios al repositorio.

---

## 🚀 Puesta en Marcha

### Requisitos
* Node.js (versión 14 o superior)
* npm (incluido con Node.js)
* Git
* Una cuenta de GitHub

### Pasos para Ejecutar Localmente

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/Jamil-20240100/practica3.git](https://github.com/Jamil-20240100/practica3.git)
    cd practica3
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecuta las pruebas:**
    ```bash
    npm test
    ```

4.  **Inicia la aplicación (opcional):**
    ```bash
    npm start
    ```
    La aplicación estará disponible en `http://localhost:3000`.

---

## ⚙️ Pipeline CI/CD

El pipeline de este proyecto está configurado con **GitHub Actions** y se define en el archivo `.github/workflows/ci-cd.yml`. Este pipeline se activa automáticamente en cada `push` o `pull request` a la rama `main`.

El pipeline consta de dos trabajos (jobs) principales:

1.  **`build-and-test`**:
    * Instala las dependencias de Node.js.
    * Ejecuta las pruebas unitarias definidas en la carpeta `__tests__`.
    * Si las pruebas pasan, el pipeline continúa. Si no, se detiene y notifica el fallo.

2.  **`deploy`**:
    * Este trabajo se ejecuta solo si el `job` de pruebas es exitoso y el `push` se realiza en la rama `main`.
    * Utiliza la acción `peaceiris/actions-gh-pages@v3` para compilar y desplegar la aplicación automáticamente en **GitHub Pages**.

---

## 🔗 Enlaces

* **URL del Repositorio:** [https://github.com/Jamil-20240100/practica3](https://github.com/Jamil-20240100/practica3)
* **Sitio Web Desplegado:** [Tu URL de GitHub Pages]
    (La URL se generará automáticamente una vez que configures GitHub Pages. Debería ser algo como `https://Jamil-20240100.github.io/practica3/`).

---

## 📝 Contribución

Si deseas contribuir, por favor, sigue el siguiente flujo de trabajo:
1.  Crea una nueva rama (`git checkout -b feature/nombre-de-tu-rama`).
2.  Haz tus cambios y asegúrate de que todas las pruebas pasan.
3.  Haz un `push` a tu rama.
4.  Crea un **Pull Request** para que tus cambios sean revisados e integrados.
