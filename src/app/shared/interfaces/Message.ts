export interface Message {
  id: number;
  sender: string;
  content: string;
  isRead: boolean;
  sentAt: string;
  senderName: string;
}
