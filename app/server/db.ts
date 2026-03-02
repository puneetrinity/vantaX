import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const connectionString = process.env.DATABASE_URL!;
const client = postgres(connectionString);
export const db = drizzle(client, { schema });

const schemaStatements = [
  `CREATE TABLE IF NOT EXISTS candidates (
    id serial PRIMARY KEY,
    full_name varchar(255) NOT NULL,
    email varchar(255) NOT NULL UNIQUE,
    phone varchar(20) NOT NULL,
    linkedin_url varchar(500) NOT NULL,
    resume_path varchar(500) NOT NULL,
    college varchar(255),
    graduation_year varchar(10),
    degree_branch varchar(255),
    referral_source varchar(255),
    payment_status varchar(50) DEFAULT 'pending',
    payment_id varchar(255),
    created_at timestamp DEFAULT now()
  )`,
  `CREATE TABLE IF NOT EXISTS companies (
    id serial PRIMARY KEY,
    company_name varchar(255) NOT NULL,
    website_url varchar(500) NOT NULL,
    industry varchar(100),
    company_stage varchar(50),
    contact_name varchar(255) NOT NULL,
    contact_role varchar(255),
    contact_email varchar(255) NOT NULL,
    contact_phone varchar(20),
    problem_title varchar(500) NOT NULL,
    business_context text NOT NULL,
    core_task text NOT NULL,
    expected_deliverables text,
    preferred_stack varchar(255),
    tool_restrictions varchar(500),
    difficulty_level varchar(50),
    nominate_jury varchar(20),
    jury_name varchar(255),
    jury_designation varchar(255),
    custom_eval_criteria text,
    hiring_intent varchar(100),
    approx_openings varchar(50),
    skills_looking_for text,
    confirmations text,
    created_at timestamp DEFAULT now()
  )`,
  `CREATE TABLE IF NOT EXISTS jury_members (
    id serial PRIMARY KEY,
    full_name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    linkedin_url varchar(500) NOT NULL,
    current_role varchar(255),
    company varchar(255),
    domain_expertise text,
    years_experience varchar(20),
    availability varchar(50),
    motivation text,
    created_at timestamp DEFAULT now()
  )`,
];

export async function ensureDatabaseSchema() {
  for (const statement of schemaStatements) {
    await client.unsafe(statement);
  }
}
