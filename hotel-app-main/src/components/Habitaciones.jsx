import Habitacion from "./Habitacion";

let datos = [
  {
    imagen: "https://www.w3schools.com/w3images/room_single.jpg",
    precio: 434,
    tipo: "Single",
    mts: "45m2",
  },
  {
    imagen: "https://www.w3schools.com/w3images/room_double.jpg",
    precio: 930,
    tipo: "Double",
    mts: "60m2",
  },
  {
    imagen: "https://www.w3schools.com/w3images/room_single.jpg",
    precio: 434,
    tipo: "Single",
    mts: "45m2",
  },
  {
    imagen: "https://www.w3schools.com/w3images/room_deluxe.jpg",
    precio: 1454,
    tipo: "Deluxe",
    mts: "95m2",
  },
];

export default function Habitaciones() {
  return (
    <>
      <div className="w3-container w3-margin-top" id="rooms">
        <h3>Rooms</h3>
        <p>
          Make yourself at home is our slogan. We offer the best beds in the
          industry. Sleep well and rest well.
        </p>
      </div>

      <div className="w3-row-padding">
        <div className="w3-col m3">
          <label>
            <i className="fa fa-calendar-o"></i> Check In
          </label>
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="DD MM YYYY"
          />
        </div>
        <div className="w3-col m3">
          <label>
            <i className="fa fa-calendar-o"></i> Check Out
          </label>
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="DD MM YYYY"
          />
        </div>
        <div className="w3-col m2">
          <label>
            <i className="fa fa-male"></i> Adults
          </label>
          <input className="w3-input w3-border" type="number" placeholder="1" />
        </div>
        <div className="w3-col m2">
          <label>
            <i className="fa fa-child"></i> Kids
          </label>
          <input className="w3-input w3-border" type="number" placeholder="0" />
        </div>
        <div className="w3-col m2">
          <label>
            <i className="fa fa-search"></i> Search
          </label>
          <button className="w3-button w3-block w3-black">Search</button>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-16">
        {datos.map((habi) => (
          <Habitacion data={habi} />
        ))}
      </div>
    </>
  );
}
