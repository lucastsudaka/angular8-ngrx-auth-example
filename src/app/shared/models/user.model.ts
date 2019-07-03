export interface UserInterface {
    id?: number | null;
    email?: string | null;
    password?: string | null;
    first_name?:string | null;
    last_name?:string | null;
    avatar?: string | null;

    is_authenticated?: boolean;
    loading?: boolean; 
}

export interface LoadUser {
    loading: boolean;
    data: UserInterface | null
}