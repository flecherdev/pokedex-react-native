import {API_HOST} from '../utils/constans';

export const getPokemonApi = async (nextUrl?: string) => {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await (await fetch(nextUrl || url)).json();
    return response;
  } catch (error) {
    throw error;
  }
};

export const getPokemonDetailsByUrlApi = async (url: string) => {
  try {
    const response = await (await fetch(url)).json();
    return response;
  } catch (error) {
    throw error;
  }
};

export const getPokemonDetailsApi = async (id: string) => {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await (await fetch(url)).json();
    return response;
  } catch (error) {
    throw error;
  }
};
