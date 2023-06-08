import Contact from 'components/Contact/Contact';
import { List, ListItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/operations';
// import { deleteContact } from 'redux/contactsSlice';
import { getActive, getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const { items } = useSelector(getContacts);

  const filterValue = useSelector(getFilter);
  // const isActive = useSelector(getActive);
  // const dispatch = useDispatch();
  // const handleDelete = () => dispatch(deleteContact(items.id));

  const getVisibleItems = () => {
    return items?.filter(el =>
      el.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
    );
  };
  const visibleList = getVisibleItems();

  return (
    <List>
      {visibleList?.map(item => {
        return (
          <ListItem key={item.id}>
            <Contact item={item} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default ContactList;
