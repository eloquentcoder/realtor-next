import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '72f3ddaafdmshb306a60ec2922a1p1b4b46jsn835ddc69a3bb' ,
    },
  });
    
  return data;
}