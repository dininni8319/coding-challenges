import '../App.css'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { cleanUser, User } from '../utility-functions'
import { useNavigate } from 'react-router-dom'

import { 
  useState, 
  ChangeEvent,
  FormEvent,
  FormEventHandler,
} from 'react'

const Auth = () => {
  const [isAuth, setIsAuth ] = useState(false)
  const [ formData, setFormData ] = useState({
    floating_email: "",
    floating_password: "",
    repeat_password: "",
    floating_first_name: "",
    floating_last_name: "",
    floating_phone: "",
    floating_company: "",
  })

  const navigate = useNavigate()

  const handleSignUp: FormEventHandler<HTMLFormElement> = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault() 

    if (isAuth) {
      
      const { 
        floating_email, 
        floating_password,
        repeat_password, 
        floating_first_name, 
        floating_last_name,
        floating_company,
        floating_phone,
      } = formData

      const user = {
        email: floating_email,
        password: floating_password,
        password_repeat: repeat_password,
        first_name: floating_first_name,
        last_name: floating_last_name,
        company: floating_company,
        phone: floating_phone,
      }

      localStorage.setItem(
        "user", JSON.stringify(user)
      )
    } else {
      const { floating_email, floating_password } = formData
      const user = {
        email: floating_email,
        password: floating_password,
      }

      const cleanFormData = cleanUser(user)
      
      const storedUser: string | null = localStorage.getItem("user");
      const getUser: User  = storedUser ? JSON.parse(storedUser) : null;
      if (
         getUser.email === cleanFormData.email &&
         getUser.password === cleanFormData.password
      ) {
        navigate("/home")
      } else {
        alert("Please check your credentials")
      }
    }
  }
  
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div className='pt-10 full-height'>
      { isAuth ? (
        <RegisterForm 
          isAuth={isAuth}
          setIsAuth={setIsAuth} 
          inputChange={handleInputChange}
          handleSignUp={handleSignUp}
        />
      ) : (
          <LoginForm 
            isAuth={isAuth}
            setIsAuth={setIsAuth}
            inputChange={handleInputChange} 
            handleSignUp={handleSignUp}
          />
        )
      } 
    </div>
  )
}

export default Auth
