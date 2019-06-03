import { UserCase } from "@gl/constant";
import {
  map,
  withLatestFrom,
} from 'rxjs/operators';
import { empty } from 'rxjs';
import { ofType } from "redux-observable";
import { isEmpty } from 'lodash';

import { NavigationActions, StackActions } from 'react-navigation';

export const navigate = action$ =>
  action$.pipe(
    ofType(UserCase.Global.navigate),
    map(action => action.payload),
    map(({ routeNames, params, options }) => {
      const { reset } = options;
      const navigateAction = NavigationActions.navigate({
        routeName: routeNames[0],
        params,
      });

      let currentParentNavigationAction = navigateAction;
      for (let idx = 1; idx <= routeNames.length; idx++) {
        const nestedNavigationAction = NavigationActions.navigate({
          routeName: routeNames[idx],
          params,
        });
        currentParentNavigationAction.action = nestedNavigationAction;
        currentParentNavigationAction = nestedNavigationAction;
      }

      if (reset) {
        return StackActions.reset({
          index: 0,
          actions: [
            navigateAction,
          ],
        });
      } else {
        return navigateAction;
      }
    })
  );

export const goBack = (action$, state$) =>
  action$.pipe(
    ofType(UserCase.Global.goBack),
    map(action => action.payload),
    withLatestFrom(state$.pipe(
      map(state => state.nav.routes)
    )),
    // Pass n times to go back as action payload
    map(([n, routes]) => {
      if (isEmpty(routes) || n >= routes.length) {
        return empty();
      }
      if (!n || n === 1) {
        return NavigationActions.back({});
      } else {
        return StackActions.pop({ n });
      }
    })
  );