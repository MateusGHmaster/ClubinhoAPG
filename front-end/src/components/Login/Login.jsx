import Logo from '../General/LogoLogin';
import Input from '../General/Input';
import Button from '../General/Button';
import { useState, /* useContext */ } from 'react';
import { useNavigate } from 'react-router-dom';
/* import { AuthContext } from '../../context/AuthContext'; */
import LoadingSpin from 'react-loading-spin';
import axios from 'axios';
import styled from 'styled-components';


export default function Login () {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    /* const { setToken, setUser } = useContext(AuthContext); */

    function loginUser () {

        setLoading(true);

        const promise = axios.post ('http://localhost:5000/login', {

            username,
            password

        });

        promise.then (response => {

            setLoading(false);

            const { data } = response;
            console.log(data);

            /* setToken(data.token);
            setUser(data); */

            navigate('/home'); 

        })

        promise.catch (e => {

            setLoading(false);

            console.log(e);

            alert('Sentimos muito, mas correu um erro. Por favor, tente novamente.   ( 0 _ 0 )');
        
        })
    }

    return (
        <LoginBody>
            <Logo />
            <LoginContainer>
                <Input type={'text'} placeholder={'Usuário'} value={username} onChange={(e) => setUsername(e.target.value)}/>
                <Input type={'password'} placeholder={'Senha'} value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button onClick={loginUser}>
                    {loading ? (<LoadingSpin primaryColor={'#FFFFFF'} secondaryColor={'transparent'} size={'35px'} width={8} />
                        ) : (
                            'Entrar'        
                        ) 
                    }
                </Button>
                <StyledLink href='https://api.whatsapp.com/send?phone=5592992924104' target='_blank'>Não tem uma conta? Peça aqui!</StyledLink>
            </LoginContainer>
        </LoginBody>
    );

}

const LoginBody = styled.div`

    height: 100vh;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

const LoginContainer = styled.div`

    height: 100vh;
    display: flex;
    margin-top: -250px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;

`;

const StyledLink = styled.a`

    height: 15px;
    width: 340px;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF;

`;