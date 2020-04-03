const uuidv4 = require('uuid/v4');
var AWS = require('aws-sdk');

AWS.config.update({ region: 'ap-south-1' });

var dynamodb = new AWS.DynamoDB.DocumentClient();

// Create a user

const address = 'Kathmandu';
const name = 'Dan';
const role = 'student';
const passion = 'Developer';
const company = 'skilltransfer.inc';
const email = 'dan+student@gmail.com';
const averageRating = 4;
const phoneNumber = '+9779848823981';
const description = 'from global user';
const userId = uuidv4();
const employeeId = uuidv4();

var params = {
  TableName: 'st_table',
  Item: {
    PK: 'USER#info',
    SK: `#METADATA#${userId}`,
    description,
    userId: userId,
    employeeId,
    passion,
    company,
    name,
    address,
    role,
    email,
    averageRating,
    phoneNumber
  },
  ReturnValues: 'ALL_OLD'
};
dynamodb.put(params, function(err, data) {
  if (err) console.log(err);
  else console.log(data);
});
