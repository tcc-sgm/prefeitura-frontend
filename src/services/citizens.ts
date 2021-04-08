import api from './api';

interface IDadosImposto {
    proprietario: string;
    cpfCnpj: string;
    endereco: string;
    numero: number;
    cep: string;
    cidade: string;
    estado: string;
    tipoCasa: string;
    tipoImposto: string;
    valor: number;
    tamanho: number;
    ano: number;
    inscricao: number;
}

export const findIPTU = async function findIPTU(inscricao: string) {
    try {
        const token = localStorage.getItem('@Prefeitura:token');
        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "Authorization": token
            }
        };
        const user = localStorage.getItem('@Prefeitura:user');
        const { cpf } = user ? JSON.parse(user) : '';
        console.log(cpf);
        
        const resultado = await api.get(`/impostos/iptu/cpf/${cpf}/inscricao/${inscricao}`, header);
        
        if (resultado.status === 200) {
            let itens: Array<string[]> = [];
            const dados: Array<IDadosImposto> = resultado.data;
            dados.forEach(element => {
                itens.push([element.inscricao.toString(), 
                            element.tipoImposto,
                            element.tamanho.toString(), 
                            element.ano.toString(), 
                            element.valor.toString(), 
                            element.cidade,
                            element.estado,
                            element.cep]);
            });
            
            return itens;
        }
    } catch (err) {
        return undefined;
 
    }
    return undefined;
}

export const findITR = async function findITR(inscricao: string) {
   
    const user = localStorage.getItem('@Prefeitura:user');
    const { cpf } = user ? JSON.parse(user) : '';
    const resultado = await api.get(`/impostos/itr/cpf/${cpf}/inscricao/${inscricao}`);
   
    if (resultado.status === 200) {
        let itens: Array<string[]> = [];
        const dados: Array<IDadosImposto> = resultado.data;
            dados.forEach(element => {
                itens.push([element.inscricao.toString(), 
                            element.tipoImposto,
                            element.tamanho.toString(), 
                            element.ano.toString(), 
                            element.valor.toString(), 
                            element.cidade,
                            element.estado,
                            element.cep]);
            });
        return itens;
    }
    return undefined;
}