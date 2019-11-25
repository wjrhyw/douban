import { wjrtest_request } from '../services/wjrtest_request';
export default {
  namespace: 'wjrtest',
  state: {
    list: [],
  },
  reducers: {
    require(state, { value }) {
      var newState = JSON.parse(JSON.stringify(state));
      console.log('数组', value);
      newState.list = value.list;
      return newState;
    },
  },
  effects: {
    *onSearch({ value }, { call, put }) {
      var res = yield call(wjrtest_request, value);
      yield put({
        type: 'require',
        value: res.data,
      });
    },
  },
};
