import { BaseModel } from '../Models/BaseModel';
import { GuidHelper } from '../Utils/Helpers/GuidHelper';

export class UserModel extends BaseModel {
    public Id: string = '';
    public userName: string = '';
    public password: string = '';
    public isRemember: boolean = false;
  
    public static typeName = 'UserModel';
    constructor(init?: Partial<UserModel>) {
      super(UserModel.typeName);
      Object.assign(this, init)
    }
  }