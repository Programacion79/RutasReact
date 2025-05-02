// src/components/About.jsx
export default function AboutComponent() {
  return (
    <div className="w3-row-padding" id="about">
      <div className="w3-col l4 12">
        <h3>About</h3>
        <h6>Our hotel is one of a kind. It is truly amazing...</h6>
        <p>
          We accept: <i className="fa fa-credit-card w3-large"></i>{" "}
          <i className="fa fa-cc-mastercard w3-large"></i>{" "}
          <i className="fa fa-cc-amex w3-large"></i>{" "}
          <i className="fa fa-cc-visa w3-large"></i>{" "}
          <i className="fa fa-cc-paypal w3-large"></i>
        </p>
      </div>
      <div className="w3-col l8 12">
        <img
          src="https://www.w3schools.com/w3images/map.jpg"
          className="w3-image w3-greyscale"
          style={{ width: "100%" }}
          alt="Map"
        />
      </div>
    </div>
  );
}
