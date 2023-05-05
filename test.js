const sdk = require('./index')
const moment = require('moment')
const uuid = require('uuid')
let erp = new sdk('12345', '12345')


let main = async function () {

    try {
        let call = await erp.reference('Clients')
        let ope = await call.operation('get_list_detailClient')

        // let body = {
        //     Date: moment().format(),
        //     Comments: 'Esto es una prueba',
        //     LocationID: uuid.v4(),
        //     JournalItems: {
        //         SATCompanyAccountID: uuid.v4(),
        //         Cargo: 0,
        //         Abono: 0,
        //         Comments: 'Esto es una prueba'
        //     }
        // }

        const filterValue = "fecha eq '2023-05-01'";
        const orderByValue = "nombre asc";
        const topValue = 5;
        const skipValue = 10;

        let query = {
            //"$filter": filterValue,
            "$orderby": orderByValue,
            "$top": topValue,
            "$skip": skipValue
        }


        let params = uuid.v4();


        await ope.exec({}, query, params)


    } catch (e) {
        console.log('ERROR', e)

    }

}

main()