import React from "react";

export const Actions={
     INCREMENT:'increase',
     DECREMENT:'decrement',
     Todo_add : "addvalue"
}

export const reducer=(state,action)=>{
      switch(action.type){
         case Actions.INCREMENT:
            return {count:state.count +1}
         case Actions.DECREMENT:
            
                return {count:state.count-1}
        
      }
}

export const todo=(todos,action)=>{
      switch(action.type){
        
           case Actions.Todo_add:

            return [...todos,action.payload]

            
      }

     
      
}