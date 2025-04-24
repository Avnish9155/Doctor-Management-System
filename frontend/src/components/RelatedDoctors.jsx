import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDocs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors && speciality && docId) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDocs(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div>
      {relDoc.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Related Doctors
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            {relDoc.map((doc) => (
              <div
                key={doc._id}
                onClick={() => navigate(`/appointment/${doc._id}`)}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "10px",
                  width: "250px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "4px",
                    marginBottom: "8px",
                  }}
                />
                <p style={{ fontWeight: "600", marginBottom: "4px" }}>
                  {doc.name}
                </p>
                <p style={{ fontSize: "14px", color: "#555" }}>
                  {doc.speciality}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RelatedDoctors;
