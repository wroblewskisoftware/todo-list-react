// import { useLocation, useHistory } from "react-router-dom";
import { StyledInput } from "../../Input";
import { StyledDiv } from "./styled";
import searchQueryParamName from "../searchQueryParamName";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../queryParameters";

const Search = () => {
  // const location = useLocation();
  // const history = useHistory();
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };
  //   const searchParams = new URLSearchParams(location.search);

  //   if (target.value.trim() === "") {
  //     searchParams.delete(searchQueryParamName);
  //   } else {
  //     searchParams.set(searchQueryParamName, target.value);
  //   }

  //   history.push(`${location.pathname}?${searchParams.toString()}`);
  // };

  return (
    <StyledDiv>
      <StyledInput
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </StyledDiv>
  );
};

export default Search;
