import axios from "axios";
import React, { useEffect, useState } from "react";
import { ENDERECO_SERVIDOR } from '../../util/Contantes';
export default function FormProduto() {

    const { state } = useLocation();
    useEffect(() => {
		if (state != null && state.id != null) {
			axios.get(ENDERECO_SERVIDOR + "/api/categoriaproduto/" + state.id)
				.then((response) => {
					setIdProduto(response.data.id)
					setDescricao(response.data.descricao)
				})
		}

		axios.get(ENDERECO_SERVIDOR + "/api/categoriaproduto")
       .then((response) => {
           const dropDownCategorias = response.data.map(c => ({ text: c.descricao, value: c.id }));
           setListaCategoria(dropDownCategorias);
       })

	}, [state])

	const [descricao, setDescricao] = useState();
	
    function salvar() {

		let categoriaProdutoRequest = {
			idCategoria: idCategoria,
			descricao: descricao,
		}

		if (idProduto != null) { //Alteração:
			axios.put(ENDERECO_SERVIDOR + "/api/categoriaproduto/" + idProduto, categoriaProdutoRequest)
				.then((response) => { console.log('Produto alterado com sucesso.') })
				.catch((error) => { console.log('Erro ao alter um produto.') })
		} else { //Cadastro:
			axios.post(ENDERECO_SERVIDOR + "/api/categoriaproduto", categoriaProdutoRequest)
				.then((response) => { console.log('Produto cadastrado com sucesso.') })
				.catch((error) => { console.log('Erro ao incluir o produto.') })
		}
	}

    return (
		<div>
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified' >
                    
					{idCategoria === undefined &&
						<h2> <span style={{ color: 'darkgray' }}> Categoria Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
					}
					{idCategoria != undefined &&
						<h2> <span style={{ color: 'darkgray' }}> Categoria Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
					}
                    <Divider />
                    <div style={{ marginTop: '4%' }}>
                        <Form>

                            <Form.Group widths="equal">
                                <Form.Input

                                    required
                                    fluid
                                    width={12}
                                    label='Descrição'
                                    maxLength="100"
                                    placeholder="Informe a descriçã da categoria do produto"
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)}
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