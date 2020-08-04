import React, { Component } from 'react';

import Modal from '../../Components/UI/Modal/Modal';
import Aux from '../Aux';

const withErrorHandler = (WrappedComponent, axios) => { //global error handler
    return class extends Component{

        state = {
            error: null
        }

        componentDidMount(){
            //clean up errors when sending a request
            axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            });

            axios.interceptors.response.use(response => response, error => {
                this.setState({error: error});
            });
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render (){
            return (
                <Aux>
                    <Modal show={this.state.error} clicked={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            );
        }
    }
}

export default withErrorHandler;