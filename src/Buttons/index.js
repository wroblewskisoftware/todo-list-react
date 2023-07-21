import { ButtonPanel, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <ButtonPanel>
      <Button onClick={toggleHideDone}>
        {hideDone === false ? "Ukryj" : "Pokaż"} ukończone
      </Button>
      <Button disabled={tasks.every(({ done }) => done)} onClick={setAllDone}>
        Ukończ wszystkie
      </Button>
    </ButtonPanel>
  );
};

export default Buttons;
