import { Card, SWITCH, INPUT, TEXTAREA } from "common";

const OrganizationDetailsCard = () => {
  return (
    <Card title="Organization Details">
      <SWITCH label="Migration Mode" name="migrationMode" required />
      <INPUT label="Code" name="code" required />
      <TEXTAREA label="Description" name="description" required />
      <INPUT label="Bank Account" name="bankAccount" required />
      <INPUT label="VAT Account Number" name="vatAccountNumber" required />
      <INPUT
        label="Company Account Number"
        name="companyAccountNumber"
        required
      />
    </Card>
  );
};

export default OrganizationDetailsCard;
