import React, { useEffect, useState } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const ClientUserList = () => {
  const [members, setMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
  return (
    <div>
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
      </Table>
      <Pagination>
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
    </div>
  );
};

export default ClientUserList;