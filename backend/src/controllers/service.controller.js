import { Service } from "../models/Service.js";



// GET ACTIVE SERVICES — PUBLIC
export const getActiveServicesController = async (req, res, next) => {
    try {
        const services = await Service.find({ active: true }).sort({ order: 1, createdAt: 1 });
        return res.status(200).json({ success: true, services });
    } catch (err) {
        next(err);
    }
};



// GET ALL SERVICES — ADMIN
export const getAllServicesController = async (req, res, next) => {
    try {
        const services = await Service.find().sort({ order: 1, createdAt: 1 });
        return res.status(200).json({ success: true, services });
    } catch (err) {
        next(err);
    }
};



// CREATE SERVICE — ADMIN
export const createServiceController = async (req, res, next) => {
    try {
        const { name, slug, category, cta, description, active, order } = req.body;

        if (!name?.trim() || !slug?.trim() || !category) {
            const err = new Error("Name, slug, and category are required.");
            err.statusCode = 400;
            throw err;
        }

        const existing = await Service.findOne({ slug: slug.toLowerCase() });
        if (existing) {
            const err = new Error("A service with this slug already exists.");
            err.statusCode = 409;
            throw err;
        }

        const service = await Service.create({ name, slug, category, cta, description, active, order: order ?? 0 });
        return res.status(201).json({ success: true, service });
    } catch (err) {
        next(err);
    }
};



// UPDATE SERVICE — ADMIN
export const updateServiceController = async (req, res, next) => {
    try {
        const { name, slug, category, cta, description, active, order } = req.body;
        const update = {};
        if (name  !== undefined) update.name  = name;
        if (slug  !== undefined) update.slug  = slug.toLowerCase();
        if (category !== undefined) update.category = category;
        if (cta   !== undefined) update.cta   = cta;
        if (description !== undefined) update.description = description;
        if (active !== undefined) update.active = active;
        if (order !== undefined) update.order = order;

        const service = await Service.findByIdAndUpdate(req.params.id, update, { new: true });
        if (!service) {
            const err = new Error("Service not found.");
            err.statusCode = 404;
            throw err;
        }
        return res.status(200).json({ success: true, service });
    } catch (err) {
        next(err);
    }
};



// TOGGLE SERVICE ACTIVE — ADMIN
export const toggleServiceController = async (req, res, next) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            const err = new Error("Service not found.");
            err.statusCode = 404;
            throw err;
        }
        service.active = !service.active;
        await service.save();
        return res.status(200).json({ success: true, service });
    } catch (err) {
        next(err);
    }
};



// SEED DEFAULT SERVICES — ADMIN
export const seedServicesController = async (req, res, next) => {
    const defaults = [
        { name: "Tax Preparation & Filing",           slug: "tax-preparation",   category: "Tax Services",       cta: "Start My Tax Filing",       order: 1  },
        { name: "Individual Income Tax Filing",        slug: "individual-tax",    category: "Tax Services",       cta: "File My Return",            order: 2  },
        { name: "Self-Employed / Freelance Tax",       slug: "self-employed",     category: "Tax Services",       cta: "File Self-Employment Taxes", order: 3  },
        { name: "Crypto & Investment Tax",             slug: "crypto-tax",        category: "Tax Services",       cta: "File Crypto Taxes",         order: 4  },
        { name: "Tax Extensions",                      slug: "tax-extensions",    category: "Tax Services",       cta: "Get an Extension",          order: 5  },
        { name: "Amended Tax Returns",                 slug: "amended-returns",   category: "Tax Services",       cta: "Amend My Return",           order: 6  },
        { name: "Tax Resolution & IRS Support",        slug: "tax-resolution",    category: "Tax Resolution",     cta: "Get IRS Help",              order: 7  },
        { name: "IRS Audit Support & Representation",  slug: "audit-support",     category: "Tax Resolution",     cta: "Get Audit Support",         order: 8  },
        { name: "Tax Planning Services",               slug: "tax-planning",      category: "Tax Planning",       cta: "Plan My Taxes",             order: 9  },
        { name: "Bookkeeping Services",                slug: "bookkeeping",       category: "Business Services",  cta: "Start Bookkeeping",         order: 10 },
        { name: "Payroll Services",                    slug: "payroll",           category: "Business Services",  cta: "Set Up Payroll",            order: 11 },
        { name: "Business Valuation",                  slug: "business-valuation",category: "Business Services",  cta: "Value My Business",         order: 12 },
        { name: "Refund Advance",                      slug: "refund-advance",    category: "Financial Products", cta: "Get My Advance",            order: 13 },
        { name: "Drop Off & Go",                       slug: "drop-off",          category: "Financial Products", cta: "Drop Off Documents",        order: 14 },
    ];
    try {
        let created = 0;
        for (const s of defaults) {
            const exists = await Service.findOne({ slug: s.slug });
            if (!exists) {
                await Service.create({ ...s, active: true });
                created++;
            }
        }
        return res.status(200).json({ success: true, message: `Seeded ${created} new service(s). ${defaults.length - created} already existed.`, created });
    } catch (err) {
        next(err);
    }
};



// DELETE SERVICE — ADMIN
export const deleteServiceController = async (req, res, next) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);
        if (!service) {
            const err = new Error("Service not found.");
            err.statusCode = 404;
            throw err;
        }
        return res.status(200).json({ success: true, message: "Service deleted." });
    } catch (err) {
        next(err);
    }
};
