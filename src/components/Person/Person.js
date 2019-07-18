import React, { Component } from 'react';
import styles from './Person.module.css';
//import Radium from 'radium';

/*const person = (props) => {
    /*const style = {
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    } 
    console.log('[Person.js] rendering...')
    return (
        <div className={styles.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} style={{textAlign: 'center', font: 'inherit'}} />
        </div>
    );
}

//export default Radium(person);
export default person;*/

class Person extends Component {

    render(){
        console.log('[Person.js] rendering...')
        return (
            <div className={styles.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} style={{textAlign: 'center', font: 'inherit'}} />
            </div>
        );
    }
}

export default Person;
