import axios from 'axios'
import { cacheAdapterEnhancer } from 'axios-extensions';

export interface IBaseService {
}

export abstract class BaseService implements IBaseService {
  protected api(isAuth: boolean = true, _baseUrl: string = '', contentType: string = 'application/json') {
  
    return axios.create({
      baseURL: _baseUrl,
      withCredentials: false,
      headers: {
        Accept: 'application/json',
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "DELETE, POST, PUT, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        'Authorization': ''
      },
      adapter: cacheAdapterEnhancer(axios.defaults.adapter as any)
    })
  }
}