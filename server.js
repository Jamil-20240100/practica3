const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(
    "<h1>¡Hola desde mi pipeline CI/CD!</h1><p>El pipeline se ha ejecutado y desplegado con éxito.</p>"
  );
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
