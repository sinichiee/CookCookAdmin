import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import UserList from './pages/userList/userList';
import MealChart from './pages/meal/mealChart'; 

function Navi() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link>메인</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/adminPage/business" eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/adminPage/client" eventKey="link-2">Disabled</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/adminPage/shop" eventKey="link-3">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/adminPage/board" eventKey="link-4">Disabled</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/adminPage/mealChart" eventKey="link-5">to meal chart</Nav.Link>
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
          <Route path="/userList" element={<UserList/>}/>
          <Route path="/adminPage/mealChart" element={<MealChart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
