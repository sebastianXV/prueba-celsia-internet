import { axiosConfiguration } from '../configuration/axios';


export const postServicio = async (servicioData) => {
  try {
    const response = await axiosConfiguration.post('servicio', servicioData);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Error al crear el recurso. error:', error);
  }
};


export const listarServicio = async () => {
  try {
    const response = await axiosConfiguration.get('servicio');
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Error al obtener los servicios:', error);
  }
};

