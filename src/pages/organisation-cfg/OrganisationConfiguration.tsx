import { Layout } from "common";
import {
  type FieldValues,
  useForm,
  FormProvider,
  UseFormReturn,
} from "react-hook-form";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import ConfigBody from "./config-body/ConfigBody";
import css from "./organisation-configuration.module.css";
import TopSection from "./top-section/TopSection";
import ValidationSchema from "./ValidationSchema";
import type { OrganizationConfigType } from "types/organisation-config";

const { Content, Header } = Layout;

const OrganisationConfiguration = () => {
  /**
   * @description base form values initialization
   * @type UseFormReturn<OrganizationConfigType>
   */
  const methods: UseFormReturn<OrganizationConfigType> =
    useForm<OrganizationConfigType>({
      resolver: yupResolver(ValidationSchema),
      mode: "onChange",
      defaultValues: {
        migrationMode: false,
        code: undefined,
        description: undefined,
        bankAccount: undefined,
        vatAccountNumber: undefined,
        companyAccountNumber: undefined,
        contactDetails: {
          emailAddress: undefined,
          telephone: undefined,
          website: undefined,
        },
        address: {
          streetName: undefined,
          streetNumber: undefined,
          postalCode: undefined,
          city: undefined,
          country: undefined,
        },
      },
    });

  /**
   * @description submit method
   * @param values
   */
  const onFinish = (values: FieldValues) => {
    console.log(values);
  };

  return (
    <Layout className={css["layout"]}>
      <FormProvider {...methods}>
        <Header className={css["header"]}>
          <TopSection />
        </Header>
        <Content className={css["content"]}>
          <form onSubmit={methods.handleSubmit(onFinish)} id="myForm">
            <ConfigBody />
          </form>
        </Content>
      </FormProvider>
    </Layout>
  );
};

export default OrganisationConfiguration;
