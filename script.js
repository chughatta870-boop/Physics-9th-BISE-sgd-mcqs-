const mcqs = [
  // === 2024 - 20 MCQs ===
  {q: "SI میں قوت کی اکائی کیا ہے؟", options: ["جول", "واٹ", "نیوٹن", "پاسکل"], ans: 2},
  {q: "رفتار کی SI اکائی؟", options: ["m/s", "m/s²", "kg", "N"], ans: 0},
  {q: "1 نیوٹن کتنے kg m/s² کے برابر ہے؟", options: ["1", "9.8", "10", "100"], ans: 0},
  {q: "کام کی اکائی؟", options: ["واٹ", "جول", "نیوٹن", "ہارٹز"], ans: 1},
  {q: "توانائی کی بنیادی اقسام کتنی ہیں؟", options: ["2", "3", "4", "5"], ans: 0},
  {q: "دباؤ کی SI اکائی؟", options: ["نیوٹن", "جول", "پاسکل", "واٹ"], ans: 2},
  {q: "آواز کی رفتار سب سے زیادہ کہاں؟", options: ["ہوا", "پانی", "لوہا", "خلا"], ans: 2},
  {q: "لینس کی طاقت کی اکائی؟", options: ["میٹر", "ڈائیوپٹر", "کینڈیلا", "ایمپیئر"], ans: 1},
  {q: "برقی رو کی SI اکائی؟", options: ["وولٹ", "اوہم", "ایمپیئر", "کولمب"], ans: 2},
  {q: "مقناطیسی میدان کی اکائی؟", options: ["ٹیسلا", "وولٹ", "واٹ", "جول"], ans: 0},
  {q: "وقت کی SI اکائی؟", options: ["منٹ", "گھنٹہ", "سیکنڈ", "دن"], ans: 2},
  {q: "کمیت کی SI اکائی؟", options: ["گرام", "کلوگرام", "ٹن", "پاؤنڈ"], ans: 1},
  {q: "طول کی SI اکائی؟", options: ["سینٹی میٹر", "میٹر", "کلومیٹر", "انچ"], ans: 1},
  {q: "طاقت کی اکائی؟", options: ["جول", "واٹ", "نیوٹن", "پاسکل"], ans: 1},
  {q: "کشش ثقل g کی مقدار؟", options: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "9.6 m/s²"], ans: 0},
  {q: "حرکت کی کتنی اقسام ہیں؟", options: ["2", "3", "4", "5"], ans: 1},
  {q: "جول اور نیوٹن میٹر کا تعلق؟", options: ["برابر", "الگ", "10 گنا", "100 گنا"], ans: 0},
  {q: "درجہ حرارت ناپنے کا آلہ؟", options: ["بیرومیٹر", "تھرما میٹر", "گیلوانومیٹر", "ایمیٹر"], ans: 1},
  {q: "کثافت کا فارمولا؟", options: ["m/v", "v/m", "m*d", "d/m"], ans: 0},
  {q: "مائع کا دباؤ کس پر منحصر؟", options: ["گہرائی", "کثافت", "g", "اوپر سب"], ans: 3},

  // === 2025 - 20 MCQs ===
  {q: "F = ma کا قانون کس نے دیا؟", options: ["نیوٹن", "آئنسٹائن", "گیلیو", "کولمب"], ans: 0},
  {q: "Kinetic Energy کا فارمولا؟", options: ["mgh", "1/2 mv²", "Fd", "Pt"], ans: 1},
  {q: "Potential Energy کہاں زیادہ؟", options: ["زمین پر", "بلندی پر", "درمیان میں", "برابر"], ans: 1},
  {q: "درجہ حرارت کی SI اکائی؟", options: ["سیلسیس", "فارن ہائیٹ", "کیلون", "جول"], ans: 2},
  {q: "Heat کا بہاؤ کس طرف؟", options: ["ٹھنڈے سے گرم", "گرم سے ٹھنڈے", "برابر", "رکتا ہے"], ans: 1},
  {q: "موج کی فریکوئنسی کی اکائی؟", options: ["میٹر", "سیکنڈ", "ہارٹز", "جول"], ans: 2},
  {q: "روشنی کی رفتار؟", options: ["3x10^6", "3x10^8", "3x10^10", "3x10^12"], ans: 1},
  {q: "اوہم کا قانون؟", options: ["V=IR", "P=VI", "F=ma", "W=Fd"], ans: 0},
  {q: "مزاحمت کی اکائی؟", options: ["ایمپیئر", "وولٹ", "اوہم", "واٹ"], ans: 2},
  {q: "Transformer کس پر کام کرتا ہے؟", options: ["DC", "AC", "دونوں", "کوئی نہیں"], ans: 1},
  {q: "مخصوص حرارت کی اکائی؟", options: ["J/kg°C", "J/kg", "kg°C", "J°C"], ans: 0},
  {q: "انرجی محفوظ رہتی ہے یہ قانون؟", options: ["پہلا", "دوسرا", "تیسرا", "چوتھا"], ans: 0},
  {q: "سادہ مشین کی مثال؟", options: ["لیور", "پولی", "جیک", "اوپر سب"], ans: 3},
  {q: "لہروں کی قسم؟", options: ["میکینیکل", "الیکٹرومیگنیٹک", "دونوں", "کوئی نہیں"], ans: 2},
  {q: "انعکاس کا قانون؟", options: ["i=r", "i>r", "i<r", "i=2r"], ans: 0},
  {q: "محدب عدسہ کی طاقت؟", options: ["مثبت", "منفی", "صفر", "متغیر"], ans: 0},
  {q: "برقی طاقت کا فارمولا؟", options: ["V=I/R", "P=VI", "W=Fd", "E=mc²"], ans: 1},
  {q: "فیوز کس لیے استعمال؟", options: ["کرنٹ بڑھانا", "کرنٹ روکنا", "حفاظت", "وولٹیج"], ans: 2},
  {q: "مقناطیس کے قطب کتنے؟", options: ["1", "2", "3", "4"], ans: 1},
  {q: "فلیمنگ کا دائیں ہاتھ کا قاعدہ؟", options: ["کرنٹ", "فورس", "میدان", "اوپر سب"], ans: 3},

  // === 2026 - 20 MCQs SNC نیا پیٹرن ===
  {q: "نیوکلیس میں کیا ہوتا ہے؟", options: ["الیکٹران", "پروٹان اور نیوٹران", "فوٹان", "پوزیٹران"], ans: 1},
  {q: "Radioactivity دریافت کس نے کی؟", options: ["میڈم کیوری", "نیوٹن", "آئنسٹائن", "فیراڈے"], ans: 0},
  {q: "Alpha Rays پر کیا چارج؟", options: ["مثبت", "منفی", "نیوٹرل", "متغیر"], ans: 0},
  {q: "سیمی کنڈکٹر کی مثال؟", options: ["تانبا", "سلور", "سلکان", "ایلومینیم"], ans: 2},
  {q: "Laser کا پورا نام؟", options: ["Light Amplification", "Laser Amplified", "Light Analysis", "Laser Atom"], ans: 0},
  {q: "Nuclear Fission میں کیا ہوتا ہے؟", options: ["جوہڑنا", "توڑنا", "پگھلنا", "ابالنا"], ans: 1},
  {q: "سونار کس میں استعمال؟", options: ["ہوا", "پانی", "زمین", "خلا"], ans: 1},
  {q: "X-Rays کی فریکوئنسی؟", options: ["کم", "درمیانی", "بہت زیادہ", "صفر"], ans: 2},
  {q: "GPS کس پر کام کرتا ہے؟", options: ["آواز", "ریڈیو ویوز", "مائیکرو ویوز", "الفا"], ans: 2},
  {q: "Solar Cell توانائی کو کس میں بدلتا ہے؟", options: ["حرکی", "برقی", "حرارتی", "کیمیائی"], ans: 1},
  {q: "Empirical Data کا ذریعہ؟", options: ["کتاب", "تجربہ", "قیاس", "انٹرنیٹ"], ans: 1},
  {q: "Significant Figures کس لیے؟", options: ["دقیق پیمائش", "اندازہ", "تخمینہ", "گول کرنا"], ans: 0},
  {q: "Error کی اقسام؟", options: ["2", "3", "4", "5"], ans: 1},
  {q: "Vector کی مثال؟", options: ["کمیت", "وقت", "فورس", "توانائی"], ans: 2},
  {q: "Scalar کی مثال؟", options: ["رفتار", "فاصلہ", "ایکسلیریشن", "مومنٹم"], ans: 1},
  {q: "Uniform Motion میں؟", options: ["رفتار یکساں", "ایکسلیریشن", "فورس", "کام"], ans: 0},
  {q: "Free Fall میں g کی سمت؟", options: ["اوپر", "نیچے", "دائیں", "بائیں"], ans: 1},
  {q: "Friction کم کرنے کا طریقہ؟", options: ["کھردرا", "چکنائی", "دباؤ", "وزن"], ans: 1},
  {q: "Archimedes کا اصول؟", options: ["دباؤ", "اچھال", "رفتار", "توانائی"], ans: 1},
  {q: "Pascal کا قانون؟", options: ["دباؤ منتقل", "توانائی", "رفتار", "قوت"], ans: 0}
];

let current = 0;
let score = 0;
let shuffled = [];

window.onload = function() {
  shuffled = mcqs.sort(() => Math.random() - 0.5);
  loadQuestion();
}

function loadQuestion() {
  document.getElementById("result").innerText = "";
  if(current >= shuffled.length) {
    document.getElementById("question").innerText = "🎉 کوئز ختم! 🎉";
    document.getElementById("options").innerHTML = "";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("score").innerText = "فائنل سکور: " + score + " / " + shuffled.length;
    return;
  }
  let q = shuffled[current];
  document.getElementById("question").innerText = "سوال " + (current+1) + ": " + q.q;
  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach((opt, i) => {
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.className = "option-btn";
    btn.onclick = () => checkAnswer(i, btn);
    optionsDiv.appendChild(btn);
  });
  document.getElementById("score").innerText = "Score: " + score + " / " + current;
  document.getElementById("nextBtn").style.display = "inline-block";
}

function checkAnswer(i, btn) {
  let allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach(b => b.disabled = true);
  if(i == shuffled[current].ans) {
    score++;
    btn.style.background = "#2563eb";
    btn.style.color = "white";
    document.getElementById("result").innerText = "✅ شاباش! صحیح جواب";
  } else {
    btn.style.background = "#dc2626";
    btn.style.color = "white";
    allBtns[shuffled[current].ans].style.background = "#2563eb";
    allBtns[shuffled[current].ans].style.color = "white";
    document.getElementById("result").innerText = "❌ غلط! صحیح جواب: " + shuffled[current].options[shuffled[current].ans];
  }
  document.getElementById("score").innerText = "Score: " + score + " / " + (current+1);
}

document.getElementById("nextBtn").onclick = () => {
  current++;
  loadQuestion();
}

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
