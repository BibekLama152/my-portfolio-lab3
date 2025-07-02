import Project from '../models/project.model.js';

export const list = async (req, res) => {
  res.json(await Project.find());
};

export const create = async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
};

export const read = async (req, res) => {
  res.json(await Project.findById(req.params.id));
};

export const update = async (req, res) => {
  const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const remove = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};

export const removeAll = async (req, res) => {
  await Project.deleteMany();
  res.sendStatus(204);
};
