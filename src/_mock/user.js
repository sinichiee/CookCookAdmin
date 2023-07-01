import axios from 'axios';
import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
import { useState } from 'react';

// ----------------------------------------------------------------------
// const USERLIST = async () => {
//   const [users, setUser] = useState();
//   const response = await axios.get('/data/selectUserList').then((resp) => {
//     console.log(resp);
//   });
  
// };
axios.get('/data/selectUserList').then((resp) => {
  console.log(resp);
});
const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  company: faker.company.name(),
  status: sample(['active', 'banned']),
  role: sample([
    '일반',
    '사업자'
  ]),
}));

export default users;