import React from 'react';
import { Container } from '../Container';

const clientId = '5d5704c3bac741ccaea0d06b0592873b';
const scope =
  'streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=http://localhost:3000&scope=${scope}`;

const Login: React.FC = () => {
  return (
    <Container>
      <a href={AUTH_URL}>Login with spotify</a>
    </Container>
  );
};

export default Login;
