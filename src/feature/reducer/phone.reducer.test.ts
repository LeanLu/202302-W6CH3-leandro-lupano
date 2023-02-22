import * as ac from "./phone.actions.creator";
import { phoneReducer } from "./phone.reducer";

describe("Given the Phone Reducer", () => {
  describe("When the initial state is undefined and the action type is empty", () => {
    test("Then, it should be expected an empty string", () => {
      const initialState = undefined;

      const action = { type: "" };

      const result = phoneReducer(initialState, action);

      expect(result).toBe("");
    });
  });

  describe("When the initial state is empty string and the payload is an string '1'", () => {
    test("Then, it should return the string '1'", () => {
      const result = phoneReducer("", ac.clickNumberCreator("1"));

      expect(result).toBe("1");
    });
  });

  describe("When the initial state is a '1' string and the type is delete", () => {
    test("Then, it should return and empty string", () => {
      const result = phoneReducer("1", ac.deleteNumberCreator());

      expect(result).toBe("");
    });
  });
});
