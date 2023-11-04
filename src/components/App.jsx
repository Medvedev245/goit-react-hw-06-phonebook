import { useEffect, useState } from 'react';
import { Filter } from './Filter/Filter';
import { Container, MainText, SecondMainText } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

const initialValue = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  return (
    <Container>
      <MainText>Phonebook</MainText>
      <ContactForm />
      <SecondMainText>Contacts</SecondMainText>
      <Filter />
      <ContactList />
    </Container>
  );
};
