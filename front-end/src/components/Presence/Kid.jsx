import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import infoIcon from '../../assets/info.png';
import Information from '../Information/Information';

export default function Kid ({ id, name }) {
    
    const navigate = useNavigate();

    return (
        
        <KidContainer>
            <KidName>{name}</KidName>
            <KidInfo src={infoIcon} alt={'info'} onClick={()=> {navigate(`/info/${id}`,{state: { id: id }})}} />
        </KidContainer>
    
    );

}

const KidContainer = styled.div`

    position: relative;

    height: 45px;
    width: 390px;

    padding-left: 5px;
    padding-right: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid transparent;
    border-radius: 8px;

    background-color: white;

`;

const KidName = styled.div`

    position: absolute;

    height: 25px;
    width: 275px;

    display: flex;
    align-items: center;

    font-size: 16px;

`;

const KidInfo = styled.img`

    height: 20px;
    width: 20px;

    display: flex;
    align-items: center;

    margin-left: 370px;

    z-index: 1;

`;