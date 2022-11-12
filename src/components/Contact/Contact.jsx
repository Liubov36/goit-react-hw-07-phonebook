import PropTypes from 'prop-types';
import { ContactData, Number, Button, Icon } from './Contact.styled';
import { FaTrash, FaUserTie } from 'react-icons/fa';

export const Contact = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <ContactData>
        <Icon>
          <FaUserTie />
        </Icon>
        <p>{name}</p>
      </ContactData>
      <ContactData>
        <Number>{number}</Number>
        <Button type="button" onClick={onDeleteContact}>
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