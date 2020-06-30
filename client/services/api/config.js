class ConfigApi{
    constructor() {
        this.baseUrl = 'http://localhost:8080/api';
    }

    static baseUrl() {
        return this.baseUrl;
    }
}

export default ConfigApi