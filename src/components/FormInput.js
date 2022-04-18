import React from 'react'
import useInput from '../utils/useInput'

function FormInput() {
    const [firstname, bindFirst, resetFirst] = useInput('');
    const [lastname, bindLast, resetLast] = useInput('');

    const submitForm = (e) => {
        e.preventDefault();
        alert(`Submitted by ${firstname} ${lastname}`);
        resetFirst();
        resetLast();
    }
  return (
    <form onSubmit={submitForm}>
        <div>
            <label>First Name</label>
            <input type='text'
                {...bindFirst}
                placeholder='Enter First name'
            />
        </div>

        <div>
            <label>Last Name</label>
            <input type='text'
                {...bindLast}
                placeholder='Enter Last name'
            />
        </div>

        <button>Submit</button>
    </form>
  )
}

export default FormInput