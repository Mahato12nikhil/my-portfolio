import axios, { AxiosHeaders, AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { store } from "../state/store";

export class RestService{
    client: AxiosInstance;
    constructor(config: AxiosRequestConfig){
        this.client=axios.create(config);
        const reqHandler=(config: InternalAxiosRequestConfig)=>{
            const {token}=store.getState().token;
            config.headers = new AxiosHeaders();

            if(token){
                config.headers.Authorization=`Bearer ${token}`
            }
            return config
        }
        const errorHandler = (err: any) => {
            return Promise.reject(err);
          };
        this.client.interceptors.request.use(reqHandler,errorHandler);
    };
    get<T=unknown>(endpoint:string){
        return this.client.get<T>(endpoint);
    };
    post<T=unknown, P=unknown>(endpoint:string, payload:P){
        return this.client.post<T>(endpoint,payload);
    }
}