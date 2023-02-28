import SWITCH from "./Switch";
import { render, fireEvent } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";

const Component = () => {
  const methods = useForm({ defaultValues: { test: "" } });
  return (
    <FormProvider {...methods}>
      <SWITCH name="test" label="test" />
    </FormProvider>
  );
};

it("Should display checked Switch", async () => {
  render(<Component />);

  const element = document.querySelector("[name='test']");
  element &&
    fireEvent.change(element, {
      target: {
        value: true,
      },
    });

  expect(element).toHaveValue("true");
});
