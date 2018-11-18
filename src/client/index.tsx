import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.scss';

import {App} from "./view/app";

ReactDOM.hydrate(
    <App/>, document.getElementById("root")
);