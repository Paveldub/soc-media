import { HeaderContainer } from './Components/Header/headerContainer';
import { Navigation } from './Components/nav/nav';
import { ProfileContainer } from './Components/Profile/ProfileContainer';

import { DialogsContainer } from './Components/Dialogs/DialogsContainer';
import { UsersContainer } from './Components/Users/UsersContainer';
import { Sidebar } from './Components/common/sidebar/sidebar';
import { ModalPage } from './Components/Modal/modal';
import { DatepickerComponent } from './Components/Datepicker/datepicker';

import { Login } from './Components/Login/Login';

import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="wrapper">
      <HeaderContainer />
      <Navigation />
      <div className="app-wrapper-content" style={{ background: 'pink' }}>
        <Route path="/login" component={Login} />
        <Route exact path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/users" component={() => <UsersContainer />} />
        <Route path="/modalpage" component={ModalPage} />
        <Route path="/datepicker" component={DatepickerComponent} />
      </div>
      <Sidebar />
    </div>
  );
};

export default App;
