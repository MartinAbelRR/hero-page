import { useContext } from "react";
import { useNavigate } from "react-router"
import { AuthContext } from "../context/AuthContext";



export const LoginPage = () => {

  const { login, logout } = useContext( AuthContext );
  const navigate = useNavigate();



  const onLogin = () => {

    const lasPath = localStorage.getItem('lastPath') || '/';

    login( 'Martin Reyes' );

    navigate( lasPath, {
      replace: true
    });
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />

      <button 
        className='btn btn-primary'
        onClick={ onLogin }
      >
        Login
      </button>
    </div>
  )
}
