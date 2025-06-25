import "./App.css";
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
  Outlet,
  useParams,
} from "react-router-dom";
// 在 App.js 設定路由一個 Post 的巢狀路由，有父層 /post 路由以及子動態路由 /:postId
// 定義 Post 和 PostId 兩個元件，分別會看到 Post 詳細資料頁面、點入 /:postId 路由會顯示 Post ID 是 xxxx。
// 加上 NavLink，讓使用者可以直接點擊查看這些頁面。

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

const Post = () => {
  return (
    <>
      <h3>Post頁面</h3>
      <Outlet />
    </>
  );
};

const PostId = () => {
  const params = useParams();
  return <p>Post ID:{params.postId}</p>;
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
          <NavLink to="/post/postId">
            <p>Post 頁面</p>
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
          <Route path="/post" element={<Post />}>
            <Route path=":postId" element={<PostId />} />
          </Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
