import { TiUserDelete } from 'react-icons/ti';

import { useDispatch, useSelector } from 'react-redux';
import { getActive } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { Button, Text } from './Contact.styled';

const Contact = ({ item }) => {
  const isActive = useSelector(getActive);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(item.id));

  return (
    <>
      <div>
        <Text>
          <b>{item.name}</b>
        </Text>
        <Text>{item.phone}</Text>
      </div>
      <Button type="button" disabled={isActive} onClick={handleDelete}>
        <TiUserDelete />
      </Button>
    </>
  );
};

export default Contact;
