import React from "react";
import './Header.css';
import {Badge} from '';
import { Link } from "react-router-dom";
export default function Header () {
  return (
    <>
    <div>
       <nav className="continer">
         <ul>
            <li><a href="#">Главная</a> </li>
            <li><a href="#">Проекты</a> </li>
            <li><a href="#">Контакт</a> </li>
            <li><a href="#"> онас</a> </li>
            </ul>
     </nav>
    </div>
    </>
  )

}