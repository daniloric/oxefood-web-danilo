import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon, Select } from 'semantic-ui-react';
import { ENDERECO_SERVIDOR } from '../../util/Contantes';
import { mensagemErro, notifyError, notifySuccess } from '../../util/Util';

const paisesOptions = [
	{ key: 'AC', text: 'AC', value: 'AC' },
	{ key: 'AL', text: 'AL', value: 'AL' },
	{ key: 'AM', text: 'AM', value: 'AM' },
	{ key: 'AP', text: 'AP', value: 'AP' },
	{ key: 'BA', text: 'BA', value: 'BA' },
	{ key: 'DF', text: 'DF', value: 'DF' },
	{ key: 'ES', text: 'ES', value: 'ES' },
	{ key: 'GO', text: 'GO', value: 'GO' },
	{ key: 'MA', text: 'MA', value: 'MA' },
	{ key: 'MG', text: 'MG', value: 'MG' },
	{ key: 'MS', text: 'MS', value: 'MS' },
	{ key: 'MT', text: 'MT', value: 'MT' },
	{ key: 'PA', text: 'PA', value: 'PA' },
	{ key: 'PB', text: 'PB', value: 'PB' },
	{ key: 'PI', text: 'PI', value: 'PI' },
	{ key: 'PE', text: 'PE', value: 'PE' },
	{ key: 'PR', text: 'PR', value: 'PR' },
	{ key: 'RJ', text: 'RJ', value: 'RJ' },
	{ key: 'RN', text: 'RN', value: 'RN' },
	{ key: 'RO', text: 'RO', value: 'RO' },
	{ key: 'RR', text: 'RR', value: 'RR' },
	{ key: 'RS', text: 'RS', value: 'RS' },
	{ key: 'SC', text: 'SC', value: 'SC' },
	{ key: 'SE', text: 'SE', value: 'SE' },
	{ key: 'SP', text: 'SP', value: 'SP' },
	{ key: 'TO', text: 'TO', value: 'TO' },

]

export default function FormEntregador() {

	const { state } = useLocation();

	useEffect(() => {
		if (state != null && state.id != null) {
			axios.get(ENDERECO_SERVIDOR + "/api/entregador/" + state.id)
				.then((response) => {
					setIdEntregador(response.data.id)
					setNome(response.data.nome)
					setCpf(response.data.cpf)
					setRg(response.data.rg)
					setDataNascimento(formatarData(response.data.dataNascimento))
					setFoneCelular(response.data.foneCelular)
					setFoneFixo(response.data.foneFixo)
					setQtdEntregasRealizadas(response.data.qtdEntregasRealizadas)
					setValorFrete(response.data.valorFrete)
					setEnderecoRua(response.data.enderecoRua)
					setEnderecoNumero(response.data.enderecoNumero)
					setEnderecoBairro(response.data.enderecoBairro)
					setEnderecoCidade(response.data.enderecoCidade)
					setEnderecoCep(response.data.enderecoCep)
					setEnderecoUf(response.data.enderecoUf)
					setEnderecoComplemento(response.data.enderecoComplemento)
					setAtivo(response.data.ativo)
				})
		}
	}, [state])


	const [idEntregador, setIdEntregador] = useState();
	const [nome, setNome] = useState();
	const [cpf, setCpf] = useState();
	const [rg, setRg] = useState();
	const [dataNascimento, setDataNascimento] = useState();
	const [foneCelular, setFoneCelular] = useState();
	const [foneFixo, setFoneFixo] = useState();
	const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
	const [valorFrete, setValorFrete] = useState();
	const [enderecoRua, setEnderecoRua] = useState();
	const [enderecoNumero, setEnderecoNumero] = useState();
	const [enderecoBairro, setEnderecoBairro] = useState();
	const [enderecoCidade, setEnderecoCidade] = useState();
	const [enderecoCep, setEnderecoCep] = useState();
	const [enderecoUf, setEnderecoUf] = useState();
	const [enderecoComplemento, setEnderecoComplemento] = useState();
	const [ativo, setAtivo] = useState()

	function salvar (){

		let entregadorRequest = {

			nome: nome,
			cpf: cpf,
			rg: rg,
			dataNascimento: dataNascimento,
			foneCelular: foneCelular,
			foneFixo: foneFixo,
			qtdEntregasRealizadas: qtdEntregasRealizadas,
			valorFrete: valorFrete,
			enderecoRua: enderecoRua,
			enderecoNumero: enderecoNumero,
			enderecoBairro: enderecoBairro,
			enderecoCidade: enderecoCidade,
			enderecoCep: enderecoCep,
			enderecoUf: enderecoUf,
			enderecoComplemento: enderecoComplemento,
			ativo: ativo
		}

		if (idEntregador != null) { //Alteração:
			axios.put(ENDERECO_SERVIDOR + "/api/entregador/" + idEntregador, entregadorRequest)
				.then((response) => {notifySuccess('Entregador alterado com sucesso.') })
				.catch((error) => { if (error.response) {
					notifyError(error.response.data.errors[0].defaultMessage)
					} else {
					notifyError(mensagemErro)
					} })
		} else { //Cadastro:
			axios.post(ENDERECO_SERVIDOR + "/api/entregador", entregadorRequest)
				.then((response) => { notifySuccess('Entregador alterado com sucesso.') })
				.catch((error) => { if (error.response) {
					notifyError(error.response.data.errors[0].defaultMessage)
					} else {
					notifyError(mensagemErro)
					} })
		}
	}

	function formatarData(dataParam){

        if (dataParam == null || dataParam == '') {
            return ''
        }
        
        let dia = dataParam.substr(8,2);
        let mes = dataParam.substr(5,2);
        let ano = dataParam.substr(0,4);
        let dataFormatada = dia + '/' + mes + '/' + ano;

        return dataFormatada
    };


	return (
		<div>

			<div style={{ marginTop: '3%' }}>

				<Container textAlign='justified' >

					{idEntregador === undefined &&
						<h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
					}
					{idEntregador != undefined &&
						<h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
					}


					<Divider />

					<div style={{ marginTop: '4%' }}>

						<Form>

							<Form.Group>

								<Form.Input
									required
									fluid
									width={10}
									label='Nome'
									maxLength="100"
									value={nome}
									onChange={e => setNome(e.target.value)}
								/>

								<Form.Input
									required
									fluid
									width={5}
									label='CPF'>
									<InputMask
										mask="999.999.999-99"
										value={cpf}
										onChange={e => setCpf(e.target.value)}
									/>
								</Form.Input>

								<Form.Input
									fluid
									width={5}
									label='RG'>
									<InputMask
										mask="9999999"
										value={rg}
										onChange={e => setRg(e.target.value)}
									/>
								</Form.Input>

							</Form.Group>

							<Form.Group>

								<Form.Input
									fluid
									label='Data Nascimento'
									width={3}
								>
									<InputMask
										mask="99/99/9999"
										maskChar={null}
										placeholder="Ex: 20/03/1985"
										value={dataNascimento}
										onChange={e => setDataNascimento(e.target.value)}
									/>
								</Form.Input>

								<Form.Input
									required
									fluid
									label='Fone Celular'
									width={4}>
									<InputMask
										mask="(99) 9999.9999"
										value={foneCelular}
										onChange={e => setFoneCelular(e.target.value)}
									/>
								</Form.Input>

								<Form.Input
									fluid
									label='Fone Fixo'
									width={4}>
									<InputMask
										mask="(99) 9999.9999"
										value={foneFixo}
										onChange={e => setFoneFixo(e.target.value)}
									/>
								</Form.Input>

								<Form.Input
									fluid
									label='QTD Entregas Realizadas'
									width={3}
									value={qtdEntregasRealizadas}
									onChange={e => setQtdEntregasRealizadas(e.target.value)}
								/>

								<Form.Input
									fluid
									label='Valor por Frete'
									width={3}
									value={valorFrete}
									onChange={e => setValorFrete(e.target.value)}
								/>

							</Form.Group>

							<Form.Group>
								<Form.Input
									fluid
									label="Rua"
									width={13}
									value={enderecoRua}
									onChange={e => setEnderecoRua(e.target.value)}
								/>
								<Form.Input
									fluid
									label="Número"
									width={4}
									value={enderecoNumero}
									onChange={e => setEnderecoNumero(e.target.value)}
								/>
							</Form.Group>

							<Form.Group widths="equal">
								<Form.Input
									fluid
									label="Bairro"
									width={7}
									value={enderecoBairro}
									onChange={e => setEnderecoBairro(e.target.value)}
								/>
								<Form.Input
									fluid
									label="Cidade"
									width={7}
									value={enderecoCidade}
									onChange={e => setEnderecoCidade(e.target.value)}
								/>
								<Form.Input
									fluid
									label="CEP"
									width={3}>
									<InputMask
										mask="99999-999"
										value={enderecoCep}
										onChange={e => setEnderecoCep(e.target.value)}
									/>
								</Form.Input>


							</Form.Group>
							<Form.Group widths='equal'>
								<Form.Field
									fluid
									control={Select}
									label='UF'
									options={paisesOptions}
									placeholder='Selecione'
									value={enderecoUf}
									onChange={(e, { value }) => {
										setEnderecoUf(value)
									}}
								/>
							</Form.Group>

							<Form.Input
								fluid
								label="Complemento"
								value={enderecoComplemento}
								onChange={e => setEnderecoComplemento(e.target.value)}
							/>

							<Form.Group inline>
								<label>Ativo:</label>
								<Form.Radio

									label='Sim'
									value='sim'
									checked={ativo}
									onChange={e => setAtivo(true)}
								/>
								<Form.Radio

									label='Não'
									value='nao'
									checked={!ativo}
									onChange={e => setAtivo(false)}
								/>

							</Form.Group>

							<Form.Group widths='equal' style={{ marginTop: '4%' }} className='form--empresa-salvar'>

								<Button
									type="button"
									inverted
									circular
									icon
									labelPosition='left'
									color='orange'
									//onClick={()=>listar()}
								>
									<Icon name='reply' />
									<Link to={'/list-entregador'}>Voltar</Link>
								</Button>

								<Container textAlign='right'>

									<Button
										inverted
										circular
										icon
										labelPosition='left'
										color='blue'
										floated='right'
										onClick={() => salvar()}
									>
										<Icon name='save' />
										Salvar
									</Button>

								</Container>

							</Form.Group>

						</Form>
					</div>
				</Container>
			</div>
		</div>
	)
}

