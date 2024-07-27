import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState<string>("");

  const updateName = () => {
    setName("Spongebob");
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
    </div>
  );
}

export default MyComponent;
