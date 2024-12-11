import { useState } from 'react'
import './App.css'

function App() {
const[name, setName]=useState("");
const[lastName, setLastName]=useState("");
const[email, setEmail]=useState("");
const[contact, setContact]=useState("");
const[gender, setGender]=useState("male");

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
          <input
          type='tel'
          name='contact'
          id='contact'
          value={contact}
          onChange={(e)=>setContact(e.target.value)}
          placeholder='Enter your contact number'
          required
          />
          {/*this field made for  gender*/}
          <label for="gender">Gender*</label>
          <input
          type='radio'
          name='gender'
          id='male'
          value={male}
          onChange={(e)=>
            setGender(e.target.value)
          }
          />

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
        </form>
      </fieldset>
    </div>
  )
}

export default App
