/* ============================================================
   SYNGEN — App Logic
   - EN / TH language switching
   - Nav scroll behavior
   - Hero canvas animation
   - DNA canvas animation
   - Scroll fade-in
   - Contact form
   ============================================================ */

'use strict';

/* ── Translations ── */
const translations = {
  en: {
    'nav.services':    'Services',
    'nav.process':     'Process',
    'nav.about':       'About',
    'nav.contact':     'Contact',

    'hero.tag':        'Genomic Sequencing · Thailand',
    'hero.line1':      'Precision',
    'hero.line2':      'Sequencing',
    'hero.line3':      'for Science.',
    'hero.sub':        'High-throughput genomic sequencing services\nfor research institutions and universities across Thailand.',
    'hero.cta1':       'Request a Quote',
    'hero.cta2':       'Our Services',
    'hero.scroll':     'Scroll',

    'stat.turnaround': 'Turnaround (Sanger)',
    'stat.accuracy':   'Base Call Accuracy',
    'stat.platforms':  'Sequencing Platforms',
    'stat.certified':  'Certified Laboratory',

    'services.tag':    '01 — Services',
    'services.title':  'What We Offer',
    'services.sub':    'End-to-end sequencing solutions — from sample receipt to final report — tailored for academic and research demands.',

    'svc1.title': '16S Amplicon Sequencing',
    'svc1.desc':  'Microbial community profiling via 16S rRNA gene amplicon sequencing. Ideal for diversity analysis, microbiome studies, and environmental samples.',
    'svc2.title': 'Next-Generation Sequencing',
    'svc2.desc':  'High-throughput short-read sequencing for whole genome, transcriptome, and targeted applications. Fast turnaround with exceptional depth.',
    'svc3.title': 'Third-Generation Sequencing',
    'svc3.desc':  'Long-read sequencing for resolving complex genomic regions, full-length transcripts, structural variants, and complete genome assembly.',
    'svc4.title': 'Bioinformatics Analysis',
    'svc4.desc':  'End-to-end data processing, variant annotation, and custom analysis pipelines delivered with publication-ready outputs and full documentation.',

    'process.tag':   '02 — Process',
    'process.title': 'How It Works',
    'process.sub':   'A streamlined workflow designed around the needs of research timelines.',

    'step1.title': 'Submit Request',
    'step1.desc':  'Complete our online form or contact us directly. Specify your project goals, sample type, and timeline requirements.',
    'step2.title': 'Sample Submission',
    'step2.desc':  'Ship or hand-deliver your samples with our standardized submission kit. We handle quality assessment upon arrival.',
    'step3.title': 'Library Preparation',
    'step3.desc':  'Samples are processed using validated library prep protocols optimised for your chosen sequencing approach.',
    'step4.title': 'Sequencing & Analysis',
    'step4.desc':  'High-throughput sequencing followed by rigorous bioinformatics analysis and quality control checks.',
    'step5.title': 'Data Delivery',
    'step5.desc':  'Receive your data via our secure portal with comprehensive reports, raw files, and ongoing support from our scientists.',

    'about.tag':   '03 — About',
    'about.title': 'Built for Research.',
    'about.p1':    'SynGen was founded to close the gap between cutting-edge genomic technology and the research institutions that need it most. Based in Thailand, we serve universities and public research centres across Southeast Asia.',
    'about.p2':    'Our team combines deep expertise in molecular biology, next-generation sequencing, and bioinformatics — ensuring that every dataset we deliver meets the standard required for publication and grant reporting.',
    'about.cta':   'Work With Us',

    'fact1.title': 'Thailand-Based',
    'fact1.desc':  'Local support, global standards',
    'fact2.title': 'Fast Turnaround',
    'fact2.desc':  'Results aligned to your project schedule',
    'fact3.title': 'Publication Ready',
    'fact3.desc':  'Data quality that meets journal standards',

    'contact.tag':   '04 — Contact',
    'contact.title': 'Start a Project',
    'contact.sub':   'Tell us about your research. We\'ll get back to you within one business day.',

    'form.name':        'Full Name',
    'form.institution': 'Institution',
    'form.email':       'Email Address',
    'form.service':     'Service of Interest',
    'form.select':      'Select a service',
    'form.other':       'Other / Not Sure',
    'form.message':     'Project Description',
    'form.submit':      'Send Request',
    'form.note':        'We typically respond within 1 business day.',

    'info.email':     'Email',
    'info.phone':     'Phone',
    'info.location':  'Location',
    'info.hours':     'Hours',
    'info.hours.val': 'Mon–Fri, 8:00–19:00 ICT',

    'footer.tagline':  'Genomic Sequencing Services\nChiang Mai, Thailand',
    'footer.services': 'Services',
    'footer.company':  'Company',
    'footer.copy':     'Registered in Thailand',
  },

  th: {
    'nav.services':    'บริการ',
    'nav.process':     'ขั้นตอน',
    'nav.about':       'เกี่ยวกับ',
    'nav.contact':     'ติดต่อ',

    'hero.tag':        'บริการจีโนมิกส์ · ประเทศไทย',
    'hero.line1':      'การจัดลำดับ',
    'hero.line2':      'ยีนที่แม่นยำ',
    'hero.line3':      'เพื่อวิทยาศาสตร์',
    'hero.sub':        'บริการจัดลำดับจีโนมประสิทธิภาพสูง\nสำหรับสถาบันวิจัยและมหาวิทยาลัยทั่วประเทศไทย',
    'hero.cta1':       'ขอใบเสนอราคา',
    'hero.cta2':       'บริการของเรา',
    'hero.scroll':     'เลื่อนลง',

    'stat.turnaround': 'เวลาดำเนินการ (Sanger)',
    'stat.accuracy':   'ความแม่นยำของผล',
    'stat.platforms':  'แพลตฟอร์มวิเคราะห์',
    'stat.certified':  'ห้องปฏิบัติการรับรองมาตรฐาน',

    'services.tag':    '01 — บริการ',
    'services.title':  'บริการของเรา',
    'services.sub':    'ครบวงจรตั้งแต่รับตัวอย่างจนถึงรายงานผล ออกแบบเพื่อตอบสนองความต้องการด้านวิชาการและงานวิจัย',

    'svc1.title': 'การจัดลำดับ 16S แอมพลิคอน',
    'svc1.desc':  'การวิเคราะห์ชุมชนจุลินทรีย์ผ่านการจัดลำดับยีน 16S rRNA เหมาะสำหรับการศึกษาความหลากหลาย ไมโครไบโอม และตัวอย่างจากสิ่งแวดล้อม',
    'svc2.title': 'การจัดลำดับยีนรุ่นที่สอง (NGS)',
    'svc2.desc':  'การจัดลำดับแบบอ่านสั้นประสิทธิภาพสูง สำหรับจีโนมทั้งหมด ทรานสคริปโตม และแอปพลิเคชันเฉพาะจุด รวดเร็วและครอบคลุมเชิงลึก',
    'svc3.title': 'การจัดลำดับยีนรุ่นที่สาม',
    'svc3.desc':  'การจัดลำดับแบบอ่านยาวสำหรับบริเวณจีโนมที่ซับซ้อน ทรานสคริปต์เต็มความยาว ตัวแปรโครงสร้าง และการประกอบจีโนมสมบูรณ์',
    'svc4.title': 'การวิเคราะห์ข้อมูลทางชีวสารสนเทศ',
    'svc4.desc':  'การประมวลผลข้อมูลครบวงจร การอธิบายตัวแปร และไปป์ไลน์การวิเคราะห์แบบกำหนดเอง พร้อมผลลัพธ์สำหรับการตีพิมพ์และเอกสารประกอบ',

    'process.tag':   '02 — ขั้นตอน',
    'process.title': 'ขั้นตอนการทำงาน',
    'process.sub':   'กระบวนการที่เป็นระบบ ออกแบบให้สอดคล้องกับตารางงานวิจัยของคุณ',

    'step1.title': 'ส่งคำขอ',
    'step1.desc':  'กรอกแบบฟอร์มออนไลน์หรือติดต่อเราโดยตรง ระบุเป้าหมายของโครงการ ประเภทตัวอย่าง และกรอบเวลาที่ต้องการ',
    'step2.title': 'ส่งตัวอย่าง',
    'step2.desc':  'จัดส่งหรือนำส่งตัวอย่างด้วยชุดส่งมอบมาตรฐานของเรา เราดำเนินการประเมินคุณภาพเมื่อได้รับตัวอย่าง',
    'step3.title': 'เตรียมไลบรารี',
    'step3.desc':  'ตัวอย่างจะถูกประมวลผลด้วยโปรโตคอลการเตรียมไลบรารีที่ผ่านการตรวจสอบ เหมาะสำหรับวิธีการจัดลำดับที่เลือก',
    'step4.title': 'การจัดลำดับและวิเคราะห์',
    'step4.desc':  'การจัดลำดับประสิทธิภาพสูงตามด้วยการวิเคราะห์ทางชีวสารสนเทศเชิงลึกและการตรวจสอบคุณภาพ',
    'step5.title': 'ส่งมอบข้อมูล',
    'step5.desc':  'รับข้อมูลผ่านพอร์ทัลที่ปลอดภัยพร้อมรายงานครบถ้วน ไฟล์ดิบ และการสนับสนุนจากนักวิทยาศาสตร์ของเรา',

    'about.tag':   '03 — เกี่ยวกับเรา',
    'about.title': 'สร้างเพื่องานวิจัย',
    'about.p1':    'SynGen ก่อตั้งขึ้นเพื่อเชื่อมช่องว่างระหว่างเทคโนโลยีจีโนมิกส์ล้ำสมัยกับสถาบันวิจัยที่ต้องการมากที่สุด ตั้งอยู่ในประเทศไทย เราให้บริการมหาวิทยาลัยและศูนย์วิจัยสาธารณะทั่วเอเชียตะวันออกเฉียงใต้',
    'about.p2':    'ทีมของเราผสมผสานความเชี่ยวชาญด้านชีววิทยาโมเลกุล การจัดลำดับยีนรุ่นใหม่ และชีวสารสนเทศ เพื่อให้แน่ใจว่าทุกชุดข้อมูลที่เราส่งมอบตรงตามมาตรฐานสำหรับการตีพิมพ์และรายงานทุน',
    'about.cta':   'ร่วมงานกับเรา',

    'fact1.title': 'ตั้งอยู่ในประเทศไทย',
    'fact1.desc':  'การสนับสนุนท้องถิ่น มาตรฐานระดับโลก',
    'fact2.title': 'ผลลัพธ์รวดเร็ว',
    'fact2.desc':  'ผลลัพธ์สอดคล้องกับตารางงานของโครงการคุณ',
    'fact3.title': 'พร้อมสำหรับการตีพิมพ์',
    'fact3.desc':  'คุณภาพข้อมูลตรงตามมาตรฐานวารสารวิชาการ',

    'contact.tag':   '04 — ติดต่อ',
    'contact.title': 'เริ่มโครงการ',
    'contact.sub':   'บอกเราเกี่ยวกับงานวิจัยของคุณ เราจะติดต่อกลับภายในหนึ่งวันทำการ',

    'form.name':        'ชื่อ-นามสกุล',
    'form.institution': 'สถาบัน',
    'form.email':       'อีเมล',
    'form.service':     'บริการที่สนใจ',
    'form.select':      'เลือกบริการ',
    'form.other':       'อื่นๆ / ยังไม่แน่ใจ',
    'form.message':     'รายละเอียดโครงการ',
    'form.submit':      'ส่งคำขอ',
    'form.note':        'เราตอบกลับภายใน 1 วันทำการโดยทั่วไป',

    'info.email':     'อีเมล',
    'info.phone':     'โทรศัพท์',
    'info.location':  'ที่ตั้ง',
    'info.hours':     'เวลาทำการ',
    'info.hours.val': 'จ.–ศ. 08:00–19:00 น. (เวลาไทย)',

    'footer.tagline':  'บริการจัดลำดับยีน\nเชียงใหม่ ประเทศไทย',
    'footer.services': 'บริการ',
    'footer.company':  'บริษัท',
    'footer.copy':     'จดทะเบียนในประเทศไทย',
  }
};

/* ── Language State ── */
let currentLang = 'en';

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!t[key]) return;
    const val = t[key].replace(/\n/g, '<br>');
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t[key];
    } else if (el.tagName === 'OPTION') {
      el.textContent = t[key];
    } else {
      el.innerHTML = val;
    }
  });
  document.documentElement.lang = lang;
  document.body.classList.toggle('lang-th', lang === 'th');
  document.title = lang === 'th'
    ? 'SynGen — บริการจัดลำดับยีน'
    : 'SynGen — Genomic Sequencing Services';
}

/* ── Language Toggle ── */
const langToggle = document.getElementById('langToggle');
const langLabel  = document.getElementById('langLabel');

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'th' : 'en';
  langLabel.textContent = currentLang === 'en' ? 'TH' : 'EN';
  applyTranslations(currentLang);
});

/* ── Nav Scroll ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Mobile Menu ── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ── Hero Canvas: Particle Grid ── */
(function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, dots, raf;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    buildDots();
  }

  function buildDots() {
    dots = [];
    const cols = Math.ceil(W / 64);
    const rows = Math.ceil(H / 64);
    for (let r = 0; r <= rows; r++) {
      for (let c = 0; c <= cols; c++) {
        dots.push({
          x:  c * 64 + (Math.random() - 0.5) * 20,
          y:  r * 64 + (Math.random() - 0.5) * 20,
          ox: c * 64,
          oy: r * 64,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r:  Math.random() * 1.2 + 0.4,
        });
      }
    }
  }

  const CONN_DIST = 90;
  let t = 0;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    t += 0.003;

    dots.forEach(d => {
      d.x += d.vx;
      d.y += d.vy;
      if (Math.abs(d.x - d.ox) > 24) d.vx *= -1;
      if (Math.abs(d.y - d.oy) > 24) d.vy *= -1;
    });

    // draw connections
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONN_DIST) {
          const alpha = (1 - dist / CONN_DIST) * 0.18;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(61,127,255,${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.stroke();
        }
      }
    }

    // draw dots
    dots.forEach((d, i) => {
      const pulse = 0.5 + 0.5 * Math.sin(t * 1.5 + i * 0.3);
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r + pulse * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(61,127,255,${0.25 + pulse * 0.15})`;
      ctx.fill();
    });

    raf = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    cancelAnimationFrame(raf);
    resize();
    draw();
  });

  resize();
  draw();
})();

/* ── DNA Canvas: Helix ── */
(function initDNACanvas() {
  const canvas = document.getElementById('dnaCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0, raf;

  const ACCENT  = '#3D7FFF';
  const ACCENT2 = 'rgba(61,127,255,0.38)';

  function resize() {
    // Match canvas internal resolution to its CSS display size
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    t += 0.016;

    const cx    = W / 2;
    const amp   = Math.min(W * 0.18, 72);
    const freq  = (Math.PI * 2) / H * 2.4;
    const steps = 90;

    const s1 = [], s2 = [];
    for (let i = 0; i <= steps; i++) {
      const y     = (i / steps) * H;
      const angle = freq * y - t;
      s1.push({ x: cx + Math.sin(angle) * amp, y });
      s2.push({ x: cx + Math.sin(angle + Math.PI) * amp, y });
    }

    // Strands
    [s1, s2].forEach((strand, si) => {
      ctx.beginPath();
      strand.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
      ctx.strokeStyle = si === 0 ? ACCENT : ACCENT2;
      ctx.lineWidth   = 1.5;
      ctx.stroke();
    });

    // Rungs + nodes
    const rungCount = 16;
    for (let r = 0; r < rungCount; r++) {
      const idx = Math.round(((r + 0.5) / rungCount) * steps);
      if (!s1[idx]) continue;
      const a = s1[idx], b = s2[idx];

      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = 'rgba(61,127,255,0.18)';
      ctx.lineWidth   = 1;
      ctx.stroke();

      [a, b].forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle   = ACCENT;
        ctx.globalAlpha = 0.65;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
    }

    raf = requestAnimationFrame(draw);
  }

  // Wait for layout, then start
  requestAnimationFrame(() => {
    resize();
    draw();
  });

  window.addEventListener('resize', () => {
    cancelAnimationFrame(raf);
    resize();
    draw();
  }, { passive: true });
})();

/* ── Scroll Fade-in ── */
(function initFadeIn() {
  const targets = [
    '.stats',
    '.service-card',
    '.process__step',
    '.about__left',
    '.about__right',
    '.contact__form',
    '.contact__info',
  ];

  const els = document.querySelectorAll(targets.join(','));
  els.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
})();

/* ── Contact Form ── */
(function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = form.querySelector('.btn--submit');
    const originalText = btn.textContent;

    btn.textContent = currentLang === 'en' ? 'Sending…' : 'กำลังส่ง…';
    btn.disabled = true;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        btn.textContent = currentLang === 'en' ? 'Message Sent ✓' : 'ส่งแล้ว ✓';
        btn.style.background = '#16a34a';
        form.reset();
      } else {
        btn.textContent = currentLang === 'en' ? 'Failed — Try Again' : 'ส่งไม่สำเร็จ ลองใหม่';
        btn.style.background = '#dc2626';
      }
    } catch (err) {
      btn.textContent = currentLang === 'en' ? 'Network Error' : 'เกิดข้อผิดพลาด';
      btn.style.background = '#dc2626';
    }

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.disabled = false;
    }, 3500);
  });
})();

/* ── Init ── */
applyTranslations(currentLang);
