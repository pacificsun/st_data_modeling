const uuidv4 = require('uuid/v4');
var AWS = require('aws-sdk');

AWS.config.update({ region: 'ap-south-1' });

var dynamodb = new AWS.DynamoDB.DocumentClient();

// Create a Course

const course = 'Rest-API';
const department = 'Development';
const company = 'skilltransfers.inc';
const courseId = uuidv4();
const description = 'Rest-API is a way to connect front to backend';

var params = {
  TableName: 'st_table',
  Item: {
    PK: 'CMP#b83f8110-5e82-4a7d-8e82-ceea7960ec75',
    SK: `COURSE#50d55617-2e35-4c32-ba78-dcb02f91ebbe#${courseId}`,
    course,
    description,
    id: courseId,
    department,
    company
  },
  ReturnValues: 'ALL_OLD'
};
dynamodb.put(params, function(err, data) {
  if (err) console.log(err);
  else console.log(data);
});
