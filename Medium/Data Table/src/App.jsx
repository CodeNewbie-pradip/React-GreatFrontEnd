import React, { useState } from "react";
import usersData from "../public/users.json";
import "./App.css";

export default function App() {
  //step 1: use usestate for handle currentPage and userPage 
  const [currentPage, setCurrentPage]=useState(1);
  const [userPerPage, setUserPerPage]=useState(5);

  const totalPages=Math.ceil(usersData.length/userPerPage);

  const handlePageChange=(direction)=>{
    setCurrentPage((prevPage)=>{
      if(direction=="prev" && prevPage>1) return prevPage-1; //get to previous page
      if(direction=="next" && prevPage<totalPages) return prevPage+1; //get to next page

      return prevPage; //otherwise return as well as
    });
  }

  const handleUserPerPage=(event)=>{
    setUserPerPage(Number(event.target.value)); //assign value of per page user
    setCurrentPage(1); //when change value of perpage automatically redirect to first page
  }

  const startIndex=(currentPage-1)*userPerPage; //it giving start index of the page
  const currentUser=usersData.slice(startIndex, startIndex+userPerPage);//it is gives how much data on the table;

  return (
    <div className="container">
      <h2>User Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {currentUser.map((user)=>(
            <tr key={user.id}>
              <th>{user.id}</th>
              <th>{user.name}</th>
              <th>{user.age}</th>
              <th>{user.occupation}</th>
            </tr>
        ))};
        </tbody>
      </table>
      <div className="pagination-controls">
        <button 
        onClick={()=>handlePageChange("prev")}
        disabled={currentPage===1}
        >Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
        onClick={()=>handlePageChange("next")}
        disabled={currentPage===totalPages}
        >Next</button>
        <div>
          <label htmlFor="userPerPage">User Prev Page</label>
          <select 
          id="userPerPage"
          value={userPerPage}
          onChange={handleUserPerPage}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>
    </div>
  );
}
