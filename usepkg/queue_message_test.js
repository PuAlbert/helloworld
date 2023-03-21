
import _ from 'lodash';
import fs from "fs";
const filepath = "./test.json";

const data = JSON.parse(fs.readFileSync(filepath));


console.log(data);

const aa = data.event.Records.map(({ body })=>body);


console.log(_.map(data.event.Records, "body"));