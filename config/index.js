require('dotenv').config()

const config = {

    port: process.env.PORT || 3000,
    url: process.env.URL,
    user_db: process.env.USER_DB,
    pass_db: process.env.PASS_DB,
    name_db: process.env.NAME_DB || 'servigest'

}

module.exports = {
    config
}