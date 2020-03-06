export const LOAD_NEWS = "LOAD_NEWS";
export const RENDER_NEWS = "RENDER_NEWS";

export function loadNews(headLines) {
  return {
    type: LOAD_NEWS,
    payload: headLines
  };
}
