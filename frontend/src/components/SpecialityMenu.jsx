import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      style={{
        backgroundColor: "#4a90e2",
        padding: "40px 0",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1
        style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}
      >
        Find by Speciality
      </h1>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          padding: "10px 0",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            onClick={() => window.scrollTo(0, 0)}
            style={{
              flexShrink: 0,
              textDecoration: "none",
              color: "white",
              width: "100px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={item.image}
              alt={item.speciality}
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                border: "2px solid white",
                marginBottom: "8px",
                objectFit: "cover",
              }}
            />
            <p style={{ fontSize: "14px", fontWeight: "500" }}>
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
