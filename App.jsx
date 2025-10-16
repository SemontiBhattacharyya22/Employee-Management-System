import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Auth/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Auth/Dashboard/EmployeeDashboard";
import { setLocalStorage, getLocalStorage } from "./components/Auth/utils/LocalStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    setEmployees(employees || []);
    setAdmins(admin || []);

    const loggedUser = localStorage.getItem("loggedInUser");
    if (loggedUser) {
      try {
        setUser(JSON.parse(loggedUser));
      } catch {
        setUser(loggedUser);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    const adminMatch = admins.find((a) => a.email === email && a.password === password);
    const employeeMatch = employees.find((e) => e.email === email && e.password === password);

    if (adminMatch) {
      localStorage.setItem("loggedInUser", JSON.stringify("admin"));
      setUser("admin");
    } else if (employeeMatch) {
      localStorage.setItem("loggedInUser", JSON.stringify(employeeMatch));
      setUser(employeeMatch);
    } else {
      alert("❌ Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#101010] text-white">
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : (
        <EmployeeDashboard data={user} changeUser={setUser} />
      )}
    </div>
  );
};

export default App;
