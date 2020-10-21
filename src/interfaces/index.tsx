export interface ReducedUser {
    id: number;
    username: string;
}

export interface User {
    username: string;
    first_name: string;
    last_name: string;
    foto: string;
    seguidores?: ReducedUser[];
    id: number;
    pius?: [];
    favoritos?: [];
    seguindo?: ReducedUser[];
    email: string;
    sobre: string;
}

export interface PiuObject {
    usuario: User;
    texto:string;
    likers: [];
    favoritado_por: [];
    id: number;
}

 export interface Errors {
    [key: string]: string;
}