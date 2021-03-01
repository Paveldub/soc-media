import './App.css';

import { Header } from './Components/Header/header'
import { Navigation } from './Components/nav/nav'
import { Profile } from './Components/Profile/Profile'
import { Music } from './Components/Music/Music'
import { News } from './Components/News/News'
import { Settings } from './Components/Settings-comp/Settings'
import { DialogsContainer } from './Components/Dialogs/DialogsContainer';

import { Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <div className='app-wrapper-content'>
        <Route path="/dialogs"
          render={() => <DialogsContainer />} /> 
        <Route path="/profile"
          render={() => <Profile />} />
        <Route path="/music" component={ Music } />
        <Route path="/news" component={ News } />
        <Route path="/settings" component={ Settings } />
      </div>
    </div>
  );
}

export default App;