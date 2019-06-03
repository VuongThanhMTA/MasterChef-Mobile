import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { UserCase } from "@gl/constant";

const defaultState = {
  // Toast state
  toast: {
    visible: false,
    content: null,
  }
};

export const reducer = handleActions({
  [UserCase.Global.updateState]: (state, { payload }) =>
    fromJS(state)
      .mergeDeep(payload)
      .toJS(),
}, defaultState);

export default reducer;
