import React, { useState } from "react";
import axios from "axios";

export const API_ENDPOINT =
  "https://kev1n27.pythonanywhere.com/cuisinventory/login";

export default function Login({ onLogin }) {
  const [deviceId, setDeviceId] = useState("");
  const [hasFailedLogin, setHasFailedLogin] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    axios
      .post(API_ENDPOINT, { device_id: deviceId })
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem("deviceId", deviceId);
          onLogin(deviceId);
        } else {
          setHasFailedLogin(true);
        }
      })
      .catch((error) => {
        setHasFailedLogin(true);
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Cuisinventory</h1>
          <p className="py-6">
            Log in with your device ID and inspect your kitchen inventory!
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Device ID</span>
              </label>
              <input
                type="Enter your device ID"
                placeholder="device id"
                value={deviceId}
                onChange={(e) => setDeviceId(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            {hasFailedLogin && (
              <div role="alert" className="alert alert-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Invalid Device ID!</span>
              </div>
            )}
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                type="input"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
