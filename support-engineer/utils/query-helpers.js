exports.queryToConditions = query => {
  return Object.entries(query)
    .map(e => `${e[0]} = '${e[1].replace(/'/g, "''")}'`)
    .join(' AND ');
};
