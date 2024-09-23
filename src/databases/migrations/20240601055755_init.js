/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .dropTableIfExists('carts')
  .dropTableIfExists('orders')
  .dropTableIfExists('menus')
  .dropTableIfExists('menu_events')
  .dropTableIfExists('menu_categories')
  .dropTableIfExists('payments')
  .dropTableIfExists('wallets')
  .dropTableIfExists('users')
  .dropTableIfExists('roles')
  .createTable('roles', table => {
    table.integer('id', 1).notNullable().unsigned().primary();
    table.string('role').notNullable();
  })
  .createTable('users', table => {
    table.integer('id_role', 1).notNullable().unsigned();
    table.string('name').notNullable();
    table.string('username').notNullable().unique();
    table.string('password').notNullable();
    table.foreign('id_role').references('id').inTable('roles');
  })
  .createTable('wallets', table => {
    table.string('id', 36).notNullable().primary();
    table.string('wallet').notNullable();
  })
  .createTable('payments', table => {
    table.string('id', 36).notNullable().primary();
    table.string('id_wallet', 36).notNullable();
    table.string('account_name').notNullable();
    table.string('account_id').notNullable();
    table.boolean('active');
    table.foreign('id_wallet').references('id').inTable('wallets');
  })
  .createTable('menu_categories', table => {
    table.string('id', 36).notNullable().primary();
    table.string('category').notNullable().unique();
  })
  .createTable('menu_events', table => {
    table.string('id', 36).notNullable().primary();
    table.string('event').notNullable().unique();
  })
  .createTable('menus', table => {
    table.string('id', 36).notNullable().primary();
    table.string('name').notNullable().unique();
    table.string('id_category', 36).notNullable();
    table.string('id_event', 36).notNullable();
    table.integer('price').notNullable().unsigned();
    table.integer('stock').notNullable().unsigned();
    table.boolean('active');
    table.foreign('id_category').references('id').inTable('menu_categories');
    table.foreign('id_event').references('id').inTable('menu_events');
  })
  .createTable('orders', table => {
    table.string('id', 36).notNullable().primary();
    table.datetime('datetime').notNullable();
    table.string('id_payment', 36).notNullable();
    table.string('bill').notNullable().unique();
    table.foreign('id_payment').references('id').inTable('payments');
  })
  .createTable('carts', table => {
    table.string('id_order', 36).notNullable();
    table.string('id_menu', 36).notNullable();
    table.integer('quantity').notNullable().unsigned();
    table.foreign('id_order').references('id').inTable('orders');
    table.foreign('id_menu').references('id').inTable('menus');
  })
  .then(() => {
    return knex('roles').insert([
      { id: '1', role: 'manager' },
      { id: '2', role: 'supervisor' },
      { id: '3', role: 'admin' }
    ]);
  })
  .then(() => {
    return knex('users').insert([
      { id_role: '1', name: 'Faris', username: 'faris', password: 'manager' }
    ]);
  })
  .then(() => {
    return knex('menu_events').insert([
      { id: '', event: '' }
    ]);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('carts')
  .dropTableIfExists('orders')
  .dropTableIfExists('menus')
  .dropTableIfExists('menu_events')
  .dropTableIfExists('menu_categories')
  .dropTableIfExists('payments')
  .dropTableIfExists('wallets')
  .dropTableIfExists('users')
  .dropTableIfExists('roles');
};
