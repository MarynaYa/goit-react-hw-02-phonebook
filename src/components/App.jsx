import React, { Component } from "react";
import { v4 as uuid } from "uuid";

import Section from "./Section/Section";
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
state = {
  contacts: [],
  name: '',
  number: ''
};

handleInputChange = evt => {
  const { name, value } = evt.currentTarget;
  this.setState({
[name]: value,
id: uuid(),
  });
};

render() {
  const { name, number } = this.state;

  return (
   <Section title="Phonebook">
   <form className="" onSubmit={this.handleSubmit}>
    <label className="">
      Name
 <input
  type="text"
  onChange={this.handleInputChange}
  name="name"
  value={name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
</label>


</form>
    </Section>

  
  )
}


}

//export const App = () => {
 // return (
   // <div
     // style={{
       // height: '100vh',
       // display: 'flex',
       // justifyContent: 'center',
       // alignItems: 'center',
       // fontSize: 40,
       // color: '#010101'
      //}}
    //>
      //React homework template
    //</div>
  //);
//};
export default App;