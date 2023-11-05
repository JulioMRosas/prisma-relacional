"use client";
import React from 'react';
import { useState } from 'react';

const UserForm = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div>
        <h1>Register New User</h1>
        <form>
            <label htmlFor="username"></label>
            <input id="username" type="text" placeholder='username' value={user} onChange={e => setUser(e.target.value)}/>
            <input type="email" placeholder='hola@gmail.com' />
            <input type="password" placeholder='******'/>
            <input type="password" placeholder='******'/>
        </form>
    </div>
  )
}

export default UserForm;