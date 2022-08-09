import Button from '../General/Button';
import Logo from '../General/LogoLogin';
import LoadingSpin from 'react-loading-spin';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

export default function Login () {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    return (

        <HomeBody>
            <Logo />
            <HomeContainer>
                <Button onClick={() => {
                        navigate('/register')
                        setLoading(true);
                    }}>
                        {loading ? (<LoadingSpin primaryColor={'#FFFFFF'} secondaryColor={'transparent'} size={'35px'} width={8} />
                            ) : (
                                'Registrar Criança'        
                            ) 
                        }
                </Button>
                <Button onClick={() => {
                        navigate('/presence')
                        setLoading(true);
                    }}>
                        {loading ? (<LoadingSpin primaryColor={'#FFFFFF'} secondaryColor={'transparent'} size={'35px'} width={8} />
                            ) : (
                                'Marcar Presença'        
                            ) 
                        }
                </Button>
            </HomeContainer>
        </HomeBody>
        
    );

}

const HomeBody = styled.div`

    margin-top: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const HomeContainer = styled.div`

    position: absolute;

    height: 100vh;

    display: flex;
    margin-top: 500px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    gap: 15px;

    font-family: 'Roboto', sans-serif;

`;