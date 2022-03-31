import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Items from "./pages/Items";
import UserStorage from "./utils/userStorage";



const App = () => {
  const { isToken } = UserStorage();
  console.log(isToken);

  // const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <div className="App">
        <Router>
          <Routes>

            <Route exact path="/" element={
                isToken ? <Navigate replace to="/items" /> : <Home />
              } 
            />

            <Route exact path="/items" element={
                isToken ? <Items /> : <Navigate replace to="/" />
              } 
            />

            {/* 
            <Route path="/">
              {isToken ? <Redirect to="/items" /> : <Home />}
            </Route> */}

          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
