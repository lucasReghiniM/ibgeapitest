import styled from 'styled-components';

export const Grid = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: flex-start; 
    option{
        background-color: var(--box);
        
    }
`;

export const Titulo = styled.div`
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 28px;
color: var(--texto);
margin: 15px 0 5px 0;

`;

export const Formulario = styled.select`
    cursor: pointer;
    width: 303px;
    height: 33px;
    margin: 10px 0 10px 0;
    background-color: var(--box);
    color: var(--pesquisa);
    font-weight: bold;
    border: 6px solid transparent;
    border-radius: 5px;
    box-shadow: 1px 6px 5px rgba(0,0,0,0.3);


    :hover{
        color: var(--pesquisaClick);
    }

    
    
`;

