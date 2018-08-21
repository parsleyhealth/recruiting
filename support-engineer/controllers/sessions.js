const bcrypt = require('bcrypt');

exports.logIn = db => async ctx => {
  const { email, password } = ctx.request.body;

  if (!email || !password) {
    return ctx.throw(400);
  }

  const person = await db.get(
    'select email, password_hash from person where lower(email) = ?',
    email
  );

  if (!person) {
    return ctx.throw(400);
  }

  const match = await bcrypt.compare(password, person.password_hash);

  if (!match) {
    return ctx.throw(400);
  }

  ctx.body = 'Logged in!';
};
