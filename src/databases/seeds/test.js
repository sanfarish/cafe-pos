/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('carts').del()
  await knex('orders').del()
  await knex('menus').del()
  await knex('menu_events').del()
  await knex('menu_categories').del()
  await knex('payments').del()
  await knex('wallets').del()
  await knex('users').del()
  await knex('roles').del()
  await knex('roles').insert([
    { id: '1', role: 'manager' },
    { id: '2', role: 'supervisor' },
    { id: '3', role: 'admin' }
  ]);
  await knex('users').insert([
    { id_role: '1', name: 'Djum', username: 'mariana', password: 'manager' },
    { id_role: '2', name: 'Hasan', username: 'faris', password: 'supervisor' },
    { id_role: '3', name: 'John Doe', username: 'john', password: 'admin' }
  ]);
  await knex('wallets').insert([
    { id: 'a7f2cd97-72b6-49e1-9f0d-7a56273d3e4e', wallet: 'BCA' },
    { id: '2d23356a-98c3-45fd-b232-c02f687bd350', wallet: 'goPay' }
  ]);
  await knex('payments').insert([
    {
      id: 'cf4500b6-c7f2-4734-af87-ef8faafc93ea',
      id_wallet: '2d23356a-98c3-45fd-b232-c02f687bd350',
      account_name: 'a/n Faris Hasan',
      account_id: '1234-abcd-efgh-5678',
      active: true
    },
    {
      id: '4bd9993e-5372-4b4e-9a8c-7d59a44253b9',
      id_wallet: 'a7f2cd97-72b6-49e1-9f0d-7a56273d3e4e',
      account_name: 'a/n Mariana Djum',
      account_id: '1234-abcd-efgh-5678',
      active: false
    }
  ]);
  await knex('menu_categories').insert([
    { id: '272793eb-9608-4550-a9bc-431a7bfc051c', category: 'foods' },
    { id: '6dceb22c-fb5f-44d3-9351-31ab44209b3d', category: 'drinks' }
  ]);
  await knex('menu_events').insert([
    { id: '', event: '' },
    { id: '03e2c00f-baec-45d5-93b8-0d2e55edde49', event: 'promo' },
    { id: '72330147-9b17-4578-ba20-7c588d0e279f', event: 'national-day' }
  ]);
  await knex('menus').insert([
    {
      id: '8ac182f8-420d-4ca0-aaa9-372b8d134942',
      name: 'Lamb Doner Kebab',
      id_category: '272793eb-9608-4550-a9bc-431a7bfc051c',
      id_event: '',
      price: 46500,
      stock: 98,
      active: true
    },
    {
      id: '899f1fad-6ab9-44d0-9763-46e76110a427',
      name: 'Chicken Katsu Curry Rice Box',
      id_category: '272793eb-9608-4550-a9bc-431a7bfc051c',
      id_event: '',
      price: 32000,
      stock: 74,
      active: true
    },
    {
      id: 'a29caed5-cdc8-4bfa-8bec-54f512660a56',
      name: 'Grape Slushy',
      id_category: '6dceb22c-fb5f-44d3-9351-31ab44209b3d',
      id_event: '03e2c00f-baec-45d5-93b8-0d2e55edde49',
      price: 22500,
      stock: 47,
      active: true
    },
    {
      id: '19b00202-90ce-40cd-a397-88de7997348e',
      name: 'Iced Lychee Tea',
      id_category: '6dceb22c-fb5f-44d3-9351-31ab44209b3d',
      id_event: '',
      price: 17000,
      stock: 73,
      active: true
    },
    {
      id: '4e9dddf1-3c23-470b-ae88-7e3a89102864',
      name: 'Fruit Salad',
      id_category: '272793eb-9608-4550-a9bc-431a7bfc051c',
      id_event: '72330147-9b17-4578-ba20-7c588d0e279f',
      price: 24000,
      stock: 0,
      active: false
    }
  ]);
  await knex('orders').insert([
    {
      id: 'bcf97fc4-ac44-43de-acef-37efa43b3d21',
      datetime: '2024-05-01T16:00',
      id_payment: 'cf4500b6-c7f2-4734-af87-ef8faafc93ea',
      bill: '1234-abcd-efgh-5678'
    }
  ]);
  await knex('carts').insert([
    {
      id_order: 'bcf97fc4-ac44-43de-acef-37efa43b3d21',
      id_menu: '8ac182f8-420d-4ca0-aaa9-372b8d134942',
      quantity: 2
    },
    {
      id_order: 'bcf97fc4-ac44-43de-acef-37efa43b3d21',
      id_menu: 'a29caed5-cdc8-4bfa-8bec-54f512660a56',
      quantity: 3
    },
    {
      id_order: 'bcf97fc4-ac44-43de-acef-37efa43b3d21',
      id_menu: '899f1fad-6ab9-44d0-9763-46e76110a427',
      quantity: 1
    },
    {
      id_order: 'bcf97fc4-ac44-43de-acef-37efa43b3d21',
      id_menu: '19b00202-90ce-40cd-a397-88de7997348e',
      quantity: 2
    }
  ]);
};
