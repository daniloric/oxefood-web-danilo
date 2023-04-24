import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

class FormEntregador extends React.Component{

	state = {
		nome: null,
		cpf: null,
		rg: null,
		dTNascimento: null,
		foneCelular: null,
		foneFixo: null,
		QTDentregasRealizadas: null,
		valorPorFrete: null,
		numero: null,
		bairro: null,
		cidade: null,
		cpf: null,
		uf: null,
		uf: null,
		complemente: null,
		ativa: null,
		sim: null,
		nao: null,
	}

	salvar = () => {

	let entregadoreRequest = {

		nome: this.state.nome,
		cpf: this.state.cpf,
		rg: this.state.rg,
		dTNascimento: this.state.dTNascimento,
		foneCelular: this.state.foneCelular,
		foneFixo: this.state.foneFixo,
		QTDentregasRealizadas: this.state.v,
		valorPorFrete: this.state.valorPorFrete,
		numero: this.state.numero,
		bairro: this.state.bairro,
		cidade: this.state.cidade,
		cpf: this.state.cpf,
		uf: this.state.uf,
		uf: this.state.uf,
		complemente: this.state.complemente,
		ativa: this.state.ativa,
		sim: this.state.sim,
		nao: this.state.nao,

	}

	axios.post("http://localhost:8082/api/entregador", entregadorRequest)
	.then((response) => {
		console.log('Entregador cadastrado com sucesso.')
	})
	.catch((error) => {
		console.log('Erro ao incluir o um Entregador.')
	})
}


    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='Nome'
										maxLength="100"
										value={this.state.nome}
										onChange={e => this.setState({nome: e.target.value})}
									/>

									<Form.Input
										required
										fluid
										label='CPF'
										width={6}>
										<InputMask 
										mask="999.999.999-99"
										value={this.state.cpf}
										onChange={e => this.setState({cpf: e.target.value})} 
				/> 
									</Form.Input>

                                    <Form.Input
										fluid
										label='RG'
										width={6}>
										<InputMask 
										mask="99.999.999"
										value={this.state.rg}
										onChange={e => this.setState({rg: e.target.value})} 
				/> 
									</Form.Input>


								</Form.Group>
								
								<Form.Group>

                                <Form.Input
                                        fluid
                                        label='DT Nascimento'
                                        width={6}
                                    >
                                        <InputMask 
                                            mask="99/99/9999" 
                                            maskChar={null}
                                            placeholder="Ex: 20/03/1985"
											value={this.state.dTNascimento}
											onChange={e => this.setState({dTNascimento: e.target.value})}
                                        /> 
                                    </Form.Input>

									<Form.Input
										fluid
                                        required
										label='Fone Celular'
                                        width={6}>
										<InputMask 
										mask="(99) 9999.9999" 
										value={this.state.foneCelular}
										onChange={e => this.setState({foneCelular: e.target.value})}
										/> 
									</Form.Input>

									<Form.Input
										fluid
										label='Fone Fixo'
                                        width={6}>
										<InputMask 
										mask="(99) 9999.9999" 
										value={this.state.foneFixo}
										onChange={e => this.setState({foneFixo: e.target.value})}
										/> 
									</Form.Input>

                                    <Form.Input
										fluid
										label='QTD Entregas Realizadas'
                                        width={6}>
										<InputMask 
										mask="999"
										value={this.state.QTDentregasRealizadas}
										onChange={e => this.setState({QTDentregasRealizadas: e.target.value})}
										/> 
									</Form.Input>

                                    <Form.Input
										fluid
										label='Valor Por Frete'
                                        width={6}>
										<InputMask 
										mask="99,99$"
										value={this.state.valorPorFrete}
										onChange={e => this.setState({valorPorFrete: e.target.value})}
										/> 
									</Form.Input>
                                   
								</Form.Group>

								<Form.Group widths='equal'>

									<Form.Input
										fluid
										label='Rua'
										width={100}
										maxLength="100"
										value={this.state.rua}
										onChange={e => this.setState({rua: e.target.value})}
									/>

									<Form.Input
										required
										fluid
										label='Número'
										width={6}>
										<InputMask 
										mask="(99) 9999.9999"
										value={this.state.numero}
										onChange={e => this.setState({numero: e.target.value})}
										/> 
									</Form.Input>



								</Form.Group>

                                <Form.Group widths='equal'>

									<Form.Input
										fluid
										label='Bairro'
										maxLength="100"
										value={this.state.bairro}
										onChange={e => this.setState({bairro: e.target.value})}
									/>

                                    <Form.Input
										fluid
										label='Cidade'
										maxLength="100"
										value={this.state.cidade}
										onChange={e => this.setState({cidade: e.target.value})}
									/>

                                    <Form.Input
										fluid
										label='CPF'
										width={6}>
										<InputMask 
										mask="999.999.999-99"
										value={this.state.cpf}
										onChange={e => this.setState({cpf: e.target.value})}
										/> 
									</Form.Input>

                                </Form.Group>

                                <Form.Group widths='equal'>

                                <Form.Input
										fluid
										label='UF'
										maxLength="100"
										value={this.state.uf}
										onChange={e => this.setState({uf: e.target.value})}
									/>   
                                </Form.Group>

                                <Form.Group widths='equal'>

								
                                <Form.Select
										fluid
										label='UF'
                                        placeholder="Selecione"
                                        InputMessage
										maxLength="100"
										value={this.state.uf}
										onChange={e => this.setState({uf: e.target.value})}
									/>
									

                                </Form.Group>

                                <Form.Group widths='equal'>

                                <Form.Input
										fluid
										label='Complemente'
										maxLength="100"
										value={this.state.complemente}
										onChange={e => this.setState({complemente: e.target.value})}
									/>   
                                </Form.Group>

								<Form.Group widths='justify'>

								<Form.Field
										fluid
										label='Ativa:'
										maxLength="100"
										value={this.state.ativa}
										onChange={e => this.setState({ativa: e.target.value})}
									/>   

								<Form.Radio
										fluid
										label='Sim'
										maxLength="5"
										value={this.state.sim}
										onChange={e => this.setState({sim: e.target.value})}
									/>   

								<Form.Radio
										fluid
										label='Não'
										tabindex="0"
										value={this.state.nao}
										onChange={e => this.setState({nao: e.target.value})}
									/>   
									
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
										Voltar
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

export default FormEntregador;