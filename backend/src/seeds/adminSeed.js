import "dotenv/config";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

// ── DB connect ────────────────────────────────────────────────────────────────
const DB_URL = process.env.DB_URL;
if (!DB_URL) {
    console.error("❌  DB_URL missing in .env");
    process.exit(1);
}

// ── Inline User model (avoids importing full env validation) ──────────────────
const userSchema = new mongoose.Schema(
    {
        name:            { type: String, trim: true, required: true },
        email:           { type: String, trim: true, lowercase: true, unique: true, required: true },
        phone:           { type: String, default: null },
        password:        { type: String, default: null },
        provider:        { type: String, enum: ["local", "google"], default: "local" },
        providerId:      { type: String, default: null },
        isEmailVerified: { type: Boolean, default: false },
        profilePicture:  { type: String, default: null },
        role:            { type: String, enum: ["client", "admin"], default: "client" },
    },
    { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

// ── Admin credentials ─────────────────────────────────────────────────────────
const ADMIN_EMAIL    = "admin@actionplustax.com";
const ADMIN_PASSWORD = "admin-123";
const ADMIN_NAME     = "Admin";

// ── Seed ─────────────────────────────────────────────────────────────────────
const seed = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("✅  MongoDB connected");

        const existing = await User.findOne({ email: ADMIN_EMAIL });

        if (existing) {
            // Update password + role in case they changed
            const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);
            existing.password        = hashedPassword;
            existing.role            = "admin";
            existing.isEmailVerified = true;
            await existing.save();
            console.log("✅  Admin user already existed — credentials refreshed.");
        } else {
            const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);
            await User.create({
                name:            ADMIN_NAME,
                email:           ADMIN_EMAIL,
                password:        hashedPassword,
                role:            "admin",
                isEmailVerified: true,
                provider:        "local",
            });
            console.log("✅  Admin user created successfully.");
        }

        console.log("──────────────────────────────────");
        console.log("  Email   :", ADMIN_EMAIL);
        console.log("  Password:", ADMIN_PASSWORD);
        console.log("  Role    : admin");
        console.log("──────────────────────────────────");

    } catch (err) {
        console.error("❌  Seed failed:", err.message);
    } finally {
        await mongoose.disconnect();
        console.log("🔌  MongoDB disconnected");
        process.exit(0);
    }
};

seed();
