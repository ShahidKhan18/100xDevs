import { useEffect,useState } from "react";

const TODO = () => {
  // const [todo, setTodo] = useState(null);
  // const [title, setTitle] = useState("");
  // const [desc, setDesc] = useState("");
  // const addTodo = () => {
  //   setTodo((prevTodo) => {
  //     return [...prevTodo, { title: title, description: desc }];
  //   });
  //   setTitle("");
  //   setDesc("");
  // };
  // const fetchTODO=async()=>{
  //    const response=await fetch('https://sum-server.100xdevs.com/todos');
  //    const json= await response.json();
  //    setTodo(json?.todos)

  //   //  console.log(json)
  // }
  // useEffect(()=>{
  //     const interval=setInterval(()=>{
  //       fetchTODO();
  //     },10000)
  // },[])
  
  return todo && (
    <div>
      {/* <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button onClick={addTodo}>Add TODO</button> */}
      {/* <div className="allTodos">
        {todo?.map((t) => {
          return (
            <div key={t?.id}>
              <h2 className="title">{t?.title}</h2>
              <p>{t?.description}</p>
            </div>
          );
        })}
      </div> */}


      
    </div>
  );
};


export default TODO;