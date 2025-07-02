import Qualification from '../models/qualification.model.js';

export const list = async (req, res) => {
  res.json(await Qualification.find());
};

export const create = async (req, res) => {
  const qual = new Qualification(req.body);
  await qual.save();
  res.json(qual);
};

export const read = async (req, res) => {
  res.json(await Qualification.findById(req.params.id));
};

export const update = async (req, res) => {
  const updated = await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const remove = async (req, res) => {
  await Qualification.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};

export const removeAll = async (req, res) => {
  await Qualification.deleteMany();
  res.sendStatus(204);
};
