import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Dashboard,
  RegisterEmployee,
  UpdateEmployee,
  EmployeesList,
} from "./screens";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employees" element={<EmployeesList />} />
        <Route path="/register" element={<RegisterEmployee />} />
        <Route path="/update/:id" element={<UpdateEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
