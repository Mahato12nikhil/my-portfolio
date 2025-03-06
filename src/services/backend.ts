import { RestService } from "./rest"
import { baseUrl, urls } from "./url"
import { ILogin } from "@/state/reducers/Token";

const serviceClient=new RestService({baseURL: baseUrl});
export const GetProjects=()=>{
    return serviceClient.client.get(urls.getProject);
}
export const Login=(user: ILogin)=>{
    return serviceClient.client.post(urls.login, user);
}