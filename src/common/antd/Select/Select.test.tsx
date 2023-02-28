import SELECT from "./Select";
import { render } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";

const Component = () => {
  const methods = useForm({ defaultValues: { test: "" } });
  return (
    <FormProvider {...methods}>
      <SELECT name="test" label="test" options={[{ label: "A", value: "A" }]} />
    </FormProvider>
  );
};

it("Should exits on the document", async () => {
  render(<Component />);

  const element = document.querySelector("[name='test']");
  expect(element).toBeInTheDocument();
});
