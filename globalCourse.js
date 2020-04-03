const uuidv4 = require('uuid/v4');
var AWS = require('aws-sdk');

AWS.config.update({ region: 'ap-south-1' });

var dynamodb = new AWS.DynamoDB.DocumentClient();

// Create a Course

const course = 'Basic javaScript';
const passion = 'Developer';
const courseId = uuidv4();
const description = 'Basic javaScript course';

var params = {
  TableName: 'st_table',
  Item: {
    PK: 'COURSE#info',
    SK: `COURSE#${passion}#${courseId}`,
    course,
    description,
    id: courseId,
    passion
  },
  ReturnValues: 'ALL_OLD'
};
dynamodb.put(params, function(err, data) {
  if (err) console.log(err);
  else console.log(data);
});
