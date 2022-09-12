import React, { useState } from "react";

function NewStudent({onAddNewStudent}){
  const [name, setName] = useState(" ");

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function handleAddNew(e){
    e.preventDefault();
    const nameData = {
      name: name,
      year_at_school: 1,
      house_id: (getRandomInt(4) + 1) 
    };
    fetch("http://localhost:9292/students", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nameData),
    })
    .then((r)=>r.json())
    .then((newStudent)=>onAddNewStudent(newStudent))
  }

  return(
    <form className="NewStudent" onSubmit={handleAddNew}>
      <label style={{color: "purple"}}>
        Name:
        <input 
          type="text"
          name="name"
          placeholder="Student name"
          value={name}
          onChange = {(e) => setName(e.target.value)}
          />
      </label>
      <button type="submit">Add New Student</button>
    </form>
  );
}

export default NewStudent;