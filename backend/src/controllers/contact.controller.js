import { Contact } from "../models/Contact.js";



// CREATE CONTACT — PUBLIC
export const createContactController = async (req, res, next) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
            const err = new Error("Name, email, subject, and message are required.");
            err.statusCode = 400;
            throw err;
        }

        const contact = await Contact.create({ name, email, phone: phone || null, subject, message });

        return res.status(201).json({
            success: true,
            message: "Message sent successfully. We'll get back to you within 1 business day.",
            contactId: contact._id,
        });
    } catch (err) {
        next(err);
    }
};



// GET ALL CONTACTS — ADMIN
export const getContactsController = async (req, res, next) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        return res.status(200).json({ success: true, contacts });
    } catch (err) {
        next(err);
    }
};



// GET SINGLE CONTACT — ADMIN
export const getContactByIdController = async (req, res, next) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            const err = new Error("Contact not found.");
            err.statusCode = 404;
            throw err;
        }
        // Mark as read if new
        if (contact.status === "new") {
            contact.status = "read";
            await contact.save();
        }
        return res.status(200).json({ success: true, contact });
    } catch (err) {
        next(err);
    }
};



// UPDATE CONTACT STATUS — ADMIN
export const updateContactStatusController = async (req, res, next) => {
    try {
        const { status } = req.body;
        const valid = ["new", "read", "replied"];
        if (!valid.includes(status)) {
            const err = new Error("Invalid status.");
            err.statusCode = 400;
            throw err;
        }
        const contact = await Contact.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!contact) {
            const err = new Error("Contact not found.");
            err.statusCode = 404;
            throw err;
        }
        return res.status(200).json({ success: true, contact });
    } catch (err) {
        next(err);
    }
};



// DELETE CONTACT — ADMIN
export const deleteContactController = async (req, res, next) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
            const err = new Error("Contact not found.");
            err.statusCode = 404;
            throw err;
        }
        return res.status(200).json({ success: true, message: "Contact deleted." });
    } catch (err) {
        next(err);
    }
};
