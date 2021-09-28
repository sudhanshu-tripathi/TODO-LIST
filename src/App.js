import react from "react";
import logo from "./mylogo.svg";
import "./App.css"

class App extends react.Component{
  
  constructor(props){
    super(props)
   this.state ={
     newItem:"",
     list :[]
   }
  }
  
  select(value){
    
    if(Event.keyCode === 13){
      this.addItem(this.state.newItem)
    }
  }

  addItem(todoValue){
    if(todoValue != ""){

      const newItem = {
        id:Date.now(),
        value:todoValue,
        iscomplete: false

      };
     const list = [...this.state.list];
     list.push(newItem);
     this.setState({
       list,
       newItem:""
     })
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id != id)
    this.setState({
      list:updatedList
    })

  } 

  updateInput(input){
    this.setState({newItem:input});
  }
  
  render(){
    return(
      <div>
       <img src = {logo} height="100" width="100" className="logo" />
       <h1 class="text-white" align="center">TODO</h1>
       <div className="container">
        
         <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default"> add an item...</span>
              <input type="text"
               class="form-control"
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default" 
                placeholder="write a todo"
         required
         value = {this.state.newItem}
         onChange = {e=> this.updateInput(e.target.value)}
         onKeyUp={()=>this.select(this.state.newItem)}
                ></input>
                <button
         class="btn btn-info"
         onClick={()=>this.addItem(this.state.newItem)}
         disabled={!this.state.newItem.length}
         >add item
         </button>
          </div>
         {/* <input type="text" 
         className="input-text" 
         placeholder="write a todo"
         required
         value = {this.state.newItem}
         onChange = {e=> this.updateInput(e.target.value)}
         onKeyUp={()=>this.select(this.state.newItem)}
         ></input> */}
         
          <div className="list">
            <table  align="center" >
              {this.state.list.map(item => {
                 return(
                  <tr  key={item.id}>
                  
                    <div class="input-group mb-3">
                      <div class="input-group-text">
                        <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" name="isDone"
                     checked = {item.isDone}
                     onChange={()=>{}}/>
                      </div>
                      <input type="text" class="form-control" aria-label="Text input with checkbox" value={item.value} />                   
                     
                     <button className="btn-danger"
                        onClick={()=>this.deleteItem(item.id) }
                      >
                      Delete
                     </button>
                     </div>
                   
                  </tr>
                 );
                })
              }
              {/* <li>
                <input type="checkbox" />
                <button className="btn">Delete</button>
              </li> */}
            </table>
          </div>

        </div>
      </div>
    )
  }
}

export default App

//FUNCTION BASED APPROCH
// import logo from "./logo.svg";
// import "./App.css";

// function app(){
//   return(
//     <div>
//      <h1>gaurav</h1>
//      <p>tripathi</p>
//     </div>
//   ) 
// }

// export default app;