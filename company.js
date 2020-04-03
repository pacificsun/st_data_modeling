const uuidv4 = require('uuid/v4');
var AWS = require('aws-sdk');

AWS.config.update({ region: 'ap-south-1' });

var dynamodb = new AWS.DynamoDB.DocumentClient();

// Create a company

const company = 'xyz.inc';
const companyId = uuidv4();
const email = 'xyz+company@gmail.com';

var params = {
  TableName: 'st_table',
  Item: {
    PK: `CMP#${companyId}`,
    SK: `#METADATA#${companyId}`,
    company,
    email,
    id: companyId,
    enable: true,
    createdDate: Date.now()
  },
  ReturnValues: 'ALL_OLD'
};
dynamodb.put(params, function(err, data) {
  if (err) console.log(err);
  else console.log(data);
});
