export interface User {
    id: number;
    username: string;
    avatar?: string;
    fullName: string;
    isOnline?: boolean;
    role?: string;
    friends?: Friend[];
    created?: Date;
    modified?: Date;
}

export class Friend {
    id?: number;
    username: string;
    fullName?: string;
    avatar?: string;
    role?: string;
    isBlock?: boolean;
    userId: number;
    friendId: number;
    created?: Date;
    modified?: Date;
}


export interface AccessToken{
    token: string;
    expiresIn: string;
    timeCreated: string;
}