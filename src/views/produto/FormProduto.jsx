import axios from "axios";
import React from "react";
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';

class FormProduto extends React.Component{

	state = {

		titulo: null,
		codigo: null,
		descricao: null,
		valorUnitario: null,
		tempodeEntregaMinimo: null,
		tempodeEntregaMaximo: null
	}
 
	salvar = () => {

		let ProdutoRequest = {

			titulo: this.state.titulo,
			codigodoProduto: this.state.codigo,
			descricao: this.state.descricao,
			valorUnitario: this.state.valorUnitario,
			tempodeEntregaMinimoemMinutos: this.state.tempodeEntregaMinimo,
			tempodeEntregaMaximoemMinutos: this.state.tempodeEntregaMaximo
		}
	
		axios.post("http://localhost:8082/api/Produto", ProdutoRequest)
		.then((response) => {
			console.log('Produto cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao incluir um Produto.')
		})
	}


    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='Titulo'
										maxLength="100"
										value={this.state.titulo}
										onChange={e => this.setState({titulo: e.target.value})} 
									/>

									<Form.Input
                                        required
										fluid
										label='Código do Produto'>
										<InputMask 
										width={8}
										value={this.state.codigo}
										onChange={e => this.setState({codigo: e.target.value})}
										>   
                                        </InputMask>

									</Form.Input>

								</Form.Group>
								
                                   <Form.Field
                                         id='form-textarea-control-Descricao'
                                         control={TextArea}
                                         label='Descrição'
                                         placeholder='Descreva o Produto'
										value={this.state.descricao}
										onChange={e => this.setState({descricao: e.target.value})} 
                                    />
                    
                                <Form.Group>
									<Form.Input
                                        required
										fluid
										label='Valor Unitário'
                                        width={6}
										value={this.state.valorUnitario}
										onChange={e => this.setState({valorUnitario: e.target.value})} 
										>
									</Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Tempo de Entrega Mínimo em Minutos'
                                        width={6}
										value={this.state.tempodeEntregaMinimo}
										onChange={e => this.setState({tempodeEntregaMinimo: e.target.value})} 
										>
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Tempo de Entrega Maximo em Minutos'
                                        width={6}
										value={this.state.tempodeEntregaMaximo}
										onChange={e => this.setState({tempodeEntregaMaximo: e.target.value})}
										>
                                    </Form.Input>

								</Form.Group>

								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>

									<Button
										type="button"
										inverted
										circular
										icon
										labelPosition='left'
										color='orange'
										onClick={this.listar}
										>
										<Icon name='reply' />
										<Link to={'/list-Produto'}> Voltar</Link>

									</Button>

									<Container textAlign='right'>
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={this.salvar}
										
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
}

export default FormProduto ;