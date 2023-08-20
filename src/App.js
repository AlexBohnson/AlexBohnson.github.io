import './App.css';
import './ProjectGrid.css';
import ProjectGrid from './ProjectGrid.jsx';

function App() {
  return (
    <div className="App">
      <Body />
    </div>
  );
}

function Body() {
  return (
    <div className="Body">
      <Name />
      <Quote1 />
      <Quote2 />
      <ProjectsLink />
      <ProjectGrid />
    </div>
  );
}



function ProjectsLink() {
  return (
    <div className="ProjectLinkAnchor">

      My Projects
    </div>
  );
}

function Name() {
  return (
  <div className="Name">Alex Bohnson</div>
  );
}

function Quote1() {
  return (
    <div className="Quote1"><i>"He's a Wizard of coding" - No one</i></div>
  );
}

function Quote2() {
  return (
    <div className="Quote2"><i>"That looks alright" - Most of my professors</i></div>
  );
}

// Don't need yet...
// function BottomChevron() {
//   return (
//     <div className="BottomChevron">
//       ^<br></br>
//     </div>
//   )
// }



export default App;
