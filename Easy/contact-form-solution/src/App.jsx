import './App.css'
import submitForm from './submitForm'

function App() {
  return (
    <>
      <form
      onSubmit={submitForm}
      action="https://www.greatfrontend.com/api/questions/contact-form"
      method='post'>
        <div>
          <label htmlFor='name-input'>Name : </label>
          <input id="name-input" name='name' type='text'required/>
        </div>
        <br/>
        <div>
          <label htmlFor='email-input'>Email : </label>
          <input id="email-input" name='email' type='text'required/>
        </div>
        <br/>
        <div>
          <label htmlFor='message-input'>Message : </label>
          <textarea id='message-input' name='message' rows={5} required/>
        </div>
        <div>
          <br/>
          <button style={{marginLeft: '100px'}}>send</button>
        </div>
      </form>
    </>
  )
}

export default App
