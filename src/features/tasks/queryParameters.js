import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = (searchQueryParamName) => {
  const location = useLocation();

  return new URLSearchParams(location.search).get(searchQueryParamName);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);

  return ({ key, value }) => {
    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
};
