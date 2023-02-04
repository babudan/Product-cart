import { useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'

function Signup() {

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = () => {
        console.log(phone, password ,name)
        if(name && phone && password) {
        axios.post('http://localhost:5000/add-user',
            {    
                phone: phone,
                password: password,
                name : name
            })
            .then(res => {
                console.log(res.data)
                if (res.data.code === 200) {
                    alert('Signup success.')
                } else {
                    alert('Error.')
                }
            }).catch(err => {
                console.log(err)
            })
        } else {
            alert('plss put some value')
        }
    }

    return (<>
        <h1 className="center"> SIGNUP </h1>
        <div className="outcard">
            Phone
            <input
                onChange={(e) => {
                    setPhone(e.target.value)
                }}
                value={phone}
                className="inputs"
                type="text" /> <br /> <br />
            Password
            <input
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                value={password}
                className="inputs" type="password" /> <br /> <br />
                 Name 
                <input
                onChange={(e) => {
                    setName(e.target.value)
                }}
                value={name}
                className="inputs"
                type="text" />  <br /> <br />
            <button
                onClick={handleSubmit}
                className="btns"> SUBMIT </button>
            <Link style={{ textAlign: 'center', display: 'block', marginTop: '5px' }}
                to={'/login-user'}> SIGN IN </Link>
        </div>
    </>
    )
}


export default Signup