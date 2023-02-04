import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'


function Signin() {
    const navigate = useNavigate()
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log(phone, password)
        axios.post('http://localhost:5000/login-user',
            {
                phone: phone,
                password: password
            })
            .then(res => {
                console.log(res.data)

                if (res.data.code === 500) {
                    alert('User Not Found')
                }
                if (res.data.code === 401) {
                    alert('Invalid credientials')
                }
                if (res.data.code === 404) {
                    alert('Password is wrong')
                }
                if (res.data.code === 200) {
                    // move to home
                    navigate('/')
                    localStorage.setItem('TOKEN', res.data.token)
                    localStorage.setItem('phone', res.data.phone)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (<>
        <h1 className="center"> SIGNIN </h1>
        <div className="outcard">
            phone
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
            <button
                onClick={handleSubmit}
                className="btns"> SUBMIT </button>
            <Link style={{ textAlign: 'center', display: 'block', marginTop: '5px' }}
                to={'/add-user'}> SIGN UP </Link>
        </div>
    </>
    )
}


export default Signin