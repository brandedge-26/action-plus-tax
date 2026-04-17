import { mailTransporter } from "../config/nodemailer.js";
import { ENV } from "../config/env.js";




// ============================================
// EMAIL TEMPLATES
// ============================================

// OTP EMAIL TEMPLATE
const otpEmailTemplate = (otp, expiresMinutes) => {

    const safeOtp = String(otp);

    return {
        subject: "Your OTP Code - Action Plus Tax",
        text: `Your OTP code is ${safeOtp}. It expires in ${expiresMinutes} minutes.`,
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Action Plus Tax - OTP Verification</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
    <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f4f7fa;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                
                <!-- Main Container -->
                <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 20px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.1);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background: rgba(255,255,255,0.1); padding: 30px; text-align: center; backdrop-filter: blur(10px);">
                            <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: 2px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
                                🔐 Action Plus Tax
                            </h1>
                            <p style="margin: 10px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px; font-weight: 300;">
                                Secure Authentication
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Content Body -->
                    <tr>
                        <td style="background-color: #ffffff; padding: 50px 40px;">
                            
                            <!-- Greeting -->
                            <h2 style="margin: 0 0 15px 0; color: #2d3748; font-size: 26px; font-weight: 600; text-align: center;">
                                Verification Code
                            </h2>
                            
                            <p style="margin: 0 0 30px 0; color: #718096; font-size: 16px; line-height: 1.6; text-align: center;">
                                Use the code below to complete your verification process. This code is valid for a limited time only.
                            </p>
                            
                            <!-- OTP Box -->
                            <table role="presentation" style="width: 100%; margin: 30px 0;">
                                <tr>
                                    <td align="center">
                                        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 3px; border-radius: 15px; display: inline-block; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">
                                            <div style="background-color: #ffffff; padding: 25px 50px; border-radius: 12px;">
                                                <div style="font-size: 36px; font-weight: 800; color: #667eea; letter-spacing: 8px; font-family: 'Courier New', monospace; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
                                                    ${safeOtp.split('').join(' ')}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Expiry Info -->
                            <table role="presentation" style="width: 100%; margin: 25px 0; background-color: #fffaf0; border-left: 4px solid #ed8936; border-radius: 8px; overflow: hidden;">
                                <tr>
                                    <td style="padding: 15px 20px;">
                                        <p style="margin: 0; color: #c05621; font-size: 14px; font-weight: 500;">
                                            ⏱️ This code expires in <strong>${expiresMinutes} minute${expiresMinutes > 1 ? 's' : ''}</strong>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Security Note -->
                            <table role="presentation" style="width: 100%; margin-top: 30px; background-color: #f7fafc; border-radius: 10px; padding: 20px;">
                                <tr>
                                    <td style="padding: 15px;">
                                        <p style="margin: 0 0 10px 0; color: #4a5568; font-size: 13px; font-weight: 600;">
                                            🔒 Security Tips:
                                        </p>
                                        <ul style="margin: 0; padding-left: 20px; color: #718096; font-size: 13px; line-height: 1.8;">
                                            <li>Never share this code with anyone</li>
                                            <li>Action Plus Tax staff will never ask for your OTP</li>
                                            <li>If you didn't request this, you can safely ignore this email</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>
                            
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f7fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0 0 10px 0; color: #718096; font-size: 14px; font-weight: 500;">
                                Need Help?
                            </p>
                            <p style="margin: 0 0 20px 0; color: #a0aec0; font-size: 13px; line-height: 1.6;">
                                If you're having trouble using the code, contact our support team.
                            </p>
                            <p style="margin: 0; color: #cbd5e0; font-size: 12px;">
                                © ${new Date().getFullYear()} Action Plus Tax. All rights reserved.
                            </p>
                        </td>
                    </tr>
                    
                </table>
                <!-- End Main Container -->
                
            </td>
        </tr>
    </table>
</body>
</html>
        `.trim()
    };

};




// WELCOME EMAIL TEMPLATE (After successful registration)
const welcomeEmailTemplate = (userName) => {
    return {
        subject: "Welcome to Action Plus Tax! 🎉",
        text: `Welcome ${userName}! Your account has been successfully created.`,
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Action Plus Tax</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
    <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f4f7fa;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                
                <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 20px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.1);">
                    
                    <!-- Header with Celebration -->
                    <tr>
                        <td style="background: rgba(255,255,255,0.15); padding: 40px 30px; text-align: center;">
                            <div style="font-size: 60px; margin-bottom: 10px;">🎉</div>
                            <h1 style="margin: 0; color: #ffffff; font-size: 36px; font-weight: 700; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
                                Welcome to Action Plus Tax!
                            </h1>
                            <p style="margin: 15px 0 0 0; color: rgba(255,255,255,0.95); font-size: 16px; font-weight: 300;">
                                Your journey begins here
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="background-color: #ffffff; padding: 50px 40px;">
                            <h2 style="margin: 0 0 20px 0; color: #2d3748; font-size: 24px; font-weight: 600; text-align: center;">
                                Hi ${userName}! 👋
                            </h2>
                            
                            <p style="margin: 0 0 20px 0; color: #4a5568; font-size: 16px; line-height: 1.8; text-align: center;">
                                Thank you for joining Action Plus Tax! We're excited to have you on board. Your account has been successfully created and verified.
                            </p>
                            
                            <!-- Features Box -->
                            <table role="presentation" style="width: 100%; margin: 30px 0; background-color: #f7fafc; border-radius: 12px; padding: 25px;">
                                <tr>
                                    <td style="padding: 10px 15px;">
                                        <p style="margin: 0 0 15px 0; color: #2d3748; font-size: 15px; font-weight: 600;">
                                            ✨ What's Next?
                                        </p>
                                        <ul style="margin: 0; padding-left: 20px; color: #4a5568; font-size: 14px; line-height: 2;">
                                            <li>Complete your profile</li>
                                            <li>Explore our features</li>
                                            <li>Stay connected with us</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- CTA Button -->
                            <table role="presentation" style="width: 100%; margin: 30px 0;">
                                <tr>
                                    <td align="center">
                                        <a href="${ENV.CLIENT_URL || 'http://localhost:3000'}/login" style="display: inline-block; background: linear-gradient(135deg, #c0392b 0%, #e74c3c 100%); color: #ffffff; text-decoration: none; padding: 15px 40px; border-radius: 50px; font-size: 16px; font-weight: 600; box-shadow: 0 4px 15px rgba(192, 57, 43, 0.4);">
                                            Go to Login →
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f7fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0 0 15px 0; color: #718096; font-size: 14px;">
                                Questions? Reach out to our support team anytime.
                            </p>
                            <p style="margin: 0; color: #cbd5e0; font-size: 12px;">
                                © ${new Date().getFullYear()} Action Plus Tax. All rights reserved.
                            </p>
                        </td>
                    </tr>
                    
                </table>
                
            </td>
        </tr>
    </table>
</body>
</html>
        `.trim()
    };
};





// SEND OTP EMAIL
export const sendOtpEmail = async ({ to, otp, expiresMinutes = 10 }) => {

    const tpl = otpEmailTemplate(otp, expiresMinutes);


    const mailOptions = {
        from: `"Action Plus Tax" <${ENV.SENDER_EMAIL}>`,
        to: to,
        subject: tpl.subject,
        text: tpl.text,
        html: tpl.html,
    };

    return mailTransporter.sendMail(mailOptions);

};




// SEND WELCOME EMAIL
export const sendWelcomeEmail = async ({ to, name }) => {

    const tpl = welcomeEmailTemplate(name);


    const mailOptions = {
        from: `"Action Plus Tax" <${ENV.SENDER_EMAIL}>`,
        to: to,
        subject: tpl.subject,
        text: tpl.text,
        html: tpl.html,
    };

    return mailTransporter.sendMail(mailOptions);

};




// APPOINTMENT STATUS EMAIL TEMPLATE
const appointmentStatusEmailTemplate = (fullName, status, date, time, service) => {

    const statusConfig = {
        confirmed: {
            color: "#27ae60",
            gradientFrom: "#27ae60",
            gradientTo: "#2ecc71",
            icon: "",
            title: "Appointment Confirmed!",
            message: "Great news! Your appointment has been confirmed. We look forward to seeing you.",
            badgeText: "CONFIRMED",
        },
        scheduled: {
            color: "#2980b9",
            gradientFrom: "#2980b9",
            gradientTo: "#3498db",
            icon: "📅",
            title: "Appointment Scheduled!",
            message: "Your appointment has been scheduled. Please make sure to be available at the given date and time.",
            badgeText: "SCHEDULED",
        },
        cancelled: {
            color: "#c0392b",
            gradientFrom: "#c0392b",
            gradientTo: "#e74c3c",
            icon: "❌",
            title: "Appointment Cancelled",
            message: "We're sorry to inform you that your appointment has been cancelled. Please feel free to book a new appointment.",
            badgeText: "CANCELLED",
        },
        completed: {
            color: "#8e44ad",
            gradientFrom: "#8e44ad",
            gradientTo: "#9b59b6",
            icon: "🎉",
            title: "Appointment Completed!",
            message: "Thank you for your visit! We hope you had a great experience. Feel free to reach out if you need anything.",
            badgeText: "COMPLETED",
        },
        pending: {
            color: "#f39c12",
            gradientFrom: "#f39c12",
            gradientTo: "#f1c40f",
            icon: "⏳",
            title: "Appointment Pending",
            message: "Your appointment is currently pending review. We will confirm it shortly within 1 business day.",
            badgeText: "PENDING",
        },
    };

    const cfg = statusConfig[status] || statusConfig.pending;

    return {
        subject: `Appointment ${cfg.badgeText} - Action Plus Tax`,
        text: `Hi ${fullName}, your appointment for ${service} on ${date} at ${time} has been ${status}. ${cfg.message}`,
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Appointment Update - Action Plus Tax</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
    <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f4f7fa;">
        <tr>
            <td align="center" style="padding: 40px 20px;">

                <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background: linear-gradient(135deg, ${cfg.gradientFrom} 0%, ${cfg.gradientTo} 100%); border-radius: 20px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.1);">

                    <!-- Header -->
                    <tr>
                        <td style="background: rgba(255,255,255,0.15); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 30px; font-weight: 700; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
                                ${cfg.title}
                            </h1>
                            <p style="margin: 10px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px; font-weight: 300;">
                                Action Plus Tax - Appointment Update
                            </p>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="background-color: #ffffff; padding: 50px 40px;">

                            <h2 style="margin: 0 0 10px 0; color: #2d3748; font-size: 22px; font-weight: 600;">
                                Hi ${fullName},
                            </h2>

                            <p style="margin: 0 0 30px 0; color: #4a5568; font-size: 16px; line-height: 1.8;">
                                ${cfg.message}
                            </p>

                            <!-- Appointment Details Box -->
                            <table role="presentation" style="width: 100%; margin: 20px 0; background-color: #f7fafc; border-radius: 12px; border-left: 5px solid ${cfg.color};">
                                <tr>
                                    <td style="padding: 25px 30px;">
                                        <p style="margin: 0 0 15px 0; color: #2d3748; font-size: 15px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                                            Appointment Details
                                        </p>
                                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                            <tr>
                                                <td style="padding: 6px 0; color: #718096; font-size: 14px; width: 110px;">Service:</td>
                                                <td style="padding: 6px 0; color: #2d3748; font-size: 14px; font-weight: 600;">${service}</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 6px 0; color: #718096; font-size: 14px;">Date:</td>
                                                <td style="padding: 6px 0; color: #2d3748; font-size: 14px; font-weight: 600;">${date}</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 6px 0; color: #718096; font-size: 14px;">Time:</td>
                                                <td style="padding: 6px 0; color: #2d3748; font-size: 14px; font-weight: 600;">${time}</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 6px 0; color: #718096; font-size: 14px;">Status:</td>
                                                <td style="padding: 6px 0;">
                                                    <span style="display: inline-block; background-color: ${cfg.color}; color: #ffffff; padding: 3px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; letter-spacing: 1px;">
                                                        ${cfg.badgeText}
                                                    </span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <p style="margin: 30px 0 0 0; color: #718096; font-size: 14px; line-height: 1.7;">
                                If you have any questions, feel free to contact us. We're always happy to help!
                            </p>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f7fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0 0 10px 0; color: #718096; font-size: 14px;">
                                Action Plus Tax | Professional Tax Services
                            </p>
                            <p style="margin: 0; color: #cbd5e0; font-size: 12px;">
                                © ${new Date().getFullYear()} Action Plus Tax. All rights reserved.
                            </p>
                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>
</body>
</html>
        `.trim()
    };
};




// SEND APPOINTMENT STATUS EMAIL
export const sendAppointmentStatusEmail = async ({ to, fullName, status, date, time, service }) => {

    const tpl = appointmentStatusEmailTemplate(fullName, status, date, time, service);

    const mailOptions = {
        from: `"Action Plus Tax" <${ENV.SENDER_EMAIL}>`,
        to: to,
        subject: tpl.subject,
        text: tpl.text,
        html: tpl.html,
    };

    return mailTransporter.sendMail(mailOptions);

};




export {
    otpEmailTemplate,
    welcomeEmailTemplate,
    appointmentStatusEmailTemplate
};