import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import ClientUserList from './pages/userList/userList';
import {BasketPieChart} from './pages/basket/basket';
import MealChart from './pages/meal/mealChart'; 
import DashBoard from './pages/dashBoard/dashBoard';

function Navi() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/adminPage/main">메인</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/adminPage/userList" eventKey="link-2">회원관리</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/adminPage/basket" eventKey="link-2">재료추출</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/adminPage/shop" eventKey="link-3">공동구매</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/adminPage/board" eventKey="link-4">게시판</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/adminPage/mealChart" eventKey="link-5">to meal chart</Nav.Link>
      </Nav.Item>
       <Nav.Item>
       <Nav.Link href="/adminPage/UserList" eventKey="link-6">회원</Nav.Link>
       </Nav.Item>
    </Nav>

  );
}


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navi></Navi>
        <Routes>
          <Route path='/adminPage/main' element={<DashBoard/>}></Route>
          <Route path='/adminPage/basket' element={<BasketPieChart/>}></Route>
          <Route path="/adminPage/userList" element={<ClientUserList/>}/>
          <Route path="/adminPage/mealChart" element={<MealChart/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
