CREATE TABLE "enrollments" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
