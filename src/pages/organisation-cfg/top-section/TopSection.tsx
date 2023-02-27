import { Alert, Button, Space } from "common";
import { useCallback } from "react";
import { useFormContext, useFormState } from "react-hook-form";
import type { OrganizationConfigType } from "types/organisation-config";

const TopSection = () => {
  const { reset } = useFormContext();
  /**
   * @description useFormState to avoid re-render
   */
  const { touchedFields, errors, isDirty, isValid } =
    useFormState<OrganizationConfigType>();

  /**
   * @description return error messages based on form property level
   * @returns Error Message
   */
  const getErrorMessage = useCallback(() => {
    let message = "";
    Object.getOwnPropertyNames(errors).forEach(function (name) {
      if ((errors as any)[name].hasOwnProperty("message")) {
        message = (errors as any)[name].message;
      } else {
        const key = Object.getOwnPropertyNames((errors as any)[name])[0];
        message = (errors as any)[name][key].message;
      }
    });
    return message;
  }, [errors]);

  return (
    <Space direction="horizontal">
      <div>
        {getErrorMessage() && (
          <Alert type="error" message={getErrorMessage()} />
        )}
      </div>
      <div>
        {Object.entries(touchedFields).length !== 0 && (
          <Button type="text" onClick={() => reset()}>
            Cancel
          </Button>
        )}
        <Button
          type="primary"
          form="myForm"
          key="submit"
          htmlType="submit"
          disabled={!isDirty || !isValid}
        >
          Save
        </Button>
      </div>
    </Space>
  );
};
export default TopSection;
