import { render, screen } from "@testing-library/react";
import Button from "../components/Button";
import userEvent from "@testing-library/user-event";

describe("Button Component", () => {
  test("クリックされた時に関数が呼ばれるかどうか", () => {
    const onClickMock = jest.fn();
    render(
      <Button onClick={onClickMock}>
        <p>Button</p>
      </Button>
    );
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
  test("childenが渡されたかどうか", () => {
    const { container } = render(<Button onClick={() => {}}>Button</Button>);
    const buttonText = container.textContent;
    expect(buttonText).toBe("Button");
  });
  test("disabledになるか", () => {
    const onClickMock = jest.fn();
    render(
      <Button onClick={onClickMock} isDisabled>
        <p>Button</p>
      </Button>
    );
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
});
