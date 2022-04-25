const connection = require('./connection')
const DATABASE = "trubbi_test"
const COLLECTION_EVENTS = "events_test"

async function getEvents(){
    const clientmongo = await connection.getConnection();
    const events = await clientmongo.db(DATABASE)
                                .collection(COLLECTION_EVENTS)
                                .find()
                                .toArray();
    return events;                            
}

module.exports = {getEvents}