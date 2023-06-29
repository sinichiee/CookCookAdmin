import React, { useEffect, useState } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const UserList = () => {
  const [members, setMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchMembers(currentPage);
  }, [currentPage]);

  const fetchMembers = async (page) => {
    try {
      // 임의의 회원 데이터
      const clientUser = [
       axios.request({
        url:"/admin/clientUserList"
       })
      ];

      setMembers(dummyMembers);
      setTotalPages(1);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NO</th>
            <th>Name</th>
            <th>ID</th>
            <th>REPORT</th>
            <th>Regdate</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.code}>
              <td>{member.code}</td>
              <td>{member.name}</td>
              <td>{member.id}</td>
              <td>{member.report}</td>
              <td>{member.regdate}</td>
              <td><Button variant="danger">교수형</Button></td>
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

export default UserList;