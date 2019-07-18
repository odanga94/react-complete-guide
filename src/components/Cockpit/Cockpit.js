import React, { useEffect } from 'react';
import styles from  './Cockpit.module.css';

const Cockpit = (props) => {

    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      // Http request...
      setTimeout(() => alert('Saved data to cloud'), 1000);
    }, []);

    let btnClass;
    props.showPersons ? btnClass = styles.Red : btnClass = '';

    let classes = [];
    if(props.persons.length <= 2){
      classes.push(styles.red); //classes = ['red]
    }
    if(props.persons.length <= 1){
      classes.push(styles.bold); //classes = ['red', 'bold']
    }

    return(
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really dope!</p>
            <button 
                onClick={props.clicked}
                className={btnClass}
                //style={style}
            >Toggle Persons</button>
        </div>
    )
}

export default Cockpit;