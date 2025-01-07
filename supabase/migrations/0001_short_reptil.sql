ALTER TABLE "users_table" RENAME TO "leads";--> statement-breakpoint
ALTER TABLE "leads" DROP CONSTRAINT "users_table_email_unique";--> statement-breakpoint
ALTER TABLE "leads" ADD CONSTRAINT "leads_email_unique" UNIQUE("email");