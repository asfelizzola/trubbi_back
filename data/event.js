const connection = require('./connection')
const DATABASE = "trubbi_test"
const COLLECTION_EVENTS = "events_test"
const { ObjectId } = require('mongodb');

async function getEvents(){
    const clientmongo = await connection.getConnection();
    const events = await clientmongo.db(DATABASE)
                                .collection(COLLECTION_EVENTS)
                                .find()
                                .toArray();
    return events;                            
}

async function getEvent(id){
    const clientmongo = await connection.getConnection();
    const event = await clientmongo
                        .db(DATABASE)
                        .collection(COLLECTION_EVENTS)
                        .findOne({_id: new ObjectId(id)});
    return event;
}

module.exports = {getEvents, getEvent}