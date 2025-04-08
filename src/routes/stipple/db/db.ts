const DB_NAME = 'stipple';
const DB_VERSION = 1;

let dbPromise: Promise<IDBDatabase> | null = null;

function createDbPromise(): Promise<IDBDatabase> {
  return new Promise(function (resolve) {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = (event) => console.error(event);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = () => {
      request.result;
      request.result.createObjectStore('images', {
        autoIncrement: true
      });
    };
  });
}

export function load(): Promise<IDBDatabase> {
  dbPromise = dbPromise || createDbPromise();
  return dbPromise;
}
