import React, { useState } from 'react';

import Container from '../../components/Container';
import Login from '../../components/Login';

const Home: React.FC = () => {
  const [name] = useState('world');
  return (
    <Container>
      <h1>Hello, {name}!</h1>
      <p>
        You can change this text on <code>src/pages/home/index.tsx</code>, save
        and preview here!
      </p>
      <Login />
    </Container>
  );
};

export default Home;
