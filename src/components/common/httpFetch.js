import qs from 'qs';
import { message } from 'antd';

// const fetch = window.fetch.bind(window);

export function httpFetch (config, temType){
    const httpType = temType || config.type || 'GET';
    // const needCache = config.cache;
    const fetchConfig = {
        method: httpType,
        credentials: 'same-origin'
    }
    let url = config.url;
    if(httpType == 'GET'){
        if(config.param){
            url = config.url + '?' + qs.stringify(config.param);
        }
    }else{
        fetchConfig.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        if(config.param){
            fetchConfig.body = JSON.stringify(config.param)
        }
    }

    return fetch(url,fetchConfig)
    .then((res)=>{
        
        console.log("res.json=>",res);
        return res.json();
    })
    .then((json)=>{
        let result = json;
        config.callback && config.callback(result);
        return {
            data: result
        }
    })
    .catch(err => {
        message.error(err.message);
        console.error(err);
        config.error && config.error(err);

        return {
            err
        };
    })
}