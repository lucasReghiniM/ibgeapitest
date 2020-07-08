import React, { useState, useEffect } from 'react'
import {Grid, Titulo, Formulario} from './style'
import { Api } from '../../services/Api'
import Axios from 'axios'





function EscolhaLocal(){
    //estado= chama-valor  / setEstado = muda
    const [estado, setEstado] = useState("")
    const [options, setOptions] = useState([ ])

    useEffect(() => {
        //oque executa
        getEstados()
    }, [])

    const getEstados = () => {
        try {
            
            Api.get(
             "v1/localidades/estados"
            ).then((res) => {
                setOptions(res.data)
                console.log(res)
            })
        }catch(error){
            alert("Um erro ocorreu, tente novamente")
        }}

        //get da cidade
        const [cidade, setcidade] = useState("")
        const [options2, setOptions2] = useState([ ])

        useEffect(() => {
            //oque executa
            getCidade()
        }, [])

        const getCidade = () => {
            //v1/localidades/estados/{UF}/municipios
            //v1/localidades/municipios
            try {
                Api.get(
                    "v1/localidades/municipios"
                //  "v1/localidades/estados/"
                //  + setEstado.sigla 
                //  + "/municipios"



                ).then((res) => {
                    setOptions2(res.data)
                    console.log(res)
                })
            }catch(error){
                alert("Um erro ocorreu, tente novamente")
            }}

    return(
    <Grid>
            <Titulo> Escolha seu estado </Titulo>
            <Formulario 
                value={estado}
                onChange={event => setEstado(event.target.value)}
            >
                <option value="" hidden >Selecione o seu estado</option>
                {options.map(option => {
                    return (
                        <option value={option.id}>{option.nome}</option>
                    )
                })}
            </Formulario>  

            <Titulo> Escolha sua cidade </Titulo>
            <Formulario 
                className=" "
                value={cidade}
                onChange={event => setcidade(event.target.value)}
            >
                <option value="" hidden >Selecione sua cidade</option>
                {options2.map(option => {
                    return (
                        <option value={option.id}>{option.nome}</option>
                    )
                })}
            </Formulario>  
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    
    </Grid>
    )
}

export default EscolhaLocal