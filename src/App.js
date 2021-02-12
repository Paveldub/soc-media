import './App.css';
import { Header } from './Header/header'
import { Navigation } from './nav/nav'
import {MainContent} from './MainContent/MainContent'
import './index.css';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <MainContent />
    </div>
  );
}

export default App;
