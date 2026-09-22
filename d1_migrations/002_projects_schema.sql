CREATE TABLE IF NOT EXISTS projects (
  id TEXT PRIMARY KEY,
  project_id TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  request_id TEXT,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  title TEXT NOT NULL,
  pillar TEXT NOT NULL,
  service TEXT NOT NULL,
  description TEXT NOT NULL,
  budget TEXT,
  deadline TEXT,
  status TEXT DEFAULT 'Planning',
  progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  notes TEXT DEFAULT '',
  files TEXT DEFAULT '[]',
  CHECK (pillar IN ('assist', 'build', 'iot', 'home')),
  CHECK (status IN ('Planning', 'In Progress', 'On Hold', 'Completed', 'Cancelled'))
);

CREATE INDEX IF NOT EXISTS idx_projects_project_id ON projects(project_id);
CREATE INDEX IF NOT EXISTS idx_projects_request_id ON projects(request_id);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);
