import React from "react";

interface Props {}

export const Navbar: React.FC<Props> = () => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className="fa fa-id-card" /> Contact Keeper
      </h1>
      <ul>
        <li>
          <a href="https://abdulqudus.com" target="_blank" rel="noreferrer">
            About Me
          </a>
        </li>
      </ul>
    </div>
  );
};
