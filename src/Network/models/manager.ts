import type { AxiosResponse } from 'axios';
import type { ApiError } from './auth';
// request
export interface romChatModifyRequest {
  from?: string | Date;
  to?: string | Date;
  skip: number; //default 0
  take: number;
}
export interface listRoomChatRequest {
  userId?: string;
  groupName?: string;
  tagFilter?: number; //1.2.3
  skip: number; //default 0
  take: number;
}
export interface SearchRoomRequest {
  filter?: string;
  roomType?: number; //0.1.2.
  skip: number; //default 0
  take: number;
}
export interface RoonRequest {
  filter?: string;
  groupId?: string;
  roomType?: number; //0.1.2.
  skip?: number; //default 0
  take?: number;
}
// chat room modal
export interface ChatRoomModel extends ApiError {
  items: ChatRoomItem[];
  totalCount: number;
}
export interface CreateChatRoomInput {
  name: string;
  roomType: number;
  typeOfGroup: number;
  topic: string;
  description: string;
  image: string;
  ownerId: string;
  participants: string[];
  tags: string[];
  sendDefaultMessage: boolean;
  defaultMessageContent: string;
}
export interface ChatRoomInfoRequest {
  name: string;
  topic: string;
  description: string;
  image: string;
}
export interface inviteGroupMemberRequest {
  groupId: string;
  userId: string[];
}
//request

export interface ChatRoomItem {
  id: string;
  createdOn: string;
  name: string;
  roomType: number;
  typeOfGroup: number;
  topic: string;
  description: string;
  image: string;
  ownerId: string;
  participantCount: number;
  lastMessage: lastMessageModel;
  participantInfo: participantInfoModel;
  hasUnreadMessage: boolean;
  unreadCount: number;
  isFavorite: boolean;
  tags: string[];
  notifyStatus: boolean;
  leaveGroupHistories: {
    participant: string;
    timeLeave: string;
  }[];
}
export interface lastMessageModel {
  id: string;
  message: string;
  userId: string;
  userName: string;
  fullName: string;
  nickName: string;
  avatar: string;
  time: string;
  attachments: Attachment[];
  type: number;
  isEdited: boolean;
  lastEditTime: string;
  isDeleted: boolean;
}
export interface participantInfoModel {
  userName: string;
  fullName: string;
  nickName: string;
  avatar: string;
  onlineStatus: number;
}

export interface Attachment {
  name: string;
  description: string;
  id: string;
  url: string;
  urlPreView: string;
  typeAttachment: number;
  messageId: string;
  sizeByte: number;
  durationSeconds: number;
  revoke: number;
}

export interface ChatRoomListSearchModel extends defaultResponseApi {
  items: ChatRoomItemSearchModel[];
  totalCount: number;
}

export interface ChatRoomItemSearchModel {
  id: string;
  name: string;
  roomType: number;
  topic: string;
  image: string;
  participants: string[];
  participantCount: number;
}

export interface ChatRoomInfomationModel extends defaultResponseApi {
  id: string;
  createdOn: string;
  name: string;
  roomType: number;
  typeOfGroup: number;
  topic: string;
  description: string;
  image: string;
  ownerId: string;
  participants: string[];
  participantCount: number;
  lastMessage: lastMessageModel;
  participantInfo: participantInfoModel;
  unreadCount: number;
  hasUnreadMessage: boolean;
  isLinkEnabled: boolean;
  inviteLinkKey: string;
  labelAllows: string[];
  statusAllows: string[];
  sexAllows: string[];
  maxAgeAllow: number;
  minAgeAllow: number;
  isPrivate: boolean;
  locationAllows: string[];
  isAdminApprove: boolean;
}
export interface UpdateResponeModel extends ApiError {
  id: string;
}
export interface defaultResponseApi extends AxiosResponse<any, any>, ApiError {}
interface DataItemJoin {
  id: string;
  groupId: string;
  userId: string;
  timeSend: string; // Should be of type Date, but it's provided as a string
  timeProcess: string; // Should be of type Date, but it's provided as a string
  processed: boolean;
  result: number;
  countValue: number;
}

export interface requestJoinListResponse extends defaultResponseApi {
  total: number;
  data: DataItemJoin[];
}
export interface toggleGroupInviteLinkRes {
  groupId: string;
  isEnabled: boolean;
  inviteLinkKey: string;
}
