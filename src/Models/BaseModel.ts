import { GuidHelper } from '../Utils/Helpers/GuidHelper';

export abstract class BaseModel {
  private ____key: string;
  public get __key(): string {
    if (!this.____key || !this.____key.length) {
      this.____key = GuidHelper.newGuid()
    }
    return this.____key
  }

  public __type = '';

  public constructor(type: string) {
    this.____key = GuidHelper.newGuid()
    this.__type = type
  }
}
