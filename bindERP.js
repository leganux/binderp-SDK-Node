const axios = require('axios')

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
    this.def = {
        AccountingJournals: {
            add: {
                type: 'POST',
                body: {
                    Date: {
                        type: "Date",
                        mandatory: true
                    },
                    Comments: {
                        type: "String",
                        mandatory: true
                    },
                    LocationID: {
                        type: "UUID",
                        mandatory: false
                    },
                    JournalItems: {
                        type: "Object",
                        mandatory: true
                    }
                },


            },
            edit: {
                type: 'PUT',
                body: {
                    ID: {
                        type: "UUID",
                        mandatory: true
                    },
                    Date: {
                        type: "Date",
                        mandatory: true
                    },
                    Comments: {
                        type: "String",
                        mandatory: true
                    },
                    LocationID: {
                        type: "UUID",
                        mandatory: false
                    },
                    JournalItems: {
                        type: "Object",
                        mandatory: true
                    }
                }
            },
            get_list: {
                query: {},
                type: "get"
            },
            remove: {},
        },
        Accounts: {
            add: {},
            remove: {},
            get_list: {},
            get_category: {},
        }

    }

    this.reference = async function (name) {
        let instance = this

        if (instance.def[name]) {
            instance.choosedReference = instance.def[name]
            instance.baseURI = instance.baseURL + name
        } else {
            //TODO recorrer y mostrar lista de referencias
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
            //TODO recorrer y mostrar lista de operaciones
            throw new Error('Operation choosed is invalid Valid operations are:  add, get_lis, remove, edit')
        }

        return instance
    }

    this.exec = async function (body, query, params) {

        try {/*  let body = {
              Date: "2023-04-11T12:33:54.000z",
              Comments: "Esto es una prueba",
              LocationID:"1234567-1234567-1234567-23456",
              JournalItems: [{
                  "SATCompanyAccountID": "00000000-0000-0000-0000-000000000000",
                  "Cargo": 0,
                  "Abono": 0,
                  "Comments": "string"
              }]
          }
          */

            //TODO: validar el body, query, params
            let instance = el

            if (instance?.choosedOperation?.body) {
                for (let [key, val] of instance.choosedOperation.body) {
                    if (val.mandatory) {
                        if (!body[key]) {
                            throw new Error('the param ' + key + ' is missing')
                        }
                        //Todo validar el tipo del dato
                    }
                }
            }
            if (instance?.choosedOperation?.query) {
                for (let [key, val] of instance.choosedOperation.query) {

                }
            }
            if (instance?.choosedOperation?.params) {
                for (let [key, val] of instance.choosedOperation.params) {

                }
            }

            let response = {}

            //TODO relizar las peticiones incluyendo los headers
            switch (instance.choosedMethod) {
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
            }

            return response
        } catch (e) {
            throw e
        }

    }


}
