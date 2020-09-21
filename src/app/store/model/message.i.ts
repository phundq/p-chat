export interface MessageItem{
    avatar: string;
    message: string;
    time: Date;
    isFriend: boolean;
}
export interface MessageTestSocket{
    userId : string,
    room : string,
    messenger : string
}