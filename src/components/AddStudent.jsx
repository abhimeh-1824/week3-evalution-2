import { useState } from "react";
export const AddStudent = () => {
const [registerData , setData] = useState({
  firstName:"",
  lastName:"",
  email:"",
  gender:"",
  age:"",
  score10:"",
  score12:"",
  branch:""
})
function handelchanges(e)
{
  const {id,value} = e.target
  console.log(e.target.id,e.target.value)
  setData({...registerData,[id]:value})
}
  function submitForm(e)
  {
    e.preventDefault()
    // console.log(registerData)
    const database = {
  firstName:registerData.firstName,
  lastName:registerData.lastName,
  email:registerData.email,
  gender:registerData.gender,
  age:registerData.age,
  score10:registerData.score10,
  score12:registerData.score12,
  branch:registerData.branch
  }
  fetch("http://localhost:8080/students",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(database)
  })
  }
  return (
    <form className="addstudent" onSubmit={submitForm}>
      <div>
        Firstname:{" "}
        <input
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
          id="firstName"

        onChange={handelchanges}

        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
          id="lastName"
          onChange={handelchanges}
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
          id="email"
          onChange={handelchanges}
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name="gender"
            className="male"
            type="radio"
            value={"male"}
            id="gender"
            onChange={handelchanges}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
            id="gender"
            onChange={handelchanges}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          id="age"
          onChange={handelchanges}
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
          id="score10"
          onChange={handelchanges}
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
          id="score12"
          onChange={handelchanges}

        />{" "}
      </div>
      <div>
        <select
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
          id="branch"
          onChange={handelchanges}
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" onChange={handelchanges} />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
