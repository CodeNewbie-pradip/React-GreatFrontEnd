import { useState } from 'react'
import './App.css'

function App() {
const[name, setName]=useState("");
const[lastName, setLastName]=useState("");
const[email, setEmail]=useState("");
const[contact, setContact]=useState("");
const[gender, setGender]=useState("male");
const[subject, setSubjects]=useState({
  english:true,
  maths:false, 
  physics:false,
});
const[resume, setResume]=useState();
const[url, setUrl]=useState();
const[selectedOption, setSelectedOption]=useState("");
const[about, setAbout]=useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(
      name,
      lastName,
      email,
      contact,
      gender,
      subject,
      resume,
      url,
      about
  );
  // Add your form submission logic here
};

const handleSubjectChange = (sub) => {
  setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
  }));
};
const handleReset = () => {
  // Reset all state variables here
  setName("");
  setLastName("");
  setEmail("");
  setContact("");
  setGender("male");
  setSubjects({
      english: true,
      maths: false,
      physics: false,
  });
  setResume("");
  setUrl("");
  setSelectedOption("");
  setAbout("");
};

  return (
    <div className='App'>
      <h1>Form in react</h1>
      <fieldset>
        <form action='#'method='get'>
          <label htmlFor="name">Name*</label>
          <br/>
          <input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder='Enter Your name'
          required
          />

          <br/>
          {/*this field made for  lastname*/}
          <label htmlFor='lastname'>Last Name*</label>
          <br/>
          <input 
            type='text'
            name='lastname'
            id='lastname'
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            placeholder='Enter Your Last name'
            required
            />

          <br/>
          {/*this field made for  email*/}
          <label htmlFor="email">Email*</label>
          <br/>
          <input
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder='Enter your Email'
          required
          />

          <br/>
          {/*this field made for  contact*/}
          <label htmlFor="tel">Contact*</label>
          <br/>
          <input
          type='tel'
          name='contact'
          id='contact'
          value={contact}
          onChange={(e)=>setContact(e.target.value)}
          placeholder='Enter your contact number'
          required
          />
          <br/>
          {/*this field made for  gender*/}
          <label for="gender">Gender*</label>
          <input
          type='radio'
          name='gender'
          id='male'
          value="male"
          onChange={(e)=>
            setGender(e.target.value)
          }
          />
          <br/>
          Male
          <input
            type='radio'
            name='gender'
            id='male'
            value="male"
            checked={gender==="male"}
            onChange={(e)=>
              setGender(e.target.value)
            }
            />
            Female
            <input
            type='radio'
            name='gender'
            id='female'
            value="female"
            checked={gender==="female"}
            onChange={(e)=>
              setGender(e.target.value)
            }
            />

            Other
            <input
            type='radio'
            name='gender'
            id='other'
            value="other"
            checked={gender==="other"}
            onChange={(e)=>
              setGender(e.target.value)
            }
            />
            <br/>
            <label htmlFor='lang'>your best subject</label>
            <input
            type='checkbox'
            name='lang'
            id='english'
            checked={subject.english===true}
            onChange={(e)=>
              handleSubjectChange("english")
            }
            />
            English
            <input
            type='checkbox'
            name='lang'
            id='math'
            checked={subject.math===true}
            onChange={(e)=>{
              handleSubjectChange("math")
            }}
            />
            Maths
            <input
            type='checkbox'
            id='physics'
            name='lang'
            checked={subject.physics===true}
            onchange={(e)=>{
              handleSubjectChange("physics")
            }}
            />
            Physic
            <br/>
            <label htmlFor='file'>upload Resume*</label>
            <input
              type='file'
              name='file'
              id='file'
              onChange={(e)=>
                setResume(e.target.files[0])
              }
              placeholder='Enter upload file'
              required
            />
            <br/>
            <label htmlFor="url">Enter URL*</label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        onChange={(e) =>
                            setUrl(e.target.value)
                        }
                        placeholder="Enter url"
                        required
                    />
                    <br/>
                    <label>Select your choice</label>
                    <br/>
                    <select
                        name="select"
                        id="select"
                        value={selectedOption}
                        onChange={(e) =>
                            setSelectedOption(
                                e.target.value
                            )
                        }
                    >
                        <option
                            value=""
                            disabled
                            selected={selectedOption === ""}
                        >
                            Select your Ans
                        </option>
                        <optgroup label="Beginers">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">
                                JavaScript
                            </option>
                        </optgroup>
                        <optgroup label="Advance">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">
                                Express
                            </option>
                            <option value="t">
                                MongoDB
                            </option>
                        </optgroup>
                    </select>
                    <br/>
                    <label htmlFor="about">About</label>
                    <br/>
                    <textarea
                        name="about"
                        id="about"
                        cols="30"
                        rows="10"
                        onChange={(e) =>
                            setAbout(e.target.value)
                        }
                        placeholder="About your self"
                        required
                    ></textarea>
                    <br/>
                    <button
                        type="reset"
                        value="reset"
                        onClick={() => handleReset()}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        value="Submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>
        </form>
      </fieldset>
    </div>
  )
}

export default App
