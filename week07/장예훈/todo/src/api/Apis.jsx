import axios from 'axios';

const url = 'http://localhost:8080/todos'

export const postData = async (newTodo) => {
  try{
    const res = (await axios.post(url, { content : newTodo})).data;
    return res
  } catch(error){
    console.log(error,"투두 변경 실패")
  }
};

export const deleteData = async (id) => {
  try{
    const res = (await axios.delete(`${url}/${id}`)).data;
    return res
  } catch(error){
    console.log(error, "투두 삭제 실패")
  }
};

export const checkData = async (id) => {
  try{
    const res = (await axios.post(`${url}/${id}`, {completed : true})).data;
    return res
  } catch (error) {
    console.log(error, "투두 완료표시 싪패");
  }
};



