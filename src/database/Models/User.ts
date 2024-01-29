// If you have multiple data models, you can export all of them in a
// list as a convenience when providing the schema when opening a Realm.
import Realm, { type BSON, type ObjectSchema } from 'realm';

export class User extends Realm.Object<User> {
  _id!: BSON.ObjectId;
  name!: string;
  static schema: ObjectSchema = {
    name: 'Profile',
    properties: {
      _id: 'objectId',
      name: { type: 'string', indexed: 'full-text' },
    },
    primaryKey: '_id',
  };
}
