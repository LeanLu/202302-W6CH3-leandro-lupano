/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { act, render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../../core/store/store";
import { Key } from "./key";

describe("Given the Key component", () => {
  describe("When the Component is rendered", () => {
    beforeEach(async () => {
      await act(async () =>
        render(
          <Provider store={store}>
            <Key valueString="1"></Key>
          </Provider>
        )
      );
    });

    test("Then, the button element should be in the document", async () => {
      const elements = await screen.findAllByRole("button");
      expect(elements[0]).toBeInTheDocument();
    });

    // TEST SIN PODER FINALIZAR:
    //   test("Then, if the button is clicked the handlerNumber function should be called", async () => {
    //     const elements = await screen.findAllByRole("button");
    //     await act(async () => userEvent.click(elements[0]));
    //     expect(handlerNumber).toHaveBeenCalled();
    //   });
  });
});
