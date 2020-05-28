import Cookies from 'js-cookie';

export default function authHeader() {
    const userToken = Cookies.get('userToken');
    
    if (userToken) {
        return { 'token' : 'wFEKbkz6wvgH5fg2dVkejSAZ'};
    } else {
        return {};
    }
}