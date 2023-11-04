import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { onDelete } from 'components/Redux/store';

export const ContactList = () => {
  const value = useSelector(state => state.contacts.contacts);
  const nameFromFilter = useSelector(state => state.filter);
  console.log(value);
  console.log(nameFromFilter);
  const filteredContacts = value.filter(({ name }) =>
    name.includes(nameFromFilter)
  );

  console.log(filteredContacts);

  const dispatch = useDispatch();

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
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
