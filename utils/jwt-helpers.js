import jwt from 'jsonwebtoken';


//Generate an access token and a refresh token for this database user
function jwtTokens({ id, nickname, email }) {
  const user = { id, nickname, email}; 
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '29m' });
  return ({ accessToken, refreshToken });
}

export {jwtTokens};