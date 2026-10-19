const DEFAULT_DATA={
 videoUrl:"",
 students:[
  {name:"خالد عصام عبدالسلام شاكر",icon:"fa-laptop-code"},
  {name:"محمد محمود محمد محمود",icon:"fa-code"},
  {name:"محمد عادل عبدالرءوف حمدي",icon:"fa-lightbulb"},
  {name:"محمود محمد محمود حسين",icon:"fa-pen-ruler"},
  {name:"روناء علاءالدين احمد علي",icon:"fa-people-group"}
 ],
 hero:{title:"مدرسة العقال البحري الثانوية المشتركة",text:"مرحبًا بكم في الموقع التعريفي لمدرستنا، حيث يجتمع العلم والطموح والإبداع لصناعة مستقبل أفضل.",address:"العقال البحري - محافظة أسيوط - جمهورية مصر العربية"},
 manager:{name:"الأستاذة / ليلى البدري",text:"نرحب بجميع زوار موقع مدرستنا، ونسعى دائمًا إلى توفير بيئة تعليمية متميزة تُنمّي قدرات الطلاب، وترسّخ قيم الأخلاق والتميز والإبداع.",image:"https://i.postimg.cc/bNfqSfvK/1.png"},
 officials:[
  {name:"محمد عبد اللطيف",role:"وزير التربية والتعليم",image:"https://i.postimg.cc/Pry0XgvD/2.png",bio:"نسعى إلى تطوير العملية التعليمية وبناء جيل قادر على الإبداع والابتكار."},
  {name:"محمد إبراهيم",role:"وكيل الوزارة",image:"https://i.postimg.cc/rmMDKvP0/3.png",bio:"دعم المدارس وتوفير بيئة تعليمية متميزة لجميع الطلاب."}
 ],
 phrases:[
  {icon:"fa-user-graduate",text:"طلابنا متفوقون"},
  {icon:"fa-chalkboard-teacher",text:"معلمونا متميزون"},
  {icon:"fa-school",text:"فصولنا نظيفة"},
  {icon:"fa-award",text:"إنجازاتنا عظيمة"}
 ],
 teachers:[
  ["نادي معبد","رياضيات","https://i.postimg.cc/brDdyx39/4.png","نسأل الله له دوام التوفيق والنجاح."],
  ["حمادة احمد","رياضيات","https://i.postimg.cc/RFJvCGM7/6.png","نسأل الله له دوام التوفيق والنجاح."],
  ["مراد سباق","رياضيات","https://i.postimg.cc/3JGZ86S6/5.png","نسأل الله له دوام التوفيق والنجاح."],

  ["جمال سيد","لغة عربية","https://i.postimg.cc/fWxhHVyq/7.png","نسأل الله له دوام التوفيق والنجاح."],
  ["ثريا عبدالرحيم","لغة عربية","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["علم الدين","لغة عربية","https://i.postimg.cc/h48HLNZ3/8.png","نسأل الله له دوام التوفيق والنجاح."],
  ["نبيلة هاشم","لغة عربية","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["هايدي","لغة عربية","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["فرحة مصبح","لغة عربية","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["عبدالحكيم","لغة عربية","https://i.postimg.cc/sxTPqdT3/dhkr.png","نسأل الله له دوام التوفيق والنجاح."],
  ["بسمة علي","لغة عربية","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],

  ["محمد ابراهيم","فرنساوي","https://i.postimg.cc/k4Rtrxz8/20.png","نسأل الله له دوام التوفيق والنجاح."],
  ["محمد عبدالرحمن","فرنساوي","https://i.postimg.cc/sxTPqdT3/dhkr.png","نسأل الله له دوام التوفيق والنجاح."],
  ["صلاح إسماعيل","فرنساوي","https://i.postimg.cc/cCY9JtgR/34.png","نسأل الله له دوام التوفيق والنجاح."],
  ["همام علي","فرنساوي","https://i.postimg.cc/4x0M4GnF/9.png","نسأل الله له دوام التوفيق والنجاح."],

  ["نجلاء عبدلفتاح","فيزياء","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["محمد شافع","فيزياء","https://i.postimg.cc/sxTPqdT3/dhkr.png","نسأل الله له دوام التوفيق والنجاح."],
  ["إبراهيم لبيب","كيمياء","https://i.postimg.cc/sxTPqdT3/dhkr.png","نسأل الله له دوام التوفيق والنجاح."],
  ["بخيت حبيب","كيمياء","https://i.postimg.cc/RhfftcTf/19.png","نسأل الله له دوام التوفيق والنجاح."],
  ["هناء كمال","علوم متكاملة","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["إيريني نادي","علوم متكاملة","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["فاطمة عمر","علوم متكاملة","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],

  ["محمد عبدالرحيم","لغة إنجليزية","https://i.postimg.cc/sxTPqdT3/dhkr.png","نسأل الله له دوام التوفيق والنجاح."],
  ["مايز إبراهيم","لغة إنجليزية","https://i.postimg.cc/rybt9Ydv/16.png","نسأل الله له دوام التوفيق والنجاح."],
  ["نهاد عبدالحميد","لغة إنجليزية","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["حنان سليمان","لغة إنجليزية","https://i.postimg.cc/52tydBFV/22.png","نسأل الله له دوام التوفيق والنجاح."],
  ["علي حسين","لغة إنجليزية","https://i.postimg.cc/NjRJtXqg/30.png","نسأل الله له دوام التوفيق والنجاح."],

  ["باسم بخيت","تاريخ","https://i.postimg.cc/8crdH8Tk/33.png","نسأل الله له دوام التوفيق والنجاح."],
  ["نهلة احمد","تاريخ","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["نصرة بسيط","تاريخ","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["منال يوسف","تاريخ","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["سحر محمد","تاريخ","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["ايه احمد","تاريخ","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],

  ["هبة سيد","فلسفة ومنطق","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["عبير صديق","فلسفة ومنطق","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["أمل كمال","فلسفة ومنطق","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],

  ["عفاف بهنان","نشاط","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["علام إبراهيم","نشاط","https://i.postimg.cc/ht4z4FNR/21.png","نسأل الله له دوام التوفيق والنجاح."],
  ["احمد عبدالجواد","نشاط","https://i.postimg.cc/sxTPqdT3/dhkr.png","نسأل الله له دوام التوفيق والنجاح."],
  ["فاطمة احمد","نشاط","https://i.postimg.cc/mk6qcW8s/28.png","نسأل الله له دوام التوفيق والنجاح."],
  ["كريمان محمد","نشاط","https://i.postimg.cc/N0h37YtS/27.png","نسأل الله له دوام التوفيق والنجاح."],
  ["سيف الدين","نشاط","https://i.postimg.cc/fL7D0y01/24.png","نسأل الله له دوام التوفيق والنجاح."],

  ["عاطف محمود","تربية رياضية","https://i.postimg.cc/wTLcRdWP/18.png","نسأل الله له دوام التوفيق والنجاح."],
  ["غادة عثمان","نشاط","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],

  ["سمحاء","ثقافة مالية","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],

  ["رشا عاطف","برمجة","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["لقاء مصطفى","برمجة","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["شيماء نعمان","برمجة","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["محمد حسين","برمجة","https://i.postimg.cc/xC8cvKn7/17.png","نسأل الله له دوام التوفيق والنجاح."]
 ],
 gallery:[
  "https://i.postimg.cc/wjL2xPvx/IMG-20261005-WA0027.jpg","https://i.postimg.cc/RhW1kpyr/IMG-20261005-WA0028.jpg","https://i.postimg.cc/PqqMbqyJ/IMG-20261005-WA0030.jpg","https://i.postimg.cc/Zn6PYvYS/IMG-20261005-WA0056.jpg","https://i.postimg.cc/CLVHP7JY/IMG-20261005-WA0055.jpg","https://i.postimg.cc/Jzr3mh96/IMG-20261005-WA0031.jpg","https://i.postimg.cc/BnmTv031/IMG-20261005-WA0032.jpg","https://i.postimg.cc/cHnwTtnt/IMG-20261005-WA0034.jpg","https://i.postimg.cc/XqWG8HWx/IMG-20261005-WA0058.jpg"
 ],
 activities:[
  ["الرياضة","fa-futbol"],["الإذاعة","fa-microphone"],["المسرح","fa-masks-theater"],["الصحافة","fa-newspaper"],["الدوري الرياضي المدرسي","fa-trophy"]
 ],
 schedule:[
  ["6:45 صباحًا","الطابور","بداية اليوم المدرسي"],
  ["7:00 صباحًا","بداية الحصص","بدء الحصص الدراسية"],
  ["10:00 صباحًا","الفسحة","استراحة"],
  ["حسب السنة الدراسية","نهاية اليوم","وفق الجدول المعتمد"]
 ],
 vision:{title:"رؤيتنا",text:"إعداد جيل واعٍ قادر على التفكير والإبداع والمنافسة، يمتلك المهارات العلمية والأخلاقية التي تؤهله لبناء مستقبل أفضل."},
 mission:{title:"رسالتنا",text:"توفير بيئة تعليمية آمنة ومحفزة تعتمد على الجودة والابتكار، وتنمية شخصية الطالب علميًا وأخلاقيًا واجتماعيًا."},
 values:["الاحترام","الانضباط","التعاون","الإبداع","المسؤولية","التميز"],
 faq:[
  ["ما مواعيد الدراسة؟","تبدأ الدراسة من الساعة 7:00 صباحًا."],
  ["هل يوجد أنشطة؟","نعم، توجد أنشطة رياضية وثقافية وفنية، بالإضافة إلى الدوري الرياضي المدرسي."],
  ["هل يوجد معمل حاسب؟","نعم، يوجد معمل حاسب مجهز."]
 ],
 contact:{title:"مدرسة العقال البحري الثانوية المشتركة",address:"العقال البحري - محافظة أسيوط - جمهورية مصر العربية"}
};

const TEAM_NAMES=["خالد عصام عبدالسلام شاكر","محمد محمود محمد محمود","محمد عادل عبدالرءوف حمدي","محمود محمد محمود حسين","روناء علاءالدين احمد علي"];
const firebaseConfig = window.SCHOOL_FIREBASE_CONFIG || {};
const firebaseReady = !!(
  firebaseConfig.apiKey &&
  !/YOUR_API_KEY|ضع هنا|REPLACE_ME/i.test(firebaseConfig.apiKey) &&
  firebaseConfig.authDomain &&
  firebaseConfig.projectId &&
  firebaseConfig.projectId !== "YOUR_PROJECT_ID" &&
  firebaseConfig.appId &&
  !/YOUR_APP_ID|REPLACE_ME/i.test(firebaseConfig.appId)
);
let firebaseApp=null, firestore=null, auth=null;
if(firebaseReady && window.firebase){firebaseApp=firebase.initializeApp(window.SCHOOL_FIREBASE_CONFIG);firestore=firebase.firestore();auth=firebase.auth();}
let data=loadData(), admin=false, password=localStorage.getItem("schoolAdminPassword")||"KAREZMATIK2026";
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function loadData(){
 try{
  const saved=JSON.parse(localStorage.getItem("schoolSiteData"));
  return saved?{...structuredClone(DEFAULT_DATA),...saved,students:Array.isArray(saved.students)?saved.students:structuredClone(DEFAULT_DATA.students)}:structuredClone(DEFAULT_DATA);
 }catch{return structuredClone(DEFAULT_DATA)}
}

let lastSyncedData = structuredClone(DEFAULT_DATA);
let saveInProgress = false;

async function saveData() {
  if (!admin) {
    toast("لازم تسجل دخول المشرف أولًا");
    return;
  }

  if (!firestore || !auth || !auth.currentUser) {
    toast("Firebase غير متصل؛ لم يتم حفظ التعديل للجميع");
    return;
  }

  if (saveInProgress) {
    toast("انتظر انتهاء عملية الحفظ الحالية");
    return;
  }

  saveInProgress = true;

  const updatedData = structuredClone(data);

  try {
    await firestore
      .collection("schoolSite")
      .doc("content")
      .set(updatedData);

    lastSyncedData = structuredClone(updatedData);
    localStorage.setItem("schoolSiteData", JSON.stringify(updatedData));
    renderAll();
    toast("تم حفظ التعديل بنجاح على الموقع");
  } catch (error) {
    console.error("Firebase save error:", error);
    data = structuredClone(lastSyncedData);
    localStorage.setItem("schoolSiteData", JSON.stringify(data));
    renderAll();
    toast("فشل الحفظ على الإنترنت؛ تم إلغاء التعديل غير المحفوظ");
  } finally {
    saveInProgress = false;
  }
}

function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function adminTools(type,index=null){if(!admin)return "";return `<div class="inline-admin"><button onclick="openEditor('${type}',${index===null?"null":index})" title="تعديل">✏️</button><button onclick="deleteItem('${type}',${index===null?"null":index})" title="حذف">🗑️</button></div>`}
function renderAll(){
 document.body.classList.toggle("admin-mode", admin);
 const teacherAdminBar = $("#teacherAdminBar");  if (teacherAdminBar) {
    teacherAdminBar.hidden = !admin;
  }
 $("#heroTitle").innerHTML=esc(data.hero.title).replace("الثانوية المشتركة","<strong>الثانوية المشتركة</strong>");
 $("#heroText").textContent=data.hero.text; $("#heroAddress").textContent=data.hero.address;
 $("#managerImage").src=data.manager.image;$("#managerName").textContent=data.manager.name;$("#managerText").textContent=data.manager.text;
 $("#contactTitle").textContent=data.contact.title;$("#contactAddress").textContent=data.contact.address;
 $("#visionTitle").textContent=data.vision.title;$("#visionText").textContent=data.vision.text;$("#missionTitle").textContent=data.mission.title;$("#missionText").textContent=data.mission.text;
 renderOfficials();renderPhrases();renderStudents();renderTeachers();renderGallery();renderActivities();renderSchedule();renderValues();renderFaq();attachAdminControls();refreshExtraSections();watchAnimatedCards();
}
function renderOfficials(){$("#officialsGrid").innerHTML=data.officials.map((x,i)=>`<article class="leadership-card editable" data-editable>${adminTools("official",i)}<img src="${esc(x.image)}" alt=""><div><span class="role">${esc(x.role)}</span><h3>${esc(x.name)}</h3><p>${esc(x.bio)}</p></div></article>`).join("")}
function renderPhrases(){$("#phrasesGrid").innerHTML=data.phrases.map((x,i)=>`<div class="phrase editable" data-editable>${adminTools("phrase",i)}<i class="fa-solid ${esc(x.icon)}"></i><h3>${esc(x.text)}</h3></div>`).join("")}
function renderStudents(){
 const grid=$("#studentTeamGrid");if(!grid)return;
 const addBar=$("#studentAdminBar");if(addBar)addBar.hidden=!admin;
 const students=Array.isArray(data.students)?data.students:[];
 grid.innerHTML=students.map((student,i)=>`<article class="student-card editable" data-editable>${adminTools("student",i)}<span>${String(i+1).padStart(2,"0")}</span><i class="fa-solid ${esc(student.icon||"fa-user-graduate")}"></i><h3>${esc(student.name||"")}</h3><p>فريق تنفيذ الموقع</p></article>`).join("")||`<p class="students-empty">لا يوجد طلاب مضافون حاليًا.</p>`;
}
function renderTeachers(){
 const q=($("#teacherSearch")?.value||"").toLowerCase(), active=$(".filter-row button.active")?.dataset.filter||"all";
 const filtered=data.teachers.map((x,i)=>({x,i})).filter(({x})=>(active==="all"||x[1]===active)&&(!q||x.join(" ").toLowerCase().includes(q)));
 $("#teachersGrid").innerHTML=filtered.map(({x,i})=>`<article class="teacher-card editable" data-editable>${adminTools("teacher",i)}<img src="${esc(x[2])}" alt="${esc(x[0])}"><h3>${esc(x[0])}</h3><span class="subject">${esc(x[1])}</span><p>${esc(x[3])}</p><button class="teacher-more" type="button" data-teacher-index="${i}">اعرف أكثر <i class="fa-solid fa-arrow-left"></i></button></article>`).join("")||`<p>لا توجد نتائج.</p>`;
 $$(".teacher-more").forEach(b=>b.onclick=()=>showTeacherDetails(Number(b.dataset.teacherIndex)));
 const subjects=["الكل",...new Set(data.teachers.map(x=>x[1]))];
 $("#subjectFilters").innerHTML=subjects.map(s=>`<button data-filter="${esc(s)}" class="${active===s||(!active&&s==="الكل")?"active":""}">${esc(s)}</button>`).join("");
 $$("#subjectFilters button").forEach(b=>b.onclick=()=>{$$("#subjectFilters button").forEach(z=>z.classList.remove("active"));b.classList.add("active");renderTeachers()});
}
function renderGallery(){$("#galleryGrid").innerHTML=data.gallery.map((x,i)=>`<div class="gallery-item editable" data-editable>${adminTools("gallery",i)}<img src="${esc(x)}" alt="صورة من المدرسة" onclick="openLightbox('${esc(x)}')"></div>`).join("")}
function renderActivities(){$("#activitiesGrid").innerHTML=data.activities.map((x,i)=>`<article class="activity-card editable" data-editable>${adminTools("activity",i)}<i class="fa-solid ${esc(x[1])}"></i><h3>${esc(x[0])}</h3></article>`).join("")}
function renderSchedule(){$("#scheduleGrid").innerHTML=data.schedule.map((x,i)=>`<div class="schedule-item editable" data-editable>${adminTools("schedule",i)}<div class="schedule-time">${esc(x[0])}</div><div><div class="schedule-label">${esc(x[1])}</div><div class="schedule-note">${esc(x[2])}</div></div></div>`).join("")}
function renderValues(){$("#valuesGrid").innerHTML=data.values.map((x,i)=>`<div class="value editable" data-editable>${adminTools("value",i)}${esc(x)}</div>`).join("")}
function renderFaq(){$("#faqList").innerHTML=data.faq.map((x,i)=>`<div class="faq-item editable" data-editable>${adminTools("faq",i)}<button class="faq-q">${esc(x[0])}<i class="fa-solid fa-plus"></i></button><div class="faq-a">${esc(x[1])}</div></div>`).join("");$$(".faq-q").forEach(b=>b.onclick=()=>b.parentElement.classList.toggle("open"))}
function attachAdminControls(){
 if(!admin)return;
 const sections=[["hero","home"],["manager","manager"],["official","leadership"],["teacher","teachers"],["gallery","gallery"],["activity","activities"],["schedule","activities"],["value","values"],["faq","faq"],["contact","contact"]];
 sections.forEach(([type,id])=>{const el=$("#"+id);if(el&&!el.querySelector(":scope > .inline-admin")){el.classList.add("editable");el.insertAdjacentHTML("afterbegin",adminTools(type));}});
}
function openLightbox(src){
 $("#lightboxImage").src=src;
 $("#lightboxCaption").textContent="صورة من مدرسة العقال البحري الثانوية المشتركة";
 $("#lightbox").classList.add("show");
}
$("#lightboxClose").onclick=()=>$("#lightbox").classList.remove("show");
function toast(t){$("#toast").textContent=t;$("#toast").classList.add("show");setTimeout(()=>$("#toast").classList.remove("show"),2200)}
function openAdmin(){ $("#adminModal").classList.add("show"); $("#adminLogin").hidden=admin;$("#adminPanel").hidden=!admin}
$("#adminOpen").onclick=openAdmin;$$("[data-close-admin]").forEach(b=>b.onclick=()=>$("#adminModal").classList.remove("show"));

$("#loginBtn").onclick = async () => {
  const email = $("#adminEmail")?.value.trim() || "";
  const pass = $("#adminPassword").value;
  const allowedEmail =
    (window.SCHOOL_FIREBASE_CONFIG?.adminEmail || "").toLowerCase();

  if (!firebaseReady || !auth || !firestore) {
    toast("Firebase غير جاهز؛ راجع المكتبات وإعدادات الموقع");
    return;
  }

  if (email.toLowerCase() !== allowedEmail) {
    toast("هذا ليس بريد المشرف المعتمد");
    return;
  }

  try {
    const credential = await auth.signInWithEmailAndPassword(email, pass);

    if (credential.user.email.toLowerCase() !== allowedEmail) {
      await auth.signOut();
      toast("هذا الحساب ليس حساب المشرف المعتمد");
      return;
    }

    admin = true;

    const docRef = firestore.collection("schoolSite").doc("content");
    const doc = await docRef.get();

    // إنشاء البيانات لأول مرة فقط إذا لم يوجد مستند سابق.
    if (!doc.exists) {
      await docRef.set(structuredClone(data));
      lastSyncedData = structuredClone(data);
      localStorage.setItem("schoolSiteData", JSON.stringify(data));
    } else {
      data = {
        ...structuredClone(DEFAULT_DATA),
        ...doc.data(),
        students: Array.isArray(doc.data().students)
          ? doc.data().students
          : structuredClone(DEFAULT_DATA.students)
      };

      lastSyncedData = structuredClone(data);
      localStorage.setItem("schoolSiteData", JSON.stringify(data));
    }

    renderAll();
    $("#adminModal").classList.remove("show");
    toast("تم تسجيل دخول المشرف ومزامنة البيانات");
  } catch (error) {
    console.error("Admin login error:", error);
    admin = false;
    const code = error && error.code ? error.code : "";
    const messages = {
      "auth/invalid-email": "صيغة البريد الإلكتروني غير صحيحة",
      "auth/user-not-found": "لا يوجد حساب بهذا البريد في Firebase Authentication",
      "auth/wrong-password": "كلمة المرور غير صحيحة",
      "auth/invalid-credential": "البريد أو كلمة المرور غير صحيحة",
      "auth/too-many-requests": "محاولات كثيرة؛ انتظر قليلًا ثم حاول مجددًا",
      "auth/network-request-failed": "تحقق من اتصال الإنترنت",
      "auth/unauthorized-domain": "أضف نطاق الموقع إلى Authorized domains في Firebase Authentication",
      "permission-denied": "تم الدخول لكن صلاحيات Firestore تمنع قراءة/كتابة البيانات؛ راجع firestore.rules",
      "firestore/permission-denied": "صلاحيات Firestore تمنع الوصول للبيانات؛ راجع firestore.rules"
    };
    toast(messages[code] || ("تعذر تسجيل الدخول: " + (code || error.message || "خطأ غير معروف")));
  }
};

$("#logoutBtn").onclick=async()=>{admin=false;if(auth){try{await auth.signOut()}catch(e){console.error(e)}}renderAll();$("#adminModal").classList.remove("show");toast("تم تسجيل الخروج")};
$("#changePassword").onclick=async()=>{const p=prompt("اكتب كلمة المرور الجديدة (6 أحرف على الأقل):");if(!p)return;if(p.length<6){toast("كلمة المرور يجب أن تكون 6 أحرف على الأقل");return;}if(auth&&auth.currentUser){try{await auth.currentUser.updatePassword(p);toast("تم تغيير كلمة مرور حساب المشرف");}catch(e){console.error(e);toast("تعذر تغيير كلمة المرور؛ قد تحتاج إلى تسجيل الدخول من جديد.");}}else{password=p;localStorage.setItem("schoolAdminPassword",p);toast("تم تغيير كلمة المرور المحلية فقط");}};
$("#resetData").onclick=()=>{if(confirm("استعادة البيانات الأصلية؟ ستُحذف كل التعديلات المحلية.")){data=structuredClone(DEFAULT_DATA);saveData()}};
$("#teacherSearch").oninput=renderTeachers;
function form(title,fields,save){
 $("#editorContent").innerHTML=`<span class="eyebrow">تحرير المحتوى</span><h2>${esc(title)}</h2><div class="editor-form">${fields.map(f=>`<label>${esc(f.label)}<input id="ef_${f.key}" value="${esc(f.value)}"></label>`).join("")}<button class="save">حفظ</button></div>`;
 $("#editorModal").classList.add("show");$(".editor-form .save").onclick=()=>{save(Object.fromEntries(fields.map(f=>[f.key,$("#ef_"+f.key).value])));$("#editorModal").classList.remove("show");saveData()};
}
function openEditor(type,index=null){
 if(!admin){toast("سجّل دخول المشرف أولًا");return;}
 let x;
 if(type==="hero")return form("الرئيسية",[{key:"title",label:"العنوان",value:data.hero.title},{key:"text",label:"الوصف",value:data.hero.text},{key:"address",label:"العنوان",value:data.hero.address}],v=>data.hero=v);
 if(type==="manager")return form("كلمة المديرة",[{key:"name",label:"الاسم",value:data.manager.name},{key:"text",label:"الكلمة",value:data.manager.text},{key:"image",label:"رابط الصورة",value:data.manager.image}],v=>data.manager=v);
 if(type==="contact")return form("بيانات التواصل",[{key:"title",label:"العنوان الرئيسي",value:data.contact.title},{key:"address",label:"عنوان المدرسة",value:data.contact.address}],v=>data.contact=v);
 if(type==="official") {x=data.officials[index];return form("قيادة",[{key:"name",label:"الاسم",value:x.name},{key:"role",label:"المنصب",value:x.role},{key:"image",label:"رابط الصورة",value:x.image},{key:"bio",label:"النبذة",value:x.bio}],v=>data.officials[index]=v)}
 if(type==="teacher"){x=data.teachers[index];return form("معلم",[{key:"name",label:"الاسم",value:x[0]},{key:"subject",label:"المادة",value:x[1]},{key:"image",label:"رابط الصورة",value:x[2]},{key:"bio",label:"النبذة",value:x[3]}],v=>data.teachers[index]=[v.name,v.subject,v.image,v.bio])}
 if(type==="student"){x=data.students[index];if(!x)return;return form("تعديل اسم طالب",[{key:"name",label:"اسم الطالب",value:x.name||""},{key:"icon",label:"الأيقونة (Font Awesome)",value:x.icon||"fa-user-graduate"}],v=>data.students[index]={name:v.name.trim(),icon:v.icon.trim()||"fa-user-graduate"})}
 if(type==="gallery"){return form("صورة المعرض",[{key:"url",label:"رابط الصورة",value:data.gallery[index]}],v=>data.gallery[index]=v.url)}
 if(type==="activity"){x=data.activities[index];return form("نشاط",[{key:"name",label:"اسم النشاط",value:x[0]},{key:"icon",label:"أيقونة Font Awesome",value:x[1]}],v=>data.activities[index]=[v.name,v.icon])}
 if(type==="schedule"){x=data.schedule[index];return form("موعد",[{key:"time",label:"الوقت",value:x[0]},{key:"name",label:"الحدث",value:x[1]},{key:"note",label:"ملاحظة",value:x[2]}],v=>data.schedule[index]=[v.time,v.name,v.note])}
 if(type==="value"){return form("قيمة",[{key:"text",label:"النص",value:data.values[index]}],v=>data.values[index]=v.text)}
 if(type==="faq"){x=data.faq[index];return form("سؤال شائع",[{key:"q",label:"السؤال",value:x[0]},{key:"a",label:"الإجابة",value:x[1]}],v=>data.faq[index]=[v.q,v.a])}
  if(type==="phrase"){x=data.phrases[index];return form("عبارة",[{key:"text",label:"العبارة",value:x.text},{key:"icon",label:"أيقونة Font Awesome",value:x.icon}],v=>data.phrases[index]=v)}
}
function deleteItem(type,index){
 if(!admin){toast("سجّل دخول المشرف أولًا");return;}
 if(index===null)return;
 if(!confirm("هل تريد حذف هذا العنصر؟"))return;
 const map={official:"officials",teacher:"teachers",student:"students",gallery:"gallery",activity:"activities",schedule:"schedule",value:"values",faq:"faq",phrase:"phrases"};
 if(map[type])data[map[type]].splice(index,1);saveData();
}
function addItem(type){
 if(!admin){toast("سجّل دخول المشرف أولًا");return;}
 const defaults={
  official:["اسم جديد","المنصب","https://i.postimg.cc/zGrDmCMz/manager.png","نبذة جديدة"],
  teacher:["معلم جديد","المادة","https://i.postimg.cc/XNwQcPm3/t1.png","نبذة المعلم"],
  gallery:["https://i.postimg.cc/cLnqRWq9/g1.jpg"],activity:["نشاط جديد","fa-star"],schedule:["7:00 صباحًا","حدث جديد","ملاحظة"],value:["قيمة جديدة"],faq:["سؤال جديد","إجابة جديدة"],phrase:{text:"عبارة جديدة",icon:"fa-star"}
 };
 const d=defaults[type];
 if(type==="student")return form("إضافة طالب",[{key:"name",label:"اسم الطالب",value:"اسم الطالب الجديد"},{key:"icon",label:"الأيقونة (Font Awesome)",value:"fa-user-graduate"}],v=>data.students.push({name:v.name.trim(),icon:v.icon.trim()||"fa-user-graduate"}));
 if(type==="official")return form("إضافة قيادة",[{key:"name",label:"الاسم",value:d[0]},{key:"role",label:"المنصب",value:d[1]},{key:"image",label:"رابط الصورة",value:d[2]},{key:"bio",label:"النبذة",value:d[3]}],v=>data.officials.push(v));
 if(type==="teacher")return form("إضافة معلم",[{key:"name",label:"الاسم",value:d[0]},{key:"subject",label:"المادة",value:d[1]},{key:"image",label:"رابط الصورة",value:d[2]},{key:"bio",label:"النبذة",value:d[3]}],v=>data.teachers.push([v.name,v.subject,v.image,v.bio]));
 if(type==="gallery")return form("إضافة صورة",[{key:"url",label:"رابط الصورة",value:d[0]}],v=>data.gallery.push(v.url));
 if(type==="activity")return form("إضافة نشاط",[{key:"name",label:"النشاط",value:d[0]},{key:"icon",label:"أيقونة Font Awesome",value:d[1]}],v=>data.activities.push([v.name,v.icon]));
 if(type==="schedule")return form("إضافة موعد",[{key:"time",label:"الوقت",value:d[0]},{key:"name",label:"الحدث",value:d[1]},{key:"note",label:"ملاحظة",value:d[2]}],v=>data.schedule.push([v.time,v.name,v.note]));
 if(type==="value")return form("إضافة قيمة",[{key:"text",label:"النص",value:d[0]}],v=>data.values.push(v.text));
 if(type==="faq")return form("إضافة سؤال",[{key:"q",label:"السؤال",value:d[0]},{key:"a",label:"الإجابة",value:d[1]}],v=>data.faq.push([v.q,v.a]));
  if(type==="phrase")return form("إضافة عبارة",[{key:"text",label:"العبارة",value:d.text},{key:"icon",label:"أيقونة Font Awesome",value:d.icon}],v=>data.phrases.push(v));
}
$$("[data-admin-action]").forEach(b=>b.onclick=()=>openEditor(b.dataset.adminAction));
$$("[data-close-editor]").forEach(b=>b.onclick=()=>$("#editorModal").classList.remove("show"));
$("#adminModal").addEventListener("click",e=>{if(e.target.id==="adminModal")$("#adminModal").classList.remove("show")});
$("#editorModal").addEventListener("click",e=>{if(e.target.id==="editorModal")$("#editorModal").classList.remove("show")});
$("#menuBtn").onclick=()=>$("#mainNav").classList.toggle("open");
$("#themeBtn").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("darkMode",document.body.classList.contains("dark"))};
if(localStorage.getItem("darkMode")!=="false")document.body.classList.add("dark");
window.addEventListener("scroll",()=>{$(".site-header").classList.toggle("scrolled",scrollY>40);$("#topBtn").classList.toggle("show",scrollY>500)});
$("#topBtn").onclick=()=>scrollTo({top:0,behavior:"smooth"});
const observer=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("visible")),{threshold:.12});$$(".reveal").forEach(x=>observer.observe(x));

let unsubscribeSchoolData = null;

function syncInitialData() {
  if (!firestore) {
    renderAll();
    toast("المزامنة غير مفعلة؛ راجع إعدادات Firebase");
    return;
  }

  if (unsubscribeSchoolData) {
    unsubscribeSchoolData();
  }

  unsubscribeSchoolData = firestore
    .collection("schoolSite")
    .doc("content")
    .onSnapshot(
      (doc) => {
        if (doc.exists) {
          const remoteData = doc.data();

          data = {
            ...structuredClone(DEFAULT_DATA),
            ...remoteData,
            students: Array.isArray(remoteData.students)
              ? remoteData.students
              : structuredClone(DEFAULT_DATA.students)
          };

          lastSyncedData = structuredClone(data);
          localStorage.setItem("schoolSiteData", JSON.stringify(data));
        }

        renderAll();
      },
      (error) => {
        console.error("Firebase sync error:", error);
        toast("تعذرت المزامنة مع قاعدة البيانات");
        renderAll();
      }
    );


}
window.addEventListener("load",()=>{syncInitialData();const loader=$("#cinematic-loader");const finish=()=>loader.classList.add("hide");const skip=$(".cinema-skip");if(skip){skip.onclick=finish;skip.onkeydown=e=>{if(e.key==="Enter"||e.key===" ")finish()}}setTimeout(finish,10500)});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){$$("#lightbox,.modal-backdrop").forEach(x=>x.classList.remove("show"))}});

function showTeacherDetails(index){
 const t=data.teachers[index];if(!t)return;
 $("#teacherDetailImage").src=t[2];$("#teacherDetailName").textContent=t[0];$("#teacherDetailSubject").textContent=t[1];$("#teacherDetailBio").textContent=t[3]||"نسأل الله له دوام التوفيق والنجاح.";
 $("#teacherModal").classList.add("show");
}
$("#teacherModalClose").onclick=()=>$("#teacherModal").classList.remove("show");
$("#teacherModal").addEventListener("click",e=>{if(e.target.id==="teacherModal")e.currentTarget.classList.remove("show")});
function refreshExtraSections(){
 const tc=$("#teacherCounter"),gc=$("#galleryCounter"),lc=$("#leaderCounter");
 if(tc)tc.dataset.count=data.teachers.length;if(gc)gc.dataset.count=data.gallery.length;if(lc)lc.dataset.count=data.officials.length;
 $$(".counter").forEach(el=>{el.textContent="0";el.dataset.counted="false"});
 animateCounters();
 const videoUrl=data.videoUrl||"";const frame=$("#schoolVideoFrame");
 if(frame){if(videoUrl){let embed=videoUrl;if(/youtube\.com\/watch\?v=/.test(videoUrl))embed=videoUrl.replace(/youtube\.com\/watch\?v=/,"youtube.com/embed/").split("&")[0];else if(/youtu\.be\//.test(videoUrl))embed="https://www.youtube.com/embed/"+videoUrl.split("youtu.be/")[1].split(/[?&]/)[0];if(/\.(mp4|webm|ogg)(\?.*)?$/i.test(videoUrl)){frame.innerHTML=`<video controls playsinline preload="metadata" src="${esc(videoUrl)}"></video>`}else if(/youtube\.com\/embed\//.test(embed)){frame.innerHTML=`<iframe src="${esc(embed)}" title="فيديو من المدرسة" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`}else{frame.innerHTML=`<div class="video-play"><i class="fa-solid fa-link"></i></div><h3>رابط الفيديو غير مدعوم</h3><p>استخدم رابط YouTube أو رابط ملف MP4 مباشر.</p>`}}}
 const setVideo=$("#setSchoolVideo");if(setVideo)setVideo.hidden=!admin;
}
$("#setSchoolVideo").onclick=()=>{if(!admin)return;const u=prompt("أدخل رابط فيديو تعريفي للمعلمين (YouTube أو MP4):",data.videoUrl||"");if(u!==null){data.videoUrl=u.trim();saveData()}};

function animateCounters(){
 const counters=$$(".counter");if(!counters.length)return;
 const run=el=>{if(el.dataset.counted==="true")return;el.dataset.counted="true";const target=Math.max(0,Number(el.dataset.count||0));const duration=1300,start=performance.now();const tick=now=>{const progress=Math.min((now-start)/duration,1);const eased=1-Math.pow(1-progress,3);el.textContent=Math.round(target*eased).toLocaleString("en-US");if(progress<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)};
 if(!window.IntersectionObserver){counters.forEach(run);return}
 const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){run(e.target);obs.unobserve(e.target)}}),{threshold:.25});counters.forEach(el=>obs.observe(el));
}

function watchAnimatedCards(){
 if(!window.IntersectionObserver)return;
 const targets=$$(".value,.teacher-card,.gallery-item");
 const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in-view");obs.unobserve(e.target)}}),{threshold:.08});targets.forEach((el,i)=>{el.style.transitionDelay=(i%5)*70+"ms";obs.observe(el)});
}
function shareSite(type){const url=window.location.href,title="مدرسة العقال البحري الثانوية المشتركة";if(type==="facebook")window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(url),"_blank");else if(type==="whatsapp")window.open("https://wa.me/?text="+encodeURIComponent(title+" "+url),"_blank");else if(type==="telegram")window.open("https://t.me/share/url?url="+encodeURIComponent(url)+"&text="+encodeURIComponent(title),"_blank");else if(navigator.clipboard)navigator.clipboard.writeText(url).then(()=>toast("تم نسخ رابط الموقع"));else{const ta=document.createElement("textarea");ta.value=url;document.body.appendChild(ta);ta.select();document.execCommand("copy");ta.remove();toast("تم نسخ رابط الموقع")}}
window.shareSite=shareSite;
window.openEditor=openEditor;window.deleteItem=deleteItem;window.addItem=addItem;window.openLightbox=openLightbox;
