import axios from 'axios';

export default class GoogleMailApiClient {
    static sendMessage(owner, dog, email, subject, body) {
        axios.post(`http://${window.location.hostname}:3001/sendEmail`, {owner, dog, email, subject, body});
    }
}