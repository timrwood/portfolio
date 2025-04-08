import { load } from './db';

export async function list(): Promise<UploadedImageRow[]> {
  const entries: UploadedImageRow[] = [];
  const db = await load();

  return new Promise(function (resolve) {
    const cursor = db.transaction('images', 'readonly').objectStore('images').openCursor();
    cursor.onsuccess = (event) => {
      const cursor = event.target.result as IDBCursorWithValue;
      if (cursor) {
        console.log(cursor);
        cursor.continue();
        const blob = new Blob([cursor.value.data]);
        const src = URL.createObjectURL(blob);

        entries.push({ id: cursor.key, src, record: cursor.value as UploadedImage });
      } else {
        resolve(entries);
      }
    };
  });
}
