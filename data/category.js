const connection = require('./connection')
const DATABASE = "trubbi_test"
const COLLECTION_CATEGORIES = "categories_test"

async function getCategories(){
    const clientmongo = await connection.getConnection();
    const categories = await clientmongo.db(DATABASE)
                                .collection(COLLECTION_CATEGORIES)
                                .find()
                                .toArray();
    return categories;                            
}

module.exports = {getCategories}