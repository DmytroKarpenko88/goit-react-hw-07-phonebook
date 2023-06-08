import Contact from 'components/Contact/Contact';
import { List, ListItem } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const { items } = useSelector(getContacts);

  const filterValue = useSelector(getFilter);

  const getVisibleItems = () => {
    return items
      ?.filter(el =>
        el.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
      )
      .sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
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
