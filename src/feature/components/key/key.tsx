import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../core/store/store";
import * as ac from "../../reducer/phone.actions.creator";

type KeyProps = {
  valueString: string;
};

export function Key({ valueString }: KeyProps) {
  // const { handlerNumber, handlerDelete } = useContext(AppContext);

  const dispatch = useDispatch<AppDispatch>();

  const handlerNumber = (number: string) => {
    dispatch(ac.clickNumberCreator(number));
  };

  return (
    <>
      <li>
        <button className="key" onClick={() => handlerNumber(valueString)}>
          {valueString}
        </button>
      </li>
    </>
  );
}
