import React, { Component } from 'react';
//import Radium, { StyleRoot } from 'radium';
import styles from './App.module.css';
import Persons from './components/Persons/Persons';
import Cockpit from './components/Cockpit/Cockpit';


class App extends Component{

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    
  }

  state = {
    persons: [
      {name: 'Odanga', age: 24, hobbies: 'swimming', id: 'asfa1'},
      {name: 'Irene', age: 25, hobbies: 'watching series', id: 'efgh2'},
      {name: 'Edison', age: 27, hobbies: 'boxing', id: 'ijkl3' }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate')
  }

  
  nameChangeHandler = (event, index) => {
    const persons = [...this.state.persons];
    persons.forEach((person, personIndex) => {
      if(personIndex === index){
        person.name = event.target.value;
      }
    });
    this.setState({persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render(){
    console.log('[App.js] render');

    /*const style = {
      backgroundColor: !this.state.showPersons ? 'green' : 'red',
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      padding: '10px',
      borderRadius: '30px',
      cursor: 'pointer',
      /*':hover': !this.state.showPersons ?  {
        backgroundColor: 'lightgreen',
        color: 'black'
      } : {
        backgroundColor: 'salmon',
        color: 'black'
      }
  }*/

    

    return (
      //<StyleRoot>
        <div className={styles.App}>
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons} 
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
          {
              this.state.showPersons ?
              <div>
               <Persons 
                  persons={this.state.persons} 
                  changed={this.nameChangeHandler} 
                  clicked={this.deletePersonHandler} 
               />
              </div> : null
            }
        </div>
      //</StyleRoot>
    );
  }


}
/*const app = (props) => {

    const [personsState, setPersonsState] = useState({
      persons: [
        {name: 'Odanga', age: 24},
        {name: 'Irene', age: 25},
        {name: 'Edison', age: 27}
      ],   
    })

    const [otherState, ] = useState('some other value')

    console.log(personsState, otherState);

    const switchNameHandler = () => {
      console.log('Was Clicked!');
      setPersonsState({
        persons: [
          {name: 'Johnny', age: 24},
          {name: 'Irene', age: 25},
          {name: 'Edison', age: 27}
        ]
      })
    }

    return (
      <div className="App">
       <h1>Hi, I'm a React App!</h1>
       <p>This is really dope</p>
       <button onClick={switchNameHandler}>Swtich Name</button>
       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'Hi, I\'m a React App!!!'))
}*/





//export default Radium(App);
export default App;
