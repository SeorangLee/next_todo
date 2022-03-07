import React from "react";
import { NextPage } from "next";
import TodoList from "../components/TodoList"
import {TodoType} from "../types/todo";





const todos : TodoType[] =[
  {id:1, text:"next.js 공부", color:"red", checked:true},
  {id:2, text:"저녁 굶기", color:"orange", checked:false},
  {id:3, text:"알고리즘 공부", color:"yellow", checked:false},
  {id:4, text:"스페인어 공부", color:"green", checked:false},
  {id:5, text:"설거지하기", color:"blue", checked:false},
  {id:6, text:"강아지 산책시키기", color:"navy", checked:false},
]
const app: NextPage = () =>{
  return <TodoList todos={todos}/>
}

export default app;