const db = {
  'user': [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: "User 3" },
    { id: 4, name: "User 4" },
    { id: 5, name: "User 5" },
  ]
};

function list(table) {
  return db[table];
};

function get(table, id) {
  let collection = list(table);
  return collection.find(item => item.id === id)[0] || null;
};

function upsert(table, data) {
  db[col].push(data);
};

function remove(table, id) {
  return true;
};

module.exports = {
  list,
  get,
  upsert,
  remove,
};
