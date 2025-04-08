import { openDB, type IDBPDatabase } from 'idb';

function decorate(record: any): ImageLayer {
  record = record as ImageLayer;
  record.src = URL.createObjectURL(new Blob([record.data]));
  return record;
}

export default class LayerStore {
  dbName: string;
  storeName: string;
  _dbPromise: Promise<IDBPDatabase> | undefined;

  layers: ImageLayer[] = $state.raw([]);

  constructor(dbName: string, storeName: string) {
    this.dbName = dbName;
    this.storeName = storeName;
  }

  buildDbPromise() {
    const { dbName, storeName } = this;
    return openDB(dbName, 1, {
      upgrade(db) {
        db.createObjectStore(storeName, { keyPath: 'name' });
      }
    });
  }

  get dbPromise() {
    if (!this._dbPromise) {
      this._dbPromise = this.buildDbPromise();
    }
    return this._dbPromise;
  }

  async put(layer: ImageLayer) {
    const db = await this.dbPromise;
    await db.put(this.storeName, layer, layer.name);
    await this.refresh();
  }

  async delete(layer: ImageLayer) {
    const db = await this.dbPromise;
    await db.delete(this.storeName, layer.name);
    await this.refresh();
  }

  async refresh() {
    const db = await this.dbPromise;
    const layers = await db.getAll(this.storeName);
    this.layers = layers.map(decorate);
  }
}
