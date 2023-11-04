import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
// import { onDelete } from 'components/Redux/store';
{
  /* Item, Button useDispatch*/
}
export const ContactList = () => {
  const value = useSelector(state => state.contacts);
  const nameFromFilter = useSelector(state => state.filter);
  console.log(value);
  console.log(nameFromFilter);
  // const filteredContacts = value.filter(({ name }) =>
  //   name.toLowerCase().includes(nameFromFilter.toLocaleLowerCase())
  // );

  // const dispatch = useDispatch();

  return (
    <List>
      hi
      {/* {filteredContacts.map(({ id, name, number }) => (
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
      ))} */}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
