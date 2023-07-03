import axios from 'axios';
import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
import { useState , useEffect} from 'react';

// ----------------------------------------------------------------------
export const users = getUsers().then((data)=>{
  return [...data.map((e,i)=>({
      code: e.code,
      avatarUrl: `/assets/images/avatars/avatar_${i + 1}.jpg`,
      id : e.id,
      nickname: e.nickname,
      company: e.companyname,
      status : "",
      auth:  e.auth,
      reportCount: e.reportCount
  }))]
})


// function getUsers () {
//   return axios.get().then((resp)=>{
//       return resp.data;
//   })
// }

// export const users = getUsers().then((data)=>{
//   return data.map((e,i)=>({
//       code: e.code,
//       avatarUrl: `/assets/images/avatars/avatar_${i + 1}.jpg`,
//       id : e.id,
//       nickname: e.nickname,
//       company: e.companyname,
//       status : "",
//       auth:  e.auth,
//       reportCount: e.reportCount
//   }))
// })
// let users = [];
//   axios.get('/data/selectUserList')
//   .then((resp) => {
//  users = resp.data.map((e,i)=>({
//         code: e.code,
//         avatarUrl: `/assets/images/avatars/avatar_${i + 1}.jpg`,
//         id : e.id,
//         nickname: e.nickname,
//         company: e.companyname,
//         status : "",
//         auth:  e.auth,
//         reportCount: e.reportCount
//     }));
//   }).catch((error) => {
//     console.log(error);
//   });


//   export const USERS = () => {
//     const [userlist, setUserlist] = useState([]);
//     useEffect(()=>{
//         axios.get("").then((resp)=>{
//             setUserlist(resp.data);
//         })
//     },[])
//     return (
//        <>
//         userlist
//        </>
//     )
// }

  // const users = [
  //   {
  //     code: user.code,
  //     // avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  //     id : user.id,
  //     nickname: user.nickname,
  //     company: user.companyname,
  //     // 이건 delDate가 있냐없냐로 active, banned로 정해서 값지정하기
  //     status : "",
  //     auth:  user.auth,
  //     reportCount: user.reportCount
  //   }
  // ];

// axios.get('/data/selectUserList').then((resp) => {
//   console.log(resp);
// });
// const users = [...Array(24)].map((_, index) => ({
//   id: faker.datatype.uuid(),
//   avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
//   name: faker.company.name(),
//   nickname: faker.company.name(),
//   company: faker.company.name(),
//   status: sample(['active', 'banned']),
//   reportCount : sample([0,1,2,3,4,5,6,7,8,9,10]),
//   role: sample([
//     '일반',
//     '사업자'
//   ]),
// }));

// export default users;