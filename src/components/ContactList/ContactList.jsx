import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const finedContacts = useSelector(state => state.filters.finde);
  const currentState = useSelector(state => state.numbers.items);

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
        const { name, phone, id } = contact;
        return <ContactItem name={name} number={phone} key={id} id={id} />;
      })}
    </ul>
  );
};
