import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import { compilerOptions } from './tsconfig.json';

const alias = Object.entries(compilerOptions.paths).reduce((acc, [key, [value]]) => {
  const aliasKey = key.substring(0, key.length - 2);
  const path = value.substring(0, value.length - 2);
  return {
    ...acc,
    [aliasKey]: resolve(__dirname, path),
  };
}, {});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), svgr()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  resolve: {
    alias,
  },
});
