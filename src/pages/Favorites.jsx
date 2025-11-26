import React from "react";

const Favorites = () => {
  return (
    <div>
      <div className="card" style={{ marginBottom: 12 }}>
        <h2>Saved pets 💗</h2>
        <p style={{ fontSize: 13, marginTop: 4 }}>
          Pets you’ve saved will live here so you can revisit them anytime.
        </p>
      </div>

      <div className="card" style={{ textAlign: "center" }}>
        <p style={{ fontSize: 13, marginBottom: 6 }}>
          You haven’t saved any pets yet.
        </p>
        <p style={{ fontSize: 12, color: "#8f8299" }}>
          Tap “Save” on a pet card to add it to your favorites.
        </p>
      </div>
    </div>
  );
};

export default Favorites;
