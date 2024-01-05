import { type FC } from 'react';

import { StartServer } from '../lib/router-server.js';
import { createRouter } from '../router.js';

const router = createRouter();

const App: FC = () => {
  return (
    <StartServer router={router} />
  );
};

export default App;
