// src/services/api.js

// URL DE  APPS SCRIPT
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzwuKBiNnVqUpFkhmSmC9LKOUwtOqBd4F4noRd7YVdk6z3RurKlzBTLdQ65DTMEcs-B/exec";

export const fetchPropiedades = async () => {
  try {
    // Usamos ?action=getPropiedades como definimos en el backend
    const response = await fetch(`${APPS_SCRIPT_URL}?action=getPropiedades`, {
      redirect: "follow", // CRÍTICO para Apps Script o dará error de CORS
    });
    const result = await response.json();
    return result.data; 
  } catch (error) {
    console.error("Error cargando propiedades:", error);
    return [];
  }
};