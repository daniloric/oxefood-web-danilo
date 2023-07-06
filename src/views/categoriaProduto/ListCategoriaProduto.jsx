import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table } from 'semantic-ui-react';
import { ENDERECO_SERVIDOR } from '../../util/Contantes';

class ListCategoriaProduto extends React.Component {

    state = {
        openModal: false,
        idRemover: null,
        listaCategoriaProdutos: []

    }

    confirmaRemover = (id) => {

        this.setState({
            openModal: true,
            idRemover: id
             })  
    }

    setOpenModal = (val) => {

        this.setState({
            openModal: val
        })
   
    };
 
    remover = async () => {

        await axios.delete(ENDERECO_SERVIDOR + '/api/categoriaproduto/' + this.state.idRemover)
        .then((response) => {
   
            this.setState({ openModal: false })
            console.log('Categoria do produto removido com sucesso.')
   
            axios.get(ENDERECO_SERVIDOR + "/api/categoriaproduto")
            .then((response) => {
           
                this.setState({
                    listaCategoriaProdutos: response.data
                })
            })
        })
        .catch((error) => {
            this.setState({  openModal: false })
            console.log('Erro ao remover uma categoria de produto.')
        })
 };
 

    componentDidMount = () => {

        this.carregarLista();

    }

    carregarLista = () => {

        axios.get(ENDERECO_SERVIDOR + "/api/categoriaproduto")
            .then((response) => {

                this.setState({
                    listaCategoriaProdutos: response.data
                })
            })

    };

    render() {
        return (
            <div>
                 <MenuSistema />
                <div style={{ marginTop: '3%' }}>

                    <Container textAlign='justified' >

                        <h2> Categoria Produto </h2>

                        <Divider />

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                                floated='right'
                            >
                                <Icon name='clipboard outline' />
                                <Link to={'/form-categoriaProduto'}>Novo</Link>
                            </Button>
                            <br /><br /><br />

                            <Table color='orange' sortable celled>

                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Descrição</Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>

                                    {this.state.listaCategoriaProdutos.map(categoriaProduto => (

                                        <Table.Row>
                                            <Table.Cell>{categoriaProduto.descricao}</Table.Cell>
                                            <Table.Cell textAlign='center'>

                                                <Button
                                                    inverted
                                                    circular
                                                    color='green'
                                                    title='Clique aqui para editar os dados desta categoria de produto'
                                                    icon>
                                                    <Link to="/form-categoriaProduto" state={{ id: categoriaProduto.id }} style={{ color: 'green' }}> <Icon name='edit' /> </Link>
                                                </Button> &nbsp;

                                                <Button
                                                    inverted
                                                    circular
                                                    icon='trash'
                                                    color='red'
                                                    title='Clique aqui para remover esta categoria de produto'
                                                    onClick={e => this.confirmaRemover(categoriaProduto.id)} />

                                            </Table.Cell>
                                        </Table.Row>
                                    ))}

                                </Table.Body>
                            </Table>
                        </div>
                    </Container>
                </div>

                        <Modal
                   			basic
                   			onClose={() => this.setOpenModal(false)}
                   			onOpen={() => this.setOpenModal(true)}
                   			open={this.state.openModal}
               			>
                   			<Header icon>
                       				<Icon name='trash' />
                       				<div style={{marginTop: '5%'}}> Tem certeza que deseja remover esse registro? </div>
                   			</Header>
                   			<Modal.Actions>
                       				<Button basic color='red' inverted onClick={() => this.setOpenModal(false)}>
                       					<Icon name='remove' /> Não
                       				</Button>
                       				<Button color='green' inverted onClick={() => this.remover()}>
                       					<Icon name='checkmark' /> Sim
                       				</Button>
                   			</Modal.Actions>
               			</Modal>


            </div>
        )
    }
}

export default ListCategoriaProduto;


