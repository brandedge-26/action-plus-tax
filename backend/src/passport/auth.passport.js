import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import { ENV } from "../config/env.js";
import { User } from "../models/User.js";
import { sendWelcomeEmail } from "../utils/email.js";



// GOOGLE STRATEGY
passport.use(

    new GoogleStrategy({
        clientID: ENV.GOOGLE_CLIENT_ID,
        clientSecret: ENV.GOOGLE_CLIENT_SECRET,
        callbackURL: ENV.GOOGLE_CALLBACK_URL
    },

        async (accessToken, refreshToken, profile, done) => {
            try {

                // user email
                const email = profile.emails[0].value;


                // 1. CHECK USER BY PROVIDER & PROVIDER_ID
                const oauthUser = await User.findOne({
                    provider: "google",
                    providerId: profile.id
                });

                if (oauthUser) {
                    return done(null, { _id: oauthUser._id });
                }


                // 2. CHECK USER BY EMAIL
                let user = await User.findOne({ email });


                // 3. CREATE USER IF NOT EXISTS
                if (!user) {

                    const newUser = await User.create({
                        name: profile.displayName,
                        email: email,
                        provider: "google",
                        providerId: profile.id,
                        profilePicture: profile.photos?.[0]?.value || null,
                        isEmailVerified: true,
                        password: null
                    });

                    // send welcome email
                    await sendWelcomeEmail({ to: newUser.email, name: newUser.name });

                    return done(null, { _id: newUser._id });
                }


                // 4. IF USER EXISTS BUT NO OAUTH LINK, UPDATE WITH OAUTH INFO
                if (!user.providerId) {
                    user.provider = "google";
                    user.providerId = profile.id;
                    user.isEmailVerified = true;

                    if (!user.profilePicture && profile.photos?.[0]?.value) {
                        user.profilePicture = profile.photos[0].value;
                    }

                    await user.save();
                }

                return done(null, { _id: user._id });

            } catch (err) {
                return done(err, null);
            }
        }

    ));
