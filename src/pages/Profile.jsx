import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // later: load real user data from backend / Telegram
  const user = {
    name: "Nasiba",
    photoUrl:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
    listedPets: ["Bella", "Luna"],
    preferences: ["Dogs", "Indoor cats", "Rescue pets"],
  };

  return (
    <div>
      <div className="card" style={{ textAlign: "center" }}>
        <img
          src={user.photoUrl}
          alt={user.name}
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: 8,
          }}
        />
        <h2>{user.name}</h2>
        <p style={{ fontSize: 13, marginTop: 4 }}>Pet lover & future adopter</p>

        <div style={{ marginTop: 12 }}>
          {user.preferences.map((pref) => (
            <span key={pref} className="pill">
              {pref}
            </span>
          ))}
        </div>

        <button
          className="btn-secondary"
          style={{ marginTop: 16 }}
          onClick={() => navigate("/story")}
        >
          View adoption stories
        </button>
      </div>

      <div className="card">
        <h3 style={{ fontSize: 14, marginBottom: 8 }}>My listed pets</h3>
        {user.listedPets.length === 0 ? (
          <p style={{ fontSize: 13 }}>You haven’t listed any pets yet.</p>
        ) : (
          <ul style={{ paddingLeft: 14 }}>
            {user.listedPets.map((name) => (
              <li key={name} style={{ marginBottom: 6, fontSize: 13 }}>
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Profile;
