const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// ===== MIDDLEWARES =====
app.use(morgan("dev"));
app.use(express.json());

// ✅ Updated CORS configuration
app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        "http://localhost:5173",
        "https://trailed-v2.vercel.app",
        "https://buyzoid.vercel.app",
      ];

      if (!origin) {
        // Allow requests like Postman or server-to-server
        return callback(null, true);
      }

      if (
        allowedOrigins.includes(origin) ||
        origin.endsWith(".vercel.app")
      ) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


// ===== ROUTES =====
const bagRoutes = require("./src/bags/bag.routes");
const orderRoutes = require("./src/orders/order.routes");
const userRoutes = require("./src/users/user.routes");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/bags", bagRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// ===== DEFAULT ROUTES =====
app.get("/", (req, res) => res.send("Hello makkaley"));

app.get("/health", (req, res) => res.status(200).json({ status: "UP" }));

// ===== ERROR HANDLING =====
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// ===== DB CONNECTION + SERVER START =====
const main = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ DB Connected successfully");

    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  } catch (err) {
    console.error(`❌ Database connection error: ${err}`);
    process.exit(1);
  }
};

main();
