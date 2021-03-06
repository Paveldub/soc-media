import './App.css';

import { Header } from './Components/Header/header'
import { Navigation } from './Components/nav/nav'
import { ProfileContainer } from './Components/Profile/ProfileContainer';
import { Music } from './Components/Music/Music'
import { News } from './Components/News/News'
import { Settings } from './Components/Settings-comp/Settings'
import { DialogsContainer } from './Components/Dialogs/DialogsContainer';

import { UsersContainer } from './Components/Users/UsersContainer';

import { Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <div className="app-wrapper-content" style={{ background: 'pink' }}>
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile" render={() => <ProfileContainer />} />

        <Route path="/users" component={() => <UsersContainer />} />

        <Route path="/music" component={Music} />
        <Route path="/news" component={News} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;