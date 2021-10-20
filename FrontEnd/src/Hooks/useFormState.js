import { useState } from "react";


const useFormState = ()=>{

    const [FormState, setFormState] = useState(false);
    const [NowEditTodo, setNowEditTodo] = useState({ todoId: 0, title: 'defauld', description: 'defauld', state: true });


    const ChangeFormState = () => {
        setFormState(!FormState);
    }

    const ActiveEditFormState = (todo) => {
        setFormState(true);
        setNowEditTodo(todo);
    }


      return(
          {
              FormState,
              NowEditTodo,
              ChangeFormState,
              ActiveEditFormState
          }
      );
}

export default useFormState;