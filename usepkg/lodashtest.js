import _ from 'lodash'


const data = {
    Records: [
        {
            body: {
                data: [
                    { name: "a" },
                    { name: null },
                    { name: "c" }
                ]

            }
        },
        {
            body: {
                data: [
                    { name: "x" },
                    { name: "y" },
                    { name: "z" }
                ]

            }
        }
    ]
}

let a = _.flatMap(data.Records.map(({ body }) => body.data));
console.log(a);

// a = _.flatMap(data.Records.map(({ body }) => body.data)).map(item => _.omitBy(item, _.isNil)).flatMap(
//     item => [
//         { age: 3 },
//         item
//     ]
    
// );
// console.log(a);

// a = _.flatMap(data.Records.map(({ body }) => body.data));

// console.log(_.groupBy(a, "name"));


// const arr = [
//     {
//         name : "aaa",
//     },
//     {
//         name : "bbb",
//     },
// ];

// let dict = new Map();

// arr.forEach((item, index) => {
//     // console.log(item);
//     console.log(index);
//     dict.set(item.name, index);

// });
// console.log(dict);
// console.log(dict.get("bbb"));

// const response = {
//     body: 333,
//     name: {
//         aaa:444
//     }
// }
// const {body} = response
// console.log(body);


