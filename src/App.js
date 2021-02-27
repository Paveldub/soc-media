import './App.css';
import { Header } from './Components/Header/header'

import { Navigation } from './Components/nav/nav'

import { Dialogs } from './Components/Dialogs/Dialogs'
import { Profile } from './Components/Profile/Profile'
import { Music } from './Components/Music/Music'
import { News } from './Components/News/News'
import { Settings } from './Components/Settings-comp/Settings'

import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navigation state={props.state.friends}/>
        <div className='app-wrapper-content'>
          
          <Route path="/dialogs"
            render={() =>
              <Dialogs
                state={props.state.dialogsPage} 
                dispatch={props.dispatch}
                />} 
            /> 
          
          <Route path="/profile"
            render={() =>
              
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch} />} 
              />      
          
          <Route path="/music" component={ Music } />
          <Route path="/news" component={ News } />
          <Route path="/settings" component={ Settings } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
