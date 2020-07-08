import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        background-color: var(--fundo);
    }

    *, button, input {
        border: 0;
        outline: 0; 
        font-family: 'Roboto', sans-serif; 
    }

    html, body, #root{
        height: 100%;
    }

    :root {
        --fundo: #2A9D8F;
        --texto: #E9C46A;
        --box: rgba(244, 162, 97, 0.9);
        --pesquisa: #393939;
        --pesquisaClick: #1f1f1f;
        --scrollBase: rgba(231, 111, 81, 0.8);
        --scrollButton: #F84B20;
        --separador: rgba(255, 113, 0, 0.3);;
    }
`;