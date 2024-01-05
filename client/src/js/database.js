import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
console.error('putDb not implemented');
//src 19-PWA/23-Ins_IndexedDB-CRUD/database.js #Src

console.log('We need to apply to the database');

  // Create a connection to the database database and version we want to use.
  const todosDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = todosDb.transaction('jate', 'readwrite');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .add() method on the store and pass in the content.
  const request = store.put({ id: 1, value: content  });

  // Get confirmation of the request.
  const result = await request;
  console.log('Data saved to db', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {console.error('getDb not implemented');
  console.log('Get from Database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  console.log(result);
  return result;
};

initdb();
