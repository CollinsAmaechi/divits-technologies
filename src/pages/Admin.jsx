import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Lock,
  LogOut,
  RefreshCw,
  X,
  Mail,
  Bell,
  MessageCircle,
  CalendarDays,
  Wallet,
  FolderOpen,
  Clock3,
  Inbox,
  FileQuestion,
  ArrowRightLeft,
  ChartColumn,
  Settings2,
  Package,
  Menu,
  ChevronDown,
  Copy,
  Check,
  Filter,
  Eye,
  BarChart3,
  CheckCircle,
  XCircle,
  Home,
  Plus,
  Edit2,
  Trash2,
  ClipboardList,
  AlertTriangle,
  Loader2,
} from "lucide-react";

const API_URL = "/api/admin/requests";

const statusOptions = [
  "All",
  "New",
  "Reviewing",
  "Accepted",
  "In Progress",
  "Completed",
  "Cancelled",
];

const statusColors = {
  New: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Reviewing: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  Accepted: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "In Progress": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Completed: "bg-green-500/10 text-green-400 border-green-500/20",
  Cancelled: "bg-red-500/10 text-red-400 border-red-500/20",
};

function formatDate(value) {
  if (!value) return "—";
  return new Date(value).toLocaleString("en-NG", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function formatValue(value) {
  if (!value) return "Not specified";
  return String(value)
    .replaceAll("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function copyToClipboard(text, onDone) {
  navigator.clipboard.writeText(text).then(() => {
    if (onDone) onDone();
  });
}

/* ---------- Stat Card ---------- */
function StatCard({ label, value, icon: Icon, accent }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-zinc-950/60 p-5 backdrop-blur-sm transition-colors hover:border-white/[0.12]">
      <div className={cn("absolute top-0 right-0 p-3 opacity-10", accent)}>
        <Icon size={28} />
      </div>
      <div className="flex items-center gap-2 text-xs text-zinc-500">
        <Icon size={14} />
        {label}
      </div>
      <p className="mt-3 text-2xl font-bold text-white">{value}</p>
    </div>
  );
}

/* ---------- Sidebar ---------- */
const sidebarNavItems = [
  { key: "requests", label: "Requests", icon: FileQuestion },
  { key: "projects", label: "Projects", icon: Package },
  { key: "analytics", label: "Analytics", icon: BarChart3 },
  { key: "settings", label: "Settings", icon: Settings2 },
];

function Sidebar({ activeSection, onNavigate, mobileOpen, onClose }) {
  return (
    <>
      {/* Desktop sidebar overlay */}
      <aside className="fixed left-0 top-0 z-40 hidden h-full w-60 flex-col border-r border-white/[0.06] bg-zinc-950/95 backdrop-blur-lg lg:flex">
        <div className="flex h-16 items-center justify-center border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-400/15 text-orange-400">
              <span className="font-bold text-sm">D</span>
            </div>
            <span className="font-heading font-bold text-white text-sm tracking-wide">
              DIVITS
            </span>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {sidebarNavItems.map((item) => {
            const isActive = activeSection === item.key;
            return (
              <button
                key={item.key}
                onClick={() => {
                  onNavigate(item.key);
                  if (window.innerWidth < 1024) onClose();
                }}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                  isActive
                    ? "bg-orange-400/10 text-orange-400"
                    : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                )}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-white/[0.06] px-3 py-4">
          <div className="flex items-center gap-3 rounded-lg bg-white/[0.03] px-3 py-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-400/20 text-orange-400 text-xs font-bold">
              A
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-white">Admin</p>
              <p className="text-[10px] text-zinc-500">Internal Portal</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-full w-60 flex-col border-r border-white/[0.06] bg-zinc-950/95 backdrop-blur-lg transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-center border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-400/15 text-orange-400">
              <span className="font-bold text-sm">D</span>
            </div>
            <span className="font-heading font-bold text-white text-sm tracking-wide">
              DIVITS
            </span>
          </div>
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-1 text-zinc-400 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="space-y-1 px-3 py-4">
          {sidebarNavItems.map((item) => {
            const isActive = activeSection === item.key;
            return (
              <button
                key={item.key}
                onClick={() => {
                  onNavigate(item.key);
                  onClose();
                }}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                  isActive
                    ? "bg-orange-400/10 text-orange-400"
                    : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                )}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-white/[0.06] px-3 py-4">
          <div className="flex items-center gap-3 rounded-lg bg-white/[0.03] px-3 py-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-400/20 text-orange-400 text-xs font-bold">
              A
            </div>
            <div>
              <p className="text-xs font-medium text-white">Admin</p>
              <p className="text-[10px] text-zinc-500">Internal Portal</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

/* ---------- Login Page ---------- */
function LoginPage({ error, onLogin, passwordInput, setPasswordInput, loading }) {
  return (
    <main className="flex min-h-screen bg-zinc-950">
      {/* Left panel - branding */}
      <div className="hidden lg:flex lg:w-[55%] flex-col justify-center px-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/15 text-orange-400">
            <span className="font-bold">D</span>
          </div>
          <span className="font-heading font-bold text-xl text-white">
            DIVITS Technologies
          </span>
        </div>
        <h1 className="text-4xl font-heading font-bold text-white leading-tight">
          Admin Portal
        </h1>
        <p className="mt-4 text-lg text-zinc-400 max-w-md leading-relaxed">
          Manage projects, requests, and client work from a single secure
          interface.
        </p>
        <div className="mt-12 space-y-4">
          {[
            "View all incoming requests",
            "Filter by status or service",
            "Track project progress",
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-400/10 text-orange-400 text-xs font-bold">
                {i + 1}
              </div>
              <span className="text-sm text-zinc-300">{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel - login form */}
      <div className="flex w-full flex-col items-center justify-center bg-zinc-950 p-8 lg:w-[45%]">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center lg:hidden">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/15 text-orange-400">
              <Lock size={24} />
            </div>
            <h1 className="text-2xl font-heading font-bold text-white">
              DIVITS Admin
            </h1>
            <p className="mt-2 text-sm text-zinc-400">Internal Portal</p>
          </div>

          <form onSubmit={onLogin} className="space-y-4">
            <div>
              <label className="mb-2 block text-xs font-medium text-zinc-300">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                />
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter admin password"
                  autoFocus
                  required
                  className="w-full rounded-xl border border-white/[0.08] bg-zinc-900/50 pl-11 pr-4 py-3.5 text-white outline-none transition focus:border-orange-400/50 focus:ring-1 focus:ring-orange-400/20"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-orange-400 py-3.5 font-semibold text-black transition hover:bg-orange-300 disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {error && (
            <div className="mt-4 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          <div className="mt-8 rounded-xl border border-white/[0.06] bg-zinc-900/30 p-5">
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Secured with bearer token authentication
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-zinc-600">
            DIVITS Technologies · Internal Portal
          </p>
        </div>
      </div>
    </main>
  );
}

/* ---------- Details Drawer ---------- */
function DetailsDrawer({ request, onClose, onSave, saving, saveError, editStatus, setEditStatus, editNotes, setEditNotes, onCreateProject }) {
  const [copied, setCopied] = useState(false);

  if (!request) return null;

  // Normalize files: D1 may return it as a JSON string
  let normalizedFiles = [];
  try {
    if (Array.isArray(request.files)) {
      normalizedFiles = request.files;
    } else if (typeof request.files === "string") {
      const parsed = JSON.parse(request.files);
      normalizedFiles = Array.isArray(parsed) ? parsed : [];
    }
  } catch {
    normalizedFiles = [];
  }

  const statusClass = statusColors[editStatus] || "border-white/10 bg-white/5 text-white/60";

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60">
      <div className="w-full max-w-md overflow-y-auto border-l border-white/[0.06] bg-zinc-950 p-6 shadow-2xl animate-in">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="font-mono text-xs text-orange-400">
                {request.request_id}
              </p>
              <button
                onClick={() => {
                  copyToClipboard(request.request_id, () => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  });
                }}
                className="rounded p-0.5 text-zinc-500 hover:text-white transition"
                title="Copy ID"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>
            <h2 className="mt-2 text-xl font-heading font-bold text-white">
              {request.customer_name}
            </h2>
            <div className="mt-3 flex items-center gap-2">
              <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium", statusClass)}>
                {editStatus}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="ml-4 rounded-lg p-2 text-zinc-500 transition hover:bg-white/[0.06] hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Description */}
        <div className="mb-6 rounded-xl border border-white/[0.06] bg-zinc-900/50 p-4">
          <p className="mb-1 text-xs font-medium text-zinc-400">Description</p>
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-zinc-200">
            {request.description || "No description provided."}
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { icon: Mail, label: "Email", value: request.customer_email || "Not provided" },
            { icon: MessageCircle, label: "WhatsApp", value: request.whatsapp || "Not provided" },
            { icon: FolderOpen, label: "Service", value: formatValue(request.service) },
            { icon: Package, label: "Pillar", value: formatValue(request.pillar) },
            { icon: Wallet, label: "Budget", value: formatValue(request.budget) },
            { icon: CalendarDays, label: "Deadline", value: formatValue(request.deadline) },
            { icon: Clock3, label: "Submitted", value: formatDate(request.created_at) },
            { icon: ArrowRightLeft, label: "Source", value: formatValue(request.source) },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-white/[0.06] bg-zinc-900/30 p-4">
              <div className="mb-2 flex items-center gap-2 text-zinc-500">
                <item.icon size={14} />
                <span className="text-xs">{item.label}</span>
              </div>
              <p className="text-sm text-zinc-200">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Files */}
        {normalizedFiles.length > 0 && (
          <div className="mt-4 rounded-xl border border-white/[0.06] bg-zinc-900/30 p-4">
            <p className="mb-2 text-xs font-medium text-zinc-400">Files</p>
            <div className="flex flex-wrap gap-2">
              {normalizedFiles.map((file, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300"
                >
                  <FolderOpen size={12} />
                  {typeof file === "string" ? file : file.name || String(file)}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Status Edit */}
        <div className="mt-4 rounded-xl border border-white/[0.06] bg-zinc-900/30 p-4">
          <label className="mb-1.5 block text-xs font-medium text-zinc-400">
            Status
          </label>
          <select
            value={editStatus}
            onChange={(e) => setEditStatus(e.target.value)}
            className="w-full rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2.5 text-sm text-white outline-none transition focus:border-orange-400/40"
          >
            {statusOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Notes Edit */}
        <div className="mt-4 rounded-xl border border-white/[0.06] bg-zinc-900/30 p-4">
          <label className="mb-1.5 block text-xs font-medium text-zinc-400">
            Internal Notes
          </label>
          <textarea
            value={editNotes}
            onChange={(e) => setEditNotes(e.target.value)}
            rows={4}
            className="w-full rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2.5 text-sm text-white outline-none transition focus:border-orange-400/40 resize-none"
            placeholder="Add or clear notes..."
          />
        </div>

        {/* Save Error */}
        {saveError && (
          <div className="mt-4 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {saveError}
          </div>
        )}

        {/* Save Button */}
        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={onSave}
            disabled={saving}
            className="flex-1 rounded-xl bg-orange-400 py-3 font-semibold text-black transition hover:bg-orange-300 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
          <button
            onClick={() => {
              if (onCreateProject) onCreateProject(request);
              onClose();
            }}
            disabled={saving}
            className="flex items-center gap-2 rounded-xl border border-orange-400/30 bg-orange-400/10 px-4 py-3 text-sm font-medium text-orange-400 transition hover:bg-orange-400/20 disabled:opacity-50"
          >
            <Package size={16} />
            Create Project
          </button>
          <button
            onClick={onClose}
            disabled={saving}
            className="rounded-xl border border-white/[0.06] bg-zinc-900/50 px-6 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.08] disabled:opacity-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Placeholder Pages ---------- */
function PageHeader({ title, description }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-heading font-bold text-white">
        {title}
      </h2>
      <p className="mt-1 text-sm text-zinc-500">{description}</p>
    </div>
  );
}

const projectStatusColors = {
  Planning: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  "In Progress": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "On Hold": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Cancelled: "bg-red-500/10 text-red-400 border-red-500/20",
};

const pillarLabels = {
  assist: "DIVITS Assist",
  build: "DIVITS Build",
  iot: "DIVITS IoT",
  home: "DIVITS Home",
};

/* ---------- Projects Page ---------- */
function ProjectsPage({
  projects,
  selectedProject,
  setSelectedProject,
  projectSearch,
  setProjectSearch,
  projectStatusFilter,
  setProjectStatusFilter,
  projectLoading,
  projectError,
  projectRefreshing,
  showCreateForm,
  setShowCreateForm,
  creating,
  createForm,
  setCreateForm,
  handleCreateProject,
  handleUpdateProject,
  handleDeleteProject,
  handleRefreshProjects,
  handleCreateFromRequest,
}) {
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  const filteredProjects = useMemo(() => {
    const query = projectSearch.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesStatus = projectStatusFilter === "All" || p.status === projectStatusFilter;
      if (!query) return matchesStatus;
      const searchable = [p.project_id, p.title, p.customer_name, p.customer_email, p.service, p.pillar]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return matchesStatus && searchable.includes(query);
    });
  }, [projects, projectSearch, projectStatusFilter]);

  async function handleSave() {
    setSaving(true);
    setSaveError("");
    try {
      const newProject = await handleCreateProject(createForm);
      setSaving(false);
      setSelectedProject(newProject);
      setShowCreateForm(false);
      setCreateForm({
        title: "", customer_name: "", customer_email: "", pillar: "build",
        service: "", description: "", budget: "", deadline: "",
        status: "Planning", progress: 0, notes: "", request_id: "",
      });
    } catch (err) {
      setSaveError(err.message || "Failed to create project.");
      setSaving(false);
    }
  }

  async function handleUpdate() {
    if (!selectedProject) return;
    setSaving(true);
    setSaveError("");
    try {
      await handleUpdateProject(selectedProject.project_id, {
        status: selectedProject.status,
        progress: selectedProject.progress,
        notes: selectedProject.notes,
      });
    } catch (err) {
      setSaveError(err.message || "Failed to update project.");
    } finally {
      setSaving(false);
    }
  }

  async function confirmDeleteProject(projectId) {
    if (!projectId) return;
    try {
      await handleDeleteProject(projectId);
      setConfirmDelete(null);
      setSelectedProject(null);
    } catch (err) {
      setSaveError(err.message || "Failed to delete project.");
    }
  }

  return (
    <div>
      <PageHeader
        title="Projects"
        description="View and manage client projects."
      />

      {/* Toolbar */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              value={projectSearch}
              onChange={(e) => setProjectSearch(e.target.value)}
              placeholder="Search projects..."
              className="w-full rounded-xl border border-white/[0.06] bg-zinc-900/50 py-2.5 pl-11 pr-4 text-sm text-white outline-none transition focus:border-orange-400/40"
            />
          </div>
          <select
            value={projectStatusFilter}
            onChange={(e) => setProjectStatusFilter(e.target.value)}
            className="rounded-xl border border-white/[0.06] bg-zinc-900/50 px-4 py-2.5 text-sm text-zinc-300 outline-none transition"
          >
            {["All", "Planning", "In Progress", "On Hold", "Completed", "Cancelled"].map((s) => (
              <option key={s} value={s}>{s === "All" ? "All Statuses" : s}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleRefreshProjects}
            disabled={projectRefreshing}
            className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2.5 text-xs text-zinc-300 transition hover:bg-white/[0.08] disabled:opacity-50"
          >
            <RefreshCw size={14} className={projectRefreshing ? "animate-spin" : ""} />
            Refresh
          </button>
          <button
            onClick={() => setShowCreateForm(true)}
            className="flex items-center gap-2 rounded-lg bg-orange-400 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-orange-300"
          >
            <Plus size={16} />
            New Project
          </button>
        </div>
      </div>

      {/* Error */}
      {projectError && (
        <div className="mb-4 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {projectError}
        </div>
      )}

      {/* Create Form Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl border border-white/[0.06] bg-zinc-950 p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-heading font-bold text-white">New Project</h3>
              <button onClick={() => { setShowCreateForm(false); setSaveError(""); }} className="rounded p-1 text-zinc-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-xs font-medium text-zinc-400">Title *</label>
                  <input
                    value={createForm.title}
                    onChange={(e) => setCreateForm({...createForm, title: e.target.value})}
                    className="w-full rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2.5 text-sm text-white outline-none transition focus:border-orange-400/40"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-zinc-400">Customer Name *</label>
                  <input
                    value={createForm.customer_name}
                    onChange={(e) => setCreateForm({...createForm, customer_name: e.target.value})}
                    className="w-full rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2.5 text-sm text-white outline-none transition focus:border-orange-400/40"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-xs font-medium text-zinc-400">Customer Email *</label>
                  <input
                    type="email"
                    value={createForm.customer_email}
                    onChange={(e) => setCreateForm({...createForm, customer_email: e.target.value})}
                    className="w-full rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2.5 text-sm text-white outline-none transition focus:border-orange-400/40"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-zinc-400">Linked Request ID (optional)</label>
                  <input
                    value={createForm.request_id}
                    onChange={(e) => setCreateForm({...createForm, request_id: e.target.value})}
                    placeholder="req-..."
                    className="w-full rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2.5 text-sm text-white outline-none transition focus:border-orange-400/40"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-xs font-medium text-zinc-400">Pillar *</label>
                  <select
                    value={createForm.pillar}
                    onChange={(e) => setCreateForm({...createForm, pillar: e.target.value})}
                    className="w-full rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2.5 text-sm text-white outline-none transition"
                  >
                    {["assist", "build", "iot", "home"].map((p) => (
                      <option key={p} value={p}>{pillarLabels[p]}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-zinc-400">Service *</label>
                  <input
                    value={createForm.service}
                    onChange={(e) => setCreateForm({...createForm, service: e.target.value})}
                    className="w-full rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2.5 text-sm text-white outline-none transition focus:border-orange-400/40"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-zinc-400">Description *</label>
                <textarea
                  value={createForm.description}
                  onChange={(e) => setCreateForm({...createForm, description: e.target.value})}
                  rows={3}
                  className="w-full rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2.5 text-sm text-white outline-none transition focus:border-orange-400/40 resize-none"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="mb-1 block text-xs font-medium text-zinc-400">Budget</label>
                  <input
                    value={createForm.budget}
                    onChange={(e) => setCreateForm({...createForm, budget: e.target.value})}
                    className="w-full rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2.5 text-sm text-white outline-none transition"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-zinc-400">Deadline</label>
                  <input
                    type="date"
                    value={createForm.deadline}
                    onChange={(e) => setCreateForm({...createForm, deadline: e.target.value})}
                    className="w-full rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2.5 text-sm text-white outline-none transition"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-zinc-400">Progress</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={createForm.progress}
                    onChange={(e) => setCreateForm({...createForm, progress: parseInt(e.target.value) || 0})}
                    className="w-full rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2.5 text-sm text-white outline-none transition"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-zinc-400">Status</label>
                <select
                  value={createForm.status}
                  onChange={(e) => setCreateForm({...createForm, status: e.target.value})}
                  className="w-full rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2.5 text-sm text-white outline-none transition"
                >
                  {["Planning", "In Progress", "On Hold", "Completed", "Cancelled"].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-zinc-400">Notes</label>
                <textarea
                  value={createForm.notes}
                  onChange={(e) => setCreateForm({...createForm, notes: e.target.value})}
                  rows={2}
                  className="w-full rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2.5 text-sm text-white outline-none transition focus:border-orange-400/40 resize-none"
                />
              </div>

              {saveError && (
                <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-300">
                  {saveError}
                </div>
              )}

              <div className="flex items-center gap-3">
                <button
                  onClick={handleSave}
                  disabled={saving || creating}
                  className="flex-1 rounded-lg bg-orange-400 py-2.5 font-semibold text-black text-sm transition hover:bg-orange-300 disabled:opacity-50"
                >
                  {saving ? "Creating..." : "Create Project"}
                </button>
                <button
                  onClick={() => { setShowCreateForm(false); setSaveError(""); }}
                  className="rounded-lg border border-white/[0.06] bg-zinc-900/50 px-5 py-2.5 text-sm text-zinc-300 transition hover:bg-white/[0.08]"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project List */}
      {projectLoading && projects.length === 0 ? (
        <div className="flex items-center justify-center py-20">
          <RefreshCw size={24} className="animate-spin text-orange-400" />
          <span className="ml-3 text-sm text-zinc-400">Loading projects...</span>
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="rounded-xl border border-white/[0.06] bg-zinc-950/60 p-12 text-center">
          <ClipboardList size={32} className="mx-auto mb-4 text-zinc-600" />
          <p className="text-sm text-zinc-400">No projects found.</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-zinc-950/50">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-white/[0.06] bg-zinc-900/30">
                  <th className="px-5 py-4 text-left text-xs font-medium text-zinc-500">Project ID</th>
                  <th className="px-5 py-4 text-left text-xs font-medium text-zinc-500">Title</th>
                  <th className="px-5 py-4 text-left text-xs font-medium text-zinc-500">Customer</th>
                  <th className="px-5 py-4 text-left text-xs font-medium text-zinc-500">Pillar</th>
                  <th className="px-5 py-4 text-left text-xs font-medium text-zinc-500">Service</th>
                  <th className="px-5 py-4 text-left text-xs font-medium text-zinc-500">Budget</th>
                  <th className="px-5 py-4 text-left text-xs font-medium text-zinc-500">Status</th>
                  <th className="px-5 py-4 text-left text-xs font-medium text-zinc-500">Progress</th>
                  <th className="px-5 py-4 text-left text-xs font-medium text-zinc-500">Created</th>
                  <th className="px-5 py-4 text-left text-xs font-medium text-zinc-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {filteredProjects.map((project) => (
                  <tr
                    key={project.project_id}
                    className={`transition hover:bg-white/[0.03] ${selectedProject?.project_id === project.project_id ? "bg-orange-400/5" : ""}`}
                  >
                    <td className="px-5 py-4">
                      <p className="font-mono text-xs text-orange-400">{project.project_id}</p>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-sm font-medium text-white">{project.title}</p>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-sm text-zinc-300">{project.customer_name}</p>
                      <p className="text-xs text-zinc-500">{project.customer_email}</p>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-sm text-zinc-400">{pillarLabels[project.pillar] || project.pillar}</p>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-sm text-zinc-300">{project.service}</p>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-sm text-zinc-300">{project.budget || "—"}</p>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${projectStatusColors[project.status] || "border-white/10 bg-white/5 text-white/60"}`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-16 overflow-hidden rounded-full bg-zinc-800">
                          <div className="h-full rounded-full bg-orange-400" style={{ width: `${project.progress}%` }} />
                        </div>
                        <span className="text-xs text-zinc-400">{project.progress}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-zinc-400">
                      {formatDate(project.created_at)}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="rounded-lg border border-white/[0.06] bg-zinc-900/50 px-2.5 py-1.5 text-xs text-zinc-300 transition hover:bg-orange-400/10 hover:text-orange-400"
                          title="View/Edit"
                        >
                          <Eye size={14} />
                        </button>
                        {confirmDelete === project.project_id ? (
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => confirmDeleteProject(project.project_id)}
                              className="rounded bg-red-500/20 px-2 py-1 text-xs text-red-400 hover:bg-red-500/30"
                              title="Confirm"
                            >
                              <Check size={14} />
                            </button>
                            <button
                              onClick={() => setConfirmDelete(null)}
                              className="rounded bg-zinc-700 px-2 py-1 text-xs text-zinc-400 hover:bg-zinc-600"
                              title="Cancel"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setConfirmDelete(project.project_id)}
                            className="rounded-lg border border-white/[0.06] bg-zinc-900/50 px-2.5 py-1.5 text-xs text-red-400 transition hover:bg-red-500/20"
                            title="Delete"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Detail Panel Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60">
          <div className="w-full max-w-md overflow-y-auto border-l border-white/[0.06] bg-zinc-950 p-6 shadow-2xl animate-in">
            {/* Header */}
            <div className="mb-6 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-mono text-xs text-orange-400">{selectedProject.project_id}</p>
                  <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${projectStatusColors[selectedProject.status] || "border-white/10 bg-white/5 text-white/60"}`}>
                    {selectedProject.status}
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-heading font-bold text-white">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-lg p-2 text-zinc-500 transition hover:bg-white/[0.06] hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Details Grid */}
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Customer", value: `${selectedProject.customer_name} (${selectedProject.customer_email})` },
                { label: "Pillar", value: pillarLabels[selectedProject.pillar] || selectedProject.pillar },
                { label: "Service", value: selectedProject.service },
                { label: "Budget", value: selectedProject.budget || "Not specified" },
                { label: "Deadline", value: selectedProject.deadline ? formatDate(selectedProject.deadline) : "Not specified" },
                { label: "Progress", value: `${selectedProject.progress}%` },
                { label: "Linked Request", value: selectedProject.request_id || "None" },
                { label: "Created", value: formatDate(selectedProject.created_at) },
                { label: "Updated", value: formatDate(selectedProject.updated_at) },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/[0.06] bg-zinc-900/30 p-4">
                  <p className="mb-1 text-xs font-medium text-zinc-500">{item.label}</p>
                  <p className="text-sm text-zinc-200">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mt-4 rounded-xl border border-white/[0.06] bg-zinc-900/50 p-4">
              <p className="mb-1 text-xs font-medium text-zinc-500">Description</p>
              <p className="text-sm leading-relaxed text-zinc-200">{selectedProject.description || "No description."}</p>
            </div>

            {/* Notes */}
            <div className="mt-4 rounded-xl border border-white/[0.06] bg-zinc-900/50 p-4">
              <label className="mb-1.5 block text-xs font-medium text-zinc-500">Internal Notes</label>
              <textarea
                value={selectedProject.notes}
                onChange={(e) => setSelectedProject({...selectedProject, notes: e.target.value})}
                rows={3}
                className="w-full rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2.5 text-sm text-white outline-none transition focus:border-orange-400/40 resize-none"
              />
              <button
                onClick={handleUpdate}
                disabled={saving}
                className="mt-3 flex items-center gap-2 rounded-lg bg-orange-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-300 disabled:opacity-50"
              >
                {saving ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} />}
                {saving ? "Saving..." : "Save Notes"}
              </button>
            </div>

            {/* Files */}
            {selectedProject.files && selectedProject.files.length > 0 && (
              <div className="mt-4 rounded-xl border border-white/[0.06] bg-zinc-900/50 p-4">
                <p className="mb-2 text-xs font-medium text-zinc-500">Files</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.files.map((file, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300">
                      <FolderOpen size={12} />
                      {typeof file === "string" ? file : file.name || String(file)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Delete */}
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => setConfirmDelete(selectedProject.project_id)}
                className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400 transition hover:bg-red-500/20"
              >
                <Trash2 size={16} />
                Delete Project
              </button>
            </div>

            {saveError && (
              <div className="mt-4 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-300">
                {saveError}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function AnalyticsPage({ onSessionExpired }) {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const token = sessionStorage.getItem("divits_admin_token");

  async function fetchAnalytics() {
    setLoading(true);
    const tok = sessionStorage.getItem("divits_admin_token");
    if (!tok) {
      setLoading(false);
      setError("No authentication token found. Please sign in again.");
      return;
    }
    try {
      const response = await fetch("/api/admin/analytics", {
        headers: { Authorization: `Bearer ${tok}` },
      });
      const data = await response.json();
      if (!response.ok) {
        if (response.status === 401) {
          sessionStorage.removeItem("divits_admin_token");
          if (onSessionExpired) onSessionExpired();
          return;
        }
        throw new Error(data.error || "Failed to load analytics.");
      }
      setAnalyticsData(data.data);
      setError("");
    } catch (err) {
      setError(err.message || "Something went wrong while loading analytics.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    setAnalyticsData(null);
    fetchAnalytics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleRefresh() {
    setRefreshing(true);
    await fetchAnalytics();
  }

  const d = analyticsData;

  /* ---------- Helpers ---------- */
  function formatName(name) {
    if (!name) return "—";
    return String(name)
      .replaceAll("-", " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  function formatDateLabel(dateStr) {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("en-NG", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  /* ---------- SVG Line Chart ---------- */
  function TimelineChart({ overTime }) {
    if (!overTime || overTime.length === 0) {
      return (
        <div className="flex h-32 items-center justify-center text-sm text-zinc-500">
          No time-series data available.
        </div>
      );
    }

    const width = 700;
    const height = 220;
    const padX = 50;
    const padY = 30;
    const innerW = width - padX * 2;
    const innerH = height - padY * 2;

    const maxCount = Math.max(...overTime.map((o) => o.count), 1);
    const points = overTime.map((o, i) => ({
      x: padX + (overTime.length === 1 ? innerW / 2 : (i / (overTime.length - 1)) * innerW),
      y: padY + innerH - ((o.count / maxCount) * innerH),
      count: o.count,
      date: o.date,
    }));

    const polyline = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
    const areaPath = polyline + ` L${points[points.length - 1].x},${padY + innerH} L${points[0].x},${padY + innerH} Z`;

    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-[700px]" aria-label="Requests over time">
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((frac) => {
          const y = padY + innerH * (1 - frac);
          return (
            <line key={frac} x1={padX} y1={y} x2={width - padX} y2={y}
              className="stroke-white/[0.06]" stroke="currentColor" strokeWidth="1" />
          );
        })}
        {/* Area */}
        <path d={areaPath} fill="url(#chartGrad)" opacity="0.15" />
        {/* Line */}
        <path d={polyline} fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Points + labels */}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="4" fill="#f97316" className="stroke-zinc-950 stroke-2" />
            <text x={p.x} y={height - 8} textAnchor="middle" fill="#71717a" fontSize="10" className="font-mono">
              {formatDateLabel(p.date)}
            </text>
            <text x={p.x} y={p.y - 12} textAnchor="middle" fill="#f97316" fontSize="11" className="font-bold font-mono">
              {p.count}
            </text>
          </g>
        ))}
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f97316" stopOpacity="1" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  /* ---------- Loading State ---------- */
  if (loading) {
    return (
      <div>
        <PageHeader title="Analytics" description="Loading analytics data." />
        <div className="flex items-center justify-center py-20">
          <RefreshCw size={24} className="animate-spin text-orange-400" />
          <span className="ml-3 text-sm text-zinc-400">Loading analytics...</span>
        </div>
      </div>
    );
  }

  /* ---------- Error State ---------- */
  if (error && !d) {
    return (
      <div>
        <PageHeader title="Analytics" description="Request analytics data." />
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-center">
          <p className="mb-4 text-sm text-red-300">{error}</p>
          <button
            onClick={handleRefresh}
            className="inline-flex items-center gap-2 rounded-lg bg-orange-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-orange-300"
          >
            <RefreshCw size={16} />
            Retry
          </button>
        </div>
      </div>
    );
  }

  /* ---------- Empty State (no data yet) ---------- */
  if (!d || !analyticsData) {
    return (
      <div>
        <PageHeader title="Analytics" description="Request analytics data." />
        <div className="rounded-xl border border-white/[0.06] bg-zinc-950/60 p-12 text-center">
          <BarChart3 size={32} className="mx-auto mb-4 text-zinc-600" />
          <p className="text-sm text-zinc-400">No analytics data available yet.</p>
          <button
            onClick={handleRefresh}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-orange-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-orange-300"
          >
            <RefreshCw size={16} />
            Load Data
          </button>
        </div>
      </div>
    );
  }

  const { total, status, pillars, services, sources, source_breakdown, referrals, over_time } = d;
  const maxSourceCount = sources.length > 0 ? Math.max(...sources.map((s) => s.count)) : 1;

  // Group source_breakdown by source
  const breakdownBySource = {};
  for (const item of source_breakdown) {
    if (!breakdownBySource[item.source]) breakdownBySource[item.source] = [];
    breakdownBySource[item.source].push(item);
  }

  return (
    <div>
      {/* Header */}
      <PageHeader title="Analytics" description="Track request trends, sources, and performance." />

      {/* Refresh Button */}
      <div className="mb-6 flex justify-end">
        <button
          onClick={handleRefresh}
          disabled={refreshing}
          className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-zinc-900/50 px-4 py-2 text-xs text-zinc-300 transition hover:bg-white/[0.08] disabled:opacity-50"
        >
          <RefreshCw size={14} className={refreshing ? "animate-spin" : ""} />
          Refresh
        </button>
      </div>

      {/* Section 5 — Supporting Metrics (at top for immediate visibility) */}
      <section className="mb-8">
        <h3 className="mb-4 text-lg font-heading font-bold text-white">Supporting Metrics</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Total Requests", value: total, icon: FileQuestion, color: "text-orange-400" },
            { label: "New", value: status.New, icon: Inbox, color: "text-amber-400" },
            { label: "Reviewing", value: status.Reviewing, icon: Eye, color: "text-sky-400" },
            { label: "Accepted", value: status.Accepted, icon: Check, color: "text-emerald-400" },
            { label: "In Progress", value: status["In Progress"], icon: ArrowRightLeft, color: "text-orange-400" },
            { label: "Completed", value: status.Completed, icon: CheckCircle, color: "text-green-400" },
            { label: "Cancelled", value: status.Cancelled, icon: XCircle, color: "text-red-400" },
            { label: "Sources", value: sources.length, icon: BarChart3, color: "text-violet-400" },
          ].map((item) => (
            <div key={item.label} className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-zinc-950/60 p-5 backdrop-blur-sm transition-colors hover:border-white/[0.12]">
              <div className={cn("absolute top-0 right-0 p-3 opacity-10", item.color)}>
                <item.icon size={28} />
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <item.icon size={14} />
                {item.label}
              </div>
              <p className="mt-3 text-2xl font-bold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 1 — Source Attribution */}
      <section className="mb-8">
        <h3 className="mb-4 text-lg font-heading font-bold text-white">Where are your customers coming from?</h3>
        {sources.length === 0 ? (
          <div className="rounded-xl border border-white/[0.06] bg-zinc-950/60 p-8 text-center">
            <p className="text-sm text-zinc-500">No source data available yet.</p>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sources.map((src) => {
              const relativeWidth = (src.count / maxSourceCount) * 100;
              return (
                <div key={src.source} className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-zinc-950/60 p-5 transition-colors hover:border-white/[0.12]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-white capitalize">{formatName(src.source)}</span>
                    </div>
                    <span className="rounded-full bg-orange-400/10 px-2.5 py-0.5 text-xs font-bold text-orange-400">
                      {src.count}
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                    <div
                      className="h-full rounded-full bg-orange-400 transition-all duration-700"
                      style={{ width: `${Math.max(relativeWidth, 8)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Section 2 — Source → Service Breakdown */}
      <section className="mb-8">
        <h3 className="mb-4 text-lg font-heading font-bold text-white">Source → Service Breakdown</h3>
        {Object.keys(breakdownBySource).length === 0 ? (
          <div className="rounded-xl border border-white/[0.06] bg-zinc-950/60 p-8 text-center">
            <p className="text-sm text-zinc-500">No source-to-service breakdown data available yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {Object.entries(breakdownBySource).map(([source, items]) => (
              <div key={source} className="rounded-xl border border-white/[0.06] bg-zinc-950/60 p-5">
                <p className="mb-3 text-sm font-medium text-white capitalize">{formatName(source)}</p>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {items.map((item) => (
                    <div key={`${item.pillar}-${item.service}`} className="flex items-center justify-between rounded-lg bg-zinc-900/50 px-4 py-3">
                      <div>
                        <p className="text-sm text-zinc-300">{formatName(item.pillar)}</p>
                        <p className="text-xs text-zinc-500">{formatName(item.service)}</p>
                      </div>
                      <span className="text-lg font-bold text-orange-400">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Section 3 — Referral / Campaign Attribution */}
      <section className="mb-8">
        <h3 className="mb-4 text-lg font-heading font-bold text-white">Referral / Campaign Attribution</h3>
        {referrals.length === 0 ? (
          <div className="rounded-xl border border-white/[0.06] bg-zinc-950/60 p-8 text-center">
            <p className="text-sm text-zinc-500">No referral or campaign attribution yet.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {referrals.map((ref, i) => (
              <div key={i} className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-zinc-950/60 px-5 py-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-white capitalize">{formatName(ref.source)}</span>
                  <span className="text-xs text-zinc-500">→</span>
                  <span className="text-sm text-zinc-300">{formatName(ref.referral)}</span>
                </div>
                <span className="rounded-full bg-orange-400/10 px-3 py-1 text-sm font-bold text-orange-400">
                  {ref.count}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Section 4 — Requests Over Time */}
      <section className="mb-8">
        <h3 className="mb-4 text-lg font-heading font-bold text-white">Requests Over Time</h3>
        <div className="rounded-xl border border-white/[0.06] bg-zinc-950/60 p-5">
          <TimelineChart overTime={over_time} />
        </div>
      </section>

      {/* Section 6 — Pillars */}
      <section className="mb-8">
        <h3 className="mb-4 text-lg font-heading font-bold text-white">Pillar Breakdown</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { key: "assist", label: "Assist", icon: MessageCircle },
            { key: "build", label: "Build", icon: Package },
            { key: "iot", label: "IoT", icon: Settings2 },
            { key: "home", label: "Home", icon: Home },
          ].map((item) => (
            <div key={item.key} className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-zinc-950/60 p-5 backdrop-blur-sm transition-colors hover:border-white/[0.12]">
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <item.icon size={14} />
                {item.label}
              </div>
              <p className="mt-3 text-2xl font-bold text-white">{pillars[item.key] ?? 0}</p>
              <div className="mt-2 h-1 w-full rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-orange-400"
                  style={{ width: `${total > 0 ? ((pillars[item.key] ?? 0) / total) * 100 : 0}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function SettingsPage() {
  const [notifications, setNotifications] = useState(() => {
    try {
      const saved = localStorage.getItem("divits_settings_notifications");
      return saved ? JSON.parse(saved) : { email: true, push: false };
    } catch {
      return { email: true, push: false };
    }
  });
  const [defaults, setDefaults] = useState(() => {
    try {
      const saved = localStorage.getItem("divits_settings_defaults");
      return saved ? JSON.parse(saved) : { status: "New", service: "ESP32 Development" };
    } catch {
      return { status: "New", service: "ESP32 Development" };
    }
  });

  function saveNotifications(next) {
    setNotifications(next);
    localStorage.setItem("divits_settings_notifications", JSON.stringify(next));
  }

  function saveDefaults(next) {
    setDefaults(next);
    localStorage.setItem("divits_settings_defaults", JSON.stringify(next));
  }

  const adminEmail = sessionStorage.getItem("divits_admin_token")
    ? "admin@divits.local"
    : null;

  return (
    <div>
      <PageHeader
        title="Settings"
        description="Configure your admin portal preferences."
      />

      <div className="space-y-4">
        {/* Notification Preferences */}
        <div className="rounded-xl border border-white/[0.06] bg-zinc-950/60 p-5 transition-colors hover:border-white/[0.12]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white">
                Notification Preferences
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Control how you receive alerts and updates
              </p>
            </div>
            <ChevronDown size={16} className="text-zinc-600" />
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-lg bg-zinc-900/50 px-4 py-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-zinc-400" />
                <div>
                  <p className="text-sm text-white">Email notifications</p>
                  <p className="text-xs text-zinc-500">Receive request updates via email</p>
                </div>
              </div>
              <button
                onClick={() =>
                  saveNotifications({ ...notifications, email: !notifications.email })
                }
                className={cn(
                  "relative h-6 w-11 flex-shrink-0 rounded-full transition-colors",
                  notifications.email ? "bg-orange-400" : "bg-zinc-700"
                )}
              >
                <span
                  className={cn(
                    "absolute top-[2px] h-5 w-5 rounded-full bg-white transition-all duration-200",
                    notifications.email ? "left-[24px]" : "left-[2px]"
                  )}
                />
              </button>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-zinc-900/50 px-4 py-3">
              <div className="flex items-center gap-3">
                <Bell size={16} className="text-zinc-400" />
                <div>
                  <p className="text-sm text-white">Push notifications</p>
                  <p className="text-xs text-zinc-500">Receive push alerts in browser</p>
                </div>
              </div>
              <button
                onClick={() =>
                  saveNotifications({ ...notifications, push: !notifications.push })
                }
                className={cn(
                  "relative h-6 w-11 flex-shrink-0 rounded-full transition-colors",
                  notifications.push ? "bg-orange-400" : "bg-zinc-700"
                )}
              >
                <span
                  className={cn(
                    "absolute top-[2px] h-5 w-5 rounded-full bg-white transition-all duration-200",
                    notifications.push ? "left-[24px]" : "left-[2px]"
                  )}
                />
              </button>
            </div>
          </div>
          <p className="mt-3 text-[10px] text-zinc-600">
            Preferences saved to local storage. Notifications are frontend-only settings.
          </p>
        </div>

        {/* Request Defaults */}
        <div className="rounded-xl border border-white/[0.06] bg-zinc-950/60 p-5 transition-colors hover:border-white/[0.12]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white">
                Request Defaults
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Set default values for new submissions
              </p>
            </div>
            <ChevronDown size={16} className="text-zinc-600" />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs text-zinc-400">
                Default Status
              </label>
              <select
                value={defaults.status}
                onChange={(e) =>
                  saveDefaults({ ...defaults, status: e.target.value })
                }
                className="w-full rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2.5 text-sm text-white outline-none transition focus:border-orange-400/40"
              >
                {statusOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs text-zinc-400">
                Default Service
              </label>
              <select
                value={defaults.service}
                onChange={(e) =>
                  saveDefaults({ ...defaults, service: e.target.value })
                }
                className="w-full rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2.5 text-sm text-white outline-none transition focus:border-orange-400/40"
              >
                {[
                  "ESP32 Development",
                  "Arduino Development",
                  "IoT System",
                  "Smart Home Automation",
                  "Sensor System",
                  "Embedded Programming",
                  "PCB Design",
                  "Custom Hardware",
                ].map((svc) => (
                  <option key={svc} value={svc}>
                    {svc}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <p className="mt-3 text-[10px] text-zinc-600">
            Defaults saved to local storage. No backend changes applied.
          </p>
        </div>

        {/* Team Access */}
        <div className="rounded-xl border border-white/[0.06] bg-zinc-950/60 p-5 transition-colors hover:border-white/[0.12]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white">Team Access</p>
              <p className="mt-1 text-xs text-zinc-500">
                Manage admin panel users
              </p>
            </div>
            <ChevronDown size={16} className="text-zinc-600" />
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-3 rounded-lg bg-zinc-900/50 px-4 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-400/20 text-orange-400 text-xs font-bold">
                A
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">
                  Current Admin
                </p>
                <p className="text-xs text-zinc-500">{adminEmail || "Not authenticated"}</p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                Active
              </span>
            </div>
            <div className="rounded-lg border border-dashed border-zinc-700 bg-zinc-900/30 px-4 py-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-400">Additional team members</p>
                  <p className="text-xs text-zinc-600">
                    Multi-user access not available yet
                  </p>
                </div>
                <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] font-medium text-zinc-500">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
          <p className="mt-3 text-[10px] text-zinc-600">
            Team management will be available in a future update.
          </p>
        </div>

        {/* Integration Settings */}
        <div className="rounded-xl border border-white/[0.06] bg-zinc-950/60 p-5 transition-colors hover:border-white/[0.12]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white">
                Integration Settings
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Connection status for services
              </p>
            </div>
            <ChevronDown size={16} className="text-zinc-600" />
          </div>
          <div className="mt-4 space-y-3">
            {[
              {
                name: "Formspree",
                status: "Configured",
                detail: "Request submission endpoint",
                ok: true,
              },
              {
                name: "DIVITS API",
                status: "Connected",
                detail: "Cloudflare Worker endpoint",
                ok: true,
              },
              {
                name: "D1 Database",
                status: "Connected",
                detail: "Local persistence layer",
                ok: true,
              },
            ].map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-lg bg-zinc-900/50 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "h-2 w-2 rounded-full",
                      item.ok ? "bg-emerald-400" : "bg-red-400"
                    )}
                  />
                  <div>
                    <p className="text-sm text-white">{item.name}</p>
                    <p className="text-[10px] text-zinc-500">{item.detail}</p>
                  </div>
                </div>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-medium",
                    item.ok
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-red-500/10 text-red-400"
                  )}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[10px] text-zinc-600">
            Integration status reflects frontend configuration only. No secrets exposed.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Main App ---------- */
export default function Admin() {
  const [password, setPassword] = useState(() => sessionStorage.getItem("divits_admin_token") || "");
  const [passwordInput, setPasswordInput] = useState("");
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("requests");
  const [refreshing, setRefreshing] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [editStatus, setEditStatus] = useState("");
  const [editNotes, setEditNotes] = useState("");

  // Projects state
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectSearch, setProjectSearch] = useState("");
  const [projectStatusFilter, setProjectStatusFilter] = useState("All");
  const [projectLoading, setProjectLoading] = useState(false);
  const [projectError, setProjectError] = useState("");
  const [projectRefreshing, setProjectRefreshing] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [creating, setCreating] = useState(false);
  const [createForm, setCreateForm] = useState({
    title: "", customer_name: "", customer_email: "", pillar: "build",
    service: "", description: "", budget: "", deadline: "",
    status: "Planning", progress: 0, notes: "", request_id: "",
  });

  const isLoggedIn = Boolean(password);

  // Set dark mode for admin
  useEffect(() => {
    if (isLoggedIn) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, [isLoggedIn]);

  async function loadRequests(token = password) {
    if (!token) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (!response.ok) {
        if (response.status === 401) {
          sessionStorage.removeItem("divits_admin_token");
          setPassword("");
          setError("Invalid admin password.");
          return;
        }
        throw new Error(data.error || "Failed to load requests.");
      }
      setRequests(data.data || []);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function handleRefresh() {
    if (!password) return;
    setRefreshing(true);
    await loadRequests(password);
    setTimeout(() => setRefreshing(false), 500);
  }

  function handleLogin(event) {
    event.preventDefault();
    if (!passwordInput.trim()) return;
    sessionStorage.setItem("divits_admin_token", passwordInput);
    setPassword(passwordInput);
    setPasswordInput("");
  }

  function handleLogout() {
    sessionStorage.removeItem("divits_admin_token");
    setPassword("");
    setRequests([]);
    setSelectedRequest(null);
    setError("");
    document.documentElement.classList.remove("dark");
  }

  function handleSessionExpired() {
    sessionStorage.removeItem("divits_admin_token");
    setPassword("");
    setRequests([]);
    setSelectedRequest(null);
    setError("");
  }

  async function loadProjects(token = password) {
    if (!token) return;
    setProjectLoading(true);
    setProjectError("");
    try {
      const response = await fetch("/api/admin/projects", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (!response.ok) {
        if (response.status === 401) {
          sessionStorage.removeItem("divits_admin_token");
          setPassword("");
          setError("Session expired. Please sign in again.");
          return;
        }
        throw new Error(data.error || "Failed to load projects.");
      }
      setProjects(data.data || []);
    } catch (err) {
      setProjectError(err.message || "Something went wrong.");
    } finally {
      setProjectLoading(false);
    }
  }

  async function handleRefreshProjects() {
    if (!password) return;
    setProjectRefreshing(true);
    await loadProjects(password);
    setTimeout(() => setProjectRefreshing(false), 500);
  }

  async function handleCreateProject(form) {
    try {
      if (!password) {
        throw new Error("Not authenticated.");
      }
      setCreating(true);
      const response = await fetch("/api/admin/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) {
        if (response.status === 401) {
          sessionStorage.removeItem("divits_admin_token");
          setPassword("");
          throw new Error("Session expired. Please sign in again.");
        }
        throw new Error(data.error || "Failed to create project.");
      }
      await loadProjects(password);
      return data.data;
    } catch (err) {
      throw err;
    } finally {
      setCreating(false);
    }
  }

  async function handleUpdateProject(projectId, updates) {
    if (!password || !projectId) return;
    try {
      const response = await fetch(`/api/admin/projects/${projectId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify(updates),
      });
      const data = await response.json();
      if (!response.ok) {
        if (response.status === 401) {
          sessionStorage.removeItem("divits_admin_token");
          setPassword("");
          setSelectedProject(null);
          setError("Session expired. Please sign in again.");
          return;
        }
        throw new Error(data.error || "Failed to update project.");
      }
      await loadProjects(password);
      setSelectedProject(data.data);
    } catch (err) {
      setSaveError(err.message || "Something went wrong while updating.");
      throw err;
    }
  }

  async function handleDeleteProject(projectId) {
    if (!password || !projectId) return;
    try {
      const response = await fetch(`/api/admin/projects/${projectId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${password}` },
      });
      const data = await response.json();
      if (!response.ok) {
        if (response.status === 401) {
          sessionStorage.removeItem("divits_admin_token");
          setPassword("");
          setSelectedProject(null);
          setError("Session expired. Please sign in again.");
          return;
        }
        throw new Error(data.error || "Failed to delete project.");
      }
      await loadProjects(password);
    } catch (err) {
      throw err;
    }
  }

  function handleCreateFromRequest(request) {
    setCreateForm({
      title: "",
      customer_name: request.customer_name || "",
      customer_email: request.customer_email || "",
      pillar: request.pillar || "build",
      service: request.service || "",
      description: request.description || "",
      budget: request.budget || "",
      deadline: request.deadline || "",
      status: "Planning",
      progress: 0,
      notes: "",
      request_id: request.request_id || "",
    });
    setShowCreateForm(true);
  }

  useEffect(() => {
    if (selectedRequest) {
      setEditStatus(selectedRequest.status);
      setEditNotes(selectedRequest.notes || "");
      setSaveError("");
    }
  }, [selectedRequest]);

  async function handleSave() {
    if (!selectedRequest || !password) return;
    setSaving(true);
    setSaveError("");
    try {
      const response = await fetch(
        `/api/admin/requests/${selectedRequest.request_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${password}`,
          },
          body: JSON.stringify({
            status: editStatus,
            notes: editNotes.length > 0 ? editNotes : null,
          }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        if (response.status === 401) {
          sessionStorage.removeItem("divits_admin_token");
          setPassword("");
          setSelectedRequest(null);
          setError("Session expired. Please sign in again.");
          return;
        }
        throw new Error(data.error || "Failed to save changes.");
      }
      // Update requests state with the returned data
      const updatedRequest = data.data;
      setRequests((prev) =>
        prev.map((r) => (r.request_id === updatedRequest.request_id ? updatedRequest : r))
      );
      setSelectedRequest(updatedRequest);
    } catch (err) {
      setSaveError(err.message || "Something went wrong while saving.");
    } finally {
      setSaving(false);
    }
  }

  useEffect(() => {
    if (password) {
      loadRequests(password);
      loadProjects(password);
    }
  }, [password]);

  // Reload projects when navigating to the projects section
  useEffect(() => {
    if (activeSection === "projects" && password) {
      loadProjects(password);
    }
  }, [activeSection, password]);

  const filteredRequests = useMemo(() => {
    const query = search.trim().toLowerCase();
    return requests.filter((request) => {
      const matchesStatus = statusFilter === "All" || request.status === statusFilter;
      if (!query) return matchesStatus;
      const searchable = [
        request.request_id,
        request.customer_name,
        request.customer_email,
        request.whatsapp,
        request.pillar,
        request.service,
        request.description,
        request.source,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return matchesStatus && searchable.includes(query);
    });
  }, [requests, search, statusFilter]);

  const stats = useMemo(
    () => ({
      total: requests.length,
      new: requests.filter((item) => item.status === "New").length,
      progress: requests.filter((item) => item.status === "In Progress").length,
      completed: requests.filter((item) => item.status === "Completed").length,
    }),
    [requests]
  );

  // ---- NOT LOGGED IN ----
  if (!isLoggedIn) {
    return (
      <LoginPage
        error={error}
        onLogin={handleLogin}
        passwordInput={passwordInput}
        setPasswordInput={setPasswordInput}
        loading={loading}
      />
    );
  }

  // ---- LOGGED IN ----
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={setActiveSection}
        mobileOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main content */}
      <main className="flex min-h-screen flex-1 flex-col lg:pl-60">
        {/* Top bar */}
        <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-zinc-950/80 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/[0.06] hover:text-white lg:hidden"
              >
                <Menu size={20} />
              </button>
              <div>
                <p className="text-lg font-heading font-semibold text-white">
                  Good afternoon, Collins
                </p>
                <p className="text-xs text-zinc-500">
                  Here's what's happening with your projects.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleRefresh}
                disabled={refreshing || loading}
                className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2 text-xs text-zinc-300 transition hover:bg-white/[0.08] disabled:opacity-50"
              >
                <RefreshCw
                  size={14}
                  className={refreshing ? "animate-spin" : ""}
                />
                Refresh
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-xs text-red-400 transition hover:bg-red-500/20"
              >
                <LogOut size={14} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content body */}
        <div className="flex-1 space-y-6 px-4 py-6 sm:px-6 lg:px-8">
          {error && (
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          {activeSection === "requests" && (
            <>
              {/* Stat cards */}
              <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <StatCard
                  label="Total Requests"
                  value={stats.total}
                  icon={FileQuestion}
                  accent="text-orange-400"
                />
                <StatCard
                  label="New"
                  value={stats.new}
                  icon={Inbox}
                  accent="text-amber-400"
                />
                <StatCard
                  label="In Progress"
                  value={stats.progress}
                  icon={ArrowRightLeft}
                  accent="text-orange-400"
                />
                <StatCard
                  label="Completed"
                  value={stats.completed}
                  icon={Check}
                  accent="text-emerald-400"
                />
              </section>

              {/* Filters */}
              <section className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Search
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search requests by ID, customer, service..."
                    className="w-full rounded-xl border border-white/[0.06] bg-zinc-900/50 py-3 pl-11 pr-4 text-sm text-white outline-none transition focus:border-orange-400/40 focus:ring-1 focus:ring-orange-400/20"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="rounded-xl border border-white/[0.06] bg-zinc-900/50 px-4 py-3 text-sm text-zinc-300 outline-none transition focus:border-orange-400/40"
                >
                  {statusOptions.map((option) => (
                    <option key={option} value={option}>
                      {option === "All" ? "All Statuses" : option}
                    </option>
                  ))}
                </select>
              </section>

              {/* Request count */}
              <div className="flex items-center justify-between">
                <p className="text-xs text-zinc-500">
                  Showing <span className="text-zinc-300 font-medium">{filteredRequests.length}</span>{" "}
                  {filteredRequests.length === 1 ? "request" : "requests"}
                  {search || statusFilter !== "All" ? " (filtered)" : ""}
                </p>
              </div>

              {/* Table */}
              <section className="overflow-hidden rounded-xl border border-white/[0.06] bg-zinc-950/50">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[700px]">
                    <thead>
                      <tr className="border-b border-white/[0.06] bg-zinc-900/30">
                        <th className="px-5 py-4 text-left text-xs font-medium text-zinc-500">
                          Request ID
                        </th>
                        <th className="px-5 py-4 text-left text-xs font-medium text-zinc-500">
                          Customer
                        </th>
                        <th className="px-5 py-4 text-left text-xs font-medium text-zinc-500">
                          Service
                        </th>
                        <th className="px-5 py-4 text-left text-xs font-medium text-zinc-500">
                          Pillar
                        </th>
                        <th className="px-5 py-4 text-left text-xs font-medium text-zinc-500">
                          Budget
                        </th>
                        <th className="px-5 py-4 text-left text-xs font-medium text-zinc-500">
                          Status
                        </th>
                        <th className="px-5 py-4 text-left text-xs font-medium text-zinc-500">
                          Submitted
                        </th>
                        <th className="px-5 py-4 text-left text-xs font-medium text-zinc-500">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04]">
                      {loading && requests.length === 0 ? (
                        <tr>
                          <td
                            colSpan="8"
                            className="px-5 py-12 text-center text-sm text-zinc-500"
                          >
                            <div className="flex items-center justify-center gap-2">
                              <RefreshCw size={16} className="animate-spin" />
                              Loading requests...
                            </div>
                          </td>
                        </tr>
                      ) : filteredRequests.length === 0 ? (
                        <tr>
                          <td
                            colSpan="8"
                            className="px-5 py-12 text-center text-sm text-zinc-500"
                          >
                            No requests found.
                          </td>
                        </tr>
                      ) : (
                        filteredRequests.map((request) => (
                          <tr
                            key={request.request_id}
                            className="transition hover:bg-white/[0.03]"
                          >
                            <td className="px-5 py-4">
                              <p className="font-mono text-xs text-orange-400">
                                {request.request_id}
                              </p>
                            </td>
                            <td className="px-5 py-4">
                              <p className="text-sm font-medium text-white">
                                {request.customer_name}
                              </p>
                              <p className="mt-0.5 text-xs text-zinc-500">
                                {request.customer_email}
                              </p>
                            </td>
                            <td className="px-5 py-4">
                              <p className="text-sm text-zinc-300">
                                {formatValue(request.service)}
                              </p>
                            </td>
                            <td className="px-5 py-4">
                              <p className="text-sm text-zinc-400">
                                {formatValue(request.pillar)}
                              </p>
                            </td>
                            <td className="px-5 py-4">
                              <p className="text-sm text-zinc-300">
                                {formatValue(request.budget)}
                              </p>
                            </td>
                            <td className="px-5 py-4">
                              <span
                                className={cn(
                                  "inline-flex rounded-full border px-2.5 py-1 text-xs font-medium",
                                  statusColors[request.status] ||
                                    "border-white/10 bg-white/5 text-white/60"
                                )}
                              >
                                {request.status}
                              </span>
                            </td>
                            <td className="px-5 py-4 text-sm text-zinc-400">
                              {formatDate(request.created_at)}
                            </td>
                            <td className="px-5 py-4">
                              <button
                                onClick={() => setSelectedRequest(request)}
                                className="rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2 text-xs text-zinc-300 transition hover:bg-orange-400/10 hover:text-orange-400 hover:border-orange-400/20"
                              >
                                <div className="flex items-center gap-1">
                                  <Eye size={12} />
                                  View
                                </div>
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </section>
            </>
          )}

          {activeSection === "projects" && (
            <ProjectsPage
              projects={projects}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
              projectSearch={projectSearch}
              setProjectSearch={setProjectSearch}
              projectStatusFilter={projectStatusFilter}
              setProjectStatusFilter={setProjectStatusFilter}
              projectLoading={projectLoading}
              projectError={projectError}
              projectRefreshing={projectRefreshing}
              showCreateForm={showCreateForm}
              setShowCreateForm={setShowCreateForm}
              creating={creating}
              createForm={createForm}
              setCreateForm={setCreateForm}
              handleCreateProject={handleCreateProject}
              handleUpdateProject={handleUpdateProject}
              handleDeleteProject={handleDeleteProject}
              handleRefreshProjects={handleRefreshProjects}
              handleCreateFromRequest={handleCreateFromRequest}
            />
          )}
          {activeSection === "analytics" && <AnalyticsPage onSessionExpired={handleSessionExpired} />}
          {activeSection === "settings" && <SettingsPage />}
        </div>
      </main>

      {/* Details drawer */}
      {selectedRequest && (
        <DetailsDrawer
          request={selectedRequest}
          onClose={() => setSelectedRequest(null)}
          onSave={handleSave}
          saving={saving}
          saveError={saveError}
          editStatus={editStatus}
          setEditStatus={setEditStatus}
          editNotes={editNotes}
          setEditNotes={setEditNotes}
          onCreateProject={handleCreateFromRequest}
        />
      )}
    </div>
  );
}
