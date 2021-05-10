import axios from 'axios';

const instance = axios.create({
    baseURL : 'http://localhost:5001/clone-fb1ca/us-central1/api'
    //upgrade to firebase blaze
    //firebase deploy --only functions
    // in firebase we will get a link in functions options 
    // Paste that here instead of localhost
});

export default instance; 