import ContactDetailsCard from "./ContactDetailsCard";
import { render, fireEvent } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";

const Component = () => {
  const methods = useForm({ defaultValues: { test: "" } });
  return (
    <FormProvider {...methods}>
      <ContactDetailsCard />
    </FormProvider>
  );
};

let elementEmail: Node | null = null;
let elementTelephone: Node | null = null;
let elementWebsite: Node | null = null;

beforeAll(() => {
  render(<Component />);

  elementEmail = document.querySelector("[name='contactDetails.emailAddress']");
  elementTelephone = document.querySelector(
    "[name='contactDetails.telephone']"
  );
  elementWebsite = document.querySelector("[name='contactDetails.website']");
});

it("Should display email", async () => {
  elementTelephone &&
    fireEvent.input(elementTelephone, {
      target: {
        value: "samithahewawasam@gmail.com",
      },
    });

  expect(elementTelephone).toHaveValue("samithahewawasam@gmail.com");
});

it("Should display telephone", async () => {
  elementTelephone &&
    fireEvent.input(elementTelephone, {
      target: {
        value: "0703595985",
      },
    });

  expect(elementTelephone).toHaveValue("0703595985");
});

it("Should display website", async () => {
  elementWebsite &&
    fireEvent.input(elementWebsite, {
      target: {
        value: "www.google.com",
      },
    });

  expect(elementWebsite).toHaveValue("www.google.com");
});

//write test-cases for validations
