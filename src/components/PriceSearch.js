// PriceSearch.js
import React, { useState } from "react";

function PriceSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async () => {
    try {
      // Realiza una solicitud al backend para buscar el objeto en la base de datos
      const response = await fetch(
        "http://localhost:5000/api/prices/search?query=" + searchTerm
      );

      if (!response.ok) {
        throw new Error("Error al buscar el objeto en la base de datos");
      }

      // Convierte la respuesta a formato JSON
      const data = await response.json();

      // Actualiza el estado con los resultados de la búsqueda
      setSearchResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Search Prices</h2>
      <input
        type="text"
        placeholder="Enter food item"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults && (
        <div>
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                {result.itemName} - ${result.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PriceSearch;
