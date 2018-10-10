const doGet = url => fetch(url).then(response => response.json());

export default {
  phonebook: () => doGet('http://www.mocky.io/v2/581335f71000004204abaf83'),
};
