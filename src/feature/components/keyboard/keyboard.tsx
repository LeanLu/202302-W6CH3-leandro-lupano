import { MOCK_NUMBERS } from "../../mocks/numbers";
import { Key } from "../key/key";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../core/store/store";
import * as ac from "../../reducer/phone.actions.creator";

export function Keyboard() {
  const dispatch = useDispatch<AppDispatch>();

  const handlerDelete = () => {
    dispatch(ac.deleteNumberCreator());
  };

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {MOCK_NUMBERS.map((item: string) => (
          <Key key={item} valueString={item}></Key>
        ))}

        <li>
          <button className="key big" onClick={() => handlerDelete()}>
            Delete
          </button>
        </li>
      </ol>
    </div>
  );
}
