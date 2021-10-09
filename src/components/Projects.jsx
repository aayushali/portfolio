import React from "react";
import "./About.scss";
import { useState, useEffect } from "react";
export const Projects = () => {
  const [response, setResponse] = useState([]);
  const userName = "aayushali";
  const githubClientId = "4392e799b1a0b0c3eca0";
  const gitClientSecret = "31cf2b7ee1ed625502e3e5a5563e9cb86a4f67f6";
  const fetchData = async () => {
    const response = await fetch(
      `https://api.github.com/users/${userName}/repos?per_page=9&sort=created:asc&client_id=${githubClientId}&client_secret=${gitClientSecret}`
    );
    const data = await response.json();
    setResponse(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <section className="projects">
        <div>
          <h1>Projects</h1>
        </div>
        <div className="project-cards">
          {response && response?.length > 0
            ? response?.map((res) => (
                <div className="project-card" key={res?.id}>
                  <img
                    src="/images/elon-musk.jpg"
                    alt=""
                    height="200"
                    width="100%"
                  />
                  <h3>{res?.name}</h3>
                  <p>{res?.description}</p>
                </div>
              ))
            : ""}
        </div>
      </section>
    </div>
  );
};
