import React, { useState } from 'react';
import { createStudent } from '../../lib/api';
import { useHistory } from 'react-router-dom';

const NewStudent = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [username, setUsername] = useState('');
  const history = useHistory();

  const handleNameChange = (event) => {
    setName(event.currentTarget.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.currentTarget.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.currentTarget.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const studentObject = {
      name,
      location,
      githubUsername: username,
    };

    try {
      const { _id: id } = await createStudent(studentObject);
      if (id) {
        history.push(`/students/${id}`);
      }
    } catch (error) {
      console.error(error);
    }

    console.log({ studentObject });
  };

  return (
    <main className="page new">
      <h2>New student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Student name"
            onChange={handleNameChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            placeholder="Location"
            onChange={handleLocationChange}
            value={location}
          />
        </div>
        <div>
          <label htmlFor="username">GitHub username</label>
          <input
            id="username"
            type="text"
            placeholder="GitHub username"
            onChange={handleUsernameChange}
            value={username}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewStudent;
