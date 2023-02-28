import * as Components from "antd";
import React from "react";
import type IFormField from "../IFormField";
import { Controller, useController, useFormContext } from "react-hook-form";

interface ISelect extends IFormField {
  options: Array<{ label: string; value: string }>;
  mode?: "multiple" | "tags";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (e: string & string[]) => void;
  size?: "large" | "middle" | "small";
  style?: React.CSSProperties;
  showSearch?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filterOption?: any;
}

const Select = ({
  name,
  label,
  required,
  defaultValue,
  options,
  mode,
  size = "large",
  style,
  showSearch = false,
  filterOption,
}: ISelect): JSX.Element => {
  const { control, setValue } = useFormContext();

  const {
    fieldState: { error },
  } = useController({ name, control });

  return (
    <Components.Form.Item
      htmlFor={name}
      required={required}
      label={label}
      validateStatus={error?.message && "error"}
      labelCol={{ span: 24 }}
    >
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <Components.Select
            size={size}
            style={style}
            {...field}
            showSearch={showSearch}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            filterOption={typeof filterOption !== "undefined" && filterOption}
            mode={mode}
            defaultValue={defaultValue}
            options={options}
            onChange={(value) => {
              setValue(name, value);
            }}
          />
        )}
      />
    </Components.Form.Item>
  );
};

export default Select;
