import { Actions } from "../components/actions/actions";
import { Info } from "../components/info/info";
import { Keyboard } from "../components/keyboard/keyboard";

export function HomePage() {
  return (
    <>
      <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </>
  );
}
