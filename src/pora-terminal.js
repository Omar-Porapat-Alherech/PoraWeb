import React from "react";
import {colors} from './res/values/colors'
import PropTypes from "prop-types";
import Draggable from 'react-draggable';
// import Typewriter from 'typewriter-effect/dist/core';
// import Typewriter from 'typewriter-effect';
import Typing from 'react-typing-animation';
import ErrorMessage from './textcomponents/Intro'



class UtilityButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            height: props.height,
            width: props.width,
            hover : true
        };
        this.toggleHover = this.toggleHover.bind(this);
        this.changeBackground  = this.changeBackground.bind(this);
    }

    toggleHover(e){
        this.setState((prevState) => {
            return {
                hover: !prevState.hover
            };
        });
        this.changeBackground(e)
    }
    changeBackground(e) {
        if (this.state.hover) {
            e.target.style.background = e.target.style.hovercolor;
        } else {
            e.target.style.background = e.target.style.init_background;
        }
    }

    render() {
        var circleStyle = {
            margin: 5,
            display: "inline-block",
            border: 'none',
            init_background: this.props.color,
            background: this.props.color,
            hovercolor: this.props.hovercolor,
            borderRadius: "50%",
            position: 'relative',
            left: '2%',
            top: '20%',
            width: 15,
            height: 15,
        };

        return (
            <button
                style={circleStyle}
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}
            />
        )
    }
}

class Terminal extends React.Component {

    constructor(props, context, React, DOM) {
        super(props, context);
        this.React = React;
        this.DOM = DOM;

    }

    render() {

        var terminal = {
            width: 700,
            height: 300,
            borderRadius: 7,
            background: colors.material_blue_grey_900,
            boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)"
        }
        var topbar = {
            width: 700,
            // '#f2bcf8'
            background: colors.material_blue_grey_900,
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
            height : 35,
            // boxShadow: "0px 0px 5px #666",
            //    This line will cause this weird line to appear if the top bar and bottom are the same color

        };

        return (
            <Draggable>
            <div style={terminal}>
                <div style={topbar}>
                        <UtilityButton color={colors.material_red}/>
                        <UtilityButton color={colors.material_yellow}/>
                        <UtilityButton color={colors.material_green}/>
                </div>
                {/*<div>*/}
                {/*    <Typewriter*/}
                {/*        onInit={(typewriter) => {*/}
                {/*            typewriter.typeString(ErrorMessage)*/}
                {/*                .pauseFor(2500)*/}
                {/*                .start();*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</div>*/}
                <Typing>
                    <span>This span will get typed.</span>
                </Typing>

            </div>
            </Draggable>
        )
    }
}

export default Terminal