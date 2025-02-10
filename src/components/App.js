import React, {Component, useState} from "react";
import '../styles/App.css';

let projectDetail = [
  {name: 'Project 1', description: 'This is project 1'},
  {name: 'Project 2', description: 'This is project 2'},
  {name: 'Project 3', description: 'This is project 3'},
]

const App = () => {
  return (
    <div id="main" className="ns-wrapper">
      {projectDetail.map((project) => {
      return (
        <div>
        <h1 data-ns-test={project.name}>{project.name}</h1>
        <h6 data-ns-test={project.description}>{project.description}</h6>
        </div>
      )
        
      })}
    </div>
  )
}


export default App;
