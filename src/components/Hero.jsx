import React from "react";
import "./Hero.scss";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { useState, useEffect } from "react";
export const Hero = () => {
  const [response, setResponse] = useState();
  const userName = "aayushali";
  const githubClientId = "4392e799b1a0b0c3eca0";
  const gitClientSecret = "31cf2b7ee1ed625502e3e5a5563e9cb86a4f67f6";
  const fetchData = async () => {
    const response = await fetch(
      `https://api.github.com/users/${userName}?client_id=${githubClientId}&client_secret=${gitClientSecret}`
    );
    const data = await response.json();
    setResponse(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="header">
      <div className="card">
        <div className="image">
          <div className="image-div">
            <img
              src={response?.avatar_url}
              alt="profile"
              height="200"
              width="200"
            />
          </div>
          <h1>{response?.name}</h1>
          <p>{response?.bio}</p>
          <div className="icons">
            <span>
              {" "}
              <SiFacebook size={36} />
            </span>
            <span>
              <SiInstagram size={36} />
            </span>
            <span>
              {" "}
              <SiLinkedin size={36} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
