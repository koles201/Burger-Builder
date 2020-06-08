import React, { Component } from 'react'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Auxiliary'
import classes from './Modal.module.css'

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.show !== nextProps.show || nextProps.children !== this.props.children;
    }
    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-1000px)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
};

export default Modal;