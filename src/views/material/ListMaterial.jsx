import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table } from 'semantic-ui-react';

class ListMaterial extends React.Component{

    state = {

        listaMaterial: []
       
    }
 
    componentDidMount = () => {
       
        this.carregarLista();
       
    }
    carregarLista = () => {
 

 };
 
 formatarData = (dataParam) => {
 
      if (dataParam === null || dataParam ==='') {
          return ''
      }
      
      let dia = dataParam.substr(8,2);
      let mes = dataParam.substr(5,2);
      let ano = dataParam.substr(0,4);
      let dataFormatada = dia + '/' + mes + '/' + ano;
 
      return dataFormatada
  };
  render(){
     return(
         <div>
 
             <div style={{marginTop: '3%'}}>
 
                 <Container textAlign='justified' >
 
                     <h2> Entregador </h2>
 
                     <Divider />
 
                     <div style={{marginTop: '4%'}}>
 
                         <Button
                             inverted
                             circular
                             icon
                             labelPosition='left'
                             color='orange'
                             floated='right'
                         >
                             <Icon name='clipboard outline' />
                             <Link to={'/form-Entregador'}>Novo</Link>
                         </Button>
                         <br/><br/><br/>
                       
                       <Table color='orange' sortable celled>
 
                           <Table.Header>
                               <Table.Row>
                                   <Table.HeaderCell>Nome</Table.HeaderCell>
                                   <Table.HeaderCell>CPF</Table.HeaderCell>
                                   <Table.HeaderCell>Rg</Table.HeaderCell>
                                   <Table.HeaderCell>Data de Nascimento</Table.HeaderCell>
                                   <Table.HeaderCell>Fone Celular</Table.HeaderCell>
                                   <Table.HeaderCell>Fone Fixo</Table.HeaderCell>
                                   <Table.HeaderCell>Quantidade de Entregas Realizadas</Table.HeaderCell>
                                   <Table.HeaderCell>Rua</Table.HeaderCell>
                                   <Table.HeaderCell>Número</Table.HeaderCell>
                                   <Table.HeaderCell>Bairro</Table.HeaderCell>
                                   <Table.HeaderCell>Cidade</Table.HeaderCell>
                                   <Table.HeaderCell>CEP</Table.HeaderCell>
                                   <Table.HeaderCell>UF</Table.HeaderCell>
                                   <Table.HeaderCell>Complemento</Table.HeaderCell>
                                   <Table.HeaderCell>Ativo</Table.HeaderCell>
 
                                   <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                               </Table.Row>
                           </Table.Header>
                      
                           <Table.Body>
 
                               { this.state.listaEntregador.map(Entregador => (
 
                                   <Table.Row>
                                       <Table.Cell>{Entregador.nome}</Table.Cell>
                                       <Table.Cell>{Entregador.cpf}</Table.Cell>
                                       <Table.Cell>{this.formatarData(Entregador.dataNascimento)}</Table.Cell>
                                       <Table.Cell>{Entregador.foneCelular}</Table.Cell>
                                       <Table.Cell>{Entregador.foneFixo}</Table.Cell>
                                       <Table.Cell>{Entregador.qtdEntregasrealizadas}</Table.Cell>
                                       <Table.Cell>{Entregador.EnderecoRua}</Table.Cell>
                                       <Table.Cell>{Entregador.Endereconumero}</Table.Cell>
                                       <Table.Cell>{Entregador.Enderecobairro}</Table.Cell>
                                       <Table.Cell>{Entregador.Enderecocidade}</Table.Cell>
                                       <Table.Cell>{Entregador.EnderecoCep}</Table.Cell>
                                       <Table.Cell>{Entregador.EnderecoUf}</Table.Cell>
                                       <Table.Cell>{Entregador.EnderecoComplemento}</Table.Cell>
                                       <Table.Cell>{Entregador.Ativo}</Table.Cell>
                                       <Table.Cell textAlign='center'>
                                          
                                      <Button
                                         inverted
                                         circular
                                         icon='edit'
                                         color='blue'
                                         itle='Clique aqui para editar os dados deste Entregador' /> &nbsp;
                                     <Button
                                                    inverted
                                                    circular
                                                    icon='trash'
                                                    color='red'
                                                    title='Clique aqui para remover este Entregador' />
 
                                       </Table.Cell>
                                  </Table.Row>
                                    ))}
 
                                </Table.Body>
                            </Table>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
 }
 
 export default ListMaterial;
