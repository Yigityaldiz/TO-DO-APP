export const TaskList = ({todo}) =>{



return(
    <>
     {Array.isArray(todo) && todo.map((x) => (
         
          <div className=" h-[25%] bg-red-700/25 items-center flex gap-4 p-1 rounded-lg">
         
            <p className=" h-[80%] w-[50%] p-1 text-white " >{x}</p>
            <button>Edit</button>
             <button>Delete</button>
          </div>
          
         
        
     ) )}
   
  </>
)

}