import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';
import { ENDERECO_SERVIDOR } from '../../util/Contantes';
import { mensagemErro, notifyError, notifySuccess } from '../../util/Util';

export default function FormProduto() {

	const { state } = useLocation();
	useEffect(() => {
		if (state != null && state.id != null) {
			axios.get(ENDERECO_SERVIDOR + "/api/produto/" + state.id)
				.then((response) => {
					setIdProduto(response.data.id)
					setCodigo(response.data.codigo)
					setTitulo(response.data.titulo)
					setDescricao(response.data.descricao)
					setValorUnitario(response.data.valorUnitario)
					setTempoEntregaMinimo(response.data.tempoEntregaMinimo)
					setTempoEntregaMaximo(response.data.tempoEntregaMaximo)
					setIdCategoria(response.data.categoria.id)
				})
		}

		axios.get(ENDERECO_SERVIDOR + "/api/categoriaproduto")
       .then((response) => {
           const dropDownCategorias = response.data.map(c => ({ text: c.descricao, value: c.id }));
           setListaCategoria(dropDownCategorias);
       })

	}, [state])


	const [idProduto, setIdProduto] = useState();
	const [codigo, setCodigo] = useState();
	const [titulo, setTitulo] = useState();
	const [descricao, setDescricao] = useState();
	const [valorUnitario, setValorUnitario] = useState();
	const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
	const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();
	const [listaCategoria, setListaCategoria] = useState([]);
	const [idCategoria, setIdCategoria] = useState();
 



	function salvar() {

		let produtoRequest = {
			idCategoria: idCategoria,
			codigo: codigo,
			titulo: titulo,
			descricao: descricao,
			valorUnitario: valorUnitario,
			tempoEntregaMinimo: tempoEntregaMinimo,
			tempoEntregaMaximo: tempoEntregaMaximo
		}

		if (idProduto != null) { //Alteração:
			axios.put(ENDERECO_SERVIDOR + "/api/produto/" + idProduto, produtoRequest)
				.then((response) => { notifySuccess('Produto alterado com sucesso.') })
				.catch((error) => {if (error.response) {
					notifyError(error.response.data.errors[0].defaultMessage)
					} else {
					notifyError(mensagemErro)
					}  })
		} else { //Cadastro:
			axios.post(ENDERECO_SERVIDOR + "/api/produto", produtoRequest)
				.then((response) => { notifySuccess('Produto cadastrado com sucesso.') 
				})
				.catch((error) => { if (error.response) {
					notifyError(error.response.data.errors[0].defaultMessage)
					} else {
					notifyError(mensagemErro)
					} 
				})
		}
	}



	return (
		<div>

			<div style={{ marginTop: '3%' }}>

				<Container textAlign='justified' >

					{idProduto === undefined &&
						<h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
					}
					{idProduto != undefined &&
						<h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
					}
					<Divider />

					<div style={{ marginTop: '4%' }}>

						<Form>

							<Form.Group widths="equal">
								<Form.Input

									required
									fluid
									width={12}
									label='Título'
									maxLength="100"
									placeholder="Informe o título do produto"
									value={titulo}
									onChange={e => setTitulo(e.target.value)}
								/>

								<Form.Input
									required
									fluid
									width={5}
									label='Código do Produto'
									maxLength="100"
									placeholder="Informe o código do produto"
									value={codigo}
									onChange={e => setCodigo(e.target.value)}
								/>

							</Form.Group>

							<Form.Select
								required
								fluid
								tabIndex='3'
								placeholder='Selecione'
								label='Categoria'
								options={listaCategoria}
								value={idCategoria}
								onChange={(e,{value}) => {
									setIdCategoria(value)
								}}
							/>



							<Form.Field
								id='descrição'
								control={TextArea}
								label='Descrição'
								placeholder='Informe a descrição do produto'
								value={descricao}
								onChange={e => setDescricao(e.target.value)}
							/>
							<Form.Group>
								<Form.Input
									required
									fluid
									label='Valor Unitário'
									width={6}
									value={valorUnitario}
									onChange={e => setValorUnitario(e.target.value)}
								/>
								<Form.Input

									fluid
									label='Tempo de Entrega Mínimo em Minutos'
									width={6}
									placeholder="30"
									value={tempoEntregaMinimo}
									onChange={e => setTempoEntregaMinimo(e.target.value)}
								/>
								<Form.Input

									fluid
									label='Tempo de Entrega Máximo em Minutos'
									width={6}
									placeholder="40"
									value={tempoEntregaMaximo}
									onChange={e => setTempoEntregaMaximo(e.target.value)}
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
								//onClick={this.listar}
								>
									<Icon name='reply' />
									<Link to={'/list-produto'}>Listar</Link>

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
