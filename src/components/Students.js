import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import NewStudent from './NewStudent';

function Students({names, handleRemove, handleAddNew}){
  

  const displayNames = names.filter((student)=>{
    return student.name
  })
  return(
    <div>
      <header>
        Are you teacher? Not to worry this section is specifically for you to manage your listings for students and new students
      </header>
      <NewStudent onAddNewStudent={handleAddNew}/>
      {displayNames.map((name) =>{
        return <ListItem 
          key={name.id}
          id={name.id}
          student_name={name.name}
          onRemove={handleRemove}
      />  })}
    


    </div>
  )
}

export default Students;