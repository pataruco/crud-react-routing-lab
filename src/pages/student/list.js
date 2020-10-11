import React, { useEffect, useState } from 'react';
import { getAllStudents } from '../../lib/api';
import Student from '../../components/student';

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
      <div className="students">
        {students.map((student) => {
          const { location, name, githubUsername, _id } = student;

          return (
            <Student
              githubUsername={githubUsername}
              id={_id}
              key={_id}
              location={location}
              name={name}
            />
          );
        })}
      </div>
    </main>
  );
};

export default ListStudents;
