import React from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { FilterByName } from './Filter/Filter';
import { Appstyle } from './App.styled';

export function App() {
  return (
    <Appstyle>
      <h1>PhoneBook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <FilterByName />
      <ContactList />
    </Appstyle>
  );
}
