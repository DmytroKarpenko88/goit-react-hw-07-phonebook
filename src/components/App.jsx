import { Container } from './App.styled';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  // Отримуємо частини стану
  // const { items } = useSelector(getContacts);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
    // console.log(items);
  }, [dispatch]);

  return (
    <>
      {/* {isLoading && <p> Loading contacts...</p>}
      {error && <p>{error}</p>} */}
      {/* <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p> */}

      <Container>
        <h2>Phonebook</h2>

        <ContactForm />
        {isLoading && !error && <b>Request in progress...</b>}
      </Container>

      <Container>
        <h2>Contacts</h2>

        <Filter />
        <ContactList />
      </Container>
    </>
  );
};

export default App;
