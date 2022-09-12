import React from "react";

function ListItem({student_name, id, onRemove}){


  function handleRemoveClick(){
    fetch(`http://localhost:9292/students/${id}`, {
      method: "DELETE",
    });
   onRemove(id);
  }

  return(
    <div className = "listitem">  
      <h2> 
        <li style={{"fontSize": 25}}>
          {student_name} 
          <button 
            className="remove"
            onClick={handleRemoveClick}>
              DELETE
          </button> 
        </li>   
      </h2>
    </div>       
    )     
}


export default ListItem;