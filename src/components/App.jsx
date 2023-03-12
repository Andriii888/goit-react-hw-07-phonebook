import React, { useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { FilterByName } from './Filter/Filter';
import { Appstyle } from './App.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export function App() {
  const { isLoading, error } = useSelector(state => state.numbers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Appstyle>
      {isLoading && !error && <b>Request in progress...</b>}

      <h1>PhoneBook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}

      <FilterByName />
      <ContactList />
    </Appstyle>
  );
}
