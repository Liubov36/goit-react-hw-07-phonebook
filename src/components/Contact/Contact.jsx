import PropTypes from 'prop-types';
import { FaTrash, FaUserTie } from 'react-icons/fa';

import { ContactData, Phone, Button, Icon } from './Contact.styled';

export const Contact = ({ contactID, name, number, onDeleteContact }) => {
  console.log('contactID', contactID);
  return (
    <>
      <ContactData>
        <Icon>
          <FaUserTie />
        </Icon>
        <p>{name}</p>
      </ContactData>
      <ContactData>
        <Phone>{number}</Phone>
        <Button type="button" onClick={() => onDeleteContact(contactID)}>
          <FaTrash />
        </Button>
      </ContactData>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};