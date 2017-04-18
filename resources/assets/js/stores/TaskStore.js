import AppDispatcher from '../AppDispatcher';
import SampleApiActionTypes from '../constants/SampleApiActionTypes';
import { ReduceStore } from 'flux/utils';
import update from 'react-addons-update';
import 'babel-polyfill';

class TaskStore extends ReduceStore {
  
  getInitialState() {
    return {
      tasks: []
    };
  }


  reduce(state, action) {
    switch (action.type) {
      case SampleApiActionTypes.GET_TASKS_SUCCESS:
        return update(state, {
          tasks: {$set: action.payload.response}
        });
      /*
      case SampleApiActionTypes.POST_TASKS_SUCCESS:
        return update(state, {
          title: {$set: action.payload.response.permissions}
        });
      case SampleApiActionTypes.DELETE_TASKS_SUCCESS:
        return update(state, {
          title: {$set: action.payload.response.profile}
        });
      */
      default:
        return state;
    }
  }
}

export default new TaskStore(AppDispatcher);