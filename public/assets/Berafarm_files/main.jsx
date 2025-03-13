import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=610a0e84"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=610a0e84"; const StrictMode = __vite__cjsImport1_react["StrictMode"];
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=610a0e84"; const createRoot = __vite__cjsImport2_reactDom_client["createRoot"];
import { BrowserRouter } from "/node_modules/.vite/deps/react-router-dom.js?v=610a0e84";
import "/node_modules/@rainbow-me/rainbowkit/dist/index.css";
import {
  getDefaultConfig,
  RainbowKitProvider
} from "/node_modules/.vite/deps/@rainbow-me_rainbowkit.js?v=610a0e84";
import { WagmiProvider } from "/node_modules/.vite/deps/wagmi.js?v=610a0e84";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  berachain
} from "/node_modules/.vite/deps/wagmi_chains.js?v=610a0e84";
import {
  QueryClientProvider,
  QueryClient
} from "/node_modules/.vite/deps/@tanstack_react-query.js?v=610a0e84";
const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "ac5e9ce9bb7785570db551f7abfde48a",
  chains: [berachain],
  //mainnet
  ssr: true
  // If your dApp uses server side rendering (SSR)
});
import "/src/index.css?t=1741800740419";
import App from "/src/App.jsx?t=1741800740419";
import "/src/styles/global.css?t=1741800740419";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(StrictMode, { children: /* @__PURE__ */ jsxDEV(WagmiProvider, { config, children: /* @__PURE__ */ jsxDEV(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxDEV(RainbowKitProvider, { children: /* @__PURE__ */ jsxDEV(BrowserRouter, { children: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
    fileName: "/Users/dbrothers/projects/Tushar/Berfarm-UI/src/main.jsx",
    lineNumber: 39,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "/Users/dbrothers/projects/Tushar/Berfarm-UI/src/main.jsx",
    lineNumber: 38,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "/Users/dbrothers/projects/Tushar/Berfarm-UI/src/main.jsx",
    lineNumber: 37,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/Users/dbrothers/projects/Tushar/Berfarm-UI/src/main.jsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/dbrothers/projects/Tushar/Berfarm-UI/src/main.jsx",
    lineNumber: 35,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "/Users/dbrothers/projects/Tushar/Berfarm-UI/src/main.jsx",
    lineNumber: 34,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBc0NZO0FBdENaLFNBQVNBLGtCQUFrQjtBQUMzQixTQUFTQyxrQkFBa0I7QUFDM0IsU0FBU0MscUJBQXFCO0FBQzlCLE9BQU87QUFDUDtBQUFBLEVBQ0VDO0FBQUFBLEVBQ0FDO0FBQUFBLE9BQ0s7QUFDUCxTQUFTQyxxQkFBcUI7QUFDOUI7QUFBQSxFQUNFQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxPQUNLO0FBQ1A7QUFBQSxFQUNFQztBQUFBQSxFQUNBQztBQUFBQSxPQUNLO0FBQ1AsTUFBTUMsU0FBU1gsaUJBQWlCO0FBQUEsRUFDOUJZLFNBQVM7QUFBQSxFQUNUQyxXQUFXO0FBQUEsRUFDWEMsUUFBUSxDQUFDTixTQUFTO0FBQUE7QUFBQSxFQUNsQk8sS0FBSztBQUFBO0FBQ1AsQ0FBQztBQUNELE9BQU87QUFDUCxPQUFPQyxTQUFTO0FBQ2hCLE9BQU87QUFDUCxNQUFNQyxjQUFjLElBQUlQLFlBQVk7QUFFcENaLFdBQVdvQixTQUFTQyxlQUFlLE1BQU0sQ0FBQyxFQUFFQztBQUFBQSxFQUMxQyx1QkFBQyxjQUNDLGlDQUFDLGlCQUFjLFFBQ2IsaUNBQUMsdUJBQW9CLFFBQVFILGFBQzNCLGlDQUFDLHNCQUNDLGlDQUFDLGlCQUNDLGlDQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJLEtBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBLEtBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUlBLEtBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU1BLEtBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVFBLEtBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVVBO0FBQ0YiLCJuYW1lcyI6WyJTdHJpY3RNb2RlIiwiY3JlYXRlUm9vdCIsIkJyb3dzZXJSb3V0ZXIiLCJnZXREZWZhdWx0Q29uZmlnIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiV2FnbWlQcm92aWRlciIsIm1haW5uZXQiLCJwb2x5Z29uIiwib3B0aW1pc20iLCJhcmJpdHJ1bSIsImJhc2UiLCJiZXJhY2hhaW4iLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiUXVlcnlDbGllbnQiLCJjb25maWciLCJhcHBOYW1lIiwicHJvamVjdElkIiwiY2hhaW5zIiwic3NyIiwiQXBwIiwicXVlcnlDbGllbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmljdE1vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50J1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nOyAvLyBJbXBvcnQgQnJvd3NlclJvdXRlclxuaW1wb3J0ICdAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3MnO1xuaW1wb3J0IHtcbiAgZ2V0RGVmYXVsdENvbmZpZyxcbiAgUmFpbmJvd0tpdFByb3ZpZGVyLFxufSBmcm9tICdAcmFpbmJvdy1tZS9yYWluYm93a2l0JztcbmltcG9ydCB7IFdhZ21pUHJvdmlkZXIgfSBmcm9tICd3YWdtaSc7XG5pbXBvcnQge1xuICBtYWlubmV0LFxuICBwb2x5Z29uLFxuICBvcHRpbWlzbSxcbiAgYXJiaXRydW0sXG4gIGJhc2UsXG4gIGJlcmFjaGFpblxufSBmcm9tICd3YWdtaS9jaGFpbnMnO1xuaW1wb3J0IHtcbiAgUXVlcnlDbGllbnRQcm92aWRlcixcbiAgUXVlcnlDbGllbnQsXG59IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmNvbnN0IGNvbmZpZyA9IGdldERlZmF1bHRDb25maWcoe1xuICBhcHBOYW1lOiAnTXkgUmFpbmJvd0tpdCBBcHAnLFxuICBwcm9qZWN0SWQ6ICdhYzVlOWNlOWJiNzc4NTU3MGRiNTUxZjdhYmZkZTQ4YScsXG4gIGNoYWluczogW2JlcmFjaGFpbl0sLy9tYWlubmV0XG4gIHNzcjogdHJ1ZSwgLy8gSWYgeW91ciBkQXBwIHVzZXMgc2VydmVyIHNpZGUgcmVuZGVyaW5nIChTU1IpXG59KVxuaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAuanN4J1xuaW1wb3J0IFwiLi9zdHlsZXMvZ2xvYmFsLmNzc1wiXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpLnJlbmRlcihcbiAgPFN0cmljdE1vZGU+XG4gICAgPFdhZ21pUHJvdmlkZXIgY29uZmlnPXtjb25maWd9PlxuICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgIDxSYWluYm93S2l0UHJvdmlkZXI+XG4gICAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cbiAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgICA8L1dhZ21pUHJvdmlkZXI+XG4gIDwvU3RyaWN0TW9kZT4sXG4pXG4iXSwiZmlsZSI6Ii9Vc2Vycy9kYnJvdGhlcnMvcHJvamVjdHMvVHVzaGFyL0JlcmZhcm0tVUkvc3JjL21haW4uanN4In0=