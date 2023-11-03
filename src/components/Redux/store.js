import { createStore, combineReducers } from 'redux';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

// const contactsInitialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

// const contactReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case 'contacts/delete':
//       return {
//         ...state,
//         contacts: state.contacts.filter(el => el.id !== action.payload),
//       };

//     case 'contacts/add':
//       const existingContact = state.contacts.some(
//         contact =>
//           contact.name.toLowerCase() === action.payload.name.toLowerCase()
//       );
//       if (existingContact) {
//         Notify.failure('Contact already exists');
//         return state; // если контакт уже существует, возвращаем текущее состояние
//       } else {
//         Notify.success('Contact ADD');
//         return {
//           ...state,
//           contacts: [...state.contacts, { ...action.payload, id: nanoid(5) }],
//         };
//       }

//     default:
//       return state;
//   }
// };

// const filterInitialState = '';
// const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case 'contacts/filter':
//       return {
//         ...state,
//         filter: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// -----root reduser-----
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/delete':
      console.log('object');
      return {
        ...state,
        contacts: state.contacts.filter(el => el.id !== action.payload),
      };

    case 'contacts/add':
      const existingContact = state.contacts.some(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      if (existingContact) {
        Notify.failure('Contact already exists');
        return state; // если контакт уже существует, возвращаем текущее состояние
      } else {
        Notify.success('Contact ADD');
        return {
          ...state,
          contacts: [...state.contacts, { ...action.payload, id: nanoid(5) }],
        };
      }

    case 'contacts/filter':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

// const rootReducer = combineReducers({
//   contacts: contactReducer,
//   filter: filterReducer,
// });

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

// -----component----- - ContactList
export const onDelete = id => {
  return {
    type: 'contacts/delete',
    payload: id,
  };
};

// -----component----- - ContactForm
export const addContacts = values => {
  return {
    type: 'contacts/add',
    payload: values,
  };
};

// -----component----- - Filter
export const onChangeName = values => {
  return {
    type: 'contacts/filter',
    payload: values,
  };
};
