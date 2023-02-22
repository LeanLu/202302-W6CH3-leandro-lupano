import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../core/store/store";
import * as ac from "../../reducer/phone.actions.creator";

export function Key() {
  // const { handlerNumber, handlerDelete } = useContext(AppContext);

  const dispatch = useDispatch<AppDispatch>();

  const handlerNumber = (number: string) => {
    try {
      dispatch(ac.clickNumberCreator(number));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const handlerDelete = () => {
    try {
      dispatch(ac.deleteNumberCreator());
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <ol className="keyboard">
      <li>
        <button className="key" onClick={() => handlerNumber("1")}>
          1
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerNumber("2")}>
          2
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerNumber("3")}>
          3
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerNumber("4")}>
          4
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerNumber("5")}>
          5
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerNumber("6")}>
          6
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerNumber("7")}>
          7
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerNumber("8")}>
          8
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerNumber("9")}>
          9
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerNumber("0")}>
          0
        </button>
      </li>
      <li>
        <button className="key big" onClick={() => handlerDelete()}>
          delete
        </button>
      </li>
    </ol>
  );
}
