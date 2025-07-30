
import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';

export function App() {

  return ( 
    <>

    <Container>
      <Logo/>
    </Container>

    <Container>
     <Menu/>
    </Container>

     <Container>
     <CountDown/>
    </Container>

      <Container>
     <form className="form" action="">
      <div className="formRow">
        <label htmlFor="input">Task</label>
        <input type="text" id="input" placeholder="Dê um nome para a tarefa" />  
      </div>

     <div className="formRow">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus natus consequuntur earum tempore, neque sapiente in. Saepe praesentium perferendis unde enim repellat libero similique magnam! Repudiandae sed molestiae in cum?</p>
     </div>

     <div className="formRow">
      <p>Lorem ipsum dolor sit amet.</p>
     </div>

     <div className="formRow">
      <p>Ciclos</p>
      <p>0 0 0 0 0 0 0</p>
     </div>

    <div className="formRow">
      <p>Ciclos</p>
      <p>0 0 0 0 0 0 0</p>
     </div>

     <div className="formRow">
      <button>Enviar</button>
     </div>


     </form>
    </Container>
    
    </>
  );
  }

