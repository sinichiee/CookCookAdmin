import axios from 'axios';

const USERLIST = async () => {
  const response = await axios.get('/data/clientUserList');
  return response.data.list;
};

export default USERLIST ;