import React from 'react';
import './About.css';
import Footer from "../../Components/Footer/Footer";
const About = () => {
  return (
    <main className="new-page">
      <h1>Sobre Nosotros</h1>

      <section>
        <h2>¿Qué es esto?</h2>
        <p>
          Es una pagina que usa la API de dragon ball, esta API ofrece acceso a una base de datos sobre el universo de dragon ball.
        </p>
   
      </section>

      <section>
        <h2>¿Quienes son?</h2>
        <p>
          Somos Juan Andres Acosta Martinez y Juan David Celeita Ospina, ambos estudiantes de 
          ingenieria de sistemas en la Universidad de la Amazonia.
        </p>
      </section>

      <section>
        <h2>¿Por qué construiste esto?</h2>
        <p>
          Para aprender a usar una API y saber mas sobre su uso.
        </p>
      </section>

      <section>
        <h2>¿Cosas técnicas?</h2>
        <p>
        En este trabajo se uso una API de dragon ball, componente de MUI y el framework de Vite+React. 
        </p>
      </section>

      <Footer></Footer>
    </main>
   
  );
  
};

export default About;