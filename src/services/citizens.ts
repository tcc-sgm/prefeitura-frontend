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

export const findIPTU = async function findIPTU(cpf:string, inscricao: string) {
    try {
        const resultado = await api.get(`/cidadao/imposto/iptu/cpf/${cpf}/inscricao/${inscricao}`);
        
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

export const findITR = async function findITR(cpf:string, inscricao: string) {
    const resultado = await api.get(`/cidadao/imposto/itr/cpf/${cpf}/inscricao/${inscricao}`);
    if (resultado.status === 200) {
        let itens: Array<string[]> = [];
        const dados: Array<IDadosImposto> = resultado.data;
        dados.forEach(element => {
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
        });
        
        return itens;
    }
    return undefined;
}