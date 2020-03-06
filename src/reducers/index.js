import { RENDER_NEWS } from "../actions";

const initialState = {
  newsList: [],
  sourcesList: []
};

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case RENDER_NEWS:
      return {
        ...state,
        newsList: action.response.headLinesList.articles,
        sourcesList: action.response.sourcesList.sources
      };
    default:
      return state;
  }
}
