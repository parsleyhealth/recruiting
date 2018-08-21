exports.allPeople = db => async ctx => {
  const people = await db.all('select * from person;');
  ctx.body = people;
};

exports.getPersonById = db => async ctx => {
  const person = await db.get(
    'select id, first_name, last_name, email from person where id = ?;',
    ctx.params.id
  );

  if (!person) {
    return ctx.throw(404);
  }

  ctx.body = person;
};
