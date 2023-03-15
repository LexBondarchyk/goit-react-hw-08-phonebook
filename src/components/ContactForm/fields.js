const fields = {
  name: {
    type: 'text',
    name: 'name',
    label: 'Name',
    placeholder: 'User name',
    // pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  },
  number: {
    type: 'tel',
    name: 'number',
    label: 'Number',
    placeholder: '444-44-44',
    // pattern: '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
    title:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  },
};

export default fields;
