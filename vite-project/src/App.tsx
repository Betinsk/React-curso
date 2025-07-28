//PascalCase
//App
//Headline

import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
  console.log('App component rendered');

  return ( 
    <div>
     <Heading children="Título principal" 
     description='Este é um parágrafo'
     />
    <Heading>Hello2</Heading>
  <p>Este é um exemplo de aplicação React com Vite.</p>
  <p>Para começar, edite o arquivo <code>src/main.tsx</code>.</p>
  <p>Veja as mudanças refletidas instantaneamente!</p>
  <p>Divirta-se desenvolvendo!</p>    
    </div>
  );
} 

