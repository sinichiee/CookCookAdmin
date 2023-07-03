import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useEffect, useState } from 'react';
import axios from 'axios';

// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import Label from '../components/label';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
// mock

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Id', alignRight: false },
  { id: 'nickname', label: 'Nickname', alignRight: false },
  { id: 'companyName', label: 'company', alignRight: false },
  { id: 'auth', label: 'Auth', alignRight: false },
  { id: 'report', label: 'reportCount', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  // { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.id.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function UserPage() {
  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [selectedCode, setSelectedCode] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  // UserList -------------------------------------------------------------
  const [USERLIST, setUSERLIST] = useState([]);
  let status;
  function setBannedStatus(strDelDate){
    if(strDelDate === "no data"){
      status = "active";
    }else{
      status = "banned";
    }
    return status;
  }
  useEffect(() => {
    axios.all([axios.post('/data/selectUserList'), axios.post('/data/selectBanUserList')])
      .then(
        axios.spread((resp1, resp2) => {
          console.log(resp1);
          console.log
          let tmp = [];
          if(resp1.data.length > 0){ 
            tmp = resp1.data.map((e, i) => {
              if(e.id === 'no data'){
                return({
                  code: e.code,
                  avatarUrl: `/assets/images/avatars/avatar_${i + 1}.jpg`,
                  id: e.businessId,
                  nickname: e.nickName,
                  companyName: e.companyName,
                  status: setBannedStatus(e.strDelDate),
                  auth: e.auth,
                  reportCount: e.reportCount
                })
              }
              if (e.businessId === 'no data'){
                return({
                  code: e.code,
                  avatarUrl: `/assets/images/avatars/avatar_${i + 1}.jpg`,
                  id: e.id,
                  nickname: e.nickName,
                  companyName: e.companyName,
                  status: setBannedStatus(e.strDelDate),
                  auth: e.auth,
                  reportCount: e.reportCount
                })
              }
            });
          }
  
          if(resp2.data.length > 0){ 
            resp2.data.map((e, i) => {
              console.log(e.strDelDate);
              if(e.id === 'no data'){
                tmp.push({
                  code: e.code,
                  avatarUrl: `/assets/images/avatars/avatar_${i + 1}.jpg`,
                  id: e.businessId,
                  nickname: e.nickName,
                  companyName: e.companyName,
                  status: setBannedStatus(e.strDelDate),
                  auth: e.auth,
                  reportCount: e.reportCount
                })
                return(tmp)
              }
              if (e.businessId === 'no data'){
                tmp.push({
                  code: e.code,
                  avatarUrl: `/assets/images/avatars/avatar_${i + 1}.jpg`,
                  id: e.id,
                  nickname: e.nickName,
                  companyName: e.companyName,
                  status: setBannedStatus(e.strDelDate),
                  auth: e.auth,
                  reportCount: e.reportCount
                })
                return(tmp)
              }
            })
          }
          console.log(tmp);
          setUSERLIST(tmp);
        })
      )
  }, []);

  // const handleOpenMenu = (event) => {
  //   setOpen(event.currentTarget);
  // };

  // const handleCloseMenu = () => {
  //   setOpen(null);
  // };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.id);
      setSelected(newSelecteds);
      const newSelectedsCode = USERLIST.map((n) => n.code);
      setSelectedCode(newSelectedsCode);
      return;
    }
    setSelected([]);
    setSelectedCode([]);
  };

  const handleClick = (event, id, code) => {
    const selectedIndex = selected.indexOf(id);

    let newSelected = [];
    let newSelectedCode = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
      newSelectedCode = newSelectedCode.concat(selectedCode, code);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
      newSelectedCode = newSelectedCode.concat(selectedCode.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
      newSelectedCode = newSelectedCode.concat(selectedCode.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
      newSelectedCode = newSelectedCode.concat(selectedCode.slice(0, selectedIndex), selectedCode.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
    setSelectedCode(newSelectedCode);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  return (
    <>
      <Helmet>
        <title> UserList | CookCook</title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            사용자 목록
          </Typography>
          {/* <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            계정 추가
          </Button> */}
        </Stack>

        <Card>
          <UserListToolbar  codeSelected={selectedCode} numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const {code, avatarUrl, id, nickname, companyName, status, auth, reportCount } = row;
                    const selectedUser = selected.indexOf(id) !== -1;

                    return (
                      <TableRow hover key={code} tabIndex={-1} role="checkbox" selected={selectedUser}>
                        <TableCell padding="checkbox">
                          <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, id, code)} disabled={status === 'banned' ? true : false }/>
                        </TableCell>
                        {/* id */}
                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar alt={id} src={avatarUrl} />
                            <Typography variant="subtitle2" noWrap>
                              {id}
                            </Typography>
                          </Stack>
                        </TableCell>
                        {/* nickname */}
                        <TableCell align="left">{nickname}</TableCell>
                        {/* company */}
                        <TableCell align="left">{companyName}</TableCell>
                        {/* auth */}
                        <TableCell align="left">{auth}</TableCell>
                        {/* reportCount */}
                        <TableCell align="left">{reportCount}</TableCell>
                        {/* status */}
                        <TableCell align="left">
                          <Label color={(status === 'banned' && 'error') || 'success'}>{sentenceCase(status)}</Label>
                        </TableCell>
                        {/* menu - delete / modi */}
                        {/* <TableCell align="right">
                          <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                            <Iconify icon={'eva:more-vertical-fill'} />
                          </IconButton>
                        </TableCell> */}
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            회원을 찾을 수 없습니다.
                          </Typography>

                          <Typography variant="body2">
                            <strong>&quot;{filterName}&quot;</strong>에 대한 검색결과가 없습니다.
                            <br /> 없는 회원이거나 다른 검색어를 입력해 보세요😥.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>

      {/* <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem>
          <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem sx={{ color: 'error.main' }} >
          <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover> */}
    </>
  );
}