import { Card, INPUT } from "common";

const ContactDetailsCard = () => {
  return (
    <Card title="Contact Details">
      <INPUT
        label="Email Address"
        name="contactDetails.emailAddress"
        required
      />
      <INPUT label="Telephone" name="contactDetails.telephone" required />
      <INPUT label="Website" name="contactDetails.website" required />
    </Card>
  );
};

export default ContactDetailsCard;
