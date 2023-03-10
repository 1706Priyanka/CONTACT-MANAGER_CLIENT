import React from "react";
import "./side.css";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="side-bar">
        <div className="sideBar-container">
          <div className="sideBar-heading">
            <h1>Logo</h1>
          </div>
          <div className="dashboard">
            <img src="Images/Dashboard.png" alt="dashboard" />
            <p>Dashboard</p>
          </div>
          <div className="total-contacts">
            <svg
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4ZM18 18H2V6H18V18ZM2 0H18V2H2V0ZM2 22H18V24H2V22ZM10 12C11.38 12 12.5 10.88 12.5 9.5C12.5 8.12 11.38 7 10 7C8.62 7 7.5 8.12 7.5 9.5C7.5 10.88 8.62 12 10 12ZM10 8.5C10.55 8.5 11 8.95 11 9.5C11 10.05 10.55 10.5 10 10.5C9.45 10.5 9 10.05 9 9.5C9 8.95 9.45 8.5 10 8.5ZM15 15.99C15 13.9 11.69 13 10 13C8.31 13 5 13.9 5 15.99V17H15V15.99ZM6.81 15.5C7.42 14.98 8.84 14.5 10 14.5C11.17 14.5 12.59 14.98 13.2 15.5H6.81Z"
                fill="white"
              />
            </svg>
            <p>Total contacts</p>
          </div>
        </div>
        <div className="logout-container">
          <img src="Images/logout.svg" alt="logout" />
          <p
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("email");
              navigate("/");
              window.alert("Logged Out Successfully");
              document.location.reload();
            }}
          >
            Log Out
          </p>
        </div>
      </div>
    </main>
  );
};

export default SideBar;
