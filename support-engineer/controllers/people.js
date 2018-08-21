const { queryToConditions } = require('../utils/query-helpers');

exports.allPeople = db => async ctx => {
  if (Object.entries(ctx.query).length) {
    const conditions = queryToConditions(ctx.query);

    ctx.body = await db.all(
      `select id, first_name, last_name, email from person where ${conditions}`
    );
  } else {
    ctx.body = await db.all(
      'select id, first_name, last_name, email from person'
    );
  }
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
