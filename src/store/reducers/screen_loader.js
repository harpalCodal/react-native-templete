import {SCREEN_LOADER_START, SCREEN_LOADER_FINISH} from '../constants';

const initialState = {
  screenLoaderCount: 0,
};

const sreenLoader = (state = initialState, action) => {
  switch (action.type) {
    case SCREEN_LOADER_START:
      return {
        screenLoaderCount: state.screenLoaderCount + 1,
      };
    case SCREEN_LOADER_FINISH:
      console.log('page loader finish', state);
      return {
        screenLoaderCount: state.screenLoaderCount - 1,
      };
    default:
      return state;
  }
};

export default sreenLoader;
