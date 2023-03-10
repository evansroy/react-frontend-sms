import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListStudentComponent from "./components/ListStudentComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
        <div className="container">
          <ListStudentComponent />
        </div>
      <FooterComponent />
    </div>
  );
}

export default App;
