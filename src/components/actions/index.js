import { httpFetch } from "../common/httpFetch";
import qs from 'qs';

export function deleteItem(param){
    param = qs.stringify(param);
    console.log(param);
    return httpFetch({
        url: `/deleteitem?${param}`,
    },'DELETE')
}