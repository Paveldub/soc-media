import React from 'react';
import { Header } from './header';
import { connect } from 'react-redux';

import { logout } from '../../Redux/Reducers/auth-reducer';

import { setAuthUserData } from '../../Redux/Reducers/auth-reducer';

import { headerAuth } from '../../api/api';

export class HeaderContainer extends React.Component {
  componentDidMount() {
    headerAuth().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        this.props.setAuthUserData(id, login, email);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default HeaderContainer = connect(mapStateToProps, {
  setAuthUserData,
  logout,
})(HeaderContainer);
