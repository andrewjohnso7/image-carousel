const { Client } = require('pg');
const client = new Client({
  user: 'Phantogram',
  host: 'localhost',
  database: 'images',
  port: 5432,
});

client.connect();

// client.query(`SELECT imageurl FROM carousel WHERE houseID = ${houseID} LIMIT ${randomNumGenerator(0, houseID)}`

const getAllImages = (houseID, callback) => {
  console.log(houseID);
  client.query(`SELECT imageurl FROM carousel WHERE houseid = ${houseID} LIMIT 4`, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results.rows);
    }
  });
};

module.exports = {
  client,
  getAllImages,
};