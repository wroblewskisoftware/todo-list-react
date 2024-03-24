import { useLocation, useHistory } from "react-router-dom";
import { StyledInput } from "../../Input";
import { StyledDiv } from "./styled";

const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get("szukaj");

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("szukaj");
    } else {
      searchParams.set("szukaj", target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

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
