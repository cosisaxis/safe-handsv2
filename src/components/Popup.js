import React, { useState } from "react";

const Popup = () => {
  const [website, setWebsite] = useState("");
  const [blockedWebsites, setBlockedWebsites] = useState([]);

  const handleChange = event => {
    setWebsite(event.target.value);
  };

  const handleAddWebsite = () => {
    setBlockedWebsites(prevBlockedWebsites => [...prevBlockedWebsites, website]);
    setWebsite("");
  };

  return (
    <div>
      <h1>Restricted Websites</h1>
      <input type="text" value={website} onChange={handleChange} />
      <button onClick={handleAddWebsite}>Add Website</button>
      <ul>
        {blockedWebsites.map((site, index) => (
          <li key={index}>{site}</li>
        ))}
      </ul>
    </div>
  );
};

export default Popup;
