import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import {store} from "../redux/store"
import { Provider } from "react-redux";

export const App = () => {
  return (
    <Provider store={store}>
    <div>
      <h1 className='title'>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
    </Provider>
  );
};
