import { DefaultInput } from "../DefaultInput"
import { Cycles } from "../Cycles"
import { DefaultButton } from "../DefaultButton"
import { PlayCircleIcon } from "lucide-react"

export function MainForm () {
   return (
     <form className="form" action="">
      <div className="formRow">
       <DefaultInput type='text' id='meuInput' labelText='Horas'/> 
      </div>

     <div className="formRow">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus natus consequuntur earum tempore, neque sapiente in. Saepe praesentium perferendis unde enim repellat libero similique magnam! Repudiandae sed molestiae in cum?</p>
     </div>

     <div className="formRow">
      <p>Lorem ipsum dolor sit amet.</p>
     </div>

     <div className="formRow">
        <Cycles/>
     </div>

    <div className="formRow">
      <DefaultButton icon={<PlayCircleIcon />} color='red' />
     </div>

     <div className="formRow">
      <button>Enviar</button>
     </div>


     </form>
   )
}