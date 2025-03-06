"use client";

import { useLoginMutation } from "@/redux/services/clientService";
import { logout, setAuth } from "@/redux/slices/authSlice";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({ username, password }).unwrap();
      dispatch(setAuth({ token: response.data.token, user: response.data.user }));
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input className="text-black border p-2" type="text" placeholder="Phone" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input className="text-black border p-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" disabled={isLoading}>{isLoading ? "Loading..." : "Login"}</button>
        </form>
      </div>
      {user ? (
        <div>
          <h2>Chào, {user.fullName}!</h2>
          <p>Email: {user.email}</p>
          <p>ID: {user.id}</p>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <p>Chưa đăng nhập</p>
      )}
      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  );
}
