import Cookies from 'js-cookie';

export default function authHeader() {
    const user = Cookies.getJSON('user');
    
    if (user.token) {
        return { 'token' : user.token};
    } else {
        return {};
    }
}

export function getCurrentUser() {
    const user = Cookies.getJSON('user');
    if (!user) return;
    return user;
}