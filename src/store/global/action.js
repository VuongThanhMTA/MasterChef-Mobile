import {createAction} from "redux-actions";
import {UserCase} from "@gl/constant";


export const global_NAVIGATE_TO_ROUTE = (routeNames, params = {}, options = {}) => createAction(UserCase.Global.navigate)({ routeNames, params, options });

export const global_GO_BACK = createAction(UserCase.Global.goBack);