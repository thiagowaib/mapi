const { pgTable, serial, text, timestamp } = require('drizzle-orm/pg-core');

const leadsTable = pgTable('leads', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  contact: text('contact').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('createdAt').defaultNow()
});

const enrollmentsTable = pgTable('enrollments', {
  id: serial('id').primaryKey(),
  content: text('content').notNull(),
  createdAt: timestamp('createdAt').defaultNow()
})

module.exports = {
    leadsTable,
    enrollmentsTable
}