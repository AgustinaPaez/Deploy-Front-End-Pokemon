import axios from "axios";
//const BACK_URL = "https://pokepage.herokuapp.com";
const BACK_URL = "http://localhost:3001";
//const BACK_URL = "https://pokeback-production-b8de.up.railway.app";
const BACK_RENDER = "https://servidor-pokemons-9qpb.onrender.com";
const BACK_VERCEL = "https://deploy-back-end-pokemon-nkt9.vercel.app/";

export function getPokemons() {
  return async function (dispatch) {
    try {
      const json = await axios.get(`${BACK_VERCEL}/pokemons`);
      return dispatch({
        type: "GET_POKEMONS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTypes() {
  return async function (dispatch) {
    try {
      const json = await axios.get(`${BACK_VERCEL}/types`);
      return dispatch({
        type: "GET_TYPES",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postPokemon(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.post(`${BACK_VERCEL}/pokemon/` + payload);
      return dispatch({
        type: "POST_POKEMON",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDetail(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`${BACK_VERCEL}/pokemons/` + payload);
      return dispatch({
        type: "GET_DETAIL",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getNamePokemons(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`${BACK_VERCEL}/pokemons?name=` + payload);
      return dispatch({
        type: "GET_NAME_POKEMONS",
        payload: json.data,
      });
    } catch (error) {
      alert("No pokemon found with that name");
      console.log(error);
    }
  };
}

export function filterByTypes(payload) {
  return {
    type: "FILTER_BY_TYPES",
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByAttack(payload) {
  return {
    type: "ORDER_BY_ATTACK",
    payload,
  };
}

export function cleanDetail() {
  return {
    type: "CLEAN_DETAIL",
    payload: {},
  };
}

export function deletePokemon(id) {
  return async function (dispatch) {
    try {
      const json = await axios.delete(`${BACK_VERCEL}/pokemons/delete/` + id);
      return dispatch({
        type: "DELETE_POKEMON",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
