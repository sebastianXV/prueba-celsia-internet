const servicio = require("../models/servicio");
const { request, response } = require("express");

const createServicio = async (req = request, res = response) => {
  const { identificacion, fechaInicio, ultimaFacturacion, ultimoPago } =
    req.body;
  try {
    const vehiculo = new Servicio({
      identificacion,
      fechaInicio,
      ultimaFacturacion,
      ultimoPago,
    });
    await servicio.save();
    return res.status(200).json(vehiculo);
  } catch (error) {
    console.error("Error al crear el servicio:", error);
    return res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

const getServicio = async (req = request, res = response) => {
  try {
    const servicio = await Servicio.find();
    return res.status(200).json(servicio);
  } catch (error) {
    console.error("Error al obtener los servicios:", error);
    return res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

const getServicioById = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    const servicio = await Servicio.findById(id);
    if (!servicio) {
      return res.status(404).json({ mensaje: "Vehículo no encontrado" });
    }
    return res.status(200).json(servicio);
  } catch (error) {
    console.error("Error al obtener el vehículo:", error);
    return res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

const updateServicio = async (req = request, res = response) => {
  const { id } = req.params;
  const { identificacion, fechaInicio, ultimaFacturacion, ultimoPago } =
    req.body;
  try {
    const servicio = await Servicio.findByIdAndUpdate(
      id,
      {
        identificacion,
        fechaInicio,
        ultimaFacturacion,
        ultimoPago,
      },
      { new: true }
    );
    if (!servicio) {
      return res.status(404).json({ mensaje: "servicio no encontrado" });
    }
    return res.status(200).json(servicio);
  } catch (error) {
    console.error("Error al actualizar el servicio:", error);
    return res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

const deleteServicio = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const servicio = await Servicio.findByIdAndDelete(id);

    if (!servicio) {
      return res.status(404).json({ mensaje: "Servicio no encontrado" });
    }

    return res.status(204).json();
  } catch (error) {
    console.error("Error al eliminar el servicio:", error);
    return res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

module.exports = {
  createServicio,
  getServicio,
  getServicioById,
  updateServicio,
  deleteServicio,
};
