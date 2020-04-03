const uuidv4 = require('uuid/v4');
var AWS = require('aws-sdk');

AWS.config.update({ region: 'ap-south-1' });

var dynamodb = new AWS.DynamoDB.DocumentClient();

//created skills

const skill = 'protocols';
const skillId = uuidv4();
const course = 'Rest-API';
const price = 50;
const level = 'Improver';
const skillNo = 5;
var params = {
  TableName: 'st_table',
  Item: {
    PK: 'CMP#b83f8110-5e82-4a7d-8e82-ceea7960ec75',
    SK: `SKILL#50d55617-2e35-4c32-ba78-dcb02f91ebbe#ec26d0de-c555-4c8b-bc65-035e62d8d6d9#${skillId}`,
    skill,
    price,
    level,
    skillNo,
    id: skillId,
    course
  },
  ReturnValues: 'ALL_OLD'
};
dynamodb.put(params, function(err, data) {
  if (err) console.log(err);
  else console.log(data);
});
