import React, { Component } from "react";
import { usePromiseTracker } from "react-promise-tracker";

const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress && <h1>Hey some async call in progress ! </h1>;
};

export default LoadingIndicator;