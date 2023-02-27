import { Card, INPUT, SELECT } from "common";
import Countries from "./country";
const AddressCard = () => {
  return (
    <Card title="Address">
      <INPUT label="Street Name" name="address.streetName" required />
      <INPUT label="Street Number" name="address.streetNumber" required />
      <INPUT label="Postal Code" name="address.postalCode" required />
      <INPUT label="City" name="address.city" required />
      <SELECT
        label="Country"
        name="address.country"
        required
        options={Countries.map(({ name, code }) => ({
          label: name,
          value: code,
        }))}
        showSearch
        filterOption={(input: string, option: { label: string }) =>
          option.label.toLowerCase().includes(input.toLowerCase()) ?? false
        }
      />
    </Card>
  );
};

export default AddressCard;
