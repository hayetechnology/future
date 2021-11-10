import {useCookies} from 'react-cookie';

export default class APIService {
    
    static InsertResume(body) {

        return  fetch('http://127.0.0.1:8000/api/resume/', {
            'method':'POST',
            headers: {
                'Content-Type':'application/pdf',
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static GetResume(body) {

        return  fetch('http://127.0.0.1:8000/api/resume/4/', {
            'method':'GET',
            headers: {
                'Content-Type':'application/pdf',
                'Content-Disposition':'inline'
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }
}