import React from "react";

const Tips = () => {
  const tips = [
    "Schedule a vet visit within the first week of adoption.",
    "Give your new pet a quiet, safe corner to decompress.",
    "Use positive reinforcement instead of punishment.",
    "Microchip and ID-tag your pet for safety.",
    "Introduce new pets to children and other animals slowly.",
  ];

  return (
    <div>
      <div className="card" style={{ marginBottom: 12 }}>
        <h2>Adoption & safety tips 📝</h2>
        <p style={{ fontSize: 13, marginTop: 4 }}>
          A few gentle reminders to make the transition comfy for both you and
          your new friend.
        </p>
      </div>

      <div className="card">
        <ul style={{ paddingLeft: 14 }}>
          {tips.map((tip, index) => (
            <li key={index} style={{ marginBottom: 8, fontSize: 13 }}>
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tips;
