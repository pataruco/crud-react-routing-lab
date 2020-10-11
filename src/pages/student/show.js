import React, { useState, useEffect } from 'react';
import { getStudentBy } from '../../lib/api';
import { useParams } from 'react-router-dom';
import Student from '../../components/student';

const ShowStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});

  const fetchStudent = async () => {
    const studentData = await getStudentBy(id);
    setStudent(studentData);
  };

  useEffect(() => {
    fetchStudent();
  });

  const { location, name, githubUsername, _id } = student;

  return (
    <main className="page show">
      <Student
        githubUsername={githubUsername}
        id={_id}
        key={_id}
        location={location}
        name={name}
      />
    </main>
  );
};

export default ShowStudent;
