import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

class FormEntregador extends React.Component{

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
									/>

									<Form.Input
										required
										fluid
										label='CPF'
										width={6}>
										<InputMask 
										mask="999.999.999-99"/> 
									</Form.Input>

                                    <Form.Input
										fluid
										label='RG'
										width={6}>
										<InputMask 
										mask="99.999.999"/> 
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
                                        /> 
                                    </Form.Input>

									<Form.Input
										fluid
                                        required
										label='Fone Celular'
                                        width={6}>
										<InputMask 
										mask="(99) 9999.9999" /> 
									</Form.Input>

									<Form.Input
										fluid
										label='Fone Fixo'
                                        width={6}>
										<InputMask 
										mask="(99) 9999.9999" /> 
									</Form.Input>

                                    <Form.Input
										fluid
										label='QTD Entregas Realizadas'
                                        width={6}>
										<InputMask 
										mask="999"/> 
									</Form.Input>

                                    <Form.Input
										fluid
										label='Valor Por Frete'
                                        width={6}>
										<InputMask 
										mask="99,99$"/> 
									</Form.Input>
                                   
								</Form.Group>

								<Form.Group widths='equal'>

									<Form.Input
										fluid
										label='Rua'
										width={100}
										maxLength="100"

									/>

									<Form.Input
										required
										fluid
										label='Número'
										width={6}>
										<InputMask 
										mask="(99) 9999.9999"/> 
									</Form.Input>



								</Form.Group>

                                <Form.Group widths='equal'>

									<Form.Input
										fluid
										label='Bairro'
										maxLength="100"
									/>

                                    <Form.Input
										fluid
										label='Cidade'
										maxLength="100"
									/>

                                    <Form.Input
										fluid
										label='CPF'
										width={6}>
										<InputMask 
										mask="999.999.999-99"/> 
									</Form.Input>

                                </Form.Group>

                                <Form.Group widths='equal'>

                                <Form.Input
										fluid
										label='UF'
										maxLength="100"
									/>   
                                </Form.Group>

                                <Form.Group widths='equal'>

								
                                <Form.Select
										fluid
										label='UF'
                                        placeholder="Selecione"
                                        InputMessage
										maxLength="100"
									/>
									

                                </Form.Group>

                                <Form.Group widths='equal'>

                                <Form.Input
										fluid
										label='Complemente'
										maxLength="100"
									/>   
                                </Form.Group>

								<Form.Group widths='justify'>

								<Form.Field
										fluid
										label='Ativa:'
										maxLength="100"
									/>   

								<Form.Radio
										fluid
										label='Sim'
										maxLength="5"
									/>   

								<Form.Radio
										fluid
										label='Não'
										tabindex="0"
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