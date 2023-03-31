import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

class FormProduto extends React.Component{

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
                                        placeholder="Informe o titulo do produto"
										maxLength="100"
                                        size= "100"
									/>

									<Form.Input
                                        required
										fluid
										label='Codigo de Produto'>
										<InputMask 
                                        placeholder="Informe o codigo do produto"
										mask="999999999"/> 
									</Form.Input>

								</Form.Group>
								
                                <Form.TextArea
										fluid
										label='Descrição'
                                        textarea placeholder="Informe a descrição do produto" 
										maxLength="default"
									/>

								<Form.Group>

                                <Form.Input
                                        required
										fluid
										label='Valor Unitario'
                                        width={6}>
										<InputMask 
										mask="999.99$"/> 
									</Form.Input>


									<Form.Input
										fluid
										label='Tempo de Entrega Minímo em Minutos'
                                        width={6}>
										<InputMask 
                                        placeholder="31"
										mask="99" /> 
									</Form.Input>

                                    <Form.Input
										fluid
										label='Tempo de Entrega Maximo em Minutos'
                                        width={6}>
										<InputMask 
                                        placeholder="41"
										mask="99" /> 
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

export default FormProduto;