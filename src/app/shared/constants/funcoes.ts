import { Usuario } from "../models/Usuario";

export const SET_TOKEN = (token) => {
  localStorage.setItem("token",token);
}


export const SET_USUARIO = (us:Usuario) => {
  localStorage.setItem("id",us.id);
  localStorage.setItem("nome",us.nome);
  localStorage.setItem("permissao",us.permissao.toString());
}


export const LOGOUT = () =>{
  localStorage.clear();
}
