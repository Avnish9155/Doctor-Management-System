import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div style={{ margin: "40px 20px", textAlign: "center", color: "#333" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>Doctor List</h1>
      <p style={{ maxWidth: "600px", margin: "10px auto", fontSize: "16px" }}>
        These are the top doctors in the area based on reviews.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {Array.isArray(doctors) && doctors.length > 0 ? (
          doctors.slice(0, 10).map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              style={{
                width: "220px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                overflow: "hidden",
                cursor: "pointer",
                backgroundColor: "#f9f9f9",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "10px", textAlign: "left" }}>
                <p
                  style={{
                    fontSize: "14px",
                    color: "green",
                    marginBottom: "4px",
                  }}
                >
                  ● Available
                </p>
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    marginBottom: "4px",
                  }}
                >
                  {item.name}
                </p>
                <p style={{ fontSize: "14px", color: "#555" }}>
                  {item.speciality}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "#888" }}>No doctors available.</p>
        )}
      </div>

      <button
        onClick={() => {
          navigate("/doctors");
          window.scrollTo(0, 0);
        }}
        style={{
          marginTop: "40px",
          backgroundColor: "#1976d2",
          color: "white",
          padding: "10px 30px",
          borderRadius: "5px",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        More
      </button>
    </div>
  );
};

export default TopDoctors;
