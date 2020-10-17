import axios from "axios"

export const getData = params => {
  return async dispatch => {
    await axios.get("http://matka6.com:1667/api/game/games", params).then(response => {
      // console.log(response.data)
      dispatch({
        type: "GET_DATA",
        data: response.data.data,
        // totalPages: response.data.totalPages,
        totalPages: 1,
        params
      })
    })
  }
}

export const getInitialData = () => {
  return async dispatch => {
    await axios.get("http://matka6.com:1667/api/game/games").then(response => {
      dispatch({ type: "GET_ALL_DATA", data: response.data })
    })
  }
}

export const filterData = value => {
  return dispatch => dispatch({ type: "FILTER_DATA", value })
}

export const deleteData = obj => {
  return dispatch => {
    axios
      .post("/api/datalist/delete-data", {
        obj
      })
      .then(response => {
        dispatch({ type: "DELETE_DATA", obj })
      })
  }
}

export const updateData = obj => {
  return (dispatch, getState) => {
    axios
      .post("/api/datalist/update-data", {
        obj
      })
      .then(response => {
        dispatch({ type: "UPDATE_DATA", obj })
      })
  }
}

export const addData = obj => {
  return (dispatch, getState) => {
    let params = getState().dataList.params
    axios
      .post("/api/datalist/add-data", {
        obj
      })
      .then(response => {
        dispatch({ type: "ADD_DATA", obj })
        dispatch(getData(params))
      })
  }
}
