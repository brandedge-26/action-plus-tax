import { Consultation } from "../models/Consultation.js";
import { User } from "../models/User.js";
import { z } from "zod";
import { sendAppointmentStatusEmail } from "../utils/email.js";



const createSchema = z.object({
    fullName: z.string().min(2),
    email:    z.string().email(),
    phone:    z.string().min(7),
    service:  z.string().min(2),
    date:     z.string().min(1),
    time:     z.string().min(1),
    notes:    z.string().optional().default(""),
});



// CREATE — public
export const createConsultationController = async (req, res, next) => {
    try {
        const parsed = createSchema.safeParse(req.body);
        if (!parsed.success) return next(parsed.error);

        const consultation = await Consultation.create(parsed.data);

        return res.status(201).json({
            success: true,
            message: "Consultation booked successfully! We'll confirm within 1 business day.",
            consultation: {
                id: consultation._id,
                status: consultation.status,
            },
        });
    } catch (err) {
        next(err);
    }
};



// GET ALL — admin only
export const getConsultationsController = async (req, res, next) => {
    try {
        const { status, page = 1, limit = 50 } = req.query;
        const filter = status ? { status } : {};

        const consultations = await Consultation.find(filter)
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const total = await Consultation.countDocuments(filter);

        return res.status(200).json({
            success: true,
            total,
            consultations,
        });
    } catch (err) {
        next(err);
    }
};



// UPDATE STATUS — admin only
export const updateConsultationStatusController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const allowed = ["pending", "confirmed", "scheduled", "cancelled", "completed"];
        if (!allowed.includes(status)) {
            const err = new Error("Invalid status value.");
            err.statusCode = 400;
            throw err;
        }

        const consultation = await Consultation.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!consultation) {
            const err = new Error("Consultation not found.");
            err.statusCode = 404;
            throw err;
        }

        // Send email notification to client
        try {
            await sendAppointmentStatusEmail({
                to: consultation.email,
                fullName: consultation.fullName,
                status,
                date: consultation.date,
                time: consultation.time,
                service: consultation.service,
            });
        } catch (emailErr) {
            console.error("Failed to send appointment status email:", emailErr.message);
        }

        return res.status(200).json({ success: true, consultation });
    } catch (err) {
        next(err);
    }
};



// GET ALL USERS — admin only
export const getUsersController = async (req, res, next) => {
    try {
        const { page = 1, limit = 100, search } = req.query;
        const filter = search
            ? { $or: [
                { name:  { $regex: search, $options: "i" } },
                { email: { $regex: search, $options: "i" } },
            ]}
            : {};

        const users = await User.find(filter)
            .select("-password -providerId")
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const total = await User.countDocuments(filter);

        return res.status(200).json({ success: true, total, users });
    } catch (err) {
        next(err);
    }
};
