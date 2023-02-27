import * as yup from "yup";

export default yup
  .object({
    migrationMode: yup.boolean().required("Migration Mode is required"),
    code: yup.string().required("Code is required"),
    description: yup.string().required("Description is required"),
    bankAccount: yup.string().required("Bank Account number is required"),
    vatAccountNumber: yup.string().required("VAT Account Number is required"),
    companyAccountNumber: yup
      .string()
      .required("Company Account Number is required"),
    contactDetails: yup.object({
      emailAddress: yup
        .string()
        .email("Email is not valid")
        .required("Email is required"),
      telephone: yup
        .string()
        .max(11, "Telephone number is not validated")
        .required("Telephone number is required"),
      website: yup
        .string()
        .required("Website is required")
        .matches(
          /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
          "Website is not validated"
        ),
    }),
    address: yup.object({
      streetName: yup.string().required("Street Name is required"),
      streetNumber: yup
        .number()
        .required("Street Number is required")
        .typeError("Street Number must be a number"),
      postalCode: yup
        .number()
        .typeError("Postal Code must be a number")
        .required("Postal Code is required"),
      city: yup.string().required("City is required"),
      country: yup.string().required("Country is required"),
    }),
  })
  .required();
