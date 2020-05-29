import axios from 'axios';
import authHeader from './auth';

const aio = axios.create({
    baseURL: 'http://snapi.epitech.eu/',
    timeout: 1500
});

export function getAll() {
    return aio.get('/all', {
        headers: authHeader()
    });
}

export function getSnaps() {
    return aio.get('/snaps', {
        headers: authHeader()
    });
}

export function getSnap(id) {
    return aio.get('/snap/'+id, {
        headers: authHeader(),
        responseType: 'blob'
    });
}

export function postRegister(email, password) {
    return aio.post('/inscription',
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
    );
}

export function postLogin(email, password) {
    return aio.post('/connection', { email, password },
        { headers: { 'Content-Type': 'application/json' } }
    );
}

export function postSnap(data) {
    return aio.post('/snap',
        data,
        { headers: authHeader() }
    );
}
