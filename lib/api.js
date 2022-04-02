import axios from "axios";

const api = axios.create({ baseURL: 'https://phones--melhorcom.repl.co', headers: { cpf: '10915000610' } })

export default api