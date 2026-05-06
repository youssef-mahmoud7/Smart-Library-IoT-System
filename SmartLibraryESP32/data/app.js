
// Central frontend configuration. The page is expected to be served by the ESP32,
// so the API base stays empty and all requests go to the same local host.
const APP_CONFIG = {
  apiBase: "",
  refreshIntervalMs: 5000,
};

const STORAGE_KEYS = {
  theme: "library-dashboard-theme",
  language: "library-dashboard-language",
  historyDownload: "library-dashboard-history-download",
};

const HISTORY_WINDOW_DAYS = 30;
const AUTO_DOWNLOAD_AFTER_DAYS = 29;
const RFID_SCAN_POLL_MS = 3000;

const THEME_ICONS = {
  light: "M21 12.79A9 9 0 0 1 11.21 3a1 1 0 0 0-1.22 1.22A7 7 0 1 0 19.78 14a1 1 0 0 0 1.22-1.21Z",
  dark: "M12 2a1 1 0 0 1 1 1v1.05a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 16a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Zm10-7a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM4 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h1Zm15.07-6.07a1 1 0 0 1 1.41 1.41l-.74.74a1 1 0 0 1-1.41-1.41l.74-.74ZM6.08 17.92a1 1 0 0 1 1.41 1.41l-.74.74a1 1 0 0 1-1.41-1.41l.74-.74Zm13.66 2.15a1 1 0 0 1-1.41 0l-.74-.74A1 1 0 0 1 19 17.92l.74.74a1 1 0 0 1 0 1.41ZM7.49 6.08a1 1 0 0 1 0 1.41l-.74.74a1 1 0 1 1-1.41-1.41l.74-.74a1 1 0 0 1 1.41 0ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z",
};

const translations = {
  ar: {
    pageTitle: "لوحة المكتبة الذكية",
    navPrimary: "التنقل الرئيسي",
    navDashboard: "الرئيسية",
    navStudents: "الطلاب",
    navBooks: "الكتب",
    navLogs: "السجلات",
    navActions: "الإجراءات",
    publicView: "العرض العام",
    liveLibraryOpen: "حالة المكتبة المباشرة متاحة للجميع.",
    publicNoticeCopy: "استخدم زر المشرف لفتح الطلاب والكتب والسجلات وأدوات المسح.",
    accessPoint: "نقطة الوصول",
    localAddress: "العنوان المحلي",
    menu: "القائمة",
    realtimeMonitoring: "مراقبة لحظية",
    smartLibrary: "المكتبة الذكية",
    topbarCopy: "راقب مستوى الازدحام ودخول الطلاب والكتب.",
    refreshNow: "تحديث الآن",
    refreshingNow: "جارٍ التحديث…",
    adminLogin: "دخول المشرف",
    admin: "مشرف",
    administrator: "المسؤول",
    logout: "تسجيل الخروج",
    crowdStatus: "حالة الازدحام",
    unknown: "غير معروف",
    waitingForData: "بانتظار البيانات",
    crowdCardCopy: "يتم احتساب الازدحام من عدد الأشخاص الموجودين حالياً داخل المكتبة.",
    peopleCount: "عدد الأشخاص",
    peopleCountCopy: "العدد الحالي للأشخاص داخل منطقة القراءة.",
    studentsInside: "الطلاب بالداخل",
    studentsInsideCopy: "الطلاب الذين تم تسجيل حضورهم بعد مسح RFID بنجاح.",
    bookRecords: "سجلات الكتب",
    bookRecordsCopy: "إجمالي الكتب المخزنة محلياً على النظام.",
    systemHealth: "صحة النظام",
    esp32Status: "حالة ESP32",
    neverSynced: "لم تتم المزامنة بعد",
    freeHeap: "الذاكرة الحرة",
    storageUsed: "التخزين المستخدم",
    serverState: "حالة الخادم",
    uptime: "مدة التشغيل",
    recentActivity: "أحدث النشاطات",
    liveFeed: "البث المباشر",
    rfidAttendance: "حضور RFID",
    students: "الطلاب",
    searchStudents: "ابحث بالرقم أو الاسم...",
    searchStudentsAria: "ابحث في الطلاب",
    recordsCount: "{count} سجل",
    id: "الرقم",
    name: "الاسم",
    status: "الحالة",
    entryTime: "وقت الدخول",
    exitTime: "وقت الخروج",
    actions: "الإجراءات",
    barcodeInventory: "مخزون الباركود",
    books: "الكتب",
    searchBooks: "ابحث بالعنوان أو المؤلف أو الكود...",
    searchBooksAria: "ابحث في الكتب",
    addBookByCamera: "إضافة كتاب بالكاميرا",
    scanBook: "مسح كتاب",
    borrowABook: "📖 استعارة كتاب",
    booksCount: "{count} كتاب",
    loadingBookshelf: "جارٍ تحميل رف الكتب...",
    localEventHistory: "سجل الأحداث المحلي",
    logs: "السجلات",
    eventsCount: "{count} حدث",
    time: "الوقت",
    type: "النوع",
    message: "الرسالة",
    manualTestTool: "أداة اختبار يدوية",
    rfidTransaction: "عملية RFID",
    studentId: "رقم الطالب",
    studentName: "اسم الطالب",
    action: "الإجراء",
    toggleEntryExit: "تبديل دخول / خروج",
    forceEntry: "فرض دخول",
    forceExit: "فرض خروج",
    sendRfidScan: "إرسال مسح RFID",
    rfidHelp: "يرسل JSON إلى <code>/rfid</code> ويحدث الجداول المحلية بعد النجاح.",
    barcodeTransaction: "عملية الباركود",
    bookCode: "كود الكتاب",
    bookTitle: "عنوان الكتاب",
    author: "المؤلف",
    checkStatus: "فحص الحالة",
    addBookAction: "إضافة كتاب",
    borrowBookAction: "استعارة كتاب",
    returnBook: "إرجاع كتاب",
    holderStudentId: "رقم الطالب المستعير",
    optionalBorrowReturn: "اختياري للاستعارة / الإرجاع",
    sendBarcodeScan: "إرسال مسح الباركود",
    barcodeHelp: "يرسل JSON إلى <code>/barcode</code> لعمليات الفحص والإضافة والاستعارة والإرجاع.",
    adminAccess: "دخول المشرف",
    unlockDashboardControls: "فتح أدوات لوحة التحكم",
    loginText: "يمكن للمستخدم العام رؤية حالة المكتبة. دخول المشرف يفتح سجلات الطلاب والكتب والسجلات وأدوات المسح.",
    defaultUsername: "اسم المستخدم الافتراضي",
    defaultPassword: "كلمة المرور الافتراضية",
    username: "اسم المستخدم",
    enterAdminUsername: "أدخل اسم مستخدم المشرف",
    password: "كلمة المرور",
    enterPassword: "أدخل كلمة المرور",
    unlockDashboard: "فتح اللوحة",
    closeAdminLogin: "إغلاق تسجيل دخول المشرف",
    addNewBook: "إضافة كتاب جديد",
    step1ScanBarcode: "الخطوة 1: امسح باركود الكتاب (إلزامي)",
    barcodeScannedCaptureCover: "تم مسح الباركود بنجاح. الآن التقط صورة الغلاف.",
    captureCover: "التقط الغلاف",
    retake: "إعادة الالتقاط",
    bookCodeAutofilled: "كود الكتاب (تعبئة تلقائية)",
    title: "العنوان",
    saveToEsp32: "حفظ في ESP32 وبطاقة SD",
    editStudentName: "تعديل اسم الطالب",
    fullName: "الاسم الكامل",
    studentNamePlaceholder: "اسم الطالب",
    saveChanges: "حفظ التغييرات",
    confirmDeletion: "تأكيد الحذف",
    delete: "حذف",
    cancel: "إلغاء",
    borrowFlowTitle: "استعارة كتاب",
    step1EnterBookOrScan: "الخطوة 1: أدخل كود الكتاب أو امسح الباركود",
    openCameraToScan: "فتح الكاميرا للمسح",
    nextScanRfid: "التالي: مسح RFID",
    useNationalId: "استخدام الرقم القومي",
    step2ScanRfid: "الخطوة 2: امسح بطاقة RFID الخاصة بالطالب",
    step2EnterNationalId: "الخطوة 2: أدخل الرقم القومي للطالب",
    studentIdRfid: "رقم الطالب (RFID)",
    nationalId: "الرقم القومي",
    borrowStudentPlaceholder: "امسح أو أدخل رقم الطالب",
    nationalIdPlaceholder: "أدخل الرقم القومي المكون من 14 رقماً",
    exampleStu1001: "مثال: STU-1001",
    exampleAhmedHassan: "مثال: احمد حسن",
    exampleBk2001: "مثال: BK-2001",
    exampleEmbeddedSystemsBasics: "مثال: أساسيات الأنظمة المدمجة",
    exampleANaguib: "مثال: أ. نجيب",
    exampleBk01: "مثال: BK-01",
    exampleEmbeddedSystems: "مثال: الأنظمة المدمجة",
    authorNamePlaceholder: "اسم المؤلف",
    back: "رجوع",
    confirmBorrow: "تأكيد الاستعارة",
    borrowSuccessful: "تمت الاستعارة بنجاح!",
    done: "تم",
    switchToDarkMode: "التبديل إلى الوضع الداكن",
    switchToLightMode: "التبديل إلى الوضع الفاتح",
    switchToEnglish: "التبديل إلى الإنجليزية",
    switchToArabic: "التبديل إلى العربية",
    themeDarkLabel: "داكن",
    themeLightLabel: "فاتح",
    languageShortAr: "AR",
    languageShortEn: "EN",
    statusDisconnected: "غير متصل",
    statusConnected: "متصل",
    statusPartial: "جزئي",
    statusSyncing: "جارٍ المزامنة",
    statusOffline: "غير متصل بالشبكة",
    statusEmpty: "فارغ",
    statusModerate: "متوسط",
    statusCrowded: "مزدحم",
    statusInside: "داخل",
    statusOutside: "خارج",
    statusAvailable: "متاح",
    statusBorrowed: "مستعار",
    statusReturned: "مُعاد",
    statusIdle: "خامل",
    lastSync: "آخر مزامنة: {time}",
    noActivity: "لا يوجد نشاط مسجل حتى الآن.",
    noStudentsFound: "لا يوجد طلاب يطابقون البحث.",
    noLogsAvailable: "لا توجد سجلات متاحة من استجابة حالة ESP32.",
    noBooksFound: "لا توجد كتب تطابق البحث.",
    shelfLabel: "الرف {number}",
    availableDot: "● متاح",
    borrowedDot: "● مستعار",
    currentlyBorrowed: "مستعار حالياً",
    holderLabel: "المستعير: {holder}",
    byAuthor: "بقلم {author}",
    connectedToast: "تم تحديث لوحة التحكم.",
    adminUnlocked: "تم فتح لوحة المشرف.",
    adminLocked: "تم قفل أدوات المشرف.",
    bothUsernamePasswordRequired: "اسم المستخدم وكلمة المرور مطلوبان.",
    invalidAdminCredentials: "بيانات دخول المشرف غير صحيحة.",
    unableToReachServer: "تعذر الوصول إلى الخادم المحلي لـ ESP32.",
    loadedWithMissing: "تم التحميل مع فقدان: {items}.",
    missingStatus: "الحالة",
    missingStudents: "الطلاب",
    gender : "النوع",
    missingBooks: "الكتب",
    sectionAdminRequired: "يتطلب هذا القسم تسجيل دخول المشرف.",
    barcodeScanned: "تم مسح الباركود: {code}",
    scanOrEnterBookBarcode: "يرجى مسح باركود الكتاب أو إدخاله.",
    bookNotFound: "الكتاب غير موجود في نظام المكتبة.",
    bookAlreadyBorrowed: "هذا الكتاب مستعار بالفعل من شخص آخر.",
    scanStudentRfid: "يرجى مسح بطاقة RFID الخاصة بالطالب.",
    processingRequest: "جارٍ معالجة الطلب...",
    borrowResult: "تمت استعارة \"{title}\" بنجاح للرقم: {id}.",
    fallbackBookTitle: "الكتاب",
    borrowFailed: "فشلت الاستعارة: {message}",
    iphoneFlashlightTip: "نصيحة: في iPhone يمكنك تشغيل المصباح من مركز التحكم إذا كانت الإضاءة منخفضة.",
    cameraAccessDenied: "تم رفض الوصول إلى الكاميرا. لا يمكن التقاط صورة الغلاف.",
    cameraFileModeWarning: "تنبيه: المتصفح يمنع تشغيل الكاميرا لأنك تفتح الملف مباشرة من الكمبيوتر (file://).\nيجب تشغيله عبر Live Server أو رفعه على ESP32.",
    cameraStartError: "حدث خطأ أثناء تشغيل الكاميرا: {message}",
    cameraLibraryMissingAlert: "خطأ: ملف مكتبة الكاميرا غير موجود أو لم يتم ربطه بشكل صحيح في الصفحة.",
    barcodeAndTitleRequired: "الباركود والعنوان مطلوبان.",
    barcodeLibraryMissing: "مكتبة الباركود غير محملة.",
    uploading: "جارٍ الرفع...",
    savingCover: "جارٍ حفظ الغلاف على بطاقة SD...",
    bookAndCoverAdded: "تمت إضافة الكتاب والغلاف بنجاح.",
    genericFailed: "فشل التنفيذ: {message}",
    nameCannotBeEmpty: "لا يمكن أن يكون الاسم فارغاً.",
    studentUpdated: "تم تحديث الطالب.",
    updateFailed: "فشل التحديث: {message}",
    removeStudentMessage: "هل أنت متأكد من حذف \"{name}\"؟",
    studentDeleted: "تم حذف الطالب.",
    deleteFailed: "فشل الحذف: {message}",
    adminLoginRequired: "مطلوب تسجيل دخول المشرف.",
    studentIdRequired: "رقم الطالب مطلوب.",
    sending: "جارٍ الإرسال…",
    rfidStored: "تم حفظ عملية RFID.",
    bookCodeRequired: "كود الكتاب مطلوب.",
    barcodeStored: "تم حفظ عملية الباركود.",
    networkLost: "تم فقد الاتصال بالشبكة.",
    networkRestored: "تمت إعادة الاتصال بالشبكة.",
    initFailed: "فشل تهيئة لوحة التحكم.",
    unknownStudent: "طالب غير معروف",
    untitledBook: "كتاب بدون عنوان",
    unknownAuthor: "مؤلف غير معروف",
    noDetails: "لا توجد تفاصيل",
    rfidStudentRegistry: "\u0633\u062c\u0644 \u0637\u0644\u0627\u0628 RFID",
    scannedStudent: "\u0627\u0644\u0637\u0627\u0644\u0628 \u0627\u0644\u0645\u0645\u0633\u0648\u062d",
    readScannedUid: "\u0642\u0631\u0627\u0621\u0629 UID \u0627\u0644\u0645\u0645\u0633\u0648\u062d",
    waitingForNextScan: "\u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0645\u0633\u062d RFID \u0627\u0644\u062a\u0627\u0644\u064a.",
    noUidDetected: "\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u062a\u0642\u0627\u0637 UID \u0628\u0639\u062f.",
    scannedUidReady: "\u062a\u0645 \u0627\u0644\u062a\u0642\u0627\u0637 UID: {uid}",
    scannedExistingStudent: "\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0637\u0627\u0644\u0628 \u0645\u0633\u062c\u0644 \u0645\u0633\u0628\u0642\u0627\u064b.",
    scannedNewStudent: "\u0647\u0630\u0627 UID \u062c\u062f\u064a\u062f. \u0623\u062f\u062e\u0644 \u0627\u0644\u0627\u0633\u0645 \u0648\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0642\u0648\u0645\u064a \u062b\u0645 \u0627\u062d\u0641\u0638 \u0627\u0644\u0637\u0627\u0644\u0628.",
    saveStudent: "\u062d\u0641\u0638 \u0627\u0644\u0637\u0627\u0644\u0628",
    editStudent: "\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0637\u0627\u0644\u0628",
    lastSeen: "\u0622\u062e\u0631 \u0638\u0647\u0648\u0631",
    studentSaved: "\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0637\u0627\u0644\u0628.",
    scanUidFirst: "\u064a\u0631\u062c\u0649 \u0645\u0633\u062d UID \u0623\u0648\u0644\u0627\u064b.",
    nationalIdRequired: "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0642\u0648\u0645\u064a \u0645\u0637\u0644\u0648\u0628.",
    invalidNationalId: "\u0623\u062f\u062e\u0644 \u0631\u0642\u0645\u0627\u064b \u0642\u0648\u0645\u064a\u0627\u064b \u0635\u062d\u064a\u062d\u0627\u064b.",
    duplicateUid: "\u0647\u0630\u0627 UID \u0645\u0633\u062c\u0644 \u0645\u0633\u0628\u0642\u0627\u064b.",
    noNewScanDetected: "\u0644\u0627 \u064a\u0648\u062c\u062f UID \u062c\u062f\u064a\u062f \u0644\u0644\u0645\u0633\u062d.",
    historyName: "\u0627\u0633\u0645 \u0627\u0644\u0637\u0627\u0644\u0628",
    historyUid: "UID",
    historyAction: "\u0627\u0644\u062d\u0631\u0643\u0629",
    historyEntry: "\u062f\u062e\u0648\u0644",
    historyExit: "\u062e\u0631\u0648\u062c",
    downloadExcelLast30Days: "\u062a\u062d\u0645\u064a\u0644 Excel (\u0622\u062e\u0631 30 \u064a\u0648\u0645\u0627\u064b)",
    historyDownloaded: "\u062a\u0645 \u062a\u062d\u0645\u064a\u0644 \u0645\u0644\u0641 Excel.",
    noHistoryData: "\u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a \u0645\u062a\u0627\u062d\u0629.",
    excelLibraryMissing: "\u0645\u0643\u062a\u0628\u0629 Excel \u063a\u064a\u0631 \u0645\u062d\u0645\u0644\u0629.",
    scanRfidFailed: "\u0641\u0634\u0644 \u0642\u0631\u0627\u0621\u0629 RFID: {message}",
    noBorrowerShown: "",
  },
  en: {
    pageTitle: "Smart Library Dashboard",
    navPrimary: "Primary",
    navDashboard: "Dashboard",
    navStudents: "Students",
    navBooks: "Books",
    navLogs: "Logs",
    navActions: "Actions",
    publicView: "Public View",
    liveLibraryOpen: "Live library status is open.",
    publicNoticeCopy: "Use the admin button to unlock student, books, logs, and scanner controls.",
    accessPoint: "Access Point",
    localAddress: "Local Address",
    menu: "Menu",
    realtimeMonitoring: "Real-time Monitoring",
    smartLibrary: "Smart Library",
    refreshNow: "Refresh Now",
    refreshingNow: "Refreshing…",
    adminLogin: "Admin login",
    admin: "Admin",
    administrator: "Administrator",
    logout: "Logout",
    crowdStatus: "Crowd Status",
    unknown: "Unknown",
    waitingForData: "Waiting for data",
    crowdCardCopy: "The crowd state is derived from the current people count inside the library.",
    peopleCount: "People Count",
    peopleCountCopy: "Current number of people detected inside the reading area.",
    studentsInside: "Students Inside",
    studentsInsideCopy: "Students marked as present after successful RFID entry scans.",
    bookRecords: "Book Records",
    bookRecordsCopy: "Total locally stored books tracked on the System.",
    systemHealth: "System Health",
    esp32Status: "ESP32 Status",
    neverSynced: "Never synced",
    freeHeap: "Free Heap",
    storageUsed: "Storage Used",
    serverState: "Server State",
    uptime: "Uptime",
    recentActivity: "Recent Activity",
    liveFeed: "Live Feed",
    rfidAttendance: "RFID Attendance",
    students: "Students",
    searchStudents: "Search ID or Name...",
    searchStudentsAria: "Search students",
    recordsCount: "{count} records",
    id: "ID",
    name: "Name",
    status: "Status",
    entryTime: "Entry Time",
    exitTime: "Exit Time",
    actions: "Actions",
    barcodeInventory: "Barcode Inventory",
    books: "Books",
    searchBooks: "Search Title, Author, Code...",
    searchBooksAria: "Search books",
    addBookByCamera: "Add book via camera",
    scanBook: "Scan Book",
    borrowABook: "📖 Borrow a Book",
    booksCount: "{count} books",
    loadingBookshelf: "Loading bookshelf...",
    localEventHistory: "Local Event History",
    logs: "Logs",
    eventsCount: "{count} events",
    time: "Time",
    gender :"Gender",
    type: "Type",
    message: "Message",
    manualTestTool: "Manual Test Tool",
    rfidTransaction: "RFID Transaction",
    studentId: "Student ID",
    studentName: "Student Name",
    action: "Action",
    toggleEntryExit: "Toggle Entry / Exit",
    forceEntry: "Force Entry",
    forceExit: "Force Exit",
    sendRfidScan: "Send RFID Scan",
    rfidHelp: "Posts JSON to <code>/rfid</code> and refreshes the local tables after success.",
    barcodeTransaction: "Barcode Transaction",
    bookCode: "Book Code",
    bookTitle: "Book Title",
    author: "Author",
    checkStatus: "Check Status",
    addBookAction: "Add Book",
    borrowBookAction: "Borrow Book",
    returnBook: "Return Book",
    holderStudentId: "Holder Student ID",
    optionalBorrowReturn: "Optional for borrow / return",
    sendBarcodeScan: "Send Barcode Scan",
    barcodeHelp: "Posts JSON to <code>/barcode</code> for lookup, add, borrow, or return operations.",
    adminAccess: "Admin Access",
    unlockDashboardControls: "Unlock Dashboard Controls",
    loginText: "Public users can view the library status. Admin login unlocks student records, books, logs, and scan actions.",
    defaultUsername: "Default Username",
    defaultPassword: "Default Password",
    username: "Username",
    enterAdminUsername: "Enter admin username",
    password: "Password",
    enterPassword: "Enter password",
    unlockDashboard: "Unlock Dashboard",
    closeAdminLogin: "Close admin login",
    addNewBook: "Add New Book",
    step1ScanBarcode: "Step 1: Scan the book's barcode (Mandatory)",
    barcodeScannedCaptureCover: "Barcode scanned successfully. Now, capture the cover.",
    captureCover: "Capture Cover",
    retake: "Retake",
    bookCodeAutofilled: "Book Code (Auto-filled)",
    title: "Title",
    saveToEsp32: "Save to ESP32 & SD Card",
    editStudentName: "Edit Student Name",
    fullName: "Full Name",
    studentNamePlaceholder: "Student name",
    saveChanges: "Save Changes",
    confirmDeletion: "Confirm Deletion",
    delete: "Delete",
    cancel: "Cancel",
    borrowFlowTitle: "Borrow a Book",
    step1EnterBookOrScan: "Step 1: Enter book code or scan barcode",
    openCameraToScan: "Open Camera to Scan",
    nextScanRfid: "Next: Scan RFID",
    useNationalId: "Use National ID",
    step2ScanRfid: "Step 2: Scan your student RFID card",
    step2EnterNationalId: "Step 2: Enter student National ID",
    studentIdRfid: "Student ID (RFID)",
    nationalId: "National ID",
    borrowStudentPlaceholder: "Scan or enter student ID",
    nationalIdPlaceholder: "Enter 14-digit National ID",
    exampleStu1001: "Example: STU-1001",
    exampleAhmedHassan: "Example: Ahmed Hassan",
    exampleBk2001: "Example: BK-2001",
    exampleEmbeddedSystemsBasics: "Example: Embedded Systems Basics",
    exampleANaguib: "Example: A. Naguib",
    exampleBk01: "Example: BK-01",
    exampleEmbeddedSystems: "Example: Embedded Systems",
    authorNamePlaceholder: "Author name",
    back: "Back",
    confirmBorrow: "Confirm Borrow",
    borrowSuccessful: "Borrow successful!",
    done: "Done",
    switchToDarkMode: "Switch to dark mode",
    switchToLightMode: "Switch to light mode",
    switchToEnglish: "Switch language to English",
    switchToArabic: "Switch language to Arabic",
    themeDarkLabel: "Dark",
    themeLightLabel: "Light",
    languageShortAr: "AR",
    languageShortEn: "EN",
    statusDisconnected: "Disconnected",
    statusConnected: "Connected",
    statusPartial: "Partial",
    statusSyncing: "Syncing",
    statusOffline: "Offline",
    statusEmpty: "Empty",
    statusModerate: "Moderate",
    statusCrowded: "Crowded",
    statusInside: "Inside",
    statusOutside: "Outside",
    statusAvailable: "Available",
    statusBorrowed: "Borrowed",
    statusReturned: "Returned",
    statusIdle: "Idle",
    lastSync: "Last sync: {time}",
    noActivity: "No activity has been recorded yet.",
    noStudentsFound: "No students found matching your search.",
    noLogsAvailable: "No logs available from the ESP32 status response.",
    noBooksFound: "No books match your search.",
    shelfLabel: "Shelf {number}",
    availableDot: "● Available",
    borrowedDot: "● Borrowed",
    currentlyBorrowed: "Currently borrowed",
    holderLabel: "Holder: {holder}",
    byAuthor: "by {author}",
    connectedToast: "Dashboard refreshed.",
    adminUnlocked: "Admin dashboard unlocked.",
    adminLocked: "Admin controls locked.",
    bothUsernamePasswordRequired: "Both username and password are required.",
    invalidAdminCredentials: "Invalid admin credentials.",
    unableToReachServer: "Unable to reach the ESP32 local server.",
    loadedWithMissing: "Loaded with missing: {items}.",
    missingStatus: "status",
    missingStudents: "students",
    missingBooks: "books",
    sectionAdminRequired: "Admin login is required for that section.",
    barcodeScanned: "Barcode Scanned: {code}",
    scanOrEnterBookBarcode: "Please scan or enter a book barcode.",
    bookNotFound: "Book not found in the library system.",
    bookAlreadyBorrowed: "This book is already borrowed by someone else.",
    scanStudentRfid: "Please scan your student RFID card.",
    processingRequest: "Processing request...",
    borrowResult: "\"{title}\" has been borrowed successfully to ID: {id}.",
    fallbackBookTitle: "The Book",
    borrowFailed: "Borrow failed: {message}",
    iphoneFlashlightTip: "Tip: On iPhone, swipe down to turn on your flashlight from the Control Center if it's dark.",
    cameraAccessDenied: "Camera access denied. Cannot take cover photo.",
    cameraFileModeWarning: "Warning: the browser blocks camera access when the file is opened directly from the computer (file://).\nUse Live Server or host it on the ESP32.",
    cameraStartError: "An error occurred while starting the camera: {message}",
    cameraLibraryMissingAlert: "Error: the camera library file is missing or not linked correctly in the page.",
    barcodeAndTitleRequired: "Barcode and Title are required.",
    barcodeLibraryMissing: "Barcode library not loaded!",
    uploading: "Uploading...",
    savingCover: "Saving Cover to SD Card...",
    bookAndCoverAdded: "Book and Cover added successfully.",
    genericFailed: "Failed: {message}",
    nameCannotBeEmpty: "Name cannot be empty.",
    studentUpdated: "Student updated.",
    updateFailed: "Update failed: {message}",
    removeStudentMessage: "Are you sure you want to remove \"{name}\"?",
    studentDeleted: "Student deleted.",
    deleteFailed: "Delete failed: {message}",
    adminLoginRequired: "Admin login required.",
    studentIdRequired: "Student ID required.",
    sending: "Sending…",
    rfidStored: "RFID transaction stored.",
    bookCodeRequired: "Book code required.",
    barcodeStored: "Barcode transaction stored.",
    networkLost: "Network connection lost.",
    networkRestored: "Network reconnected.",
    initFailed: "Failed to initialize dashboard.",
    unknownStudent: "Unknown Student",
    untitledBook: "Untitled Book",
    unknownAuthor: "Unknown Author",
    noDetails: "No details",
    rfidStudentRegistry: "RFID Student Registry",
    scannedStudent: "Scanned Student",
    readScannedUid: "Read Scanned UID",
    waitingForNextScan: "Waiting for the next RFID scan.",
    noUidDetected: "No UID detected yet.",
    scannedUidReady: "UID captured: {uid}",
    scannedExistingStudent: "Existing student found for this UID.",
    scannedNewStudent: "This UID is new. Enter the student name and national ID, then save.",
    saveStudent: "Save Student",
    editStudent: "Edit Student",
    lastSeen: "Last Seen",
    studentSaved: "Student saved.",
    scanUidFirst: "Scan a UID first.",
    nationalIdRequired: "National ID is required.",
    invalidNationalId: "Enter a valid National ID.",
    duplicateUid: "This UID already exists.",
    noNewScanDetected: "No new RFID scan is available.",
    historyName: "Student Name",
    historyUid: "UID",
    historyAction: "Action",
    historyEntry: "Entry",
    historyExit: "Exit",
    downloadExcelLast30Days: "Download Excel (Last 30 Days)",
    historyDownloaded: "Excel file downloaded.",
    noHistoryData: "No data available",
    excelLibraryMissing: "Excel library not loaded.",
    scanRfidFailed: "RFID scan failed: {message}",
    noBorrowerShown: "",
  },
};

const state = {
  status: null,
  students: [],
  books: [],
  logs: [],
  historyLogs: [],
  refreshTimer: null,
  rfidScanTimer: null,
  isFetching: false,   // guard against overlapping fetches
  isPollingRfid: false,
  connectionStatus: "Disconnected",
  hasLoaded: false,
  theme: document.documentElement.dataset.theme || "light",
  language: document.documentElement.dataset.language || "ar",
  borrowInputMode: "rfid",
  selectedStudent: null,
  lastRfidFingerprint: "",
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
  // أضف هذه الأسطر داخل const elements = { ... };
  editBookModal: document.getElementById("editBookModal"),
  closeEditBookModalBtn: document.getElementById("closeEditBookModalBtn"),
  editBookForm: document.getElementById("editBookForm"),
  editBookCode: document.getElementById("editBookCode"),
  editBookTitle: document.getElementById("editBookTitle"),
  editBookAuthor: document.getElementById("editBookAuthor"),
  editBookError: document.getElementById("editBookError"),
  studentSearchInput: document.getElementById("studentSearchInput"),
  bookSearchInput: document.getElementById("bookSearchInput"),
  appShell: document.getElementById("appShell"),
  loginForm: document.getElementById("loginForm"),
  loginError: document.getElementById("loginError"),
  usernameInput: document.getElementById("usernameInput"),
  passwordInput: document.getElementById("passwordInput"),
  refreshButton: document.getElementById("refreshButton"),
  themeToggleButton: document.getElementById("themeToggleButton"),
  themeToggleLabel: document.getElementById("themeToggleLabel"),
  themeToggleIcon: document.getElementById("themeToggleIcon"),
  languageToggleButton: document.getElementById("languageToggleButton"),
  languageToggleLabel: document.getElementById("languageToggleLabel"),
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
  studentRegistryForm: document.getElementById("studentRegistryForm"),
  studentRegistryStatus: document.getElementById("studentRegistryStatus"),
  studentRegistryError: document.getElementById("studentRegistryError"),
  studentGenderInput: document.getElementById("studentGenderInput"),
  studentUidInput: document.getElementById("studentUidInput"),
  studentRegistryNameInput: document.getElementById("studentRegistryNameInput"),
  studentNationalIdInput: document.getElementById("studentNationalIdInput"),
  studentLastSeenInput: document.getElementById("studentLastSeenInput"),
  scanRfidButton: document.getElementById("scanRfidButton"),
  saveStudentButton: document.getElementById("saveStudentButton"),
  updateStudentButton: document.getElementById("updateStudentButton"),
  deleteStudentButton: document.getElementById("deleteStudentButton"),
  bookTableMeta: document.getElementById("bookTableMeta"),
  bookShelfMeta: document.getElementById("bookShelfMeta"),
  logsTableMeta: document.getElementById("logsTableMeta"),
  downloadHistoryButton: document.getElementById("downloadHistoryButton"),
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
  editStudentUid: document.getElementById("editStudentUid"),
  editStudentName: document.getElementById("editStudentName"),
  editStudentNationalId: document.getElementById("editStudentNationalId"),
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

function parseDateValue(value) {
  if (!value || value === "-") return null;
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
  const normalized = String(value).trim();
  if (!normalized) return null;
  const nativeDate = new Date(normalized);
  if (!Number.isNaN(nativeDate.getTime())) return nativeDate;
  const fallbackMatch = normalized.match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})(?::(\d{2}))?$/);
  if (!fallbackMatch) return null;
  const [, year, month, day, hour, minute, second = "00"] = fallbackMatch;
  const parsed = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second));
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatDateTimeCompact(value) {
  const date = parseDateValue(value) ?? new Date();
  const pad = (part) => String(part).padStart(2, "0");
  return [
    date.getFullYear(),
    pad(date.getMonth() + 1),
    pad(date.getDate()),
  ].join("-") + ` ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function isWithinLastDays(value, days) {
  const date = parseDateValue(value);
  if (!date) return false;
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
  return date.getTime() >= cutoff;
}

function sortByNewest(items, getValue) {
  return [...items].sort((left, right) => {
    const leftTime = parseDateValue(getValue(left))?.getTime() ?? 0;
    const rightTime = parseDateValue(getValue(right))?.getTime() ?? 0;
    return rightTime - leftTime;
  });
}

function toTitleCase(text) {
  return normalizeText(text, "Unknown")
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function isAuthenticated() {
  return document.body.classList.contains("authenticated");
}

function t(key, variables = {}) {
  const dictionary = translations[state.language] ?? translations.ar;
  const fallback = translations.en ?? {};
  let template = dictionary[key] ?? fallback[key] ?? key;

  return Object.entries(variables).reduce((text, [name, value]) => {
    return text.replaceAll(`{${name}}`, value);
  }, template);
}

function getLocale() {
  return state.language === "ar" ? "ar-EG" : "en-US";
}

function translateFallbackText(value) {
  const normalized = normalizeText(value, "");
  if (normalized === "Unknown Student") return t("unknownStudent");
  if (normalized === "Untitled Book") return t("untitledBook");
  if (normalized === "Unknown Author") return t("unknownAuthor");
  if (normalized === "No details") return t("noDetails");
  return normalized;
}

function translateStatusLabel(label) {
  const normalized = normalizeText(label, "").toLowerCase();
  if (normalized === "connected") return t("statusConnected");
  if (normalized === "disconnected") return t("statusDisconnected");
  if (normalized === "partial") return t("statusPartial");
  if (normalized === "syncing" || normalized === "syncing…") return t("statusSyncing");
  if (normalized === "offline") return t("statusOffline");
  if (normalized === "empty") return t("statusEmpty");
  if (normalized === "moderate") return t("statusModerate");
  if (normalized === "crowded") return t("statusCrowded");
  if (normalized === "inside") return t("statusInside");
  if (normalized === "outside") return t("statusOutside");
  if (normalized === "available") return t("statusAvailable");
  if (normalized === "borrowed") return t("statusBorrowed");
  if (normalized === "returned") return t("statusReturned");
  if (normalized === "entry") return t("historyEntry");
  if (normalized === "exit") return t("historyExit");
  if (normalized === "idle") return t("statusIdle");
  if (normalized === "unknown") return t("unknown");
  return translateFallbackText(label);
}

function setTextContent(selector, key, variables) {
  const element = document.querySelector(selector);
  if (element) element.textContent = t(key, variables);
}

function setInnerHtml(selector, key, variables) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = t(key, variables);
}

function setAttributeText(selector, attribute, key, variables) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute(attribute, t(key, variables));
}

function updateThemeToggleButton() {
  if (!elements.themeToggleButton) return;
  const isDark = state.theme === "dark";
  const nextTheme = isDark ? "light" : "dark";
  elements.themeToggleButton.setAttribute("aria-pressed", String(isDark));
  elements.themeToggleButton.setAttribute("aria-label", t(nextTheme === "dark" ? "switchToDarkMode" : "switchToLightMode"));
  if (elements.themeToggleLabel) {
    elements.themeToggleLabel.textContent = t(nextTheme === "dark" ? "themeDarkLabel" : "themeLightLabel");
  }
  if (elements.themeToggleIcon) {
    elements.themeToggleIcon.querySelector("path")?.setAttribute("d", THEME_ICONS[state.theme]);
  }
}

function updateLanguageToggleButton() {
  if (!elements.languageToggleButton) return;
  const nextLanguage = state.language === "ar" ? "en" : "ar";
  elements.languageToggleButton.setAttribute("aria-label", t(nextLanguage === "en" ? "switchToEnglish" : "switchToArabic"));
  if (elements.languageToggleLabel) {
    elements.languageToggleLabel.textContent = t(nextLanguage === "en" ? "languageShortEn" : "languageShortAr");
  }
}

function updateBorrowStepLabels(mode = state.borrowInputMode) {
  const step2Hint = elements.borrowStep2?.querySelector(".step-hint");
  const step2Label = elements.borrowStep2?.querySelector(".field span");
  if (!step2Hint || !step2Label || !elements.borrowStudentId) return;

  if (mode === "nid") {
    step2Hint.textContent = t("step2EnterNationalId");
    step2Label.textContent = t("nationalId");
    elements.borrowStudentId.placeholder = t("nationalIdPlaceholder");
  } else {
    step2Hint.textContent = t("step2ScanRfid");
    step2Label.textContent = t("studentIdRfid");
    elements.borrowStudentId.placeholder = t("borrowStudentPlaceholder");
  }
}

function applyStaticTranslations() {
  const isArabic = state.language === "ar";
  document.title = t("pageTitle");
  document.documentElement.lang = state.language;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.body.classList.toggle("lang-ar", isArabic);
  document.body.classList.toggle("lang-en", !isArabic);
  document.body.classList.toggle("ar", isArabic);
  document.body.classList.toggle("en", !isArabic);
  document.querySelector(".sidebar-nav")?.setAttribute("aria-label", t("navPrimary"));

  [
    [".sidebar-nav .nav-link[data-view='dashboardView']", "navDashboard"],
    [".sidebar-nav .nav-link[data-view='studentsView']", "navStudents"],
    [".sidebar-nav .nav-link[data-view='booksView']", "navBooks"],
    [".sidebar-nav .nav-link[data-view='logsView']", "navLogs"],
    [".sidebar-nav .nav-link[data-view='actionsView']", "navActions"],
    ["#publicNotice .meta-label", "publicView"],
    ["#publicNotice strong", "liveLibraryOpen"],
    ["#publicNotice .brand-copy", "publicNoticeCopy"],
    [".sidebar-footer .sidebar-card:nth-child(1) .meta-label", "accessPoint"],
    [".sidebar-footer .sidebar-card:nth-child(2) .meta-label", "localAddress"],
    [".topbar .eyebrow", "realtimeMonitoring"],
    [".topbar h1", "smartLibrary"],
    [".topbar-copy", "topbarCopy"],
    ["#refreshButton", "refreshNow"],
    ["#adminLoginButton span", "admin"],
    ["#adminProfile .admin-label", "admin"],
    ["#logoutButton", "logout"],
    ["#dashboardView .card-grid article:nth-child(1) .meta-label", "crowdStatus"],
    ["#dashboardView .card-grid article:nth-child(1) .card-copy", "crowdCardCopy"],
    ["#dashboardView .card-grid article:nth-child(2) .meta-label", "peopleCount"],
    ["#dashboardView .card-grid article:nth-child(2) .card-copy", "peopleCountCopy"],
    ["#dashboardView .card-grid article:nth-child(3) .meta-label", "studentsInside"],
    ["#dashboardView .card-grid article:nth-child(3) .card-copy", "studentsInsideCopy"],
    ["#dashboardView .card-grid article:nth-child(4) .meta-label", "bookRecords"],
    ["#dashboardView .card-grid article:nth-child(4) .card-copy", "bookRecordsCopy"],
    ["#esp32StatusPanel .panel-head .meta-label", "systemHealth"],
    ["#esp32StatusPanel .panel-head h2", "esp32Status"],
    ["#esp32StatusPanel .health-item:nth-child(1) .meta-label", "freeHeap"],
    ["#esp32StatusPanel .health-item:nth-child(2) .meta-label", "storageUsed"],
    ["#esp32StatusPanel .health-item:nth-child(3) .meta-label", "serverState"],
    ["#esp32StatusPanel .health-item:nth-child(4) .meta-label", "uptime"],
    [".dashboard-grid article:nth-child(2) .panel-head .meta-label", "recentActivity"],
    [".dashboard-grid article:nth-child(2) .panel-head h2", "liveFeed"],
    ["#studentsView .student-registry-panel .meta-label", "rfidStudentRegistry"],
    ["#studentsView .student-registry-panel h2", "scannedStudent"],
    ["#scanRfidButton", "readScannedUid"],
    ["#saveStudentButton", "saveStudent"],
    ["#updateStudentButton", "editStudent"],
    ["#deleteStudentButton", "delete"],
    ["#studentsView > article:nth-child(2) .panel-head .meta-label", "rfidAttendance"],
    ["#studentsView > article:nth-child(2) .panel-head h2", "students"],
    ["#studentsView thead th:nth-child(1)", "historyUid"],
    ["#studentsView thead th:nth-child(2)", "name"],
    ["#studentsView thead th:nth-child(3)", "status"],
    ["#studentsView thead th:nth-child(4)", "entryTime"],
    ["#studentsView thead th:nth-child(5)", "exitTime"],
    ["#studentsView thead th:nth-child(6)", "actions"],
    ["#booksView .panel-head .meta-label", "barcodeInventory"],
    ["#booksView .panel-head h2", "books"],
    ["#cameraAddBookBtn span", "scanBook"],
    ["#publicBorrowBtn span", "borrowABook"],
    ["#logsView .panel-head .meta-label", "localEventHistory"],
    ["#logsView .panel-head h2", "logs"],
    ["#downloadHistoryButton", "downloadExcelLast30Days"],
    ["#logsView thead th:nth-child(1)", "historyName"],
    ["#logsView thead th:nth-child(2)", "nationalId"],
    ["#logsView thead th:nth-child(3)", "historyUid"],
    ["#logsView thead th:nth-child(4)", "time"],
    ["#logsView thead th:nth-child(5)", "historyAction"],
    ["#actionsView .action-grid article:nth-child(1) .panel-head .meta-label", "manualTestTool"],
    ["#actionsView .action-grid article:nth-child(1) .panel-head h2", "rfidTransaction"],
    ["#rfidForm .field:nth-child(1) span", "studentId"],
    ["#rfidForm .field:nth-child(2) span", "studentName"],
    ["#rfidForm .field:nth-child(3) span", "action"],
    ["#rfidSubmitButton", "sendRfidScan"],
    ["#actionsView .action-grid article:nth-child(2) .panel-head .meta-label", "manualTestTool"],
    ["#actionsView .action-grid article:nth-child(2) .panel-head h2", "barcodeTransaction"],
    ["#barcodeForm .field:nth-child(1) span", "bookCode"],
    ["#barcodeForm .field:nth-child(2) span", "bookTitle"],
    ["#barcodeForm .field:nth-child(3) span", "author"],
    ["#barcodeForm .field:nth-child(4) span", "action"],
    ["#barcodeForm .field:nth-child(5) span", "holderStudentId"],
    ["#barcodeSubmitButton", "sendBarcodeScan"],
    ["#loginModal .login-copy .eyebrow", "adminAccess"],
    ["#loginModalTitle", "unlockDashboardControls"],
    ["#loginModal .login-text", "loginText"],
    ["#loginModal .login-meta .meta-item:nth-child(1) .meta-label", "defaultUsername"],
    ["#loginModal .login-meta .meta-item:nth-child(2) .meta-label", "defaultPassword"],
    ["#loginForm .field:nth-child(1) span", "username"],
    ["#loginForm .field:nth-child(2) span", "password"],
    ["#loginForm button[type='submit']", "unlockDashboard"],
    ["#cameraModalTitle", "addNewBook"],
    ["#step1Barcode .camera-hint", "step1ScanBarcode"],
    ["#step2Cover .camera-hint", "barcodeScannedCaptureCover"],
    ["#capturePhotoBtn", "captureCover"],
    ["#retakePhotoBtn", "retake"],
    ["#cameraBookForm .field:nth-child(1) span", "bookCodeAutofilled"],
    ["#cameraBookForm .field:nth-child(2) span", "title"],
    ["#cameraBookForm .field:nth-child(3) span", "author"],
    ["#cameraBookForm button[type='submit']", "saveToEsp32"],
    ["#editStudentModalTitle", "editStudentName"],
    ["#studentRegistryForm .field:nth-child(1) span", "historyUid"],
    ["#studentRegistryForm .field:nth-child(2) span", "studentName"],
    ["#studentRegistryForm .field:nth-child(3) span", "nationalId"],
    ["#studentRegistryForm .field:nth-child(4) span", "gender"],    // <--- هذا هو السطر الجديد للنوع
    ["#studentRegistryForm .field:nth-child(5) span", "lastSeen"],  // <--- تحديث رقم "آخر ظهور" ليصبح 5    ["#editStudentForm .field:nth-child(1) span", "historyUid"],
    ["#editStudentForm .field:nth-child(2) span", "fullName"],
    ["#editStudentForm .field:nth-child(3) span", "nationalId"],
    ["#editStudentForm button[type='submit']", "saveChanges"],
    ["#deleteConfirmModal h3", "confirmDeletion"],
    ["#confirmDeleteBtn", "delete"],
    ["#deleteConfirmModal .modal-actions [data-close-modal='true']", "cancel"],
    ["#borrowFlowTitle", "borrowFlowTitle"],
    ["#borrowStep1 .step-hint", "step1EnterBookOrScan"],
    ["#startScannerBtnLabel", "openCameraToScan"],
    ["#borrowStep1 .field span", "bookCode"],
    ["#nextToStep2", "nextScanRfid"],
    ["#nextToNationalId", "useNationalId"],
    ["#backToStep1", "back"],
    ["#confirmBorrow", "confirmBorrow"],
    ["#borrowStep3 .success-message", "borrowSuccessful"],
    ["#closeBorrowSuccess", "done"],
  ].forEach(([selector, key]) => setTextContent(selector, key));

  [
    ["#rfidForm .form-help", "rfidHelp"],
    ["#barcodeForm .form-help", "barcodeHelp"],
  ].forEach(([selector, key]) => setInnerHtml(selector, key));

  [
    ["#mobileMenuBtn", "aria-label", "menu"],
    ["#adminLoginButton", "aria-label", "adminLogin"],
    ["#adminProfile", "aria-label", "administrator"],
    ["#studentSearchInput", "placeholder", "searchStudents"],
    ["#studentSearchInput", "aria-label", "searchStudentsAria"],
    ["#bookSearchInput", "placeholder", "searchBooks"],
    ["#bookSearchInput", "aria-label", "searchBooksAria"],
    ["#rfidIdInput", "placeholder", "exampleStu1001"],
    ["#rfidNameInput", "placeholder", "exampleAhmedHassan"],
    ["#barcodeCodeInput", "placeholder", "exampleBk2001"],
    ["#barcodeTitleInput", "placeholder", "exampleEmbeddedSystemsBasics"],
    ["#barcodeAuthorInput", "placeholder", "exampleANaguib"],
    ["#barcodeHolderInput", "placeholder", "optionalBorrowReturn"],
    ["#cameraAddBookBtn", "title", "addBookByCamera"],
    ["#closeLoginModalButton", "aria-label", "closeAdminLogin"],
    ["#usernameInput", "placeholder", "enterAdminUsername"],
    ["#passwordInput", "placeholder", "enterPassword"],
    ["#cameraBookTitle", "placeholder", "exampleEmbeddedSystems"],
    ["#cameraBookAuthor", "placeholder", "authorNamePlaceholder"],
    ["#editStudentName", "placeholder", "studentNamePlaceholder"],
    ["#editStudentNationalId", "placeholder", "nationalIdPlaceholder"],
    ["#borrowBookCode", "placeholder", "exampleBk01"],
    ["#borrowStudentId", "placeholder", "borrowStudentPlaceholder"],
    ["#studentUidInput", "placeholder", "noUidDetected"],
    ["#studentRegistryNameInput", "placeholder", "studentNamePlaceholder"],
    ["#studentNationalIdInput", "placeholder", "nationalIdPlaceholder"],
    ["#studentLastSeenInput", "placeholder", "lastSeen"],
  ].forEach(([selector, attribute, key]) => setAttributeText(selector, attribute, key));

  [
    ["#rfidActionInput option[value='toggle']", "toggleEntryExit"],
    ["#rfidActionInput option[value='entry']", "forceEntry"],
    ["#rfidActionInput option[value='exit']", "forceExit"],
    ["#barcodeActionInput option[value='lookup']", "checkStatus"],
    ["#barcodeActionInput option[value='add']", "addBookAction"],
    ["#barcodeActionInput option[value='borrow']", "borrowBookAction"],
    ["#barcodeActionInput option[value='return']", "returnBook"],
  ].forEach(([selector, key]) => setTextContent(selector, key));

  if (elements.studentRegistryStatus && !state.selectedStudent) {
    elements.studentRegistryStatus.textContent = t("waitingForNextScan");
  }
  updateBorrowStepLabels(state.borrowInputMode);
  updateThemeToggleButton();
  updateLanguageToggleButton();
}

function applyTheme(theme, persist = true) {
  state.theme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = state.theme;
  if (persist) localStorage.setItem(STORAGE_KEYS.theme, state.theme);
  updateThemeToggleButton();
}

function applyLanguage(language, persist = true) {
  state.language = language === "en" ? "en" : "ar";
  document.documentElement.dataset.language = state.language;
  if (persist) localStorage.setItem(STORAGE_KEYS.language, state.language);
  
  applyStaticTranslations();
  
  if (elements.connectionBadge) {
    const className = elements.connectionBadge.className.replace("status-chip ", "") || "status-neutral";
    setConnectionBadge(state.connectionStatus ?? "Disconnected", className);
  }
  setRefreshBusy(Boolean(elements.refreshButton?.disabled));
  
  if (state.hasLoaded) {
    // استخدام requestAnimationFrame لمنع تجميد الشاشة أثناء إعادة رسم الجداول
    requestAnimationFrame(() => {
      renderAll();
    });
    return;
  }

  elements.crowdBadge.textContent = t("unknown");
  elements.crowdValue.textContent = t("waitingForData");
  elements.lastSyncLabel.textContent = t("neverSynced");
  if (elements.bookShelfMeta) elements.bookShelfMeta.textContent = t("booksCount", { count: 0 });
  if (elements.studentTableMeta) elements.studentTableMeta.textContent = t("recordsCount", { count: 0 });
  if (elements.logsTableMeta) elements.logsTableMeta.textContent = t("eventsCount", { count: 0 });

  const shelfEmptyState = elements.bookshelfContainer?.querySelector(".empty-state");
  if (shelfEmptyState) shelfEmptyState.textContent = t("loadingBookshelf");
}

function toggleTheme() {
  applyTheme(state.theme === "dark" ? "light" : "dark");
}

function toggleLanguage() {
  // 1. إيقاف جميع التأثيرات الحركية (Transitions) لتجنب التقطيع
  document.body.classList.add('lang-switch-active');

  // 2. استخدام requestAnimationFrame لضمان تزامن التحديث مع شاشة المستخدم
  requestAnimationFrame(() => {
    applyLanguage(state.language === "ar" ? "en" : "ar");

    // 3. إزالة كلاس الإيقاف بعد انتهاء المتصفح من إعادة ترتيب العناصر (RTL <-> LTR)
    requestAnimationFrame(() => {
      // نضع مهلة بسيطة جداً (50 ملي ثانية) لضمان اكتمال الرسم
      setTimeout(() => {
        document.body.classList.remove('lang-switch-active');
      }, 50);
    });
  });
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
  const uid = normalizeText(student?.uid ?? student?.id ?? student?.cardId ?? student?.card_id, "Unknown");
  const statusValue = normalizeText(student?.status ?? student?.lastAction ?? student?.action, "outside").toLowerCase();
  const isInside = statusValue === "inside" || statusValue === "entry";
  return {
    id: uid,
    uid,
    name: normalizeText(student?.name, "Unknown Student"),
    nationalId: normalizeText(student?.nationalId ?? student?.national_id, "-"),
    gender: normalizeText(student?.gender, "ذكر"), // <--- إضافة هذا السطر    status: isInside ? "Inside" : "Outside",
    entryTime: normalizeText(student?.entryTime ?? student?.entry_time ?? student?.lastEntry ?? student?.lastSeen, "-"),
    exitTime: normalizeText(student?.exitTime ?? student?.exit_time ?? student?.lastExit, "-"),
    lastSeen: normalizeText(student?.lastSeen ?? student?.last_seen ?? student?.updatedAt ?? student?.entryTime, "-"),
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
  const actionRaw = normalizeText(log?.action ?? log?.type ?? log?.category, "entry").toLowerCase();
  const action = actionRaw.includes("exit") ? "Exit" : actionRaw.includes("entry") ? "Entry" : toTitleCase(actionRaw);
  return {
    time: normalizeText(log?.time ?? log?.timestamp, new Date().toISOString()),
    type: toTitleCase(log?.type ?? log?.category ?? "rfid"),
    action,
    name: normalizeText(log?.name ?? log?.studentName, "Unknown Student"),
    nationalId: normalizeText(log?.nationalId ?? log?.national_id, "-"),
    uid: normalizeText(log?.uid ?? log?.id ?? log?.cardId ?? log?.card_id, "-"),
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
  return date.toLocaleString(getLocale());
}

function formatUptime(seconds) {
  const total = Math.max(0, parseNumber(seconds, 0));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const remainingSeconds = total % 60;

  if (state.language === "ar") {
    if (days > 0) return `${days} ي ${hours} س ${minutes} د`;
    if (hours > 0) return `${hours} س ${minutes} د ${remainingSeconds} ث`;
    if (minutes > 0) return `${minutes} د ${remainingSeconds} ث`;
    return `${remainingSeconds} ث`;
  }

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
  state.connectionStatus = label;
  elements.connectionBadge.textContent = translateStatusLabel(label);
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
  elements.refreshButton.textContent = busy ? t("refreshingNow") : t("refreshNow");
}

// ─── API layer ───────────────────────────────────────────────────────────────

// 1. الدالة الجديدة لمعالجة فقدان الجلسة وطرد المشرف
function handleSessionLoss() {
  sessionStorage.removeItem('library-dashboard-auth');
  sessionStorage.removeItem('library-auth-token');
  
  if (typeof setAuthenticated === "function") {
    setAuthenticated(false);
  }
  
  if (typeof showToast === "function") {
    showToast("انتهت الجلسة أو تم إعادة تشغيل النظام. يرجى تسجيل الدخول مجدداً.", true);
  }
}

// 2. دالة إرسال الطلبات المحدثة
async function fetchJson(path, options = {}) {
  // 1. جلب المفتاح السري من ذاكرة المتصفح
  const token = sessionStorage.getItem("library-auth-token") || "";
  
  // 2. إرفاق المفتاح في ترويسة الطلب (Headers)
  const response = await fetch(`${APP_CONFIG.apiBase}${path}`, {
    headers: { 
      "Content-Type": "application/json", 
      "Authorization": token, // <--- السطر السحري الذي يفتح بوابة الـ ESP32
      ...options.headers 
    },
    ...options,
  });

  // ---> التعديل السحري هنا: اصطياد خطأ 401 <---
  if (response.status === 401) {
    handleSessionLoss();
    throw new Error("غير مصرح لك (401)"); 
  }
  // ------------------------------------------

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
    elements.loginError.textContent = t("bothUsernamePasswordRequired");
    return;
  }

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      const data = await response.json();
      sessionStorage.setItem("library-auth-token", data.token);
      elements.loginError.textContent = "";
      setAuthenticated(true);
      closeLoginModal();
      await loadDashboardData();
      showToast(t("adminUnlocked"));
    } else {
      elements.loginError.textContent = t("invalidAdminCredentials");
      elements.passwordInput.value = "";
      elements.passwordInput.focus();
    }
  } catch (error) {
    elements.loginError.textContent = t("unableToReachServer");
  }
}

async function fetchJsonOptional(path, options = {}, settings = {}) {
  try {
    return await fetchJson(path, options);
  } catch (error) {
    if (!settings.swallowAll && !/404|405/.test(error.message)) {
      throw error;
    }
    return null;
  }
}

function buildStudentPayload(source) {
  return {
    uid: normalizeText(source?.uid ?? source?.id, ""),
    name: normalizeText(source?.name, ""),
    nationalId: normalizeText(source?.nationalId, ""),
    gender: document.getElementById('studentGenderInput')?.value || "غير محدد", // <--- السطر الجديد
    lastSeen: normalizeText(source?.lastSeen, formatDateTimeCompact(new Date())),
  };
}

async function addStudentRecord(student) {
  const payload = buildStudentPayload(student);
  return fetchJson("/students/add", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

async function updateStudentRecord(student) {
  const payload = buildStudentPayload(student);
  const response = await fetchJsonOptional("/students/update", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  if (response) return response;
  return fetchJson(`/students/${encodeURIComponent(payload.uid)}`, {
    method: "PATCH",
    body: JSON.stringify({ name: payload.name, nationalId: payload.nationalId, lastSeen: payload.lastSeen }),
  });
}

async function deleteStudentRecord(uid) {
  const payload = { uid };
  const response = await fetchJsonOptional("/students/delete", {
    method: "DELETE",
    body: JSON.stringify(payload),
  });
  if (response) return response;
  return fetchJson(`/students/${encodeURIComponent(uid)}`, { method: "DELETE" });
}

function getFilteredHistoryLogs() {
  return sortByNewest(
    state.historyLogs.filter((log) => isWithinLastDays(log.time, HISTORY_WINDOW_DAYS)),
    (log) => log.time
  );
}

function getExportableHistoryRows() {
  return getFilteredHistoryLogs()
    .filter((log) => log.action === "Entry")
    .map((log) => ({
      "Student Name": translateFallbackText(log.name),
      "National ID": log.nationalId,
      UID: log.uid,
      "Entry Time": formatDateTimeCompact(log.time),
    }));
}

function setHistoryDownloadStamp(date = new Date()) {
  localStorage.setItem(STORAGE_KEYS.historyDownload, date.toISOString());
}

function exportHistoryToExcel({ automatic = false } = {}) {
  const rows = getExportableHistoryRows();
  if (!rows.length) {
    if (!automatic) showToast(t("noHistoryData"), true);
    return false;
  }
  if (typeof XLSX === "undefined") {
    showToast(t("excelLibraryMissing"), true);
    return false;
  }

  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(rows);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Students History");
  XLSX.writeFile(workbook, "students-history.xlsx");
  setHistoryDownloadStamp();
  if (!automatic) showToast(t("historyDownloaded"));
  return true;
}

function maybeAutoDownloadHistory() {
  const rows = getExportableHistoryRows();
  if (!rows.length) return;
  const lastDownload = parseDateValue(localStorage.getItem(STORAGE_KEYS.historyDownload));
  if (!lastDownload) return;
  const elapsed = Date.now() - lastDownload.getTime();
  const threshold = AUTO_DOWNLOAD_AFTER_DAYS * 24 * 60 * 60 * 1000;
  if (elapsed >= threshold) {
    exportHistoryToExcel({ automatic: true });
  }
}

async function handleLogout() {
  setAuthenticated(false);
  state.students = [];
  state.historyLogs = [];
  state.selectedStudent = null;
  state.books = [];
  resetStudentRegistry();
  renderAll();
  showToast(t("adminLocked"));
}

function resetStudentRegistry() {
  state.selectedStudent = null;
  if (elements.studentRegistryForm) elements.studentRegistryForm.reset();
  if (elements.studentUidInput) elements.studentUidInput.value = "";
  if (elements.studentLastSeenInput) elements.studentLastSeenInput.value = "-";
  if (elements.studentRegistryError) elements.studentRegistryError.textContent = "";
  if (elements.studentRegistryStatus) elements.studentRegistryStatus.textContent = t("waitingForNextScan");
  elements.saveStudentButton?.classList.add("hidden");
  elements.updateStudentButton?.classList.add("hidden");
  elements.deleteStudentButton?.classList.add("hidden");
}

function setStudentRegistryBusy(busy) {
  if (!elements.scanRfidButton) return;
  elements.scanRfidButton.disabled = busy;
  elements.scanRfidButton.textContent = busy ? t("refreshingNow") : t("readScannedUid");
}

function populateStudentRegistry(student, exists = false) {
  state.selectedStudent = student;
  if (elements.studentUidInput) elements.studentUidInput.value = student.uid;
  if (elements.studentRegistryNameInput) elements.studentRegistryNameInput.value = student.name === "Unknown Student" ? "" : student.name;
  if (elements.studentNationalIdInput) elements.studentNationalIdInput.value = student.nationalId === "-" ? "" : student.nationalId;
  if (elements.studentLastSeenInput) {
    elements.studentLastSeenInput.value = student.lastSeen && student.lastSeen !== "-" ? formatDateTimeCompact(student.lastSeen) : "-";
  }
  if (elements.studentRegistryError) elements.studentRegistryError.textContent = "";
  if (elements.studentGenderInput) elements.studentGenderInput.value = student.gender || "ذكر";
  if (elements.studentRegistryStatus) {
    const statusKey = exists ? "scannedExistingStudent" : "scannedNewStudent";
    elements.studentRegistryStatus.textContent = `${t("scannedUidReady", { uid: student.uid })} - ${t(statusKey)}`;
  }

  elements.saveStudentButton?.classList.toggle("hidden", exists);
  elements.updateStudentButton?.classList.toggle("hidden", !exists);
  elements.deleteStudentButton?.classList.toggle("hidden", !exists);
}

function validateStudentForm(uid, name, nationalId) {
  if (!uid) return t("scanUidFirst");
  if (!name) return t("nameCannotBeEmpty");
  if (!nationalId) return t("nationalIdRequired");
  if (!/^\d{9,14}$/.test(nationalId)) return t("invalidNationalId");
  return "";
}

async function syncScannedRfid(forceFeedback = false) {
  if (!isAuthenticated() || state.isPollingRfid) return null;
  state.isPollingRfid = true;
  if (forceFeedback) setStudentRegistryBusy(true);
  try {
    const result = await fetchJson("/scan-rfid", { method: "POST", body: JSON.stringify({}) });
    const scannedStudent = normalizeStudent(result?.student ?? result);
    if (!scannedStudent.uid || scannedStudent.uid === "Unknown") {
      if (forceFeedback) showToast(t("noNewScanDetected"), true);
      return null;
    }

    const exists = Boolean(result?.exists) || state.students.some((student) => student.uid === scannedStudent.uid);
    const mergedStudent = exists
      ? normalizeStudent(state.students.find((student) => student.uid === scannedStudent.uid) ?? result?.student ?? result)
      : scannedStudent;

    const fingerprint = [
      mergedStudent.uid,
      mergedStudent.lastSeen,
      result?.action ?? "",
    ].join("|");

    if (fingerprint !== state.lastRfidFingerprint || forceFeedback) {
      state.lastRfidFingerprint = fingerprint;
      populateStudentRegistry(mergedStudent, exists);
      if (forceFeedback) showToast(t("scannedUidReady", { uid: mergedStudent.uid }));
      await loadDashboardData();
    }

    return mergedStudent;
  } catch (error) {
    if (forceFeedback) showToast(t("scanRfidFailed", { message: error.message }), true);
    return null;
  } finally {
    state.isPollingRfid = false;
    if (forceFeedback) setStudentRegistryBusy(false);
  }
}

// ─── Data loading ────────────────────────────────────────────────────────────

async function loadDashboardData() {
  if (state.isFetching) return;
  state.isFetching = true;

  setConnectionBadge("Syncing", "status-warning");

  const pendingRequests = [fetchJson("/status")];

  if (isAuthenticated()) {
    pendingRequests.push(fetchJson("/students"), fetchJson("/books"));
  } else {
    pendingRequests.push(fetchJson("/books"));
  }

  const [statusResult, studentsResult, booksResult, logsResult] = await Promise.allSettled(pendingRequests);
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

  const statusLogs = safeArray(state.status?.logs).map(normalizeLog);
  const endpointLogs = logsResult?.status === "fulfilled" && logsResult.value
    ? safeArray(logsResult.value?.logs ?? logsResult.value).map(normalizeLog)
    : [];
  state.historyLogs = sortByNewest(
    (endpointLogs.length ? endpointLogs : statusLogs).filter((log) => isWithinLastDays(log.time, HISTORY_WINDOW_DAYS)),
    (log) => log.time
  );
  state.logs = state.historyLogs;
  if (state.selectedStudent?.uid) {
    const refreshedStudent = state.students.find((student) => student.uid === state.selectedStudent.uid);
    if (refreshedStudent) state.selectedStudent = refreshedStudent;
  }

  renderAll();
  state.hasLoaded = true;
  state.isFetching = false;
  maybeAutoDownloadHistory();

  if (failures.length === pendingRequests.length) {
    setConnectionBadge("Offline", "status-error");
    throw new Error(t("unableToReachServer"));
  }

  if (failures.length) {
    setConnectionBadge("Partial", "status-warning");
    const translatedFailures = failures.map((item) => {
      if (item === "status") return t("missingStatus");
      if (item === "students") return t("missingStudents");
      if (item === "books") return t("missingBooks");
      return item;
    });
    showToast(t("loadedWithMissing", { items: translatedFailures.join(", ") }), true);
    return;
  }

  setConnectionBadge("Connected", "status-success");
}

// ─── Render functions (status, activity, logs, students) ─────────────────────

function renderActivityFeed() {
  const recentLogs = getFilteredHistoryLogs().slice(0, 6);

  if (!recentLogs.length) {
    elements.activityFeed.innerHTML = `<li class="empty-state">${escapeHtml(t("noActivity"))}</li>`;
    return;
  }

  elements.activityFeed.innerHTML = recentLogs
    .map(
      (log) => `
        <li>
          <div class="activity-title">
            <span>${escapeHtml(translateFallbackText(log.name))}</span>
            <span class="subtle-text">${escapeHtml(formatTimestamp(log.time))}</span>
          </div>
          <p class="activity-message">${escapeHtml(`${translateStatusLabel(log.action)} - ${log.uid}`)}</p>
        </li>
      `
    )
    .join("");
}

function renderStudents() {
  // جلب النص المكتوب في مربع البحث
  const query = (elements.studentSearchInput?.value || "").toLowerCase().trim();
  
  // فلترة الطلاب بناءً على الاسم أو الـ ID
  const filteredStudents = state.students.filter(student => 
    student.name.toLowerCase().includes(query) || 
    student.id.toLowerCase().includes(query) ||
    student.nationalId.toLowerCase().includes(query)
  );

  elements.studentTableMeta.textContent = t("recordsCount", { count: filteredStudents.length });

  if (!filteredStudents.length) {
    elements.studentsTableBody.innerHTML =
      `<tr><td colspan="6" class="empty-state">${escapeHtml(t("noStudentsFound"))}</td></tr>`;
    return;
  }

  // طباعة الطلاب المفلترين فقط
  elements.studentsTableBody.innerHTML = filteredStudents
    .map(
      (student) => `
        <tr>
          <td data-label="${escapeHtml(t("historyUid"))}">${escapeHtml(student.uid)}</td>
          <td data-label="${escapeHtml(t("name"))}">${escapeHtml(translateFallbackText(student.name))}</td>
          <td data-label="${escapeHtml(t("status"))}"><span class="${pillClassForStatus(student.status)}">${escapeHtml(translateStatusLabel(student.status))}</span></td>
          <td data-label="${escapeHtml(t("entryTime"))}">${escapeHtml(formatTimestamp(student.entryTime))}</td>
          <td data-label="${escapeHtml(t("exitTime"))}">${escapeHtml(formatTimestamp(student.exitTime))}</td>
          <td data-label="${escapeHtml(t("actions"))}" class="admin-only">
            <div class="student-actions">
              <button class="icon-btn edit-student" data-id="${escapeHtml(student.id)}" data-name="${escapeHtml(student.name)}" title="${escapeHtml(t("editStudentName"))}">✎</button>
              <button class="icon-btn danger delete-student" data-id="${escapeHtml(student.id)}" data-name="${escapeHtml(student.name)}" title="${escapeHtml(t("delete"))}">🗑</button>
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
  elements.logsTableMeta.textContent = t("eventsCount", { count: state.logs.length });

  if (!state.logs.length) {
    elements.logsTableBody.innerHTML =
      `<tr><td colspan="3" class="empty-state">${escapeHtml(t("noLogsAvailable"))}</td></tr>`;
    return;
  }

  elements.logsTableBody.innerHTML = state.logs
    .map(
      (log) => `
        <tr>
          <td data-label="${escapeHtml(t("time"))}">${escapeHtml(formatTimestamp(log.time))}</td>
          <td data-label="${escapeHtml(t("type"))}">${escapeHtml(translateFallbackText(log.type))}</td>
          <td data-label="${escapeHtml(t("message"))}">${escapeHtml(translateFallbackText(log.message))}</td>
        </tr>
      `
    )
    .join("");
}

function renderStudentsTable() {
  const query = (elements.studentSearchInput?.value || "").toLowerCase().trim();
  const filteredStudents = state.students.filter((student) =>
    student.name.toLowerCase().includes(query) ||
    student.id.toLowerCase().includes(query) ||
    student.nationalId.toLowerCase().includes(query)
  );

  elements.studentTableMeta.textContent = t("recordsCount", { count: filteredStudents.length });

  if (!filteredStudents.length) {
    elements.studentsTableBody.innerHTML =
      `<tr><td colspan="6" class="empty-state">${escapeHtml(t("noStudentsFound"))}</td></tr>`;
    return;
  }

  elements.studentsTableBody.innerHTML = filteredStudents
    .map(
      (student) => `
        <tr>
          <td data-label="${escapeHtml(t("historyUid"))}">${escapeHtml(student.uid)}</td>
          <td data-label="${escapeHtml(t("name"))}">${escapeHtml(translateFallbackText(student.name))}</td>
          <td data-label="${escapeHtml(t("status"))}"><span class="${pillClassForStatus(student.status)}">${escapeHtml(translateStatusLabel(student.status))}</span></td>
          <td data-label="${escapeHtml(t("entryTime"))}">${escapeHtml(formatTimestamp(student.entryTime))}</td>
          <td data-label="${escapeHtml(t("exitTime"))}">${escapeHtml(formatTimestamp(student.exitTime))}</td>
          <td data-label="${escapeHtml(t("actions"))}" class="admin-only">
            <div class="student-actions">
              <button class="icon-btn edit-student" data-id="${escapeHtml(student.uid)}" data-name="${escapeHtml(student.name)}" data-national-id="${escapeHtml(student.nationalId)}" title="${escapeHtml(t("editStudent"))}">${escapeHtml(t("editStudent"))}</button>
              <button class="icon-btn danger delete-student" data-id="${escapeHtml(student.uid)}" data-name="${escapeHtml(student.name)}" title="${escapeHtml(t("delete"))}">${escapeHtml(t("delete"))}</button>
            </div>
          </td>
        </tr>
      `
    )
    .join("");

  document.querySelectorAll(".edit-student").forEach((btn) => {
    btn.addEventListener("click", () => openEditStudentModal(btn.dataset.id, btn.dataset.name, btn.dataset.nationalId));
  });
  document.querySelectorAll(".delete-student").forEach((btn) => {
    btn.addEventListener("click", () => openDeleteConfirmModal(btn.dataset.id, btn.dataset.name));
  });
}

function renderHistoryLogs() {
  const filteredLogs = getFilteredHistoryLogs();
  elements.logsTableMeta.textContent = t("eventsCount", { count: filteredLogs.length });

  if (!filteredLogs.length) {
    elements.logsTableBody.innerHTML =
      `<tr><td colspan="5" class="empty-state">${escapeHtml(t("noHistoryData"))}</td></tr>`;
    return;
  }

  elements.logsTableBody.innerHTML = filteredLogs
    .map(
      (log) => `
        <tr>
          <td data-label="${escapeHtml(t("historyName"))}">${escapeHtml(translateFallbackText(log.name))}</td>
          <td data-label="${escapeHtml(t("nationalId"))}">${escapeHtml(log.nationalId)}</td>
          <td data-label="${escapeHtml(t("historyUid"))}">${escapeHtml(log.uid)}</td>
          <td data-label="${escapeHtml(t("time"))}">${escapeHtml(formatTimestamp(log.time))}</td>
          <td data-label="${escapeHtml(t("historyAction"))}">${escapeHtml(translateStatusLabel(log.action))}</td>
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

  const crowdLabel = translateStatusLabel(status.crowdLevel);
  elements.crowdValue.textContent = crowdLabel;
  elements.crowdBadge.textContent = crowdLabel;
  elements.crowdBadge.className = `status-chip ${badgeClassFromCrowd(status.crowdLevel)}`;

  // ---> التعديل الخاص بكرة النيون (تحديث اللون برمجياً حسب الحالة) <---
  const crowdCardElement = document.querySelector('.crowd-card');
  if (crowdCardElement) {
    const level = status.crowdLevel.toLowerCase();
    let glowColor = 'var(--green)'; // الحالة الافتراضية (أخضر - فارغ)
    
    if (level === 'moderate') {
      glowColor = 'var(--amber)';   // متوسط (برتقالي)
    } else if (level === 'crowded') {
      glowColor = 'var(--red)';     // مزدحم (أحمر)
    }
    
    crowdCardElement.style.setProperty('--glow-color', glowColor);
  }
  // --------------------------------------------------------------------

  elements.peopleCountValue.textContent = String(status.peopleCount);
  elements.studentsInsideValue.textContent = String(studentsInside);
  elements.booksTotalValue.textContent = String(booksTotal);

  elements.heapValue.textContent = formatBytes(status.freeHeap);
  elements.storageValue.textContent = status.storageUsed;
  elements.serverStateValue.textContent = translateStatusLabel(status.serverState);
  elements.uptimeValue.textContent = formatUptime(status.uptime);
  elements.apNameLabel.textContent = status.apName;
  elements.ipAddressLabel.textContent = status.ipAddress;
  elements.lastSyncLabel.textContent = t("lastSync", { time: new Date().toLocaleTimeString(getLocale()) });
}

function renderStudentRegistry() {
  if (!elements.studentRegistryStatus) return;
  if (!state.selectedStudent) {
    resetStudentRegistry();
    return;
  }
  if (elements.studentGenderInput) elements.studentGenderInput.value = "ذكر";
  populateStudentRegistry(
    state.selectedStudent,
    state.students.some((student) => student.uid === state.selectedStudent.uid)
  );
}

// Bookshelf rendering (conditional for admin/public) will be in Part 2
function renderBooks() {
  // This will be implemented in Part 2
}

async function loadLogs() {
  try {
    const response = await fetch('/logs');
    if (!response.ok) throw new Error("No logs");
    const csvData = await response.text();
    const rows = csvData.split('\n').filter(row => row.trim() !== '');
    elements.logsTableBody.innerHTML = '';
    const lastLogs = rows.slice(-50).reverse();
    let html = '';
    lastLogs.forEach(row => {
      const cols = row.split(',');
      if (cols.length >= 4) {
        html += `
          <tr>
            <td data-label="Time">${escapeHtml(cols[0])}</td>
            <td data-label="UID">${escapeHtml(cols[1])}</td>
            <td data-label="Name">${escapeHtml(cols[2])}</td>
            <td data-label="Action"><span class="pill ${cols[3].includes('Inside') || cols[3].includes('دخول') ? 'status-success' : 'status-warning'}">${escapeHtml(cols[3])}</span></td>
          </tr>
        `;
      }
    });
    if (!html) html = `<tr><td colspan="4" class="empty-state">لا توجد سجلات</td></tr>`;
    elements.logsTableBody.innerHTML = html;
  } catch (err) {
    elements.logsTableBody.innerHTML = `<tr><td colspan="4" class="empty-state">خطأ في تحميل السجلات</td></tr>`;
  }
}
function renderAll() {
  renderStatus();
  renderStudentRegistry();
  renderStudentsTable();
  renderBooks();
  renderHistoryLogs();
  renderActivityFeed();
  loadLogs();
}

// ─── Navigation ──────────────────────────────────────────────────────────────

function setView(viewId) {
  const targetButton = elements.navLinks.find((btn) => btn.dataset.view === viewId);

  if (targetButton?.classList.contains("admin-only") && !isAuthenticated()) {
    openLoginModal();
    showToast(t("sectionAdminRequired"), true);
    return;
  }

  elements.navLinks.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === viewId);
  });

  elements.views.forEach((view) => {
    view.classList.toggle("active", view.id === viewId);
  });

  if (viewId === "studentsView" && isAuthenticated()) {
    syncScannedRfid(false).catch(console.error);
  }
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
      label: t("shelfLabel", { number: String(Math.floor(i / capacity) + 1) }),
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
  const bookTitle = translateFallbackText(book.title);
  const bookAuthor = translateFallbackText(book.author);
  
  let statusText = translateStatusLabel(isAvailable ? 'Available' : 'Borrowed');
  let borrowerHtml = '';
  
  if (!isAvailable && isAdmin) {
    borrowerHtml = `<div class="tt-borrower">${escapeHtml(t("holderLabel", { holder: book.holderId }))}</div>`;
  } else if (!isAvailable) {
    borrowerHtml = `<div class="tt-borrower">${escapeHtml(t("currentlyBorrowed"))}</div>`;
  }
  
  tooltip.innerHTML = `
    <div class="tt-title">${escapeHtml(bookTitle)}</div>
    <div class="tt-status ${isAvailable ? 'available' : 'borrowed'}">${statusText}</div>
    ${book.author !== 'Unknown Author' ? `<div class="tt-author">${escapeHtml(t("byAuthor", { author: bookAuthor }))}</div>` : ''}
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
// دالة إظهار الكارت بكامل بياناته
function showBookCard(e, book, color) {
  const card = elements.bookCard;
  const cover = elements.bookCardCover;
  const isAdmin = isAuthenticated();
  const isAvailable = book.status.toLowerCase() === 'available';

  // 1. إظهار النافذة عبر إزالة الإخفاء الإجباري
  card.classList.remove('hidden'); 
  card.classList.add('show');
  
  // 2. مسار الصورة والطبقات الثلاث (لضمان ظهور النص حتى لو الصورة مفقودة)
  const coverImagePath = `/covers/${book.code}.jpg`;
  cover.style.backgroundColor = color;
  cover.style.backgroundImage = `
    linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%),
    url('${coverImagePath}'),
    linear-gradient(160deg, ${color}, ${color}dd)
  `;

  // 3. تعبئة البيانات الأساسية للنافذة
  elements.bookCardTitle.textContent = translateFallbackText(book.title);
  
  elements.bookCardStatus.textContent = isAvailable ? t("availableDot") : t("borrowedDot");
  elements.bookCardStatus.className = `book-card-status ${isAvailable ? 'available' : 'borrowed'}`;
  
  // ---> هذا السطر كان مفقوداً: إظهار اسم المؤلف <---
  elements.bookCardAuthor.textContent = book.author !== 'Unknown Author' ? t("byAuthor", { author: translateFallbackText(book.author) }) : '';

  // ---> هذا الجزء كان مفقوداً: إظهار حالة المستعير <---
  let borrowerText = '';
  if (!isAvailable && isAdmin) {
    borrowerText = t("holderLabel", { holder: book.holderId });
  } else if (!isAvailable) {
    borrowerText = t("currentlyBorrowed");
  }
  elements.bookCardBorrower.textContent = borrowerText;

  // ---> هذا الجزء كان مفقوداً: إضافة أزرار المشرف (حذف وتعديل) <---
  const cardBody = document.querySelector('.book-card-body');
  const existingActions = cardBody.querySelector('.book-card-actions');
  if (existingActions) existingActions.remove(); // مسح القديم لمنع التكرار

  if (isAdmin) {
    const adminActionsHtml = `
      <div class="book-card-actions">
        <button class="icon-btn edit-book-btn" onclick="openEditBookModal('${escapeHtml(book.code)}')" title="تعديل الكتاب">✎</button>
        <button class="icon-btn danger delete-book-btn" onclick="handleDeleteBook('${escapeHtml(book.code)}')" title="حذف الكتاب">🗑</button>
      </div>
    `;
    cardBody.insertAdjacentHTML('beforeend', adminActionsHtml);
  }

  // 4. ضبط مكان الكارت (يتجاوب مع الهاتف والكمبيوتر)
  if (window.innerWidth > 760) {
    card.style.left = (e.clientX - 90) + 'px';
    card.style.top = (e.clientY - 300) + 'px';
    card.style.transform = 'none';
  } else {
    card.style.left = '50%';
    card.style.top = '50%';
    card.style.transform = 'translate(-50%, -50%)';
  }
}

// دالة إغلاق الكارت
function closeBookCard() {
  const card = elements.bookCard;
  card.classList.remove('show');
  
  // ننتظر انتهاء حركة الإخفاء (Animation) ثم نعيد الكلاس hidden
  setTimeout(() => {
    if (!card.classList.contains('show')) {
      card.classList.add('hidden');
      // تفريغ الصورة من الذاكرة لتقليل الحمل
      elements.bookCardCover.style.backgroundImage = 'none';
    }
  }, 250); 
}
// Render the bookshelf (now respecting authentication)
function renderBookshelf() {
  if (!elements.bookshelfContainer) return;
  
  // جلب نص البحث
  const query = (elements.bookSearchInput?.value || "").toLowerCase().trim();
  
  // 1. فحص هل المستخدم مشرف أم لا
  const isAdmin = isAuthenticated(); 
  
  // فلترة الكتب بناءً على العنوان أو المؤلف أو الكود
  const filteredBooks = state.books.filter(book => 
    book.title.toLowerCase().includes(query) || 
    book.author.toLowerCase().includes(query) ||
    book.code.toLowerCase().includes(query)
  );

  const totalBooks = filteredBooks.length;
  if (elements.bookShelfMeta) elements.bookShelfMeta.textContent = t("booksCount", { count: totalBooks });
  
  if (!filteredBooks.length) {
    elements.bookshelfContainer.innerHTML = `<div class="empty-state">${escapeHtml(t("noBooksFound"))}</div>`;
    return;
  }
  
  // استخدام المصفوفة المفلترة
  const shelves = groupBooksIntoShelves(filteredBooks);
  let html = '';
  
  shelves.forEach(shelf => {
    html += `<div class="shelf-row"><div class="shelf-label">${escapeHtml(shelf.label)}</div><div class="shelf-scene"><div class="shelf-books">`;
    
    shelf.books.forEach(book => {
      const color = stringToColor(book.title + book.code);
      const isBorrowed = book.status.toLowerCase() !== 'available';
      const displayTitle = translateFallbackText(book.title);
      
      // ---> التعديل الجديد: خوارزمية الخط المتكيف (Adaptive Font) <---
      // بدلاً من قص النص، نقوم بتصغير الخط تدريجياً ليتسع في كعب الكتاب
      let fontSize = "1.1rem"; 
      if (displayTitle.length > 15) fontSize = "0.9rem";
      if (displayTitle.length > 25) fontSize = "0.75rem";
      if (displayTitle.length > 35) fontSize = "0.6rem";
      // -----------------------------------------------------------

      // 2. إضافة كلاس الإدارة ومؤشر القلم إذا كان المستخدم مشرفاً
      // لاحظ إضافة متغير --spine-font في ستايل الكتاب
      html += `<div class="book ${isBorrowed ? 'borrowed' : ''} ${isAdmin ? 'admin-view' : ''}" 
        style="background: linear-gradient(160deg, ${color}, ${color}dd); --spine-font: ${fontSize};"
        data-book='${JSON.stringify(book).replace(/'/g, "&#39;")}'
        data-color="${color}">
        <div class="book-spine" style="font-size: var(--spine-font);">${escapeHtml(displayTitle)}</div>
        ${isAdmin ? '<div class="admin-indicator" title="انقر للتعديل">✎</div>' : ''}
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
  state.borrowInputMode = "rfid";
  
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
  updateBorrowStepLabels("rfid");
  
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
    alert(t("cameraFileModeWarning"));
    return; // إيقاف التشغيل
  }

  // ---> اللمسة الاحترافية: اكتشاف نظام iOS وإظهار تنبيه ذكي <---
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (isIOS) {
    showToast(t("iphoneFlashlightTip"));
  }
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
      alert(t("cameraStartError", { message: e.message }));
    }
  } else {
    alert(t("cameraLibraryMissingAlert"));
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
  showToast(t("barcodeScanned", { code: decodedText }));
  
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
    elements.borrowError.textContent = t("scanOrEnterBookBarcode");
    return;
  }
  
  const book = state.books.find(b => b.code.toLowerCase() === bookCode.toLowerCase());
  
  if (!book) {
    elements.borrowError.textContent = t("bookNotFound");
    return;
  }
  
  if (book.status.toLowerCase() !== 'available') {
    elements.borrowError.textContent = t("bookAlreadyBorrowed");
    return;
  }
  
  state.pendingBorrowBookCode = book.code;
  state.borrowInputMode = mode;
  elements.borrowError.textContent = ''; 
  
  // -- التعديل الذكي: تغيير نصوص الخطوة الثانية بناءً على الزر المضغوط --
  const step2Hint = elements.borrowStep2.querySelector('.step-hint');
  const step2Label = elements.borrowStep2.querySelector('.field span');
  
  if (mode === 'nid') {
    step2Hint.textContent = t("step2EnterNationalId");
    step2Label.textContent = t("nationalId");
    elements.borrowStudentId.placeholder = t("nationalIdPlaceholder");
  } else {
    step2Hint.textContent = t("step2ScanRfid");
    step2Label.textContent = t("studentIdRfid");
    elements.borrowStudentId.placeholder = t("borrowStudentPlaceholder");
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
    elements.borrowError.textContent = t("scanStudentRfid");
    return;
  }
  
  state.pendingBorrowStudentId = studentId;
  
  // تعطيل الأزرار أثناء إرسال الطلب لمنع الضغط المزدوج
  elements.confirmBorrow.disabled = true;
  elements.backToStep1.disabled = true;
  elements.borrowError.textContent = t("processingRequest");
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
    elements.borrowResultDetails.textContent = t("borrowResult", {
      title: translateFallbackText(book?.title || t("fallbackBookTitle")),
      id: state.pendingBorrowStudentId,
    });
    
    elements.borrowStep2.classList.add('hidden');
    elements.borrowStep3.classList.remove('hidden');
    elements.borrowError.textContent = '';
    
    // تحديث بيانات لوحة التحكم (لتظهر الحالة الجديدة للكتاب)
    await loadDashboardData();
    
  } catch (error) {
    // في حال الفشل
    elements.borrowError.style.color = 'var(--red)';
    elements.borrowError.textContent = t("borrowFailed", { message: error.message });
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
    showToast(t("barcodeLibraryMissing"), true);
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
  showToast(t("barcodeScanned", { code: decodedText }));
  
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
    showToast(t("cameraAccessDenied"), true);
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
  
  const code = elements.cameraBookCode.value.trim();
  const title = elements.cameraBookTitle.value.trim();
  const imageData = elements.cameraImageData.value; // هذا هو الـ Base64

  if (!code || !imageData) return showToast("مسح الباركود والتقاط الصورة مطلوب", true);

  const submitBtn = event.target.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = "جارٍ الحفظ على SD Card...";

  try {
    // إرسال بيانات الكتاب النصية أولاً
    await fetchJson('/barcode', {
      method: 'POST',
      body: JSON.stringify({ code, title, action: 'add' })
    });

    // إرسال الصورة إلى المسار المخصص للـ SD Card
    const response = await fetch('/upload-cover', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: code, image: imageData })
    });

    if (response.ok) {
      showToast("تمت إضافة الكتاب وحفظ الغلاف بنجاح");
      closeCameraModal();
      await loadDashboardData(); // لتحديث الرف وظهور الصورة الجديدة
    }
  } catch (error) {
    showToast("فشل الحفظ: " + error.message, true);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "حفظ في ESP32 وبطاقة SD";
  }
}

// ─── Student Edit/Delete Modals ─────────────────────────────────────────────

function openEditStudentModal(id, currentName, nationalId = "") {
  elements.editStudentId.value = id;
  elements.editStudentUid.value = id;
  elements.editStudentName.value = currentName;
  elements.editStudentNationalId.value = nationalId || "";
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
  const nationalId = elements.editStudentNationalId.value.trim();
  
  const validationError = validateStudentForm(id, newName, nationalId);
  if (validationError) {
    elements.editStudentError.textContent = validationError;
    return;
  }
  
  try {
    await updateStudentRecord({ uid: id, name: newName, nationalId, lastSeen: new Date() });
    showToast(t("studentUpdated"));
    closeEditStudentModal();
    await loadDashboardData();
  } catch (error) {
    elements.editStudentError.textContent = error.message;
    showToast(t("updateFailed", { message: error.message }), true);
  }
}
/**
 * يعالج عملية حذف الكتاب من السيرفر وتحديث الواجهة.
 * @param {string} bookCode - كود الكتاب المراد حذفه
 */
async function handleDeleteBook(bookCode) {
  if (!bookCode) return;

  // 1. رسالة تأكيد لحماية المشرف من الحذف الخطأ
  const confirmMsg = `هل أنت متأكد من أنك تريد حذف الكتاب: ${bookCode}؟\nهذا الإجراء لا يمكن التراجع عنه.`;
  if (!confirm(confirmMsg)) return;

  try {
    // 2. إرسال أمر الحذف إلى الـ ESP32
    // نستخدم مسار /barcode كما اتفقنا مع تحديد action: 'delete'
    await fetchJson('/barcode', {
      method: 'POST',
      body: JSON.stringify({ code: bookCode, action: 'delete' })
    });

    // 3. إشعار بالنجاح
    showToast("تم حذف الكتاب بنجاح!");

    // 4. إغلاق بطاقة الكتاب المفتوحة
    if (typeof closeBookCard === 'function') {
      closeBookCard();
    }

    // 5. التحديث المتفائل (Optimistic Update): 
    // نحذف الكتاب من الذاكرة المحلية للمتصفح فوراً لكي يختفي من الرف بدون انتظار
    if (state && state.books) {
      state.books = state.books.filter(b => b.code !== bookCode);
    }

    // 6. إعادة رسم الرفوف لتعكس الحذف
    if (typeof renderBookshelf === 'function') {
      renderBookshelf();
    }

    // (اختياري) يمكنك طلب البيانات الجديدة من السيرفر للتأكد من المزامنة
    // await loadDashboardData();

  } catch (error) {
    console.error("Delete Book Error:", error);
    showToast(`فشل الحذف: ${error.message}`, true);
  }
}
function openDeleteConfirmModal(id, name) {
  state.pendingDeleteId = id;
  elements.deleteConfirmMessage.textContent = t("removeStudentMessage", { name });
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
    await deleteStudentRecord(id);
    showToast(t("studentDeleted"));
    closeDeleteConfirmModal();
    if (state.selectedStudent?.uid === id) resetStudentRegistry();
    await loadDashboardData();
  } catch (error) {
    showToast(t("deleteFailed", { message: error.message }), true);
    closeDeleteConfirmModal();
  }
}

async function handleStudentRegistrySubmit(event) {
  event.preventDefault();
  const uid = elements.studentUidInput.value.trim();
  const name = elements.studentRegistryNameInput.value.trim();
  const nationalId = elements.studentNationalIdInput.value.trim();
  const validationError = validateStudentForm(uid, name, nationalId);
  if (validationError) {
    elements.studentRegistryError.textContent = validationError;
    return;
  }
  if (state.students.some((student) => student.uid === uid)) {
    elements.studentRegistryError.textContent = t("duplicateUid");
    showToast(t("duplicateUid"), true);
    return;
  }

  try {
    await addStudentRecord({ uid, name, nationalId, lastSeen: new Date() });
    showToast(t("studentSaved"));
    state.selectedStudent = normalizeStudent({ uid, name, nationalId, lastSeen: new Date(), status: "inside" });
    await loadDashboardData();
    populateStudentRegistry(state.selectedStudent, true);
  } catch (error) {
    const message = error.message.includes("409") ? t("duplicateUid") : error.message;
    elements.studentRegistryError.textContent = message;
    showToast(message, true);
  }
}

async function handleStudentRegistryUpdate() {
  const uid = elements.studentUidInput.value.trim();
  const name = elements.studentRegistryNameInput.value.trim();
  const nationalId = elements.studentNationalIdInput.value.trim();
  const validationError = validateStudentForm(uid, name, nationalId);
  if (validationError) {
    elements.studentRegistryError.textContent = validationError;
    return;
  }

  try {
    await updateStudentRecord({ uid, name, nationalId, lastSeen: new Date() });
    showToast(t("studentUpdated"));
    state.selectedStudent = normalizeStudent({ uid, name, nationalId, lastSeen: new Date() });
    await loadDashboardData();
    populateStudentRegistry(state.selectedStudent, true);
  } catch (error) {
    elements.studentRegistryError.textContent = error.message;
    showToast(t("updateFailed", { message: error.message }), true);
  }
}

function handleStudentRegistryDelete() {
  const uid = elements.studentUidInput.value.trim();
  const name = elements.studentRegistryNameInput.value.trim() || uid;
  if (!uid) {
    showToast(t("scanUidFirst"), true);
    return;
  }
  openDeleteConfirmModal(uid, name);
}

// ─── Form handlers (RFID / Barcode) ─────────────────────────────────────────

async function handleRfidSubmit(event) {
  event.preventDefault();
  if (!isAuthenticated()) {
    openLoginModal();
    showToast(t("adminLoginRequired"), true);
    return;
  }
  const payload = {
    id: document.getElementById('rfidIdInput').value.trim(),
    name: document.getElementById('rfidNameInput').value.trim(),
    action: document.getElementById('rfidActionInput').value
  };
  if (!payload.id) {
    showToast(t("studentIdRequired"), true);
    return;
  }
  elements.rfidSubmitButton.disabled = true;
  elements.rfidSubmitButton.textContent = t("sending");
  try {
    const result = await fetchJson('/rfid', { method: 'POST', body: JSON.stringify(payload) });
    showToast(result.message || t("rfidStored"));
    elements.rfidForm.reset();
    await loadDashboardData();
  } catch (error) {
    showToast(error.message, true);
  } finally {
    elements.rfidSubmitButton.disabled = false;
    elements.rfidSubmitButton.textContent = t("sendRfidScan");
  }
}

async function handleBarcodeSubmit(event) {
  event.preventDefault();
  if (!isAuthenticated()) {
    openLoginModal();
    showToast(t("adminLoginRequired"), true);
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
    showToast(t("bookCodeRequired"), true);
    return;
  }
  elements.barcodeSubmitButton.disabled = true;
  elements.barcodeSubmitButton.textContent = t("sending");
  try {
    const result = await fetchJson('/barcode', { method: 'POST', body: JSON.stringify(payload) });
    showToast(result.message || t("barcodeStored"));
    elements.barcodeForm.reset();
    await loadDashboardData();
  } catch (error) {
    showToast(error.message, true);
  } finally {
    elements.barcodeSubmitButton.disabled = false;
    elements.barcodeSubmitButton.textContent = t("sendBarcodeScan");
  }
}

// ─── Auto-refresh ─────────────────────────────────────────────────────────────


function stopAutoRefresh() {
  window.clearInterval(state.refreshTimer);
  state.refreshTimer = null;
}


function stopRfidScanPolling() {
  window.clearInterval(state.rfidScanTimer);
  state.rfidScanTimer = null;
}

// ==========================================
// دوال إدارة الكتب الخاصة بالمشرف (حذف وتعديل)
// ==========================================
/**
/**
 * يفتح نافذة تعديل بيانات الكتاب ويملأ الحقول بالبيانات الحالية.
 * @param {string} bookCode - كود الكتاب المراد تعديله
 */
function openEditBookModal(bookCode) {
  if (!bookCode) return;

  // البحث عن الكتاب في الذاكرة
  const book = state.books.find(b => b.code === bookCode);
  if (!book) {
    showToast(t("bookNotFound") || "الكتاب غير موجود", true);
    return;
  }

  // تعبئة الحقول مع معالجة القيم الافتراضية
  elements.editBookCode.value = book.code;
  elements.editBookTitle.value = (book.title && book.title !== 'Untitled Book') ? book.title : '';
  elements.editBookAuthor.value = (book.author && book.author !== 'Unknown Author') ? book.author : '';
  
  if (elements.editBookError) elements.editBookError.textContent = '';

  // عرض نافذة التعديل ومنع التمرير في الخلفية
  elements.editBookModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  
  // ---> التعديل المطلوب: إغلاق بطاقة الكتاب (النافذة المنبثقة) فوراً <---
  if (typeof closeBookCard === 'function') {
    closeBookCard();
  }
  
  // التركيز تلقائياً على حقل العنوان
  setTimeout(() => elements.editBookTitle?.focus(), 100);
}
/**
 * يغلق نافذة تعديل الكتاب ويعيد تهيئة الواجهة.
 */
function closeEditBookModal() {
  if (!elements.editBookModal) return;
  
  elements.editBookModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  
  // تصفير النموذج استعداداً للمرة القادمة
  if (elements.editBookForm) elements.editBookForm.reset();
}

/**
 * يعالج عملية إرسال نموذج تعديل الكتاب ويحدث البيانات على الخادم (ESP32).
 * @param {Event} event - حدث الإرسال (Submit Event)
 */
async function handleEditBookSubmit(event) {
  event.preventDefault();

  // استخراج البيانات وتجاهل المسافات الزائدة
  const code = elements.editBookCode?.value.trim();
  const title = elements.editBookTitle?.value.trim();
  const author = elements.editBookAuthor?.value.trim();

  // 1. التحقق من صحة البيانات (Validation)
  if (!title) {
    if (elements.editBookError) {
      elements.editBookError.textContent = "يجب إدخال عنوان الكتاب.";
    }
    return;
  }

  // 2. تجهيز زر الإرسال (لمنع الإرسال المتكرر وتوضيح حالة التحميل)
  const submitBtn = event.target.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn ? submitBtn.textContent : "حفظ التغييرات";
  
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "جارٍ الحفظ..."; 
  }

  // 3. إرسال الطلب ومعالجة النتيجة
  try {
    const payload = { code, title, author, action: 'update' };
    
    await fetchJson('/barcode', {
      method: 'POST',
      body: JSON.stringify(payload)
    });

    // إشعار بالنجاح وإغلاق النوافذ
    showToast("تم تحديث بيانات الكتاب بنجاح!");
    closeEditBookModal();
    
    if (typeof closeBookCard === 'function') {
      closeBookCard(); // إغلاق البطاقة المنبثقة للكتاب إذا كانت مفتوحة في الخلفية
    }
    
    // إعادة جلب البيانات لتحديث الرفوف بشكل لحظي
    await loadDashboardData(); 

  } catch (error) {
    console.error("Edit Book Error:", error);
    if (elements.editBookError) {
      elements.editBookError.textContent = `فشل التحديث: ${error.message}`;
    } else {
      showToast(`فشل التحديث: ${error.message}`, true);
    }
  } finally {
    // 4. إعادة زر الإرسال لحالته الطبيعية دائماً (حتى في حال الفشل)
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  }
}

// --- إعدادات الـ WebSocket الجديدة ---
let gateway = `ws://${window.location.hostname}/ws`;
let websocket;

function initWebSocket() {
  console.log('محاولة فتح اتصال WebSocket...');
  websocket = new WebSocket(gateway);
  
  websocket.onopen = () => {
    console.log('تم فتح الاتصال بنجاح');
    setConnectionBadge('Connected', 'status-success');
  };

  websocket.onclose = () => {
    console.log('تم إغلاق الاتصال');
    setConnectionBadge('Offline', 'status-error');
    // محاولة إعادة الاتصال تلقائياً كل 3 ثوانٍ في حال الانقطاع
    setTimeout(initWebSocket, 3000);
  };

  websocket.onmessage = onMessage;
}

// معالجة البيانات المستلمة لحظياً
function onMessage(event) {
  try {
    const data = JSON.parse(event.data);
    
    // التفاعل بناءً على نوع البيانات المرسلة من ESP32
    if (data.type === "rfid_scan") {
      showToast(t("scannedUidReady", { uid: data.uid }));
      
      // 1. إدخال الكود تلقائياً في خانة تسجيل/تعديل الطالب
      let studentUidInput = document.getElementById("studentUidInput");
      if (studentUidInput) {
          studentUidInput.value = data.uid;
      }

      // 2. إدخال الكود تلقائياً في خانة استعارة الكتب (الخطوة 2)
      let borrowStudentId = document.getElementById("borrowStudentId");
      if (borrowStudentId) {
          borrowStudentId.value = data.uid;
      }

      if (isAuthenticated()) {
        // تحديث بيانات الطالب الممسوح في السجل فوراً
        loadDashboardData(); 
      }
    } 
    else if (data.type === "status_update") {
      // تحديث حالة النظام (الذاكرة، الازدحام، الوقت) بدون طلب HTTP
      state.status = normalizeStatus(data.payload);
      renderStatus();
    }
  } catch (e) {
    console.error("خطأ في معالجة رسالة WebSocket:", e);
  }
}
// ─── Event binding ────────────────────────────────────────────────────────────

function bindEvents() {
  elements.loginForm.addEventListener('submit', handleLogin);
  elements.studentRegistryForm?.addEventListener("submit", handleStudentRegistrySubmit);
  elements.scanRfidButton?.addEventListener("click", () => syncScannedRfid(true));
  elements.updateStudentButton?.addEventListener("click", handleStudentRegistryUpdate);
  elements.deleteStudentButton?.addEventListener("click", handleStudentRegistryDelete);
  elements.downloadHistoryButton?.addEventListener("click", () => exportHistoryToExcel());
  if (elements.themeToggleButton) {
    elements.themeToggleButton.addEventListener('click', toggleTheme);
  }
  if (elements.languageToggleButton) {
    elements.languageToggleButton.addEventListener('click', toggleLanguage);
  }
  elements.refreshButton.addEventListener('click', async () => {
    setRefreshBusy(true);
    try {
      await loadDashboardData();
      showToast(t("connectedToast"));
    } catch (error) {
      showToast(error.message, true);
    } finally {
      setRefreshBusy(false);
    }
  }); // <-- إغلاق دالة زر التحديث بشكل صحيح هنا
  // ربط أحداث نافذة تعديل الكتب
  if (elements.editBookForm) {
    elements.editBookForm.addEventListener('submit', handleEditBookSubmit);
  }
  if (elements.closeEditBookModalBtn) {
    elements.closeEditBookModalBtn.addEventListener('click', closeEditBookModal);
  }
  // تفعيل البحث اللحظي بمجرد الكتابة
  if (elements.studentSearchInput) {
    elements.studentSearchInput.addEventListener('input', renderStudentsTable);
  }
  if (elements.bookSearchInput) {
    elements.bookSearchInput.addEventListener('input', renderBookshelf);
  }

// --- كود الشريط المنزلق (Sliding Action Bar) ---
  const settingsToggleBtn = document.getElementById('settingsToggleBtn');
  const slidingActions = document.getElementById('slidingActions');

  if (settingsToggleBtn && slidingActions) {
    // فتح وإغلاق الشريط عند الضغط على الترس
    settingsToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      slidingActions.classList.toggle('open');
      settingsToggleBtn.classList.toggle('active');
    });

    // إغلاق الشريط تلقائياً عند الضغط في أي مكان خارج الشريط العلوي
    document.addEventListener('click', (e) => {
      if (!document.getElementById('topbarControls').contains(e.target)) {
        slidingActions.classList.remove('open');
        settingsToggleBtn.classList.remove('active');
      }
    });
  }
  // ------------------------------------------------
// --- أكواد زر الهامبرغر للموبايل ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const sidebar = document.querySelector('.sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');

  // مسارات الأيقونات (SVG Paths)
  const menuIconPath = "M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"; // شكل ☰
  const closeIconPath = "M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"; // شكل ✖

  function toggleSidebar() {
    sidebar.classList.toggle('open');
    const svgIcon = mobileMenuBtn.querySelector('path');
    const svgElement = mobileMenuBtn.querySelector('svg');

    // إضافة حركة دوران ناعمة للأيقونة
    svgElement.style.transition = "transform 0.3s ease";

    if (sidebar.classList.contains('open')) {
      // إذا فتحت القائمة: أظهر طبقة التظليل، حول الأيقونة إلى ✖، وقم بتدويرها
      sidebarOverlay.classList.remove('hidden');
      setTimeout(() => sidebarOverlay.classList.add('show'), 10);
      document.body.classList.add('modal-open');
      
      svgIcon.setAttribute('d', closeIconPath);
      svgElement.style.transform = "rotate(90deg)";
    } else {
      // إذا أغلقت القائمة: اخفِ التظليل، أعد الأيقونة إلى ☰، وأعدها لوضعها الطبيعي
      sidebarOverlay.classList.remove('show');
      setTimeout(() => sidebarOverlay.classList.add('hidden'), 300);
      document.body.classList.remove('modal-open');
      
      svgIcon.setAttribute('d', menuIconPath);
      svgElement.style.transform = "rotate(0deg)";
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener('click', toggleSidebar);
  
  // ... (باقي كود إغلاق القائمة التلقائي يبقى كما هو)
  


  // إغلاق القائمة تلقائياً عند اختيار أي قسم (Dashboard, Books...)
  elements.navLinks.forEach(button => {
    button.addEventListener('click', () => {
      setView(button.dataset.view);
      // إذا كانت الشاشة موبايل والقائمة مفتوحة، أغلقها بعد الضغط
      if (window.innerWidth <= 760 && sidebar.classList.contains('open')) {
        toggleSidebar();
      }
    });
  });
  // ------------------------------------

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
      if (!elements.editBookModal.classList.contains('hidden')) closeEditBookModal();
      if (!elements.borrowFlowModal.classList.contains('hidden')) closeBorrowModal();
      closeBookCard();
    }
  });

  // Network state
  window.addEventListener('offline', () => {
    stopAutoRefresh();
    stopRfidScanPolling();
    setConnectionBadge('Offline', 'status-error');
    showToast(t("networkLost"), true);
  });
  window.addEventListener('online', () => {
    startAutoRefresh();
    startRfidScanPolling();
    loadDashboardData().catch(console.error);
    showToast(t("networkRestored"));
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
  applyTheme(state.theme, false);
  applyLanguage(state.language, false);
  bindEvents();
  elements.appShell.classList.remove('hidden');

  const wasAuthenticated = sessionStorage.getItem('library-dashboard-auth') === '1';
  setAuthenticated(wasAuthenticated);

  try {
    // 1. جلب البيانات الأولية مرة واحدة عند فتح الموقع
    await loadDashboardData();
    
    // 2. تشغيل اتصال الـ WebSocket السريع بدلاً من الـ Polling المزعج
    initWebSocket(); 
    
    /* تم إيقاف هذه الدوال القديمة لحماية المعالج 
    startAutoRefresh();
    startRfidScanPolling();
    */
  } catch (error) {
    showToast(error.message, true);
  }
}

initializeDashboard().catch((error) => {
  console.error(error);
  showToast(t("initFailed"), true);
});
// تسجيل PWA Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(registration => {
        console.log('✅ PWA ServiceWorker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('❌ ServiceWorker registration failed:', error);
      });
  });
}