import axios from 'axios'

const Api = axios.create({ baseURL: "https://servicodados.ibge.gov.br/api/" });

export { Api };