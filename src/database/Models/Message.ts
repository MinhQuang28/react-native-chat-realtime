import Realm, { type BSON, type ObjectSchema } from 'realm';
import type { Attachment } from '../../Network/models/manager';

export class Message extends Realm.Object<Message> {
  _id!: BSON.ObjectId;
  name!: string;
  attactments?: Realm.List<Attachment>;
  static schema: ObjectSchema = {
    name: 'Message',
    properties: {
      _id: 'objectId',
      name: { type: 'string', indexed: 'full-text' },
    },
    primaryKey: '_id',
  };
}
