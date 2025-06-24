import "./App.css";
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <Logout />
    </>
  );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const Logout = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/login");
  };
  return (
    <button type="button" onClick={logout}>
      登出
    </button>
  );
};
function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        {/* 請撰寫 Routes, Route 的部分，
        建立 register（註冊）, login（登入）,
        todo（待辦事項） 三個頁面路由，讓上方的 Nav 選單可切換到各頁面。 */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/" element={<p>這是首頁</p>} />
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
