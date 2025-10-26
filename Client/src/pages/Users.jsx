import React, { useEffect, useState, useContext } from "react";
import "../index.css";
import { Context } from "../Main.jsx";
import { observer } from "mobx-react-lite";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import UserService from "../services/UserService";

const Users = observer(() => {
  const { user } = useContext(Context);

  React.useEffect(() => {

    if (localStorage.getItem("token")) {
      user.checkAuth();
    }
  }, [user]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await UserService.fetchUsers();
        
        const userData = response.data.map(user => ({
          id: user.id,
          email: user.email,
          role: user.role,
        }));
        setUsers(userData);
      } catch (error) {
        console.error("Ошибка получения пользователей:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <div  className="container-fluid">
          <h3 className="fw-bold fs-4 my-3">Список пользователей</h3>
          <table className="table table-striped">
            <thead>
              <tr className="highlight">
                <th scope="col">ID</th>
                <th scope="col">Email</th>
                <th scope="col">Роль</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
});

export default Users;
