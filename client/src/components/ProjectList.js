import { useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";


function ProjectList() {
  let history = useHistory();
  // const checkLogin = useSelector((state) => state.googleLogin);

  const projects = [
    {
      id: Math.floor(Math.random() * 1000),
      name: "Sample Project 1",
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Sample Project 2",
    },
  ];
  // useEffect(() => {
  //   if (!checkLogin?.googleId) {
  //     history.push("/login");
  //   } else {
  //     history.push("/projects");
  //   }
  // }, []);

  const viewProject = (id, name) => {
    let slug = name
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

    history.push(`/projects/${slug}`);
  };

  return (
    <div className="container" id="projects">
      <div className="d-flex align-items-center justify-content-between mt-4">
        <h1 className="my-4">Project List</h1>
        <button className="btn btn-primary px-4">Create New</button>
      </div>
      <hr className="mt-4" />

      {projects.map((project) => {
        return (
          <div className="project_card" key={project.id}>
            <h3>{project?.name}</h3>
            <button
              className="btn-view"
              onClick={() => viewProject(project.id, project.name)}
            >
              View Project
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectList;
