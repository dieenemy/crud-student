import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Classes from './containers/Classes/Classes';
import Students from './containers/Students/Students';
import Subjects from './containers/Subjects/Subjects';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
     <Switch>
       <Route exact path="/" component={Students} />
       <Route  path="/classes" component={Classes} />
       <Route  path="/subjects" component={Subjects} />
     </Switch>
     <Footer />
    </div>
  );
}

export default App;
