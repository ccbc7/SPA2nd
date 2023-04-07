import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/tasks';

// Read (一覧取得)
export async function getTasks() {
  const response = await axios.get(API_URL);
  return response.data;
}

// Create (新規作成)
export async function createTask(task) {
  const response = await axios.post(API_URL, { task });
  return response.data;
}

// Update (編集)
export async function updateTask(id, task) {
  const response = await axios.put(`${API_URL}/${id}`, { task });
  return response.data;
}

// Delete (削除)
export async function deleteTask(id) {
  await axios.delete(`${API_URL}/${id}`);
}

