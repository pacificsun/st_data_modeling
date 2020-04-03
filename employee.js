const uuidv4 = require('uuid/v4');
var AWS = require('aws-sdk');

AWS.config.update({ region: 'ap-south-1' });

var dynamodb = new AWS.DynamoDB.DocumentClient();

// Create a employee user

const address = 'Kathmandu';
const name = 'Kiran';
const role = 'Teacher';
const passion = 'Developer';
const company = 'skilltransfers.inc';
const email = 'kiran+teacher@gmail.com';
const averageRating = 4;
const phoneNumber = '+9779848823981';
const description = 'hi all';
const userId = uuidv4();
const employeeId = uuidv4();

var params = {
  TableName: 'st_table',
  Item: {
    PK: 'CMP#b83f8110-5e82-4a7d-8e82-ceea7960ec75',
    SK: `USER#50d55617-2e35-4c32-ba78-dcb02f91ebbe#${employeeId}`,
    description,
    userId: userId,
    employeeId: employeeId,
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
