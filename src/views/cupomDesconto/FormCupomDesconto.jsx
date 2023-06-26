import axios from "axios";
import React from "react";
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ENDERECO_SERVIDOR } from '../../util/Contantes';


class FormCupomDesconto extends React.Component{

	state = {

		codigoDesconto: null,
		percentualDesconto: null,
		valorDesconto: null,
		valorMinimoPedidoPermitido: null,
		quantidadeMaximaUso: null,
		inicioVigencia: null,
        fimVigencia: null
	}
 

	salvar = () => {

		let cupomDescontoRequest = {

			codigoDesconto: this.state.codigoDesconto,
			percentualDesconto: this.state.percentualDesconto,
			valorDesconto: this.state.valorDesconto,
			valorMinimoPedidoPermitido: this.state.valorMinimoPedidoPermitido,
			quantidadeMaximaUso: this.state.quantidadeMaximaUso,
			inicioVigencia: this.state.inicioVigencia,
            fimVigencia: this.state.fimVigencia
		}
	
		axios.post(ENDERECO_SERVIDOR + "/api/cupomDesconto", cupomDescontoRequest)
		.then((response) => {
			console.log('Desconto cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao incluir um desconto.')
		})
	}



    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Cupom de Desconto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths="equal">
									<Form.Input
										required
										fluid
                                        width={8}
										label='Código do cupom'
										maxLength="100"
										value={this.state.codigoDesconto}
										onChange={e => this.setState({codigoDesconto: e.target.value})}
									/>
                                    <Form.Input
										fluid
                                        width={5}
										label='% do desconto'
										maxLength="100"
										value={this.state.percentualDesconto}
										onChange={e => this.setState({percentualDesconto: e.target.value})}
									/>
                                    <Form.Input
                                        fluid
                                        label='Valor do cupom'
                                        width={5}
										value={this.state.valorDesconto}
										onChange={e => this.setState({valorDesconto: e.target.value})}
									/>
								</Form.Group>
								
                                <Form.Group>
                                     <Form.Input
                                        fluid
                                        label='Valor Mínimo do Pedido'
                                        width={9}
										value={this.state.valorMinimoPedidoPermitido}
										onChange={e => this.setState({valorMinimoPedidoPermitido: e.target.value})}
										/>
                                    <Form.Input
                                        fluid
                                        label='Qtd máxima de Uso'
                                        width={9}
										value={this.state.quantidadeMaximaUso}
										onChange={e => this.setState({quantidadeMaximaUso: e.target.value})}
										/>
                           
								</Form.Group>

                                <Form.Group>
                                    <Form.Input
                                        fluid
                                        label='Data Incial'
                                        width={4} 
										>
                                        <InputMask 
                                            mask="99/99/9999" 
                                            maskChar={null}
                                            placeholder="Ex: 20/03/2023"
                                            value={this.state.inicioVigencia}
                                            onChange={e => this.setState({inicioVigencia: e.target.value})}
                                        />
                                    </Form.Input>
                                    <Form.Input
                                        fluid
                                        label='Data Final'
                                        width={4}
                                    >
                                        <InputMask 
                                            mask="99/99/9999" 
                                            maskChar={null}
                                            placeholder="Ex: 03/04/2023"
                                            value={this.state.fimVigencia}
                                            onChange={e => this.setState({fimVigencia: e.target.value})}
										/>
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
										<Link to={'/list-cupomDesconto'}>Listar</Link>
										
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

export default FormCupomDesconto;