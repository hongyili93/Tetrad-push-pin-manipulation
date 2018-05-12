/**
 * Created by irisr on 2017-02-23.
 */
'use strict'

import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import { SwatchesPicker } from 'react-color'
import $ from 'jquery'

import {pickColor} from '../actions';

class InteriorColorPicker extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            displayColorPicker: false,
            background: '#fff',
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.colorPick = this.colorPick.bind(this);
    }

    colorPick(){
        this.props.colorPicked(this.state.background);
    }


    // handleChange(e) {
    //     e.preventDefault();
    //     this.setState({value: e.target.value});
    //
    // }


    handleChange (color, event) {
        this.setState({ background: color.hex });
    };

    handleClick () {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose () {
        this.setState({ displayColorPicker: false })
        this.colorPick();
    };

    render() {
        const popover = {
            position: 'absolute',
            zIndex: '2',
        }
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        }
        return (
            <div>
                <svg width="100" height="100">
  <circle  className="h" cx="50" cy="50" r="40" stroke="black" stroke-width="4" fill={this.state.background} />   
</svg>
                <h4>Picked Color: {this.state.background}</h4>
                <button onClick={ this.handleClick }>Pick Color</button>
                { this.state.displayColorPicker ? <div style={ popover }>
                        <div style={ cover } onClick={ this.handleClose }/>
                        <SwatchesPicker onChange={ this.handleChange }/>
                    </div> : null }
            </div>
        )
    }
}

InteriorColorPicker.propTypes = {
    colorPicked: PropTypes.func.isRequired
}

InteriorColorPicker.defaultProps = {
    colorPicked: (color) => (e)
}

function mapDispatchToProps(dispatch){
    return({
        colorPicked: (color) => {dispatch(pickColor(color))}
    })
}

const ColorContainer = connect(null, mapDispatchToProps)(InteriorColorPicker);

export default ColorContainer;