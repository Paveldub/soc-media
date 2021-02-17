import './App.css';
import { Header } from './Header/header'
import { Navigation } from './nav/nav'
import { Dialogs } from './Dialogs/Dialogs'
import { Profile } from './Profile/Profile'
import { Music } from './Music/Music'
import { News } from './News/News'
import {Settings} from './Settings-comp/Settings'
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navigation />
        <div className='app-wrapper-content'>
          <Route path="/dialogs" render={() => <Dialogs messages={props.messages} dialogs={props.dialogs}/>}/> 
          <Route path="/maincontent" render={() => <Profile posts={props.posts} />} /> 
          <Route path="/music" component={ Music } />
          <Route path="/news" component={News} />
          <Route path="/settings" component={ Settings } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
