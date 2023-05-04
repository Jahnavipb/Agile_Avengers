import {dbConnection} from './mongoConnection.js';

/* This will allow you to have one reference to each collection per app */
/* Feel free to copy and paste this this */
const getCollectionFn = (collection) => {
  let _col = undefined;

  return async () => {
    if (!_col) {
      const db = await dbConnection();
      _col = await db.collection(collection);
    }

    return _col;
  };
};

export const normalUsers = getCollectionFn('normalUsers');
export const salesUsers = getCollectionFn('salesUsers');
export const managementUsers = getCollectionFn('managementUsers');

export const bookDemos = getCollectionFn('bookDemos');
export const feedbacks = getCollectionFn('feedbacks');
export const solarSelection = getCollectionFn('solarSelection');
export const approvalRequests = getCollectionFn('approvalRequests');
export const approvedRequests = getCollectionFn('approvedRequests');

export const crewUsers = getCollectionFn('crewUsers');
