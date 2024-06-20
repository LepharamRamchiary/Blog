import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

// const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const clientId = "393050996180-qie6tod23it1n3jqbajiitkp11670s69.apps.googleusercontent.com";

export function GoogleLoginButton({ onSuccess, onFailure }) {
  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Continue with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
  );
}

export function GoogleLogoutButton({ onLogoutSuccess }) {
  return (
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onLogoutSuccess}
    />
  );
}
