const express = require('express');
const pool = require('./config/db');
const userRoutes = require('./routes/index');
const userController = require('./controllers/userController');
const materialsController = require('./controllers/materialsController');

const app = express();

app.use(express.json());

pool.query('SELECT NOW()', (err, res) => {
  if(err) {
    console.error('Error connecting to the database', err.stack);
  } else {
    console.log('Connected to the database:', res.rows);
    console.log(getMaterial(1728828622603));
  }
});

const getMaterial = async (id) => {
  try {
    const user = await materialsController.getMaterialById(id);
    console.log(user);
  } catch (err) {
    console.error('Error deleting user:', err.message);
  }
};

const addMaterial = async () => {
  try {
    const newMaterial = {
      id: new Date().getTime(),
      name: 'testMaterial',
      author_id: 1,
      link: 'https://googledisk.com/',
      description: 'rtfghjklhgvgftghjknkjytdsdfghuugfyrtsergfg',
      views_count: 0,
      rating: null,
      reviews: null,
      tags: "test"
    };
    const material = await materialsController.createMaterial(newMaterial);
    console.log('User created:', material);
    updateMaterialName(material.id);
  } catch (err) {
    console.error('Error adding user:', err.message);
  }
};

const updateMaterialName = async (materialId) => {
  try {
    const updatedMaterial = await materialsController.updateMaterial(materialId, {
      name: 'check',
      author_id: 1,
      link: 'https://googledisk.com/',
      description: 'Тестовый материал для работы с бд',
      views_count: 0,
      rating: null,
      reviews: null,
      tags: "test"
    });
    console.log('User email updated:', updatedMaterial);
  } catch (err) {
    console.error('Error updating user email:', err.message);
  }
};

const deleteMatreial = async (materialId) => {
  try {
    await materialsController.deleteMaterial(materialId);
    console.log(`User with ID ${materialId} deleted.`);
  } catch (err) {
    console.error('Error deleting user:', err.message);
  }
};

const PORT = 5432 || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});