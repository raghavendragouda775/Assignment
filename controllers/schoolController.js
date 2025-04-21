import db from "../config/db.js";
import calculateDistance from "../utils/distance.js";
export const addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;
  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ error: 'Latitude and Longitude must be numbers' });
  }
  try {
    const [result] = await db.execute(
      'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
      [name, address, latitude, longitude]
    );

    res.status(201).json({ message: 'School added successfully', id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err });
  }
};
export const listofSchools = async (req, res) => {
  const userLat = parseFloat(req.query.latitude);
  const userLon = parseFloat(req.query.longitude);

  if (isNaN(userLat) || isNaN(userLon)) {
    return res.status(400).json({ error: 'Invalid latitude or longitude' });
  }

  try {
    const [schools] = await db.execute('SELECT * FROM schools');

    const enriched = schools.map(school => ({
      ...school,
      distance: calculateDistance(userLat, userLon, school.latitude, school.longitude)
    }));

    enriched.sort((a, b) => a.distance - b.distance);

    res.json(enriched);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch schools' });
  }
};
