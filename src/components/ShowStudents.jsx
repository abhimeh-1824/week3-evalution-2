import { useEffect, useState } from "react";

export const ShowStudents = () => {
  const [studentData , setStudentData] = useState([])

  const student = async()=>{
    const register = await ("http://localhost:8080/student").then((data)=>data.json())
    setStudentData(register)
  }

  useEffect(()=>{
    student()
  },[])

  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort">sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}

          {studentData.map((e)=>{
         return <tr className="row">
            <td className="first_name">e.firstName</td>
            <td className="last_name">e.lastName</td>
            <td className="email">e.email</td>
            <td className="gender">e.gender</td>
            <td className="age">e.age</td>
            <td className="tenth_score">e.score10</td>
            <td className="twelth_score">e.score12</td>
            <td className="preferred_branch">e.branch</td>
          </tr>
          }
          )}
        </tbody>
      </table>
    </div>
  );
};
