import { TiUserDelete } from 'react-icons/ti';
import { Button, Text } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getActive } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

const Contact = ({ item }) => {
  const isActive = useSelector(getActive);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(item.id));

  return (
    <div>
      <div>
        <Text>{item.name}</Text> <Text>{item.phone}</Text>
      </div>
      <Button type="button" disabled={isActive} onClick={handleDelete}>
        <TiUserDelete />
      </Button>
    </div>
  );
};

export default Contact;
