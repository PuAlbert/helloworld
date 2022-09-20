import  _  from "lodash";


const pkidList = [
    {PKID:2},
    {PKID:5},
];
// const pkidObj = { PKID: 3, PK: 4 };


console.log(_.pick(pkidList, ["PKID"]));

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];
 
_.sortBy(users, [(o) => { return o.user; }]);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]

