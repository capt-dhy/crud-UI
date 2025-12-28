import React, { useEffect, useState } from "react";

function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/projects/")
      .then((res) => res.json())
      .then((result) => {
        setProjects(result.data); // Access the 'data' property
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container-fluid mt-5 d-flex flex-wrap gap-5 ">
      {projects.map((project) => (
        <div key={project.id} className="card" style={{width: '18rem'}}>
          <img src="https://placehold.co/200" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">{project.description}</p>
            <p className="card-text">
              <small className="text-muted">{project.price}</small>
            </p>
            {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
