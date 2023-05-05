const axios = require('axios')
let moment = require('moment')
let uuid = require('uuid')
const querystring = require('querystring');

let url = ''
module.exports = function (Authorization, KeySubscription, baseURL) {

    this.Authorization = ''
    this.KeySubscription = ''
    this.baseURL = 'https://api.bind.com.mx/api/'
    this.choosedReference = false
    this.choosedOperation = false
    this.choosedMethod = false
    this.baseURI = this.baseURL

    if (Authorization && Authorization != '') {
        this.Authorization = Authorization
    }
    if (KeySubscription && KeySubscription != '') {
        this.KeySubscription = KeySubscription
    }
    if (baseURL && baseURL != '') {
        this.baseURL = baseURL
    }
    this.def = require('./definition')

    this.reference = async function (name) {
        let instance = this

        if (instance.def[name]) {
            instance.choosedReference = instance.def[name]
            instance.baseURI = instance.baseURL + name
        } else {
            let array_ = []
            for (let [key, val] of Object.entries(this.def)) {
                let array2 = []
                for (let [key2, val2] of Object.entries(val)) {
                    array2.push(key2)
                }
                array_.push({
                    reference: key,
                    operations: array2
                })
            }
            //console.info('ALLOWED REFERENCES AND OPERATIONS', array_)

            throw new Error('Instance chosed is invalid, valid reference are: AccountingJournals, Accounts')
        }

        return instance
    }

    this.operation = async function (name) {
        let instance = this

        if (instance.choosedReference[name]) {
            instance.choosedOperation = instance.choosedReference[name]
            instance.choosedMethod = instance.choosedReference[name].type
        } else {
            let array_ = []
            for (let [key, val] of Object.entries(instance.choosedReference)) {
                array_.push(key)
            }
            //console.info('ALLOWED OPERATIONS', array_)

            throw new Error('Operation choosed is invalid Valid operations are:  add, get_lis, remove, edit')
        }

        return instance
    }

    this.exec = async function (body, query, params) {
        try {

            //TODO: validar el body, query, params
            let instance = this

            if (body && instance?.choosedOperation?.body) {
                for (let [key, val] of Object.entries(instance.choosedOperation.body)) {
                    if (val.mandatory) {
                        if (!body[key]) {
                            throw new Error('the param ' + key + ' is missing')
                        }
                    }
                    //Validación de String y number
                    if (body[key]) {
                        if ((val.type == 'string' || val.type == 'number') && val.type !== typeof body[key]) {
                            throw new Error('the param ' + key + ' is invalid type')
                        }
                        //Validación de Date
                        if (val.type == 'date') {
                            if (!moment(body[key]).isValid()) {
                                throw new Error('the param ' + key + ' is invalid date')
                            }
                        }
                        //Validación de Booleanos
                        if ((val.type == 'boolean') && val.type !== typeof body[key]) {
                            throw new Error('the param ' + key + ' is invalid type boolean')
                        }
                        //Validación de UUID
                        if (val.type == 'UUID' || val.type == 'uuid') {
                            if (!uuid.validate(body[key])) {
                                throw new Error('the param ' + key + ' is invalid ID')
                            }
                        }
                        //Validación de Array
                        if (val.type == 'array') {
                            if (!Array.isArray(body[key])) {
                                throw new Error('the param ' + key + ' is invalid ARRAY')
                            }
                        }
                        //Validación de Objetos
                        if ((val.type == 'object' || val.type == 'Object') && val.type !== typeof body[key]) {
                            throw new Error('the param ' + key + ' is invalid OBJECT')

                        }
                    }
                }
            }

            if (params && instance?.choosedOperation?.params) {
                for (let [key, val] of Object.entries(instance.choosedOperation.params)) {
                    if (params[key]) {
                        if ((val.type == 'UUID') && val.type !== typeof params[key]) {
                            throw new Error('The param ID ' + key + ' is invalid')
                        }
                    }

                    url = `${instance.baseURI}/${params}`
                }
            }

            if (query && instance?.choosedOperation?.query) {
                for (let [key, val] of Object.entries(instance?.choosedOperation?.query)) {
                    if (query[key]) {
                        if ((val.type == 'string') && val.type !== typeof query[key]) {
                            throw new Error('The query string ' + key + ' is invalid')
                        }
                        if ((val.type == 'number') && val.type !== typeof query[key]) {
                            throw new Error('The query number ' + key + ' is invalid')
                        }
                    }
                }

                let filteredParams = Object.keys(query).reduce((acc, key) => {

                    if (query[key] !== undefined && query[key] !== null && query[key] !== '') {
                        acc[key] = query[key];
                    }
                    return acc;
                }, {});
                let queryString = querystring.stringify(filteredParams);
                url = url + `?${queryString}`

            }
            let response = {}

            //TODO relizar las peticiones incluyendo los headers
            /*switch (instance.choosedMethod) {
                case 'POST':

                    response = await axios.post(instance.baseURI, {
                        Headers: {
                            Authorization: {}
                        },
                        body: {}
                    })

                    break;
                case 'GET':

                    response = await axios.post(instance.baseURI, {
                        Headers: {
                            Authorization: {}
                        },
                        body: {}
                    })

                    break;
                case 'PUT':

                    response = await axios.post(instance.baseURI, {
                        Headers: {
                            Authorization: {}
                        },
                        body: {}
                    })

                    break;
                case 'DELETE':

                    response = await axios.post(instance.baseURI, {
                        Headers: {
                            Authorization: {}
                        },
                        body: {}
                    })

                    break;
            }*/
        } catch
            (e) {
            throw e
        }

    }


}
