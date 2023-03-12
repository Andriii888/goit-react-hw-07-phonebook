import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const finedContacts = useSelector(state => state.filters.finde);
  const currentState = useSelector(state => state.numbers);

  const currentContacts = () => {
    if (finedContacts) {
      const normalizedFilter = finedContacts.toLowerCase();
      return currentState.filter(contact => {
        return contact.name.toLowerCase().includes(normalizedFilter);
      });
    }
    return currentState;
  };
  return (
    <ul>
      {currentContacts().map(contact => {
        const { name, number, id } = contact;
        return <ContactItem name={name} number={number} key={id} id={id} />;
      })}
    </ul>
  );
};

PropTypes.ContactList = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
