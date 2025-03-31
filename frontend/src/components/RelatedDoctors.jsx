import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

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
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Related Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relDoc.map((doc) => (
              <div
                key={doc._id}
                onClick={() => navigate(`/appointment/${doc._id}`)}
                className="border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
              >
                <img src={doc.image} alt={doc.name} className="w-full h-32 object-cover rounded-md mb-2" />
                <p className="font-semibold">{doc.name}</p>
                <p className="text-sm text-gray-600">{doc.speciality}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RelatedDoctors;