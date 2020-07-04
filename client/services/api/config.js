class ConfigApi{
    constructor() {
        this.baseUrl = 'http://localhost:8080/api';
    }

    static baseUrl() {
        return 'http://localhost:8080/api/';
    }
}

export default ConfigApi