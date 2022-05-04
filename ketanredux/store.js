import { legacy_createStore as createStore } from "redux";
// import {counterReducer} from 
// const reducer = (store, action) => {

//     switch (action.type) {
//         // case "ADD_COUNT": return { ...store, counter: store.counter + action.payload };
//         case "ADD_TODO": return { ...store, todos: [...store.todos, action.payload] };
//         default: return store;
//     }



// };

// const initState = {
//     // counter: 0,
//     todos: [],
//     // theme: "dark",
// }


const store = createStore(reducer, initState);

// console.log("intinal store", store.getState());

// store.dispatch({ type: "ADD_COUNT", payload: 1 });

// console.log("After Dispatch", store.getState());

// store.dispatch({ type: "ADD_TODO", payload: 2 });

// store.dispatch({ type: "ADD_TODO", payload: "ketan" });
// console.log("todo After Dispatch", store.getState());


// document.querySelector('#add').onclick = function () {
//     if (document.querySelector('#newtask input').value.length == 0) {
//         alert("Please Enter a Task")
//     }
//     else {
//         document.querySelector('#tasks').innerHTML += `
//             <div class="task">
//                 <span id="taskname">
//                     ${document.querySelector('#newtask input').value}
//                 </span>
//                 <button class="delete">
                  
//                     <p class="far fa-trash-alt"></p>
//                 </button>
//             </div>
            
//         `;

//         var current_tasks = document.querySelectorAll(".delete");
//         for (var i = 0; i < current_tasks.length; i++) {
//             current_tasks[i].onclick = function () {
//                 this.parentNode.remove();
//             }
//         }
//     }



//     //         store.dispatch({ type: "ADD_TODO", payload: 2 });
//     // console.log("todo After Dispatch", store.getState());

// }