import { Button, List, ListItem, Text } from './ContactList.styled';

import { TiUserDelete } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
// import { deleteContact } from 'redux/contactsSlice';
import { getActive, getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const { items } = useSelector(getContacts);

  const filterValue = useSelector(getFilter);
  const isActive = useSelector(getActive);
  const dispatch = useDispatch();

  const getVisibleItems = () => {
    return items?.filter(el =>
      el.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
    );
  };

  const visibleList = getVisibleItems();

  return (
    <List>
      {visibleList?.map(({ id, name, phone }) => {
        return (
          <ListItem key={id}>
            <div>
              <Text>{name}</Text> <Text>{phone}</Text>
            </div>
            <Button
              type="button"
              disabled={isActive}
              onClick={() => dispatch(deleteContact(id))}
            >
              <TiUserDelete />
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ContactList;
