import React from "react";
import { useNavigate } from "react-router-dom";

const dummyPets = [
  {
    id: "1",
    name: "Bella",
    breed: "Golden Retriever",
    description: "Gentle cuddle buddy who loves walks.",
    photo:
      "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "2",
    name: "Luna",
    breed: "Tabby Cat",
    description: "Independent but loves warm laps.",
    photo:
      "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "3",
    name: "Mochi",
    breed: "Mini Lop Rabbit",
    description: "Soft fluffball who adores snacks.",
    photo:
      "https://images.pexels.com/photos/4588453/pexels-photo-4588453.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "4",
    name: "Sky",
    breed: "Parakeet",
    description: "Chatty little bird with bright feathers.",
    photo:
      "https://images.pexels.com/photos/45851/bird-parrot-blue-macaw-45851.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="card" style={{ marginBottom: 12 }}>
        <h2>Find your next best friend 🐶🐱🐰🐦</h2>
        <p style={{ fontSize: 12, marginTop: 4 }}>
          Browse pets ready for adoption. Tap “Save” to add to favorites or
          “Contact” to reach the owner.
        </p>
      </div>

      {/* DEBUG TEXT: if you see this, Home is rendering */}
      <p style={{ fontSize: 12, marginBottom: 8 }}>
        (If you can read this text, the Home component is working.)
      </p>

      <div className="pet-grid">
        {dummyPets.map((pet) => (
          <div className="pet-card" key={pet.id}>
            <img src={pet.photo} alt={pet.name} className="pet-photo" />
            <div>
              <div className="pet-name">{pet.name}</div>
              <div className="pet-breed">{pet.breed}</div>
              <div className="pet-desc">{pet.description}</div>

              <div className="pet-actions">
                <button
                  className="btn-small btn-save"
                  onClick={() => alert("TODO: Save to favorites")}
                >
                  🤍 Save
                </button>
                <button
                  className="btn-small btn-contact"
                  onClick={() => navigate(`/pets/${pet.id}`)}
                >
                  📩 Contact
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
