import Assproduct from "../models/product";
import joi from "joi";

const productSchema = joi.object({
  name: joi.string().required(),
  price: joi.number().required(),
});

// Tao moi sp
export const create = async (req, res) => {
  try {
    const product = await Assproduct.create(req.body);
    return res.status(201).json({
      message: "Create Product Successful",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Create product failed",
    });
  }
};

// Lay tat ca sp
export const getAll = async (req, res) => {
  try {
    const products = await Assproduct.find();
    return res.status(201).json({
      message: "This is your all products",
      products,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Can't find your products ",
    });
  }
};

// Lay ra 1 sp bat ky
export const get = async (req, res) => {
  try {
    const product = await Assproduct.findById(req.params.id);
    return res.status(201).json({
      message: "Your product you need is here",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Can't find product",
    });
  }
};

// Update sp
export const update = async (req, res) => {
  try {
    const product = await Assproduct.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return req.json({
      message: "Update Successful",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

// Remove sp
export const remove = async (req, res) => {
  try {
    const product = await Assproduct.findByIdAndRemove(req.params.id);
    return req.json({
      message: "Remove Successful",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
