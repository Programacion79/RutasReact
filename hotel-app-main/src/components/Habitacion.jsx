export default function Habitacion({data}) {
  return (
    <>
    <div className="w3-third w3-margin-bottom">
      <img src={data.imagen} alt="Norway" style={{"width":"100%"}}/>
      <div className="w3-container w3-white">
        <h3>{data.tipo}</h3>
        <h6 className="w3-opacity">From ${data.precio}</h6>
        <p>Single bed</p>
        <p>{data.mts}</p>
        <p className="w3-large"><i className="fa fa-bath"></i> <i className="fa fa-phone"></i> <i className="fa fa-wifi"></i></p>
        <button className="w3-button w3-block w3-black w3-margin-bottom">Choose Room</button>
      </div>
      </div>
    </>
  )
}


