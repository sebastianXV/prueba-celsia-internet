import { axiosConfiguration } from '../configuration/axios';

export const postCliente = async (clienteData) => {
  try {
    const response = await axiosConfiguration.post('cliente', clienteData);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Error al crear el recurso, status: ' + response.status);
    }
  } catch (error) {
    console.error('Error al crear el recurso. error:', error);
    throw error;
  }
};

export const getClienteByID = async (id) => {
  try {
    const response = await axiosConfiguration.get(`cliente/${id}`);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Error al obtener el recurso, status: ' + response.status);
    }
  } catch (error) {
    console.error('Error al obtener el recurso, error:', error);
    throw error;
  }
};


export const listarCliente = async () => {
  try {
    const response = await axiosConfiguration.get('cliente');

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Error al obtener los recursos, status' + response.status);
    }
  } catch (error) {
    console.error('Error al obtener los recursos, error:', error);
    throw error;
  }
};

export const updateByID = async (clienteData, id) => {
  try {
    const response = await axiosConfiguration.put(`cliente/${id}`, clienteData);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Error al actualizar el recurso: ' + response.status);
    }
  } catch (error) {
    console.error('Error al actualizar el recurso:', error);
    throw error;
  }
};


export const deleteCliente = async (id) => {
  try {
    const response = await axiosConfiguration.delete(`cliente/${id}`);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Error al eliminar el recurso. ' + response.status);
    }
  } catch (error) {
    console.error('Error al eliminar el recurso:', error);
    throw error;
  }
};


