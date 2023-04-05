import React from "react";
import { Formulario } from "./components/Formulario";
import { Respuestas } from "./components/Respuestas";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (

<Routes>
      <Route exact path='/' element={<Formulario />} />
      <Route exact path='/respuestas' element={<Respuestas />} />
</Routes>



  );
}

export default App;
