const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/ewaste", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define schema with geolocation
const StationSchema = new mongoose.Schema({
    name: String,
    address: String,
    location: {
        type: { type: String, enum: ["Point"], required: true },
        coordinates: { type: [Number], required: true }, // [longitude, latitude]
    },
});

StationSchema.index({ location: "2dsphere" }); // Geospatial index
const Station = mongoose.model("Station", StationSchema);

// API to find nearby e-waste stations
app.get("/nearby-stations", async (req, res) => {
    const { lat, lng } = req.query;

    if (!lat || !lng) {
        return res.status(400).json({ error: "Latitude and longitude are required" });
    }

    try {
        const nearbyStations = await Station.find({
            location: {
                $near: {
                    $geometry: { type: "Point", coordinates: [parseFloat(lng), parseFloat(lat)] },
                    $maxDistance: 5000, // 5km radius
                },
            },
        });

        res.json(nearbyStations);
    } catch (error) {
        res.status(500).json({ error: "Error fetching stations" });
    }
});

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));