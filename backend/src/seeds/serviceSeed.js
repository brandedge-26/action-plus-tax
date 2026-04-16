import "dotenv/config";
import mongoose from "mongoose";
import { Service } from "../models/Service.js";

const DB_URL = process.env.DB_URL;
if (!DB_URL) { console.error("❌  DB_URL missing"); process.exit(1); }

const services = [
    { name: "Tax Preparation & Filing",            slug: "tax-preparation",   category: "Tax Services",      cta: "Start My Tax Filing",         active: true,  order: 1  },
    { name: "Individual Income Tax Filing",         slug: "individual-tax",    category: "Tax Services",      cta: "File My Taxes",               active: true,  order: 2  },
    { name: "Self-Employed / Freelance Tax",        slug: "self-employed",     category: "Tax Services",      cta: "File My Self-Employed Taxes",  active: true,  order: 3  },
    { name: "Crypto & Investment Tax",              slug: "crypto-tax",        category: "Tax Services",      cta: "Report My Crypto",             active: true,  order: 4  },
    { name: "Tax Extensions",                       slug: "tax-extensions",    category: "Tax Services",      cta: "Apply for Extension",          active: true,  order: 5  },
    { name: "Amended Tax Returns",                  slug: "amended-returns",   category: "Tax Services",      cta: "Amend My Return",              active: true,  order: 6  },
    { name: "Tax Resolution & IRS Support",         slug: "tax-resolution",    category: "Tax Resolution",    cta: "Resolve My Tax Issue",         active: true,  order: 7  },
    { name: "IRS Audit Support & Representation",   slug: "audit-support",     category: "Tax Resolution",    cta: "Get Audit Support",            active: true,  order: 8  },
    { name: "Tax Planning Services",                slug: "tax-planning",      category: "Tax Planning",      cta: "Schedule Consultation",        active: true,  order: 9  },
    { name: "Bookkeeping Services",                 slug: "bookkeeping",       category: "Business Services", cta: "Manage My Books",              active: true,  order: 10 },
    { name: "Payroll Services",                     slug: "payroll",           category: "Business Services", cta: "Manage My Payroll",            active: true,  order: 11 },
    { name: "Business Valuation",                   slug: "business-valuation",category: "Business Services", cta: "Get My Business Valued",       active: true,  order: 12 },
    { name: "Refund Advance",                       slug: "refund-advance",    category: "Financial Products",cta: "Get My Advance",               active: true,  order: 13 },
    { name: "Drop Off & Go",                        slug: "drop-off",          category: "Financial Products",cta: "Drop Off My Documents",        active: true,  order: 14 },
];

const seed = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("✅  MongoDB connected");

        let created = 0, skipped = 0;
        for (const s of services) {
            const existing = await Service.findOne({ slug: s.slug });
            if (existing) { skipped++; continue; }
            await Service.create(s);
            created++;
        }

        console.log(`✅  ${created} services seeded, ${skipped} already existed.`);
    } catch (err) {
        console.error("❌  Seed failed:", err.message);
    } finally {
        await mongoose.disconnect();
        process.exit(0);
    }
};

seed();
