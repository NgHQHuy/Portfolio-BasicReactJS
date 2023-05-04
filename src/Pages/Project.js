import React from "react";
import "./Styles/Project.scss";

class Project extends React.Component {
  render() {
    return (
      <div className="project-content">
        <div className="project-content-title">PROJECTS</div>
        <span className="description">
          Choose the box below to see their content
        </span>
        <div className="line"></div>
        <div className="project-item-1">
          <div className="project-item-title">
            Flowershop management software
            <br />
            <span className="span-title">
              Desciption: CRUD functions, data storage, payment, invoicing,...
            </span>
          </div>
          <div className="project-item-content">
            <span className="span-content">Type: </span>Window application
            <br />
            <span className="span-content">Position: </span>Full
            <br />
            <span className="span-content">Role: </span>Ideas for software;
            building software interface; perform software operation and connect
            to the database
            <br />
            <span className="span-content">Teachnology: </span>C#, SQL, Visual
            Studio, Microsoft SQL Server
            <br />
            <span className="span-content">Source: </span>
            <a
              href="https://github.com/NgHQHuy/Subject-project_FlowershopManager_C-sharp.git"
              target="blank"
            >
              Link-github
            </a>
          </div>
        </div>
        <div className="line"></div>
        <div className="project-item-2">
          <div className="project-item-title">
            School protal and social network
            <br />
            <span className="span-title">
              Description: school portal website combined with some elements of
              social networks
            </span>
          </div>
          <div className="project-item-content">
            <span className="span-content">Type: </span>Website
            <br />
            <span className="span-content">Position: </span>Front-end
            <br />
            <span className="span-content">Role: </span>Ideas for website
            interface; Design and build website layouts, elements and effects.
            <br />
            <span className="span-content">Teachnology: </span>HTML, CSS,
            Bootstrap
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
