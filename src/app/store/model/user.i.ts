export interface User {
    id: number;
    username: string;
    avatar?: string;
    fullName: string;
    isOnline?: boolean;
    role?: string;
    created?: Date;
    modified?: Date;
}