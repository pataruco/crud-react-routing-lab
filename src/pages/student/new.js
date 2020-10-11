import React, { useState } from 'react';

const NewStudent = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleNameChange = (event) => {
    setName(event.currentTarget.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.currentTarget.value);
  };

  return (
    <main className="page new">
      <h2>New student</h2>
      <form>
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
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewStudent;
