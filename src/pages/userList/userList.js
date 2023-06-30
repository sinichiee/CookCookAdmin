import React, { useEffect, useState } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import { AppCurrentVisits } from '../../sections/@dashboard/app';
import style from "./userList.module.css"

const ClientUserList = () => {
  const [members, setMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [activeTable, setActiveTable] = useState(null);
  useEffect(() => {
    fetchMembers(currentPage);
  }, [currentPage]);

  const fetchMembers = async (page) => {
    try {
      const res = await axios.get("/data/clientUserList");
      setMembers(res.data.list); // 수정된 부분
      setTotalPages(Math.ceil(res.data.list.length / 10));
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // 삭제 이벤트
  const handleDelete = (id) => {
    axios.delete(`/data/clientUserList/${id}`)
      .then(() => {
        setMembers((prevMembers) => prevMembers.filter((member) => member.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // 페이지 비동기
  const handleButton1Click = async () => {
    try {
      const response = await axios.get('/data/clientUserList');
      setMembers(response.data.list);
      setActiveTable('table1');
    } catch (error) {
      console.error(error);
    }
  };

  const handleButton2Click = async () => {
    try {
      const response = await axios.get('/data/businessUserList');
      setMembers(response.data.list);
      setActiveTable('table2');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>


<div>
        <Button variant="primary" onClick={handleButton1Click}>회원관리</Button>
        <Button variant="primary" onClick={handleButton2Click}>비지니스관리</Button>
</div>

{/* 테이블1 */}
{activeTable === 'table1' && (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>ReportCount</th>
            <th>Regdate</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.nickName}</td>
              <td>{member.eMail}</td>
              <td>{member.reportCount}</td>
              <td>{member.regDate}</td>
              <td><Button variant="danger"onClick={() => handleDelete(member.id)}>교수형</Button></td>
            </tr>
          ))}
        </tbody>
        <Pagination className="d-flex justify-content-center">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
      </Table>
)}
{/* 테이블2 */}
{activeTable === 'table2' && (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>BusinessId</th>
            <th>CompanyName</th>
            <th>Email</th>
            <th>ReportCount</th>
            <th>Regdate</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.businessId}>
              <td>{member.businessId}</td>
              <td>{member.companyName}</td>
              <td>{member.eMail}</td>
              <td>{member.reportCount}</td>
              <td>{member.regDate}</td>
              <td><Button variant="danger"onClick={() => handleDelete(member.businessid)}>교수형</Button></td>
            </tr>
          ))}
        </tbody>
        <Pagination className="d-flex justify-content-center">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
      </Table>
      
)}


     
    </div>
  );
};

export const CurrentVisits = () => {
  const theme = useTheme();
  
  const [recentVisitCount, setRecentVisitCount] = useState({
    "recentVisitBusiness":0, "recentVisitClient":0
  });

  useEffect(()=>{
      axios.get("/data/recentVisitCount").then((resp)=>{setRecentVisitCount(resp.data)});
    }, []);

  useEffect(()=>{
      const timer = setInterval(()=>{
          axios.get("/data/recentVisitCount").then((resp)=>{setRecentVisitCount(resp.data)});
      },5000);
      return ()=>{clearInterval(timer)}
  },[]);
  
  return (
    <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'Business Member', value: recentVisitCount.recentVisitBusiness },
                { label: 'Client Member', value: recentVisitCount.recentVisitClient },
              ]}
              chartColors={[
                theme.palette.error.main,
                theme.palette.primary.main,
              ]}
            />
  );
}

export default ClientUserList;