/* import { AuthContext } from '../../context/AuthContext'; */
import { /* useContext ,*/ useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Kid from './Kid';
import styled from 'styled-components';
import axios from 'axios';

export default function Presence () {

    const [kids, setKids] = useState ([]);
    /*const { token } = useContext(AuthContext);*/
    
    const navigate = useNavigate();

    /* const config = {

        headers: {

            Authorization: `Bearer ${token}` 
        
        }

    };  */

    function getKidsList () {

        const promise = axios.get ('http://localhost:5000/kids');
        promise.then (response => {
            const {data} = response;
            setKids(data);
        })
        promise.catch (e => {
            console.log(e);
            alert ('Algo deu errado. Vamos tentar de novo.  ╭( ･ㅂ･)و');
            navigate('/');
        });

    }

    useEffect(() => {

        getKidsList();

    }, []);

    function showKidsList () {

        if(kids.length > 0) {
            return kids.map(kid => {
                const { id, name} = kid;
                return (
                    <>
                        <Kid id={id} name={name} />
                    </>
                );
            });
        }
    }

    return (

        <PresenceBody>
            <Title>Presença</Title>
            <KidsList>
                {showKidsList()}
            </KidsList>
        </PresenceBody>
    );

}

const PresenceBody = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

`;

const KidsList = styled.div`

    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 5px;

`;

const Title = styled.div`

    margin-top: 60px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;

    color: #123524;  

`;