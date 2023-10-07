import React, { useEffect, useState } from 'react';
import UserCard from '../UserCard/UserCard';
import styles from './UserList.module.css';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('data/user.json')
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);
  return (
    <ul className={styles.ul}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  );
}
