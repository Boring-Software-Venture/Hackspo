import React from "react";
import { Route, Switch } from "react-router-dom";

import { Homepage } from "./pages/homepage/homepage.component";

import { ThemeContextProvider } from "./contexts/theme.context";
import { CountDownContextProvider } from "./contexts/countdown.context";
import { DimensionContextProvider } from "./contexts/dimensions.context";

import "./App.scss";

const App = () => {
  return (
    <ThemeContextProvider>
      <DimensionContextProvider>
        <CountDownContextProvider>
          <Switch>
            <Route path="/" component={Homepage} />
          </Switch>
        </CountDownContextProvider>
      </DimensionContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
