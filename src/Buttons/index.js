import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="section__buttons">
      <button className="section__button">
        {hideDoneTasks === false ? "Ukryj" : "Pokaż"} ukończone
      </button>
      <button className="section__button" disabled={tasks.every(({ done }) => done)}>
        Ukończ wszystkie
      </button>
    </div>
  );
};

export default Buttons;
