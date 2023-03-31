import './App.css';
import {Route} from "react-router-dom";
import landingPage from "./pages/LandingPage";
import teacher from "./component/dashboard/teacher"
import student from "./component/dashboard/Student"

function App() {
  return (
    <div className="App">
      <Route path = "/" component = {landingPage} exact/>
      <switch>
        <Route path = "/teacher" component = {teacher} exact/>
        <Route path = "/student" component = {student} exact/>
      </switch>
  </div>
  );
}

export default App;
