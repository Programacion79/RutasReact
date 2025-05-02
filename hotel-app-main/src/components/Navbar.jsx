import { NavLink, NavLinkLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* <!-- Navigation Bar --> */}
      <div className="w3-bar w3-white w3-large">
        <NavLink to="/" className="w3-bar-item w3-button w3-red w3-mobile">
          <i className="fa fa-bed w3-margin-right"></i>Logo
        </NavLink>
        <NavLink to="/rooms" className="w3-bar-item w3-button w3-mobile">
          Rooms
        </NavLink>
        <NavLink to="/about" className="w3-bar-item w3-button w3-mobile">
          About
        </NavLink>
        <NavLink to="/contact" className="w3-bar-item w3-button w3-mobile">
          Contact
        </NavLink>
        <NavLink
          to="/contact"
          className="w3-bar-item w3-button w3-right w3-light-grey w3-mobile"
        >
          Book Now
        </NavLink>
      </div>
    </>
  );
}
