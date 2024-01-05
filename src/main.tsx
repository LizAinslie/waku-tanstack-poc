import { hydrateRoot } from 'react-dom/client';
import { createRouter } from "./router.js";
import { StartClient } from "./lib/router-client.js";

const router = createRouter();
router.hydrate();

const rootElement = (
  <StartClient router={router} />
);

hydrateRoot(document.getElementById('root')!, rootElement);
