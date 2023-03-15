const fields = {
  name: {
    type: 'text',
    name: 'name',
    label: 'Name',
    placeholder: 'User name',
 
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  },
  number: {
    type: 'tel',
    name: 'number',
    label: 'Number',
    placeholder: '444-44-44',
   
    title:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  },
};

export default fields;
