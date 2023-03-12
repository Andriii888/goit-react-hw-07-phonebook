import PropTypes from 'prop-types';
import { ContactItemStyle } from './contactItemStyle.styled';
import { deleteContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <ContactItemStyle>
      <p>
        {name}:{number}
      </p>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </ContactItemStyle>
  );
};

PropTypes.ContactItem = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
