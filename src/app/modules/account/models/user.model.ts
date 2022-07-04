export interface UserDetail {
    Id: number;
    FullName: string;
    Email: string;
    Password: string;
    IsActive: boolean;
    IsDeleted: boolean;
}

export interface LoginDetail {
    Email: string;
    Password: string;
}
