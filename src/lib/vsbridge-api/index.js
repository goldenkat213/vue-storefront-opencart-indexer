'use strict'
const unirest = require('unirest')

class VsBridgeApiClient {

    constructor(config) {
        this.config = config

        if (!config.vsbridge.url)
            throw Error('url is required config keys for Pimcore Api Client')

        this.baseUrl = `${config.url}index.php?route=vsbrdige/`
        this.apiKey = '85sA81rvon4x6H7N7ef4HbgSw7Wt6ydt14gujOsql7tRduu8RN2bFHxX7FWmHmMNJWsF2nbugmL1MbKmdfaVYPZ5s1Xg1eVzcYOwu2a3ttBUSNo3KT4HEs7NPfD0Vm2JAUShDN88zX75BSKMwtJo7x3vwfNNjqlCzrh5GRHnMbejMrMce7x4MAGvYyLXf3MUTNByzKJxdHx3WRoQGK5h8Lj3N7eRbwhenkD87WlTXVzIBd3xjZ4S3NTng02HfZnL' // will be set after the authorization
        this.client = unirest
    }

    authWith(apiKey) {
        this.apiKey = apiKey
    }
    _setupRequest(unirest) {
        return unirest.headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
    }
    _setupUrl(endpointUrl) {
        //const url = endpointUrl;
        const url = endpointUrl + '?apikey=' + encodeURIComponent(this.apiKey)
        console.log('Fetching data from', url);
        return url
    }
    post(endpointName) {
        return this._setupRequest(this.client.post(this._setupUrl(endpointName)))
    }

    get(endpointName) {
        return this._setupRequest(this.client.get(this._setupUrl(endpointName)))
    }

    put(endpointName) {
        return this._setupRequest(client.put(this._setupUrl(endpointName)))
    }

    delete(endpointName) {
        return this._setupRequest(client.delete(this._setupUrl(endpointName)))
    }

}
module.exports = VsBridgeApiClient
