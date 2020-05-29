import Cookies from 'js-cookie';

export default function authHeader() {
    const user = Cookies.getJSON('user');
    
    if (user.token) {
        return { 'token' : user.token };
    } else {
        return {};
    }
}

export function getCurrentUser() {
    const user = Cookies.getJSON('user');
    if (!user) return;
    return user;
}

export function deleteUserToken() {
    Cookies.remove('user');
    return true;
}

export function loginUser(email, token) {
    Cookies.set('user', {email, token}, { expires: 7 });
}