import bcryptjs from 'bcryptjs';
import { findUser } from '../../service/database/index.js';
import generateJwt from '../../utils/generateJwt.js';

const login = async (req, res) => {
  const { password: passReceived, email, username } = req.body;
  try {
    const userData = findUser({ username, email });
    const { password, condition, ...user } = userData;
    const validatePassword = bcryptjs.compareSync(passReceived, password);

    if (!user || !validatePassword) {
      return res.status(400).json({
        ok: false,
        msg: `The user/password is not correct`,
      });
    }

    const token = await generateJwt(user._id, user.isAdmin);
    res.status(200).json({
      ok: true,
      msg: 'Logged in successfully',
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error,
    });
  }
};
export default login;
