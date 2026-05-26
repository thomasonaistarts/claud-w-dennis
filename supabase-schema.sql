-- Run this in your Supabase SQL Editor
-- Dashboard → SQL Editor → New Query → Paste & Run

create table hire_enquiries (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default now(),
  name text not null,
  email text not null,
  phone text,
  event_date date,
  guests text,
  message text not null
);

-- Enable Row Level Security
alter table hire_enquiries enable row level security;

-- Allow anyone to INSERT (submit form)
create policy "Anyone can submit enquiry"
  on hire_enquiries for insert
  with check (true);

-- Only authenticated users (you) can read
create policy "Only authenticated can read"
  on hire_enquiries for select
  using (auth.role() = 'authenticated');
