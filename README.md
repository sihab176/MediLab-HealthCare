# 🏥 MediLab – AI Powered Healthcare Service Platform

MediLab is a modern healthcare service platform that simplifies **doctor appointment booking** and **blood booking services** using smart search, AI-powered recommendations, and real-time availability.

---

## 🌐 Live Concept

MediLab helps users:

* Find the **right doctor** based on their health problems using **AI**
* Book **doctor appointments** easily
* Search and confirm **blood availability** based on **urgency & location**
* Get a smooth, modern, and user-friendly healthcare experience

---
## 🌐 Live Website

🔗 **MediLab Healthcare Platform**  
👉 https://medilab-healthcare.vercel.app

---
## 🚀 Core Features

### 👨‍⚕️ Doctor Appointment System

* 🔍 **AI-powered Doctor Suggestion**

  * Users describe their health problem
  * AI analyzes the problem and suggests the most suitable doctors
* 🗂️ Advanced doctor search & filtering
* 📅 Easy appointment booking system
* 🔐 Secure authentication for users & doctors

---

### 🩸 Blood Booking System

* 🆘 **Urgent & Available based search**
* 🧭 Search blood by:

  * Blood group
  * Urgency level
  * Availability
* ✅ Blood booking confirmation system
* 📢 Real-time availability updates

---

### 🤖 AI Integration

* Uses **OpenAI API**
* Smart health-problem analysis
* Improves doctor discovery accuracy
* Enhances overall user experience

---

### 🔐 Authentication & Security

* NextAuth authentication
* Secure password hashing using bcrypt
* Role-based access (User / Doctor / Admin)
* Protected routes

---

### 🎨 UI / UX Enhancements

* Smooth animations using **GSAP**
* Beautiful counters & stats
* Toast notifications & alerts
* Responsive & modern design

---

## 🧰 Tech Stack

### 🖥️ Frontend

* **Next.js 16**
* **React 19**
* GSAP Animations
* Recharts (Charts & Analytics)
* SweetAlert2
* React Hot Toast
* React Icons
* React Phone Input

### 🗄️ Backend

* MongoDB
* Next.js API Routes
* NextAuth
* Bcrypt for password security
* OpenAI API integration

---

## 📦 Dependencies

```json
{
  "@gsap/react": "^2.1.2",
  "bcrypt": "^6.0.0",
  "gsap": "^3.14.2",
  "mongodb": "^7.0.0",
  "next": "16.1.1",
  "next-auth": "^4.24.13",
  "openai": "^6.15.0",
  "react": "19.2.3",
  "react-dom": "19.2.3",
  "react-countup": "^6.5.3",
  "react-fast-marquee": "^1.6.5",
  "react-hot-toast": "^2.6.0",
  "react-icons": "^5.5.0",
  "react-phone-input-2": "^2.15.1",
  "recharts": "^3.6.0",
  "sweetalert2": "^11.26.17"
}
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/medilab.git

# Go to project directory
cd medilab

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env.local` file and add:

```env
MONGODB_URI=your_mongodb_connection
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
OPENAI_API_KEY=your_openai_key
```

---

## 📈 Future Enhancements

* 💬 AI chatbot for instant health guidance
* 📱 Mobile app version
* 🧑‍⚕️ Doctor dashboard with analytics
* 🩸 Blood donation tracking system
* 💳 Payment gateway integration

---

## 👨‍💻 Developer

**Shariar**
MERN Stack Developer | Next.js Specialist
Passionate about building large-scale, real-world applications 🚀

---

## ⭐ Final Note

If you like this project, don’t forget to **star ⭐ the repository**
Your support means a lot 💙

---