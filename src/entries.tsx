import { defineEntries } from 'waku/server';
import { StartServer } from "./lib/router-server.js";
import * as React from "react";
import { createRouter } from './router.js';

const router = createRouter();

export default defineEntries(
  // renderEntries
  async (input) => {
    return {
      App: <StartServer router={router} />,
    };
  },
  // getBuildConfig
  async () => {
    return {
      '/': {
        entries: [['']],
      },
    };
  },
  // getSsrConfig
  async (pathStr) => {
    const { pathname } = new URL(pathStr, 'http://localhost');
    switch (pathname) {
      case '/':
        return {
          input: '',
          unstable_render: ({ createElement, Slot }) =>
            createElement(Slot, { id: 'App' }),
        };
      default:
        return null;
    }
  },
);
