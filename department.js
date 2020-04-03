const uuidv4 = require('uuid/v4');
var AWS = require('aws-sdk');

AWS.config.update({ region: 'ap-south-1' });

var dynamodb = new AWS.DynamoDB.DocumentClient();

// Create a department

const department = 'DevOps';
const departmentId = uuidv4();
const company = 'skilltransfers.inc';
const email = 'st+devOps@gmail.com';

var params = {
  TableName: 'st_table',
  Item: {
    PK: 'CMP#b83f8110-5e82-4a7d-8e82-ceea7960ec75',
    SK: `DEPARTMENT#${departmentId}`,
    department,
    email,
    id: departmentId,
    company
  },
  ReturnValues: 'ALL_OLD'
};
dynamodb.put(params, function(err, data) {
  if (err) console.log(err);
  else console.log(data);
});
