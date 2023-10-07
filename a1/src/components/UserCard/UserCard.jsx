import React from 'react';
import styles from './UserCard.module.css';

export default function UserCard({ user }) {
  return (
    <li className={styles.mainBox}>
      <div className={styles.imageBox}>
        <img
          className={styles.image}
          src={user.avatar}
          alt={`${user.first_name}'s profile`}
        />
      </div>

      <div className={styles.infoBox}>
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <h4>{user.email}</h4>
      </div>
    </li>
  );
}
