import React from "react";
import { render } from "react-dom";
import ImageList from "./containers/imageList";
import Search from "./containers/Search";
import "./App.css";

export const App = () => {
  return (
    <div>
      App
      <Search />
      <ImageList />
    </div>
  );
};
