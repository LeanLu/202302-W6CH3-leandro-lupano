import { useSelector } from "react-redux";
import { RootState } from "../../../core/store/store";

export function Display() {
  const numbers = useSelector((state: RootState) => state.phone);

  return (
    <>
      <span className="number">{numbers}</span>
    </>
  );
}
