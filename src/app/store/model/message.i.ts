export interface MessageItem {
    avatar: string;
    message: string;
    time: Date;
    isFriend: boolean;
}
export interface MessageTestSocket {
    senderId: number,
    receiveId: number,
    room: string,
    messenger: string,
    time: Date,
}