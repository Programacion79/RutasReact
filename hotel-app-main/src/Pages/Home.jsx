import React from "react";
function Home() {
  return (
    <div>
      <header
        className="w3-display-container w3-content w3-wide"
        style={{ maxWidth: "1600px", minWidth: "500px" }}
      >
        <img
          className="w3-image"
          src="https://www.w3schools.com/w3images/hotel.jp"
          alt="Hotel"
          width="1600"
          height="800"
        />
        <div className="w3-display-bottomleft w3-padding-large w3-opacity">
          <h1 className="w3-xxlarge">Nombre del Hotel</h1>
        </div>
      </header>
      {/* Puedes mover aquí el formulario de reservas también */}
    </div>
  );
}

export default Home;
