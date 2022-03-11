import React, {useMemo, useCallback} from "react";
import styled from "styled-components";
import {TodoType} from  "../types/todo";
import palette from "../styles/palette";
import TrashCanIcon from "../public/statics/svg/trash_can.svg"
import CheckMarkIcon from "../public/statics/svg/check_mark.svg"


type ObjectIndexType = {
  [key : string] : number | undefined;
}

const Container = styled.div`
  width : 100%;

  .todo-list-header{
    padding: 12px;
    border-bottom:1px solid ${palette.gray};
    .todo-list-last-todo{
      
      font-size: 14px;
      span{
        margin-left : 8px;
      }
    }

    .todo-list-header-colors{
      
    
    /* border:1px solid red; */
      display:flex;
      margin-top:15px;  
      .todo-list-header-color-num{
        display:flex;
        margin-right: 8px;
        p{
          font-size:14px;
          line-height:16px;
          margin: 0;
          margin-left:6px;
        }
        .todo-list-header-round-color{
          width:16px;
          height:16px;
          border-radius: 50%;
        }
      }
    }
  }

  .bg-blue{
    background-color:${palette.blue};
  }
  .bg-navy{
    background-color:${palette.navy};
  }
  .bg-green{
    background-color:${palette.green};
  }
  .bg-yellow{
    background-color:${palette.yellow};
  }
  .bg-orange{
    background-color:${palette.orange};
  }
  .bg-red{
    background-color:${palette.red};
  }

  .todo-list{
    /* border:1px solid red; */
    .todo-item{
      display : flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 52px;
      border-bottom : 1px solid ${palette.gray};

      .todo-left-side{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        .todo-color-block{
          width:12px;
          height:100%;

        }
        .checked-todo-text{
          color: ${palette.gray};
          text-decoration : line-through;

        }
        .todo-text{
          margin-left : 12px;
          font-size : 16px;
        }
      }

      .todo-right-side{
        display:flex;
        margin-right:12px;
        svg{
          &:first-child{
            margin-right: 16px;
          }
        }
        .todo-trash-can{
          width: 25px;
          path{
            fill: ${palette.deep_red};
          }
        }

        .todo-check-mark{
          fill: ${palette.green};
        }
        .todo-button{
          width: 20px;
          height:20px;
          border-radius : 50%;
          border: 1px solid ${palette.gray};
          background-color: transparent;
          outline : none;
        }


      }
    }
  }



`

interface IProps {
  todos: TodoType[];
}

const TodoList: React.FC<IProps> = ({todos}) =>{

  const getTodoColorNums = useCallback(() =>{

    let red : 0;
    let orange : 0;
    let yellow : 0;
    let green : 0;
    let blue : 0;
    let navy : 0;
   
    todos.forEach((todo) => {
      switch (todo.color){
        case "red":
          red +=1;
          break;
        case "orange":
          red +=1;
          break;
        case "yellow":
          red +=1;
          break;
        case "green":
          red +=1;
          break;
        case "blue":
          red +=1;
          break;
        case "navy":
          red +=1;
          break;
        default:
          break;
      } 
      // return{
      //   red,
      //   orange,
      //   yellow,
      //   green,
      //   blue,
      //   navy,
      // }; 
    });
    
    return{
      red,
      orange,
      yellow,
      green,
      blue,
      navy,
    };
   
  }, [todos])
  
  const todoColorNums = useMemo(getTodoColorNums, [todos]);
  const todoColorNums2 = useMemo(()=>{
    const colors:ObjectIndexType = {};
    todos.forEach((todo) => {
      const value = colors[todo.color];
      if(!value) {
        colors[`${todo.color}`] = 1;
      }else {
        colors[`${todo.color}`] = value + 1;
      }
    });
    return colors;
  }, [todos]);

  console.log(todoColorNums2)

  return (
    <Container>
      <div className="todo-list-header">
        <p className="todo-list-last-todo">
          남은 To do <span>{todos.length}개</span>
        </p>
        <div className="todo-list-header-colors">
          {Object.keys(todoColorNums).map((color, index)=>(
            <div className="todo-list-header-color-num" key={index}>
              <div className={`todo-list-header-round-color bg-${color}`}/>
              <p>{todoColorNums2[color]}개</p>
            </div>
          ))}
        </div>
      </div>
      <ul className="todo-list">
        {todos.map((todo)=> (
          <li className="todo-item" key={todo.id}>
            <div className="todo-left-side">
              <div className={`todo-color-block bg-${todo.color}`}/>
              <p
                className={`todo-text ${
                  todo.checked ? "checked-todo-text" : ""
                }`}
              >
                {todo.text}
              </p>
            </div>
            <div className="todo-right-side">
              {todo.checked &&(
                <>
                  <TrashCanIcon className="todo-trash-can"
                    onClick={() => {}}
                  />
                  <CheckMarkIcon className="todo-check-mark"
                    onClick={() => {}}
                  />
                </>
              )}
              {!todo.checked && (
                <button type="button"
                  className="todo-button"
                  onClick={() => {}}
                />
              )}
            </div>
          </li>
        )
        ) }
      </ul>

    </Container>
  )
}

export default TodoList;