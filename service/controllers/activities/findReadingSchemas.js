import { findReading } from '../../service/database/findService.js';

const findReadingSchemas = async (req, res) => {
  const { limit = 15, from = 0 } = req.body;
  try {
    const activity = await findReading(from, limit);
    res.status(200).json({
      ok: true,
      ...activity,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error,
    });
  }
};
export default findReadingSchemas;
