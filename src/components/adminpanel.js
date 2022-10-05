import "../App.css";
import { useState, useEffect } from "react";
import AdminCard from "./admincard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import AdminPanel from "./adminpanel2";
//import data from './data,';
import axios from "axios";
import Article from "./article";
import { data } from "jquery";
import { isContentEditable } from "@testing-library/user-event/dist/utils";
const user_id = "USER_ID";
const token_key = "USER_TOKEN";
let adminid = process.env.REACT_APP_ADMIN_ID;

console.log(adminid);
console.log(process.env);
function AdminCheck(){
  let uid = window.localStorage.getItem(user_id);
  if(uid == adminid){
    return(
      <AdminPanel />
    )
  }
  else{
    window.location = "/"
  }
}

export default AdminCheck;
