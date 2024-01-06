import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import InventoryList from "./components/InventoryList.jsx";
import Login from "./components/Login.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [deviceId, setDeviceId] = useState(null);

  const handleLogin = (id) => {
    setDeviceId(id);
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const cachedDeviceId = localStorage.getItem("deviceId");
    if (cachedDeviceId) {
      setDeviceId(cachedDeviceId);
      handleLogin(cachedDeviceId);
    }
  }, [handleLogin]);

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <Header />
          <InventoryList device_Id={deviceId} />
        </div>
      )}
    </div>
  );
}

export default App;
