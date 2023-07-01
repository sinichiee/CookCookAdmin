import axios from 'axios';
import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
import { useState } from 'react';

// ----------------------------------------------------------------------
const USERLIST = async () => {
  const [users, setUser] = useState([]);
  axios.get('/data/selectUserList')
  .then((resp) => {
    setUser(resp.data);  
  });
  
  const userData = [
    {
      code: users.code,
      // avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
      id : users.id,
      nickname: users.nickname,
      company: users.companyname,
      // 이건 delDate가 있냐없냐로 active, banned로 정해서 값지정하기
      status : "",
      auth:  users.auth,
      reportCount: users.reportCount
    }
  ];
};
axios.get('/data/selectUserList').then((resp) => {
  console.log(resp);
});
const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.company.name(),
  nickname: faker.company.name(),
  company: faker.company.name(),
  status: sample(['active', 'banned']),
  reportCount : sample([0,1,2,3,4,5,6,7,8,9,10]),
  role: sample([
    '일반',
    '사업자'
  ]),
}));

export default users;