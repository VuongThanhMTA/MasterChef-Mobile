//reducers
import globalReducer from './global/reducer';

import { createNavigationReducer } from "react-navigation-redux-helpers";
import Router from "../Router";

const navReducer = createNavigationReducer(Router);

export default {
    global:globalReducer,
    nav: navReducer,
};