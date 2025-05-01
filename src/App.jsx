import { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

// npm install react@18.0.0 react-dom@18.0.0
// npm install semantic-ui-react semantic-ui-css

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="Bienvenidos a la tienda" />
    </>
  );
}

export default App;
