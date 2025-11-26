import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const PetProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // later we’ll fetch real pet by id from backend
  const pet = {
    id,
    name: "Bella",
    breed: "Golden Retriever",
    age: "2 years",
    vaccinated: true,
    description: "Soft-hearted, playful, great with kids.",
    photo:
      "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=800",
  };

  return (
    <div>
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <img
          src={pet.photo}
          alt={pet.name}
          style={{ width: "100%", height: 220, objectFit: "cover" }}
        />
      </div>

      <div className="card">
        <h2>{pet.name}</h2>
        <p style={{ fontSize: 13, marginTop: 4 }}>{pet.breed}</p>

        <div style={{ marginTop: 8, fontSize: 13 }}>
          <p>Age: {pet.age}</p>
          <p>Vaccination: {pet.vaccinated ? "Up to date ✅" : "Unknown"}</p>
        </div>

        <p style={{ fontSize: 13, marginTop: 12 }}>{pet.description}</p>

        <div style={{ marginTop: 16 }}>
          <button
            className="btn-primary"
            onClick={() => navigate(`/chat/${pet.id}`)}
          >
            Contact Owner
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetProfile;
