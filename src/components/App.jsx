import { Container } from './App.styled';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <h2>Phonebook</h2>

        <ContactForm />
      </Container>

      <Container>
        <h2>Contacts</h2>

        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </Container>
    </>
  );
};

export default App;
