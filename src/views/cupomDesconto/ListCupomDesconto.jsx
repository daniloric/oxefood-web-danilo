import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table } from 'semantic-ui-react';
import { ENDERECO_SERVIDOR } from '../../util/Contantes';

class ListCupomDesconto extends React.Component{

   state = {

       listaCupomDescontos: []
      
   }

   componentDidMount = () => {
      
       this.carregarLista();
      
   }
   carregarLista = () => {

    axios.get(ENDERECO_SERVIDOR+"/api/cupomDesconto")
    .then((response) => {
       
        this.setState({
            listaCupomDescontos: response.data
        })
    })

};

formatarData = (dataParam) => {

     if (dataParam == null || dataParam == '') {
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

                    <h2> Cupons de Descontos </h2>

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
                            <Link to={'/form-cupomDesconto'}>Novo</Link>
                        </Button>
                        <br/><br/><br/>
                      
                      <Table color='orange' sortable celled>

                          <Table.Header>
                              <Table.Row>
                                  <Table.HeaderCell>Código do cupom</Table.HeaderCell>
                                  <Table.HeaderCell>% do desconto</Table.HeaderCell>
                                  <Table.HeaderCell>Valor do cupom'</Table.HeaderCell>
                                  <Table.HeaderCell>Valor Mínimo do Pedido</Table.HeaderCell>
                                  <Table.HeaderCell>Qtd máxima de Uso</Table.HeaderCell>
                                  <Table.HeaderCell>Data Inicial</Table.HeaderCell>
                                  <Table.HeaderCell>Data Final</Table.HeaderCell>
                                  <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                              </Table.Row>
                          </Table.Header>
                     
                          <Table.Body>

                              { this.state.listaCupomDescontos.map(cupomDesconto => (

                                  <Table.Row>
                                      <Table.Cell>{cupomDesconto.codigoDesconto}</Table.Cell>
                                      <Table.Cell>{cupomDesconto.percentualDesconto}</Table.Cell>
                                      <Table.Cell>{cupomDesconto.valorDesconto}</Table.Cell>
                                      <Table.Cell>{cupomDesconto.valorMinimoPedidoPermitido}</Table.Cell>
                                      <Table.Cell>{cupomDesconto.quantidadeMaximaUso}</Table.Cell>
                                      <Table.Cell>{cupomDesconto.inicioVigencia}</Table.Cell>
                                      <Table.Cell>{cupomDesconto.fimVigencia}</Table.Cell>
                                      <Table.Cell textAlign='center'>
                                         
                                            <Button
                                                inverted
                                                circular
                                                icon='edit'
                                                color='blue'
                                                title='Clique aqui para editar os dados deste cliente' /> &nbsp;
                                            <Button
                                                inverted
                                                circular
                                                icon='trash'
                                                color='red'
                                                title='Clique aqui para remover este cliente' />

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

export default ListCupomDesconto;


