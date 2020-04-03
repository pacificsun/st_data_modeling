const uuidv4 = require('uuid/v4');
var AWS = require('aws-sdk');

AWS.config.update({ region: 'ap-south-1' });

var dynamodb = new AWS.DynamoDB.DocumentClient();

//created skills

const skill = 'arrays and object';
const skillId = uuidv4();
const course = 'Basic javaScript';
const passion = 'Developer';
const courseId = '939f540c-50be-4580-9251-e7acdd5d703c';
const price = 50;
const level = 'Beginner';
const skillNo = 1;
var params = {
  TableName: 'st_table',
  Item: {
    PK: 'SKILL#info',
    SK: `#METADATA#${passion}#${courseId}#${skillId}`,
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
