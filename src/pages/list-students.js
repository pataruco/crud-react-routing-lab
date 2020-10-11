import React, { useEffect, useState } from 'react';
import { getAllStudents } from '../lib/api';

const ListStudents = () => {
  const [students, setStudents] = useState([]);

  const fetchAllStudents = async () => {
    const studentsData = await getAllStudents();
    setStudents(studentsData);
  };

  useEffect(() => {
    fetchAllStudents();
  });

  return (
    <main className="page all-students">
      <h2>List of students</h2>
      {students.map((student) => {
        return (
          <article>
            <h3>{student.name}</h3>
          </article>
        );
      })}
    </main>
  );
};

export default ListStudents;
