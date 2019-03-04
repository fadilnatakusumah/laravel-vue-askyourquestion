import axios from 'axios';
import Token from './Token';
import AppStorage from "./AppStorage";

class User {
    loginHandler(data, cb) {
        // console.log('data', data);
        axios
            .post("/api/auth/login", data)
            .then(res => {
                // throw error;
                this.responseAfterLogin(res);
                cb();
            })
            .catch(err => {
                console.log(err);
                cb();
            })
    }

    responseAfterLogin(res) {
        const { access_token } = res.data;
        const { user } = res.data;
        console.log('saving to storage');
        if (Token.isValid(access_token)) {
            AppStorage.storeBoth(access_token, user);
            console.log('data saved');
        }
    }

    hasToken() {
        const token = localStorage.getItem('token');
        if (token) {
            return true;
        }
        return false;
    }

    isLoggedIn() {
        if (this.hasToken())
            return true;
        else
            return false;
    }

    logout() {
        AppStorage.clear();
    }

    getName(){
        if(this.isLoggedIn()){
            return AppStorage.getUser();
        }
    }
    getId(){
        if(this.isLoggedIn()){
            const payload = Token.payload(AppStorage.getToken());
            return payload.sub;
        }
    }
}

export default User = new User();