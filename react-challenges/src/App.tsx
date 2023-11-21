import './App.css'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import { 
  useState, 
  ChangeEvent 
} from 'react'

const App = () => {
  const [isAuth, setIsAuth ] = useState(false)
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
    repeat_password: '',
    first_name: '',
    last_name: '',
    phone: '',
    company: ''
  })

  const handleSignUp = () => {
      
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
      { !isAuth ? (
        <RegisterForm 
          isAuth={isAuth}
          setIsAuth={setIsAuth} 
        />
      ) : (
          <LoginForm 
            isAuth={isAuth}
            setIsAuth={setIsAuth} 
          />
        )
      } 
    </div>
  )
}

export default App
