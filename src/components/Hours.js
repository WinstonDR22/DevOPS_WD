import React from 'react';

const Hours = () => {
  // Obtener el día actual de la semana (0 = Domingo, 6 = Sábado)
  const today = new Date().getDay();

  // Definir las horas de apertura basadas en el día de la semana
  let hours;
  if (today >= 1 && today <= 5) {
    // Lunes a Viernes
    hours = '10 a.m. - 4 p.m.';
  } else {
    // Sábado y Domingo
    hours = '9 a.m. - 8 p.m.';
  }

  return (
    <div>
      <h2>Horas de Apertura</h2>
      <p>Hoy estamos abiertos de {hours}</p>
    </div>
  );
};

export default Hours;

