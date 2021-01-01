export class UserProfileParams {
    UserIds?: number;
    UserNames?: string;
}

export class UserProfileModel {
    userProfiles: UserProfiles[];
    oprStatus: number;
    message: string;
}

export class UserProfiles {
    UserId: number;
    Name: string;
    UserName: string;
    Email: string;
    MobilePhone: string;
}


