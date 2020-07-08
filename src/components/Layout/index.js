import React from 'react'
import Titulo from '../Titulo'
import { Fundo, Nav } from './style'
import Formulario from '../Formulario'


function Layout(){
    return(

        <Fundo>
         
                <Titulo />
                <Formulario />
        
        </Fundo>
    )
}

export default Layout