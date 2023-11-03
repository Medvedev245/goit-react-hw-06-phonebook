import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { onDelete } from 'components/Redux/store';

export const ContactList = () => {
  const elements = useSelector(state => state);
  const contact = elements.contacts.filter(({ name }) =>
    name.toLowerCase().includes(elements.filter.toLowerCase())
  );

  const dispatch = useDispatch();

  return (
    <List>
      {contact.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <Button
            onClick={() => {
              dispatch(onDelete(id));
            }}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
