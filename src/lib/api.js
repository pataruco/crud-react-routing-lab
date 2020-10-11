const BASE_URL = 'https://crudcrud.com/api';
const UNIQUE_RESOURCE = '64f80fccb0c94730ace48b5ed8fd9e5b';
const URL = `${BASE_URL}/${UNIQUE_RESOURCE}`;

export const getAllStudents = async () => {
  const response = await fetch(`${URL}/students`);
  return response.json();
};
