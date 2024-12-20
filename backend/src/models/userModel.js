const pool = require('../config/db');

exports.getUsers = async () => {
  try {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
  } catch (err) {
    throw new Error('Error fetching users: ' + err.message);
  }
};

exports.getUserById = async (id) => {
  try {
    console.log(id);
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  } catch (err) {
    throw new Error('Error fetching user by id: ' + err.message);
  }
}

exports.findUserByNickname = async (nickname) => {
  try {
    const result = await pool.query('SELECT id FROM users WHERE nickname = $1', [nickname]);
    return result.rows[0];
  } catch (err) {
    throw new Error('Error finding user by nickname: ' + err.message);
  }
}

exports.findUserByEmail = async (email) => {
  try {
    const result = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
    return result.rows[0];
  } catch (err) {
    throw new Error('Error finding user by email: ' + err.message);
  }
}

exports.createUser = async (userData) => {
  const { nickname, name, surname, email, password } = userData;
  try {
    const result = await pool.query(
      'INSERT INTO users (id, nickname, name, email, password, surname) VALUES ($1, $2, $3, $4, $5. $6) RETURNING id',
      [generateRandomStringCrypto(15), nickname, name, email, password, surname]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error creating user: ' + err.message);
  }
};

function generateRandomStringCrypto(length) {
  const array = new Uint8Array(length);
  window.crypto.getRandomValues(array);
  return Array.from(array, (dec) =>
    String.fromCharCode(dec % 62 + (dec % 2 === 0 ? 48 : 97))
  ).join("");
}

exports.addAvatar = async (id, avatar) => {
  try {
    await pool.query('UPDATE users SET photo = $1 WHERE id = $2', [avatar, id]);
    return avatar;
  } catch (err) {
    throw new Error('Error adding avatar: ' + err.message);
  }
}

exports.updateUser = async (id, userData) => {
  const [ nickname, name, email, password, shedule, photo, surname ] = userData;

  try {
    const result = await pool.query(
      'UPDATE users SET nickname = $1, name = $2, email = $3, password = $4, shedule = $5, photo = $6, surname = $7 WHERE id = $8 RETURNING *',
      [nickname, name, email, password, shedule, photo, surname, id]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error updating user: ' + err.message);
  }
};

exports.deleteUser = async (id) => {
  try {
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
  } catch (err) {
    throw new Error('Error deleting user: ' + err.message);
  }
};
