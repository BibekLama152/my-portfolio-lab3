import Contact from '../models/contact.model.js';

export const list = async (req, res) => {
  res.json(await Contact.find());
};

export const create = async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json(contact);
};

export const read = async (req, res) => {
  res.json(await Contact.findById(req.params.id));
};

export const update = async (req, res) => {
  const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const remove = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};

export const removeAll = async (req, res) => {
  await Contact.deleteMany();
  res.sendStatus(204);
};
