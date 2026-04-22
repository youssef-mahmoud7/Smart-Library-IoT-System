// Central frontend configuration. The page is expected to be served by the ESP32,
// so the API base stays empty and all requests go to the same local host.
const APP_CONFIG = {
  apiBase: "",
  refreshIntervalMs: 5000,
  credentials: {
    username: "admin",
    password: "library123",
  },
};

const state = {
  status: null,
  students: [],
  books: [],
  logs: [],
  refreshTimer: null,
  isFetching: false,   // guard against overlapping fetches
  // Borrow flow state
  pendingBorrowBookCode: null,
  pendingBorrowStudentId: null,
  // Camera state
  cameraStream: null,
  capturedImageData: null,
  // Student deletion pending ID
  pendingDeleteId: null,
};

const elements = {
  appShell: document.getElementById("appShell"),
  loginForm: document.getElementById("loginForm"),
  loginError: document.getElementById("loginError"),
  usernameInput: document.getElementById("usernameInput"),
  passwordInput: document.getElementById("passwordInput"),
  refreshButton: document.getElementById("refreshButton"),
  adminLoginButton: document.getElementById("adminLoginButton"),
  logoutButton: document.getElementById("logoutButton"),
  adminProfile: document.getElementById("adminProfile"),
  loginModal: document.getElementById("loginModal"),
  closeLoginModalButton: document.getElementById("closeLoginModalButton"),
  modalCloseTargets: Array.from(document.querySelectorAll("[data-close-modal='true']")),
  connectionBadge: document.getElementById("connectionBadge"),
  crowdBadge: document.getElementById("crowdBadge"),
  crowdValue: document.getElementById("crowdValue"),
  peopleCountValue: document.getElementById("peopleCountValue"),
  studentsInsideValue: document.getElementById("studentsInsideValue"),
  booksTotalValue: document.getElementById("booksTotalValue"),
  heapValue: document.getElementById("heapValue"),
  storageValue: document.getElementById("storageValue"),
  serverStateValue: document.getElementById("serverStateValue"),
  uptimeValue: document.getElementById("uptimeValue"),
  apNameLabel: document.getElementById("apNameLabel"),
  ipAddressLabel: document.getElementById("ipAddressLabel"),
  lastSyncLabel: document.getElementById("lastSyncLabel"),
  activityFeed: document.getElementById("activityFeed"),
  studentsTableBody: document.getElementById("studentsTableBody"),
  booksTableBody: document.getElementById("booksTableBody"), // kept for compatibility
  logsTableBody: document.getElementById("logsTableBody"),
  studentTableMeta: document.getElementById("studentTableMeta"),
  bookTableMeta: document.getElementById("bookTableMeta"),
  bookShelfMeta: document.getElementById("bookShelfMeta"),
  logsTableMeta: document.getElementById("logsTableMeta"),
  rfidForm: document.getElementById("rfidForm"),
  barcodeForm: document.getElementById("barcodeForm"),
  rfidSubmitButton: document.getElementById("rfidSubmitButton"),
  barcodeSubmitButton: document.getElementById("barcodeSubmitButton"),
  toast: document.getElementById("toast"),
  navLinks: Array.from(document.querySelectorAll(".nav-link")),
  views: Array.from(document.querySelectorAll(".view")),
  esp32StatusPanel: document.getElementById("esp32StatusPanel"),
  // Bookshelf elements
  bookshelfContainer: document.getElementById("bookshelfContainer"),
  bookTooltip: document.getElementById("bookTooltip"),
  bookCard: document.getElementById("bookCard"),
  bookCardCover: document.getElementById("bookCardCover"),
  bookCardTitle: document.getElementById("bookCardTitle"),
  bookCardStatus: document.getElementById("bookCardStatus"),
  bookCardAuthor: document.getElementById("bookCardAuthor"),
  bookCardBorrower: document.getElementById("bookCardBorrower"),
  closeBookCardBtn: document.getElementById("closeBookCardBtn"),
  // Public borrow elements
  publicBorrowBtn: document.getElementById("publicBorrowBtn"),
  borrowFlowModal: document.getElementById("borrowFlowModal"),
  closeBorrowModalBtn: document.getElementById("closeBorrowModalBtn"),
  borrowStep1: document.getElementById("borrowStep1"),
  borrowStep2: document.getElementById("borrowStep2"),
  borrowStep3: document.getElementById("borrowStep3"),
  borrowBookCode: document.getElementById("borrowBookCode"),
  borrowStudentId: document.getElementById("borrowStudentId"),
  nextToStep2: document.getElementById("nextToStep2"),
  backToStep1: document.getElementById("backToStep1"),
  confirmBorrow: document.getElementById("confirmBorrow"),
  closeBorrowSuccess: document.getElementById("closeBorrowSuccess"),
  borrowResultDetails: document.getElementById("borrowResultDetails"),
  borrowError: document.getElementById("borrowError"),
  // Camera elements
  cameraAddBookBtn: document.getElementById("cameraAddBookBtn"),
  cameraModal: document.getElementById("cameraModal"),
  closeCameraModalBtn: document.getElementById("closeCameraModalBtn"),
  cameraVideo: document.getElementById("cameraVideo"),
  cameraCanvas: document.getElementById("cameraCanvas"),
  capturePhotoBtn: document.getElementById("capturePhotoBtn"),
  retakePhotoBtn: document.getElementById("retakePhotoBtn"),
  cameraBookForm: document.getElementById("cameraBookForm"),
  cameraBookTitle: document.getElementById("cameraBookTitle"),
  cameraBookAuthor: document.getElementById("cameraBookAuthor"),
  cameraBookCode: document.getElementById("cameraBookCode"),
  cameraImageData: document.getElementById("cameraImageData"),
  // Student edit/delete modals
  editStudentModal: document.getElementById("editStudentModal"),
  closeEditStudentModalBtn: document.getElementById("closeEditStudentModalBtn"),
  editStudentForm: document.getElementById("editStudentForm"),
  editStudentId: document.getElementById("editStudentId"),
  editStudentName: document.getElementById("editStudentName"),
  editStudentError: document.getElementById("editStudentError"),
  deleteConfirmModal: document.getElementById("deleteConfirmModal"),
  deleteConfirmMessage: document.getElementById("deleteConfirmMessage"),
  confirmDeleteBtn: document.getElementById("confirmDeleteBtn"),
};

// ─── Utility helpers ────────────────────────────────────────────────────────

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

function parseNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function normalizeText(value, fallback = "N/A") {
  if (value === null || value === undefined) return fallback;
  const text = String(value).trim();
  return text.length ? text : fallback;
}

function toTitleCase(text) {
  return normalizeText(text, "Unknown")
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function isAuthenticated() {
  return document.body.classList.contains("authenticated");
}

// ─── Domain logic helpers ───────────────────────────────────────────────────

function inferCrowdLevel(count) {
  if (count <= 0) return "Empty";
  if (count <= 12) return "Moderate";
  return "Crowded";
}

function normalizeCrowdLevel(level, count) {
  const label = normalizeText(level, "").toLowerCase();
  if (label === "empty") return "Empty";
  if (label === "moderate") return "Moderate";
  if (label === "crowded") return "Crowded";
  return inferCrowdLevel(count);
}

function normalizeStudent(student) {
  const statusValue = normalizeText(student?.status, "outside").toLowerCase();
  return {
    id: normalizeText(student?.id ?? student?.cardId ?? student?.uid, "Unknown"),
    name: normalizeText(student?.name, "Unknown Student"),
    status: statusValue === "inside" ? "Inside" : "Outside",
    entryTime: normalizeText(student?.entryTime ?? student?.entry_time ?? student?.lastEntry, "-"),
    exitTime: normalizeText(student?.exitTime ?? student?.exit_time ?? student?.lastExit, "-"),
  };
}

function normalizeBook(book) {
  return {
    code: normalizeText(book?.code ?? book?.id ?? book?.barcode, "Unknown"),
    title: normalizeText(book?.title, "Untitled Book"),
    author: normalizeText(book?.author, "Unknown Author"),
    status: toTitleCase(book?.status ?? "available"),
    holderId: normalizeText(book?.holderId ?? book?.holder ?? "-", "-"),
    updatedAt: normalizeText(book?.updatedAt ?? book?.updated_at ?? book?.timestamp, "-"),
  };
}

function normalizeLog(log) {
  return {
    time: normalizeText(log?.time ?? log?.timestamp, new Date().toISOString()),
    type: toTitleCase(log?.type ?? log?.category ?? "system"),
    message: normalizeText(log?.message ?? log?.event, "No details"),
  };
}

function normalizeStatus(payload) {
  const peopleCount = parseNumber(payload?.peopleCount ?? payload?.people_count ?? payload?.count, 0);
  const logs = safeArray(payload?.logs ?? payload?.recentLogs).map(normalizeLog);

  return {
    peopleCount,
    crowdLevel: normalizeCrowdLevel(payload?.crowdLevel ?? payload?.crowd_level, peopleCount),
    studentsInside: parseNumber(payload?.studentsInside ?? payload?.students_inside, 0),
    booksTotal: parseNumber(payload?.booksTotal ?? payload?.books_total ?? payload?.totalBooks, 0),
    apName: normalizeText(payload?.apName ?? payload?.ssid, "Library-ESP32"),
    ipAddress: normalizeText(payload?.ip ?? payload?.ipAddress, "192.168.4.1"),
    freeHeap: parseNumber(payload?.freeHeap ?? payload?.system?.freeHeap, 0),
    storageUsed: normalizeText(payload?.storageUsed ?? payload?.system?.storageUsed, "0%"),
    serverState: normalizeText(payload?.serverState ?? payload?.server_status, "Idle"),
    uptime: parseNumber(payload?.uptimeSeconds ?? payload?.uptime ?? 0, 0),
    logs,
  };
}

// ─── Formatters ─────────────────────────────────────────────────────────────

function formatTimestamp(value) {
  if (!value || value === "-") return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString();
}

function formatUptime(seconds) {
  const total = Math.max(0, parseNumber(seconds, 0));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const remainingSeconds = total % 60;

  if (days > 0) return `${days}d ${hours}h ${minutes}m`;
  if (hours > 0) return `${hours}h ${minutes}m ${remainingSeconds}s`;
  if (minutes > 0) return `${minutes}m ${remainingSeconds}s`;
  return `${remainingSeconds}s`;
}

function formatBytes(bytes) {
  const value = parseNumber(bytes, 0);
  if (value >= 1024 * 1024) return `${(value / (1024 * 1024)).toFixed(2)} MB`;
  if (value >= 1024) return `${(value / 1024).toFixed(1)} KB`;
  return `${value} B`;
}

// ─── Badge / pill helpers ────────────────────────────────────────────────────

function badgeClassFromCrowd(label) {
  const normalized = label.toLowerCase();
  if (normalized === "empty") return "status-empty";
  if (normalized === "moderate") return "status-moderate";
  return "status-crowded";
}

function pillClassForStatus(label) {
  const normalized = normalizeText(label, "neutral").toLowerCase();
  if (["inside", "available", "returned", "empty"].includes(normalized)) return "pill status-success";
  if (["outside", "borrowed", "moderate"].includes(normalized)) return "pill status-warning";
  if (["crowded", "missing", "error", "overdue"].includes(normalized)) return "pill status-error";
  return "pill status-neutral";
}

// ─── UI primitives ───────────────────────────────────────────────────────────

function setConnectionBadge(label, className = "status-neutral") {
  elements.connectionBadge.textContent = label;
  elements.connectionBadge.className = `status-chip ${className}`;
}

let toastTimer = null;
function showToast(message, isError = false) {
  elements.toast.textContent = message;
  elements.toast.className = `toast show${isError ? " error" : ""}`;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    elements.toast.className = "toast";
  }, 2600);
}

function setRefreshBusy(busy) {
  elements.refreshButton.disabled = busy;
  elements.refreshButton.textContent = busy ? "Refreshing…" : "Refresh Now";
}

// ─── API layer ───────────────────────────────────────────────────────────────

async function fetchJson(path, options = {}) {
  const response = await fetch(`${APP_CONFIG.apiBase}${path}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  const text = await response.text();
  if (!text) return {};

  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`Invalid JSON returned by ${path}`);
  }
}

// ─── Authentication ───────────────────────────────────────────────────────────

function setAuthenticated(value) {
  if (value) {
    sessionStorage.setItem("library-dashboard-auth", "1");
    document.body.classList.add("authenticated");
    elements.logoutButton.classList.remove("hidden");
    elements.adminLoginButton.classList.add("hidden");
    elements.adminProfile.classList.remove("hidden");
  } else {
    sessionStorage.removeItem("library-dashboard-auth");
    document.body.classList.remove("authenticated");
    elements.logoutButton.classList.add("hidden");
    elements.adminLoginButton.classList.remove("hidden");
    elements.adminProfile.classList.add("hidden");
    setView("dashboardView");
  }
}

function openLoginModal() {
  elements.loginError.textContent = "";
  elements.usernameInput.value = "";
  elements.passwordInput.value = "";
  elements.loginModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
  window.setTimeout(() => elements.usernameInput.focus(), 0);
}

function closeLoginModal() {
  elements.loginModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

async function handleLogin(event) {
  event.preventDefault();

  const username = elements.usernameInput.value.trim();
  const password = elements.passwordInput.value;

  if (!username || !password) {
    elements.loginError.textContent = "Both username and password are required.";
    return;
  }

  if (username !== APP_CONFIG.credentials.username || password !== APP_CONFIG.credentials.password) {
    elements.loginError.textContent = "Invalid admin credentials.";
    elements.passwordInput.value = "";
    elements.passwordInput.focus();
    return;
  }

  elements.loginError.textContent = "";
  setAuthenticated(true);
  closeLoginModal();

  try {
    await loadDashboardData();
    showToast("Admin dashboard unlocked.");
  } catch (error) {
    showToast(error.message, true);
  }
}

async function handleLogout() {
  setAuthenticated(false);
  state.students = [];
  state.books = [];
  renderAll();
  showToast("Admin controls locked.");
}

// ─── Data loading ────────────────────────────────────────────────────────────

async function loadDashboardData() {
  if (state.isFetching) return;
  state.isFetching = true;

  setConnectionBadge("Syncing…", "status-warning");

  const pendingRequests = [fetchJson("/status")];

  if (isAuthenticated()) {
    pendingRequests.push(fetchJson("/students"), fetchJson("/books"));
  } else {
    // Public users can still see books (but limited info)
    pendingRequests.push(fetchJson("/books"));
  }

  const [statusResult, studentsResult, booksResult] = await Promise.allSettled(pendingRequests);
  const failures = [];

  if (statusResult.status === "fulfilled") {
    state.status = normalizeStatus(statusResult.value);
    state.logs = state.status.logs;
  } else {
    failures.push("status");
    console.warn("Status fetch failed:", statusResult.reason);
  }

  // Handle students (admin only)
  if (isAuthenticated() && studentsResult?.status === "fulfilled") {
    const source = safeArray(studentsResult.value?.students ?? studentsResult.value);
    state.students = source.map(normalizeStudent);
  } else if (isAuthenticated()) {
    failures.push("students");
    console.warn("Students fetch failed:", studentsResult?.reason);
  } else {
    state.students = [];
  }

  // Handle books (both admin and public)
  if (booksResult?.status === "fulfilled") {
    const source = safeArray(booksResult.value?.books ?? booksResult.value);
    state.books = source.map(normalizeBook);
  } else {
    failures.push("books");
    console.warn("Books fetch failed:", booksResult?.reason);
  }

  renderAll();
  state.isFetching = false;

  if (failures.length === pendingRequests.length) {
    setConnectionBadge("Offline", "status-error");
    throw new Error("Unable to reach the ESP32 local server.");
  }

  if (failures.length) {
    setConnectionBadge("Partial", "status-warning");
    showToast(`Loaded with missing: ${failures.join(", ")}.`, true);
    return;
  }

  setConnectionBadge("Connected", "status-success");
}

// ─── Render functions (status, activity, logs, students) ─────────────────────

function renderActivityFeed() {
  const recentLogs = state.logs.slice(0, 6);

  if (!recentLogs.length) {
    elements.activityFeed.innerHTML = '<li class="empty-state">No activity has been recorded yet.</li>';
    return;
  }

  elements.activityFeed.innerHTML = recentLogs
    .map(
      (log) => `
        <li>
          <div class="activity-title">
            <span>${escapeHtml(log.type)}</span>
            <span class="subtle-text">${escapeHtml(formatTimestamp(log.time))}</span>
          </div>
          <p class="activity-message">${escapeHtml(log.message)}</p>
        </li>
      `
    )
    .join("");
}

function renderStudents() {
  elements.studentTableMeta.textContent = `${state.students.length} records`;

  if (!state.students.length) {
    elements.studentsTableBody.innerHTML =
      '<tr><td colspan="6" class="empty-state">No students stored in LittleFS yet.</td></tr>';
    return;
  }

  elements.studentsTableBody.innerHTML = state.students
    .map(
      (student) => `
        <tr>
          <td data-label="ID">${escapeHtml(student.id)}</td>
          <td data-label="Name">${escapeHtml(student.name)}</td>
          <td data-label="Status"><span class="${pillClassForStatus(student.status)}">${escapeHtml(student.status)}</span></td>
          <td data-label="Entry Time">${escapeHtml(formatTimestamp(student.entryTime))}</td>
          <td data-label="Exit Time">${escapeHtml(formatTimestamp(student.exitTime))}</td>
          <td data-label="Actions" class="admin-only">
            <div class="student-actions">
              <button class="icon-btn edit-student" data-id="${escapeHtml(student.id)}" data-name="${escapeHtml(student.name)}" title="Edit name">✎</button>
              <button class="icon-btn danger delete-student" data-id="${escapeHtml(student.id)}" data-name="${escapeHtml(student.name)}" title="Delete student">🗑</button>
            </div>
          </td>
        </tr>
      `
    )
    .join("");
    
  // Attach event listeners
  document.querySelectorAll('.edit-student').forEach(btn => {
    btn.addEventListener('click', () => openEditStudentModal(btn.dataset.id, btn.dataset.name));
  });
  document.querySelectorAll('.delete-student').forEach(btn => {
    btn.addEventListener('click', () => openDeleteConfirmModal(btn.dataset.id, btn.dataset.name));
  });
}

function renderLogs() {
  elements.logsTableMeta.textContent = `${state.logs.length} events`;

  if (!state.logs.length) {
    elements.logsTableBody.innerHTML =
      '<tr><td colspan="3" class="empty-state">No logs available from the ESP32 status response.</td></tr>';
    return;
  }

  elements.logsTableBody.innerHTML = state.logs
    .map(
      (log) => `
        <tr>
          <td data-label="Time">${escapeHtml(formatTimestamp(log.time))}</td>
          <td data-label="Type">${escapeHtml(log.type)}</td>
          <td data-label="Message">${escapeHtml(log.message)}</td>
        </tr>
      `
    )
    .join("");
}

function renderStatus() {
  const status = state.status ?? normalizeStatus({});

  const insideFromRecords = state.students.filter((s) => s.status === "Inside").length;
  const studentsInside = state.students.length ? insideFromRecords : status.studentsInside;
  const booksTotal = state.books.length ? state.books.length : status.booksTotal;

  elements.crowdValue.textContent = status.crowdLevel;
  elements.crowdBadge.textContent = status.crowdLevel;
  elements.crowdBadge.className = `status-chip ${badgeClassFromCrowd(status.crowdLevel)}`;
  elements.peopleCountValue.textContent = String(status.peopleCount);
  elements.studentsInsideValue.textContent = String(studentsInside);
  elements.booksTotalValue.textContent = String(booksTotal);

  elements.heapValue.textContent = formatBytes(status.freeHeap);
  elements.storageValue.textContent = status.storageUsed;
  elements.serverStateValue.textContent = status.serverState;
  elements.uptimeValue.textContent = formatUptime(status.uptime);
  elements.apNameLabel.textContent = status.apName;
  elements.ipAddressLabel.textContent = status.ipAddress;
  elements.lastSyncLabel.textContent = `Last sync: ${new Date().toLocaleTimeString()}`;
}

// Bookshelf rendering (conditional for admin/public) will be in Part 2
function renderBooks() {
  // This will be implemented in Part 2
}

function renderAll() {
  renderStatus();
  renderStudents();
  renderBooks();
  renderLogs();
  renderActivityFeed();
}

// ─── Navigation ──────────────────────────────────────────────────────────────

function setView(viewId) {
  const targetButton = elements.navLinks.find((btn) => btn.dataset.view === viewId);

  if (targetButton?.classList.contains("admin-only") && !isAuthenticated()) {
    openLoginModal();
    showToast("Admin login is required for that section.", true);
    return;
  }

  elements.navLinks.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === viewId);
  });

  elements.views.forEach((view) => {
    view.classList.toggle("active", view.id === viewId);
  });
}

// ─── Bookshelf rendering (conditional for admin/public) ──────────────────────

// Generate a consistent color from a string (for book spines)
function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 65%, 45%)`;
}

// تحديد سعة الرف بناءً على عرض الشاشة الحالي (متجاوب)
function getBooksPerShelf() {
  const width = window.innerWidth;
  if (width <= 420) return 5;       // شاشات الهواتف الصغيرة
  if (width <= 760) return 8;       // الهواتف الكبيرة / التابلت الرأسي
  if (width <= 1080) return 10;     // التابلت الأفقي / اللابتوب الصغير
  return 14;                        // شاشات الكمبيوتر الكبيرة
}

// تقسيم الكتب إلى رفوف بناءً على السعة بدلاً من الحروف
function groupBooksIntoShelves(books) {
  // ترتيب الكتب أبجدياً أولاً ليكون الرف منظماً
  const sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));
  const capacity = getBooksPerShelf();
  const shelves = [];
  
  // تقسيم المصفوفة (Chunking) إلى رفوف
  for (let i = 0; i < sortedBooks.length; i += capacity) {
    shelves.push({
      label: `Shelf ${Math.floor(i / capacity) + 1}`, // تسمية الرف: Shelf 1, Shelf 2...
      books: sortedBooks.slice(i, i + capacity)
    });
  }
  return shelves;
}

// متغير لتتبع سعة الرف الحالية لمنع التحديث غير الضروري
let currentShelfCapacity = getBooksPerShelf();

// Show tooltip on book hover (respects authentication)
function showBookTooltip(e, book) {
  const tooltip = elements.bookTooltip;
  const isAdmin = isAuthenticated();
  const isAvailable = book.status.toLowerCase() === 'available';
  
  let statusText = isAvailable ? 'Available' : 'Borrowed';
  let borrowerHtml = '';
  
  if (!isAvailable && isAdmin) {
    borrowerHtml = `<div class="tt-borrower">Holder: ${escapeHtml(book.holderId)}</div>`;
  } else if (!isAvailable) {
    borrowerHtml = `<div class="tt-borrower">Currently borrowed</div>`;
  }
  
  tooltip.innerHTML = `
    <div class="tt-title">${escapeHtml(book.title)}</div>
    <div class="tt-status ${isAvailable ? 'available' : 'borrowed'}">${statusText}</div>
    ${book.author !== 'Unknown Author' ? `<div class="tt-author">by ${escapeHtml(book.author)}</div>` : ''}
    ${borrowerHtml}
  `;
  tooltip.classList.add('show');
  moveTooltip(e);
}

function moveTooltip(e) {
  const tooltip = elements.bookTooltip;
  let x = e.clientX + 14;
  let y = e.clientY - 14;
  const rect = tooltip.getBoundingClientRect();
  if (x + rect.width > window.innerWidth - 10) x = e.clientX - rect.width - 14;
  if (y + rect.height > window.innerHeight - 10) y = e.clientY - rect.height - 14;
  tooltip.style.left = x + 'px';
  tooltip.style.top = y + 'px';
}

function hideBookTooltip() {
  elements.bookTooltip.classList.remove('show');
}

// Show enlarged book card (respects authentication)
function showBookCard(e, book, color) {
  const card = elements.bookCard;
  const cover = elements.bookCardCover;
  const isAdmin = isAuthenticated();
  const isAvailable = book.status.toLowerCase() === 'available';
  
  cover.style.background = `linear-gradient(160deg, ${color}, ${color}dd)`;
  elements.bookCardTitle.textContent = book.title;
  elements.bookCardAuthor.textContent = book.author !== 'Unknown Author' ? `by ${book.author}` : '';
  
  const statusEl = elements.bookCardStatus;
  statusEl.className = `book-card-status ${isAvailable ? 'available' : 'borrowed'}`;
  statusEl.textContent = isAvailable ? '● Available' : '● Borrowed';
  
  let borrowerText = '';
  if (!isAvailable && isAdmin) {
    borrowerText = `Holder: ${book.holderId}`;
  } else if (!isAvailable) {
    borrowerText = 'Currently borrowed';
  }
  elements.bookCardBorrower.textContent = borrowerText;
  
  card.classList.add('show');
  
  const cw = 180, ch = 280;
  let x = e.clientX - cw / 2;
  let y = e.clientY - ch - 20;
  if (x < 10) x = 10;
  if (x + cw > window.innerWidth - 10) x = window.innerWidth - cw - 10;
  if (y < 10) y = e.clientY + 20;
  card.style.left = x + 'px';
  card.style.top = y + 'px';
  
  document.querySelectorAll('.book.grabbed').forEach(b => b.classList.remove('grabbed'));
  const bookEl = e.currentTarget;
  if (bookEl) bookEl.classList.add('grabbed');
}

function closeBookCard() {
  elements.bookCard.classList.remove('show');
  document.querySelectorAll('.book.grabbed').forEach(b => b.classList.remove('grabbed'));
}

// Render the bookshelf (now respecting authentication)
function renderBookshelf() {
  if (!elements.bookshelfContainer) return;
  
  const books = state.books;
  const totalBooks = books.length;
  if (elements.bookShelfMeta) elements.bookShelfMeta.textContent = `${totalBooks} books`;
  
  if (!books.length) {
    elements.bookshelfContainer.innerHTML = '<div class="empty-state">No books in the library yet.</div>';
    return;
  }
  
  const shelves = groupBooksIntoShelves(books);
  let html = '';
  
  shelves.forEach(shelf => {
    html += `<div class="shelf-row"><div class="shelf-label">${escapeHtml(shelf.label)}</div><div class="shelf-scene"><div class="shelf-books">`;
    
    shelf.books.forEach(book => {
      const color = stringToColor(book.title + book.code);
      const isBorrowed = book.status.toLowerCase() !== 'available';
      const spineText = book.title.length > 20 ? book.title.substring(0, 18) + '…' : book.title;
      
      html += `<div class="book ${isBorrowed ? 'borrowed' : ''}" 
        style="background: linear-gradient(160deg, ${color}, ${color}dd);"
        data-book='${JSON.stringify(book).replace(/'/g, "&#39;")}'
        data-color="${color}">
        <div class="book-spine">${escapeHtml(spineText)}</div>
      </div>`;
    });
    
    html += `</div><div class="shelf-plank"></div></div></div>`;
  });
  
  elements.bookshelfContainer.innerHTML = html;
  
  document.querySelectorAll('.book').forEach(bookEl => {
    const bookData = JSON.parse(bookEl.dataset.book);
    const color = bookEl.dataset.color;
    
    bookEl.addEventListener('mouseenter', (e) => showBookTooltip(e, bookData));
    bookEl.addEventListener('mousemove', moveTooltip);
    bookEl.addEventListener('mouseleave', hideBookTooltip);
    bookEl.addEventListener('click', (e) => {
      hideBookTooltip();
      showBookCard(e, bookData, color);
    });
  });
}

// Override renderBooks to use shelf
function renderBooks() {
  renderBookshelf();
}

// ─── Borrow Flow (Student) ─────────────────────────────────────────────────

let html5QrcodeScanner = null; 

// 1. فتح النافذة (بدون تشغيل الكاميرا)
function openBorrowModal() {
  state.pendingBorrowBookCode = null;
  state.pendingBorrowStudentId = null;
  
  elements.borrowStep1.classList.remove('hidden');
  elements.borrowStep2.classList.add('hidden');
  elements.borrowStep3.classList.add('hidden');
  
  elements.borrowBookCode.value = '';
  elements.borrowStudentId.value = '';
  elements.borrowError.textContent = '';
  
  // إعادة الواجهة لحالتها الأصلية (إظهار زر المسح وإخفاء الكاميرا)
  const scannerBtn = document.getElementById('startScannerBtn');
  const qrReader = document.getElementById('qr-reader');
  if (scannerBtn) scannerBtn.classList.remove('hidden');
  if (qrReader) qrReader.classList.add('hidden');
  
  elements.borrowFlowModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  
  // التركيز على خانة الكتاب ليكون جاهزاً للكتابة أو المسح بجهاز خارجي
  setTimeout(() => elements.borrowBookCode.focus(), 100);
}

// 2. دالة تشغيل الكاميرا (تعمل عند الضغط على الزر)
function startBarcodeScanner() {
  const scannerBtn = document.getElementById('startScannerBtn');
  const qrReader = document.getElementById('qr-reader');
  
  // إخفاء الزر وإظهار مربع الكاميرا
  if (scannerBtn) scannerBtn.classList.add('hidden');
  if (qrReader) qrReader.classList.remove('hidden');
  
  // فحص: هل المتصفح يمنع الكاميرا لأنه ملف عادي (file://) ؟
  if (window.location.protocol === 'file:') {
    alert("تنبيه: المتصفح يمنع تشغيل الكاميرا لأنك تفتح الملف مباشرة من الكمبيوتر (file://).\nيجب تشغيله عبر Live Server أو رفعه على الـ ESP32.");
    return; // إيقاف التشغيل
  }

  // ---> اللمسة الاحترافية: اكتشاف نظام iOS وإظهار تنبيه ذكي <---
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (isIOS) {
    showToast("Tip: On iPhone, swipe down to turn on your flashlight from the Control Center if it's dark.");  }
  // -------------------------------------------------------------

  if (typeof Html5QrcodeScanner !== 'undefined') {
    try {
      html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-reader", 
        { 
          fps: 10, 
          qrbox: {width: 250, height: 100}, 
          aspectRatio: 1.0,
          videoConstraints: { facingMode: "environment" },
          // 💡 هذا هو السطر السحري لتفعيل زر الفلاش
          showTorchButtonIfSupported: true 
        }, 
        false
      );
      
      html5QrcodeScanner.render(onScanSuccess, function(errorMessage) {
        console.log("Camera Error: " + errorMessage);
      });
    } catch (e) {
      alert("حدث خطأ أثناء تشغيل الكاميرا: " + e.message);
    }
  } else {
    alert("خطأ: ملف مكتبة الكاميرا (html5-qrcode.min.js) غير موجود أو لم يتم ربطه بشكل صحيح في ملف index.html!");
  }
}

// 3. عند نجاح التقاط الباركود بالكاميرا
function onScanSuccess(decodedText) {
  // إيقاف الكاميرا فوراً
  if (html5QrcodeScanner) {
    html5QrcodeScanner.clear();
  }
  
  document.getElementById('qr-reader').classList.add('hidden');
  document.getElementById('startScannerBtn').classList.remove('hidden');
  
  elements.borrowBookCode.value = decodedText;
  showToast("Barcode Scanned: " + decodedText);
  
  // انتقال تلقائي للخطوة الثانية
  goToStep2(); 
}

// 4. إغلاق النافذة
function closeBorrowModal() {
  if (html5QrcodeScanner) {
    html5QrcodeScanner.clear();
  }
  elements.borrowFlowModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

// 5. الرجوع من خطوة الـ RFID إلى خطوة الباركود
function goBackToStep1() {
  elements.borrowStep2.classList.add('hidden');
  elements.borrowStep1.classList.remove('hidden');
  elements.borrowError.textContent = '';
  setTimeout(() => elements.borrowBookCode.focus(), 100);
}

// ... (دوال goToStep2 و confirmBorrowAction تظل كما هي بدون تغيير) ...
// 2. الانتقال من الخطوة الأولى (الباركود) إلى الخطوة الثانية (الـ RFID)
// 2. الانتقال من الخطوة الأولى إلى الخطوة الثانية (مع تحديد نوع الإدخال)
function goToStep2(mode = 'rfid') {
  const bookCode = elements.borrowBookCode.value.trim();
  
  if (!bookCode) {
    elements.borrowError.textContent = 'Please scan or enter a book barcode.';
    return;
  }
  
  const book = state.books.find(b => b.code.toLowerCase() === bookCode.toLowerCase());
  
  if (!book) {
    elements.borrowError.textContent = 'Book not found in the library system.';
    return;
  }
  
  if (book.status.toLowerCase() !== 'available') {
    elements.borrowError.textContent = 'This book is already borrowed by someone else.';
    return;
  }
  
  state.pendingBorrowBookCode = book.code;
  elements.borrowError.textContent = ''; 
  
  // -- التعديل الذكي: تغيير نصوص الخطوة الثانية بناءً على الزر المضغوط --
  const step2Hint = elements.borrowStep2.querySelector('.step-hint');
  const step2Label = elements.borrowStep2.querySelector('.field span');
  
  if (mode === 'nid') {
    step2Hint.textContent = 'Step 2: Enter student National ID';
    step2Label.textContent = 'National ID';
    elements.borrowStudentId.placeholder = 'Enter 14-digit National ID';
  } else {
    step2Hint.textContent = 'Step 2: Scan your student RFID card';
    step2Label.textContent = 'Student ID (RFID)';
    elements.borrowStudentId.placeholder = 'Scan or enter student ID';
  }
  
  // إخفاء الخطوة الأولى وإظهار الثانية
  elements.borrowStep1.classList.add('hidden');
  elements.borrowStep2.classList.remove('hidden');
  
  setTimeout(() => elements.borrowStudentId.focus(), 100);
}

// الرجوع للخطوة الأولى (في حال أخطأ الطالب في مسح الكتاب)
function goBackToStep1() {
  elements.borrowStep2.classList.add('hidden');
  elements.borrowStep1.classList.remove('hidden');
  elements.borrowError.textContent = '';
  setTimeout(() => elements.borrowBookCode.focus(), 100);
}

// 3. تأكيد الاستعارة (بعد مسح الـ RFID) وإرسال الطلب للسيرفر
async function confirmBorrowAction() {
  const studentId = elements.borrowStudentId.value.trim();
  
  if (!studentId) {
    elements.borrowError.textContent = 'Please scan your student RFID card.';
    return;
  }
  
  state.pendingBorrowStudentId = studentId;
  
  // تعطيل الأزرار أثناء إرسال الطلب لمنع الضغط المزدوج
  elements.confirmBorrow.disabled = true;
  elements.backToStep1.disabled = true;
  elements.borrowError.textContent = 'Processing request...';
  elements.borrowError.style.color = 'var(--navy)'; // تغيير لون النص ليدل على المعالجة
  
  try {
    // تجهيز حزمة البيانات (JSON Payload) المطابقة لـ API الـ ESP32
    const payload = {
      code: state.pendingBorrowBookCode,
      action: 'borrow',
      holderId: state.pendingBorrowStudentId
    };
    
    // إرسال الطلب إلى المسار /barcode الذي برمجناه في الـ ESP32
    const result = await fetchJson('/barcode', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    
    // في حال النجاح: إظهار الخطوة الثالثة (رسالة النجاح)
    const book = state.books.find(b => b.code === state.pendingBorrowBookCode);
    elements.borrowResultDetails.textContent = `"${book?.title || 'The Book'}" has been borrowed successfully to ID: ${state.pendingBorrowStudentId}.`;
    
    elements.borrowStep2.classList.add('hidden');
    elements.borrowStep3.classList.remove('hidden');
    elements.borrowError.textContent = '';
    
    // تحديث بيانات لوحة التحكم (لتظهر الحالة الجديدة للكتاب)
    await loadDashboardData();
    
  } catch (error) {
    // في حال الفشل
    elements.borrowError.style.color = 'var(--red)';
    elements.borrowError.textContent = `Borrow failed: ${error.message}`;
  } finally {
    // إعادة تفعيل الأزرار
    elements.confirmBorrow.disabled = false;
    elements.backToStep1.disabled = false;
  }
}

// إغلاق النافذة بعد النجاح
function closeBorrowSuccess() {
  closeBorrowModal();
}

// 4. ميزة إضافية: تفعيل زر "Enter" للانتقال التلقائي
if (elements.borrowBookCode) {
  elements.borrowBookCode.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      goToStep2('rfid'); // الانتقال التلقائي يفترض وجود الكارت
    }
  });
}

if (elements.borrowStudentId) {
  elements.borrowStudentId.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      confirmBorrowAction();
    }
  });
}


// ─── Admin Add Book Flow (Barcode + SD Cover) ───────────────────────────────

let adminHtml5QrcodeScanner = null;
let coverCameraStream = null;

// عناصر الـ DOM الخاصة بالنافذة
const step1Barcode = document.getElementById('step1Barcode');
const step2Cover = document.getElementById('step2Cover');
const cameraVideo = document.getElementById('cameraVideo');
const cameraCanvas = document.getElementById('cameraCanvas');
const capturePhotoBtn = document.getElementById('capturePhotoBtn');
const retakePhotoBtn = document.getElementById('retakePhotoBtn');

function openCameraModal() {
  elements.cameraModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  
  // تصفير الواجهة للخطوة الأولى
  elements.cameraBookForm.reset();
  elements.cameraBookForm.classList.add('hidden');
  step2Cover.classList.add('hidden');
  step1Barcode.classList.remove('hidden');
  elements.cameraImageData.value = '';
  
  // 1. تشغيل ماسح الباركود
  if (typeof Html5QrcodeScanner !== 'undefined') {
    adminHtml5QrcodeScanner = new Html5QrcodeScanner(
      "admin-qr-reader", 
      { fps: 10, qrbox: {width: 250, height: 100}, aspectRatio: 1.0, showTorchButtonIfSupported: true }, 
      false
    );
    
    adminHtml5QrcodeScanner.render(onAdminBarcodeSuccess, (error) => { /* تجاهل أخطاء المسح */ });
  } else {
    showToast("Barcode library not loaded!", true);
  }
}

// 2. عند نجاح مسح الباركود
function onAdminBarcodeSuccess(decodedText) {
  // إيقاف ماسح الباركود فوراً
  if (adminHtml5QrcodeScanner) {
    adminHtml5QrcodeScanner.clear();
  }
  
  // تعبئة حقل الكود
  elements.cameraBookCode.value = decodedText;
  showToast("Barcode Scanned: " + decodedText);
  
  // إخفاء الخطوة 1 وإظهار الخطوة 2 و 3
  step1Barcode.classList.add('hidden');
  step2Cover.classList.remove('hidden');
  elements.cameraBookForm.classList.remove('hidden');
  
  // تشغيل الكاميرا العادية لالتقاط الغلاف
  startCoverCamera();
}

// 3. تشغيل كاميرا الغلاف
async function startCoverCamera() {
  cameraVideo.classList.remove('hidden');
  cameraCanvas.classList.add('hidden');
  capturePhotoBtn.classList.remove('hidden');
  retakePhotoBtn.classList.add('hidden');
  
  try {
    coverCameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
    cameraVideo.srcObject = coverCameraStream;
  } catch (error) {
    showToast('Camera access denied. Cannot take cover photo.', true);
  }
}

// 4. التقاط الصورة
capturePhotoBtn.addEventListener('click', () => {
  if (!coverCameraStream) return;
  
  const context = cameraCanvas.getContext('2d');
  cameraCanvas.width = cameraVideo.videoWidth;
  cameraCanvas.height = cameraVideo.videoHeight;
  context.drawImage(cameraVideo, 0, 0, cameraCanvas.width, cameraCanvas.height);
  
  // ضغط الصورة لتقليل حجم الرفع (Quality 0.7 = 70%)
  const imageData = cameraCanvas.toDataURL('image/jpeg', 0.7);
  elements.cameraImageData.value = imageData;
  
  cameraVideo.classList.add('hidden');
  cameraCanvas.classList.remove('hidden');
  capturePhotoBtn.classList.add('hidden');
  retakePhotoBtn.classList.remove('hidden');
  
  // التركيز على اسم الكتاب تمهيداً للحفظ
  elements.cameraBookTitle.focus();
});

// إعادة الالتقاط
retakePhotoBtn.addEventListener('click', () => {
  elements.cameraImageData.value = '';
  cameraVideo.classList.remove('hidden');
  cameraCanvas.classList.add('hidden');
  capturePhotoBtn.classList.remove('hidden');
  retakePhotoBtn.classList.add('hidden');
});

function closeCameraModal() {
  if (adminHtml5QrcodeScanner) adminHtml5QrcodeScanner.clear().catch(e => {});
  if (coverCameraStream) coverCameraStream.getTracks().forEach(track => track.stop());
  
  elements.cameraModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

// 5. إرسال البيانات للـ ESP32 (منفصلة: بيانات نصية ثم الصورة)
async function handleCameraBookSubmit(event) {
  event.preventDefault();
  
  const title = elements.cameraBookTitle.value.trim();
  const author = elements.cameraBookAuthor.value.trim() || 'Unknown';
  const code = elements.cameraBookCode.value.trim();
  const imageData = elements.cameraImageData.value; // Base64
  
  if (!code || !title) {
    showToast('Barcode and Title are required.', true);
    return;
  }

  const submitBtn = event.target.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = "Uploading...";

  const jsonPayload = { code, title, author, action: 'add' };
  
  try {
    // 1. حفظ البيانات النصية في LittleFS (books.json)
    await fetchJson('/barcode', {
      method: 'POST',
      body: JSON.stringify(jsonPayload)
    });

    // 2. إذا التقط الآدمن صورة، نرسلها لمسار الـ SD Card
    if (imageData) {
      submitBtn.textContent = "Saving Cover to SD Card...";
      await fetch('/upload-cover', {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ code: code, image: imageData })
      });
    }

    showToast('Book and Cover added successfully.');
    closeCameraModal();
    await loadDashboardData();
  } catch (error) {
    showToast(`Failed: ${error.message}`, true);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Save to ESP32 & SD Card";
  }
}

// ─── Student Edit/Delete Modals ─────────────────────────────────────────────

function openEditStudentModal(id, currentName) {
  elements.editStudentId.value = id;
  elements.editStudentName.value = currentName;
  elements.editStudentError.textContent = '';
  elements.editStudentModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeEditStudentModal() {
  elements.editStudentModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

async function handleEditStudentSubmit(event) {
  event.preventDefault();
  const id = elements.editStudentId.value;
  const newName = elements.editStudentName.value.trim();
  
  if (!newName) {
    elements.editStudentError.textContent = 'Name cannot be empty.';
    return;
  }
  
  try {
    await fetchJson(`/students/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ name: newName })
    });
    showToast('Student updated.');
    closeEditStudentModal();
    await loadDashboardData();
  } catch (error) {
    elements.editStudentError.textContent = error.message;
    showToast(`Update failed: ${error.message}`, true);
  }
}

function openDeleteConfirmModal(id, name) {
  state.pendingDeleteId = id;
  elements.deleteConfirmMessage.textContent = `Are you sure you want to remove "${name}"?`;
  elements.deleteConfirmModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeDeleteConfirmModal() {
  elements.deleteConfirmModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  state.pendingDeleteId = null;
}

async function handleConfirmDelete() {
  const id = state.pendingDeleteId;
  if (!id) return;
  
  try {
    await fetchJson(`/students/${id}`, { method: 'DELETE' });
    showToast('Student deleted.');
    closeDeleteConfirmModal();
    await loadDashboardData();
  } catch (error) {
    showToast(`Delete failed: ${error.message}`, true);
    closeDeleteConfirmModal();
  }
}

// ─── Form handlers (RFID / Barcode) ─────────────────────────────────────────

async function handleRfidSubmit(event) {
  event.preventDefault();
  if (!isAuthenticated()) {
    openLoginModal();
    showToast('Admin login required.', true);
    return;
  }
  const payload = {
    id: document.getElementById('rfidIdInput').value.trim(),
    name: document.getElementById('rfidNameInput').value.trim(),
    action: document.getElementById('rfidActionInput').value
  };
  if (!payload.id) {
    showToast('Student ID required.', true);
    return;
  }
  elements.rfidSubmitButton.disabled = true;
  elements.rfidSubmitButton.textContent = 'Sending…';
  try {
    const result = await fetchJson('/rfid', { method: 'POST', body: JSON.stringify(payload) });
    showToast(result.message || 'RFID transaction stored.');
    elements.rfidForm.reset();
    await loadDashboardData();
  } catch (error) {
    showToast(error.message, true);
  } finally {
    elements.rfidSubmitButton.disabled = false;
    elements.rfidSubmitButton.textContent = 'Send RFID Scan';
  }
}

async function handleBarcodeSubmit(event) {
  event.preventDefault();
  if (!isAuthenticated()) {
    openLoginModal();
    showToast('Admin login required.', true);
    return;
  }
  const payload = {
    code: document.getElementById('barcodeCodeInput').value.trim(),
    title: document.getElementById('barcodeTitleInput').value.trim(),
    author: document.getElementById('barcodeAuthorInput').value.trim(),
    action: document.getElementById('barcodeActionInput').value,
    holderId: document.getElementById('barcodeHolderInput').value.trim()
  };
  if (!payload.code) {
    showToast('Book code required.', true);
    return;
  }
  elements.barcodeSubmitButton.disabled = true;
  elements.barcodeSubmitButton.textContent = 'Sending…';
  try {
    const result = await fetchJson('/barcode', { method: 'POST', body: JSON.stringify(payload) });
    showToast(result.message || 'Barcode transaction stored.');
    elements.barcodeForm.reset();
    await loadDashboardData();
  } catch (error) {
    showToast(error.message, true);
  } finally {
    elements.barcodeSubmitButton.disabled = false;
    elements.barcodeSubmitButton.textContent = 'Send Barcode Scan';
  }
}

// ─── Auto-refresh ─────────────────────────────────────────────────────────────

function startAutoRefresh() {
  window.clearInterval(state.refreshTimer);
  state.refreshTimer = window.setInterval(() => {
    loadDashboardData().catch((error) => {
      setConnectionBadge('Offline', 'status-error');
      console.error(error);
    });
  }, APP_CONFIG.refreshIntervalMs);
}

function stopAutoRefresh() {
  window.clearInterval(state.refreshTimer);
  state.refreshTimer = null;
}

// ─── Event binding ────────────────────────────────────────────────────────────

function bindEvents() {
  elements.loginForm.addEventListener('submit', handleLogin);
  elements.refreshButton.addEventListener('click', async () => {
    setRefreshBusy(true);
    try {
      await loadDashboardData();
      showToast('Dashboard refreshed.');
    } catch (error) {
      showToast(error.message, true);
    } finally {
      setRefreshBusy(false);
    }
  }); // <-- إغلاق دالة زر التحديث بشكل صحيح هنا

  // إعادة رسم رفوف الكتب إذا تغير مقاس الشاشة
  window.addEventListener('resize', () => {
    const newCapacity = getBooksPerShelf();
    if (newCapacity !== currentShelfCapacity && elements.bookshelfContainer) {
      currentShelfCapacity = newCapacity;
      renderBookshelf(); 
    }
  });
  

  elements.adminLoginButton.addEventListener('click', openLoginModal);
  elements.closeLoginModalButton.addEventListener('click', closeLoginModal);
  elements.modalCloseTargets.forEach(target => target.addEventListener('click', closeLoginModal));
  elements.logoutButton.addEventListener('click', handleLogout);
  elements.rfidForm.addEventListener('submit', handleRfidSubmit);
  elements.barcodeForm.addEventListener('submit', handleBarcodeSubmit);

  elements.navLinks.forEach(button => {
    button.addEventListener('click', () => setView(button.dataset.view));
  });

  // Bookshelf interactions
  if (elements.closeBookCardBtn) {
    elements.closeBookCardBtn.addEventListener('click', closeBookCard);
  }
  document.addEventListener('click', (e) => {
    if (elements.bookCard.classList.contains('show') && 
        !elements.bookCard.contains(e.target) && 
        !e.target.closest('.book')) {
      closeBookCard();
    }
  });

// Borrow flow
  if (elements.publicBorrowBtn) {
    elements.publicBorrowBtn.addEventListener('click', openBorrowModal);
  }
  
  // ---> أضف هذا الجزء لكي يعمل زر الكاميرا <---
  const startScannerBtn = document.getElementById('startScannerBtn');
  if (startScannerBtn) {
    startScannerBtn.addEventListener('click', startBarcodeScanner);
  }
  // ---------------------------------------------

  if (elements.closeBorrowModalBtn) {
    elements.closeBorrowModalBtn.addEventListener('click', closeBorrowModal);
  }
  if (elements.nextToStep2) {
    // الزر الأول يرسل وضع 'rfid'
    elements.nextToStep2.addEventListener('click', () => goToStep2('rfid'));
  }
  
  // الزر الجديد يرسل وضع 'nid' (الرقم القومي)
  const nextToNationalId = document.getElementById('nextToNationalId');
  if (nextToNationalId) {
    nextToNationalId.addEventListener('click', () => goToStep2('nid'));
  }

  // Camera
  if (elements.cameraAddBookBtn) {
    elements.cameraAddBookBtn.addEventListener('click', openCameraModal);
  }
  if (elements.closeCameraModalBtn) {
    elements.closeCameraModalBtn.addEventListener('click', closeCameraModal);
  }
  if (elements.capturePhotoBtn) {
    elements.capturePhotoBtn.addEventListener('click', capturePhoto);
  }
  if (elements.retakePhotoBtn) {
    elements.retakePhotoBtn.addEventListener('click', retakePhoto);
  }
  if (elements.cameraBookForm) {
    elements.cameraBookForm.addEventListener('submit', handleCameraBookSubmit);
  }

  // Student edit/delete
  if (elements.editStudentForm) {
    elements.editStudentForm.addEventListener('submit', handleEditStudentSubmit);
  }
  if (elements.closeEditStudentModalBtn) {
    elements.closeEditStudentModalBtn.addEventListener('click', closeEditStudentModal);
  }
  if (elements.confirmDeleteBtn) {
    elements.confirmDeleteBtn.addEventListener('click', handleConfirmDelete);
  }

  // Generic modal close on backdrop click
  document.querySelectorAll('[data-close-modal]').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target === el || el.dataset.closeModal === 'true') {
        closeEditStudentModal();
        closeDeleteConfirmModal();
        closeCameraModal();
        closeBorrowModal();
      }
    });
  });

  // Keyboard Escape
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (!elements.loginModal.classList.contains('hidden')) closeLoginModal();
      if (!elements.editStudentModal.classList.contains('hidden')) closeEditStudentModal();
      if (!elements.deleteConfirmModal.classList.contains('hidden')) closeDeleteConfirmModal();
      if (!elements.cameraModal.classList.contains('hidden')) closeCameraModal();
      if (!elements.borrowFlowModal.classList.contains('hidden')) closeBorrowModal();
      closeBookCard();
    }
  });

  // Network state
  window.addEventListener('offline', () => {
    stopAutoRefresh();
    setConnectionBadge('Offline', 'status-error');
    showToast('Network connection lost.', true);
  });
  window.addEventListener('online', () => {
    startAutoRefresh();
    loadDashboardData().catch(console.error);
    showToast('Network reconnected.');
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoRefresh();
    } else {
      startAutoRefresh();
      loadDashboardData().catch(console.error);
    }
  });
}

// ─── Initialization ───────────────────────────────────────────────────────────

async function initializeDashboard() {
  bindEvents();
  elements.appShell.classList.remove('hidden');

  const wasAuthenticated = sessionStorage.getItem('library-dashboard-auth') === '1';
  setAuthenticated(wasAuthenticated);

  try {
    await loadDashboardData();
    startAutoRefresh();
  } catch (error) {
    showToast(error.message, true);
  }
}

initializeDashboard().catch((error) => {
  console.error(error);
  showToast('Failed to initialize dashboard.', true);
});