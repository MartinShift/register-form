import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Switch from "react-switch";

function RegistrationForm ({ setUser }) {
  const [form, setForm] = useState({
    nickname: '',
    email: '',
    gender: 'male',
    age: ''
  })
  const [errors, setErrors] = useState({
    nickname: '',
    email: '',
    age: ''
  })

  const [checked, setChecked] = useState(false);

  const handleSwitchChange = (checked) => {
    setChecked(checked);
    form.gender = checked ? 'female' : 'male';
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prevState) => ({ ...prevState, [name]: value }))
  }


  
  useEffect(() => {
    if (!/^[a-zA-Z0-9]{4,}$/.test(form.nickname)) {
      setErrors((prevErrors) => ({ ...prevErrors, nickname: 'Nickname must be at least 4 characters and contain only numbers and letters.' }))
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, nickname: '' }))
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Please enter a valid email address.' }))
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }))
    }

    if (!(form.age > 0 && form.age < 120)) {
      setErrors((prevErrors) => ({ ...prevErrors, age: 'Please enter a valid age.' }))
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, age: '' }))
    }
  }, [form.nickname, form.email, form.gender, form.age])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hasErrors = Object.values(errors).some(error => error !== '')
    if (!hasErrors) {
        setUser(form);
       }
       else {
        console.log(form);
        console.log(errors);
    }
    }
    
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-64 mx-auto">
                <input type="text" name="nickname" value={form.nickname} onChange={handleChange} placeholder="Nickname" required className="p-2 border rounded" />
                {errors.nickname && <p className="text-red-500 text-xs">{errors.nickname}</p>}
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="p-2 border rounded" />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                <Switch
                    onChange={handleSwitchChange}
                    checked={checked}
                    offColor="#808080"
                    onColor="#000000"
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={20}
                    width={48}
                    handleDiameter={30}
                />
                <p placeholder="Gender" className="p-2 border rounded" readOnly>{form.gender}</p>
                <input type="number" name="age" value={form.age} onChange={handleChange} placeholder="Age" required className="p-2 border rounded" />
                
                {errors.age && <p className="text-red-500 text-xs">{errors.age}</p>}
                <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Register</button>
            </form>
        </div>
    )
}

RegistrationForm.propTypes = {
  setUser: PropTypes.func.isRequired
}

export default RegistrationForm