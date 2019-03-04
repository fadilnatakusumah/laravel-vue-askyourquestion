class Token {
    payload(token) {
        const payload = token.split('.')[1];
        return this.decode(payload);
    }

    decode(payload) {
        return JSON.parse(atob(payload));
    }

    isValid(token) {
        const payload = this.payload(token);
        if (payload) {
            const baseUrl = location.origin;
            const url = `${baseUrl}/api/auth/login` //
            return payload.iss === url ? true : false;
        }
        return;
    }
}
export default Token = new Token();