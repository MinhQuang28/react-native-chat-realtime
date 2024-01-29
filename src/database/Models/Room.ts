import Realm, { type BSON, type ObjectSchema } from 'realm';
import type { Message } from './Message';

export class Room extends Realm.Object<Room> {
  _id!: BSON.ObjectId;
  name!: string;
  createdOn?: string;
  typeOfGroup?: number;
  roomType?: number;
  ownerId!: string;
  participantCount?: number;
  message!: Realm.List<Message>;
  lastMessageId?: string;
  participantInfo?: Realm.List<string>;
  hasUnreadMessage?: boolean;
  unreadCount?: string;
  isFavorite?: boolean;
  tag?: Realm.List<string>;
  static schema: ObjectSchema = {
    name: 'Room',
    properties: {
      _id: 'objectId',
      name: { type: 'string', indexed: 'full-text' },
      tag: {
        type: 'list',
        objectType: 'string[]',
        optional: true,
      },
      LatMessage: {
        type: 'object',
      },
      message: {
        type: 'list',
        objectType: 'Message[]',
        optional: true,
      },
    },
    primaryKey: '_id',
  };
}
