import * as Components from "antd";
import React from "react";
import type IFormField from "../IFormField";
import { Controller, useController, useFormContext } from "react-hook-form";

const Switch = ({ name, label, required }: IFormField): JSX.Element => {
  const { control } = useFormContext();

  const {
    fieldState: { error },
  } = useController({ name, control });

  return (
    <Components.Form.Item
      htmlFor={name}
      required={required}
      label={label}
      validateStatus={error?.message && "error"}
    >
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <Components.Switch {...field} checked={field.value} />
        )}
      />
    </Components.Form.Item>
  );
};

export default Switch;
