(function(){
  "use strict";

  /* ===================== i18n dictionary ===================== */
  var dict = {
    "meta.title": {
      en: "Construction Material Supplier in Layla, Al-Aflaj, Riyadh Region, Saudi Arabia | Mahawer Al-Aboor",
      ar: "مؤسسة محور العبور للنقليات | توريد ونقل مواد البناء"
    },
    "meta.desc": {
      en: "Mahawer Al-Aboor supplies soil, sand, stone aggregates, blocks and asphalt, with construction material transportation in Layla, Al-Aflaj, Riyadh Region, Saudi Arabia.",
      ar: "توريد ونقل مواد البناء - التربة والرمل والحصى والبلوك والإسفلت - لمشاريع في ليلى والأفلاج ومنطقة الرياض."
    },
    "brand.en": { en: "Mahawer Al-Aboor", ar: "Mahawer Al-Aboor" },
    "brand.ar": { en: "محور العبور", ar: "محور العبور" },
    "brand.fullEn": { en: "Mahawer Al-Aboor Transport Est.", ar: "Mahawer Al-Aboor Transport Est." },
    "brand.fullAr": { en: "مؤسسة محور العبور للنقليات", ar: "مؤسسة محور العبور للنقليات" },

    "nav.home": { en: "Home", ar: "الرئيسية" },
    "nav.about": { en: "About", ar: "من نحن" },
    "nav.services": { en: "Services", ar: "خدماتنا" },
    "nav.materials": { en: "Materials", ar: "المواد" },
    "nav.contact": { en: "Contact", ar: "تواصل معنا" },
    "nav.cta": { en: "Request a Quote", ar: "اطلب عرض سعر" },

    "hero.headline": { en: "Construction Materials, Supplied and Delivered", ar: "نورّد مواد البناء وننقلها إلى موقع مشروعك" },
    "hero.sub": { en: "We supply and transport soil, sand, stone, block, and asphalt for projects in Layla, Al-Aflaj, Riyadh Region, Saudi Arabia.", ar: "نوفر وننقل التربة والرمل والحصى والبلوك والإسفلت لمشاريع في ليلى، الأفلاج، ومنطقة الرياض." },
    "hero.cta1": { en: "Request a Quote", ar: "اطلب عرض سعر" },
    "hero.cta2": { en: "WhatsApp Us", ar: "تواصل عبر واتساب" },

    "trust.t1.label": { en: "Material Supply", ar: "توريد المواد" },
    "trust.t1.desc": { en: "Soil, sand, stone, aggregates, blocks and asphalt.", ar: "التربة والرمل والحصى والركام والبلوك والإسفلت." },
    "trust.t2.label": { en: "Transportation", ar: "النقل" },
    "trust.t2.desc": { en: "Material transportation and delivery.", ar: "نقل وتوصيل مواد البناء." },
    "trust.t3.label": { en: "Project Support", ar: "دعم المشاريع" },
    "trust.t3.desc": { en: "Operations and supply support.", ar: "عمليات ودعم توريد." },
    "trust.t4.label": { en: "Service Area", ar: "نطاق الخدمة" },
    "trust.t4.desc": { en: "Layla, Al-Aflaj, Riyadh Region, Saudi Arabia", ar: "ليلى، الأفلاج، منطقة الرياض، المملكة العربية السعودية" },

    "about.headline": { en: "About Us", ar: "من نحن" },
    "about.body": {
      en: "Mahawer Al-Aboor Transport Est. supplies and transports construction materials — soil, sand, stone, aggregates, blocks, and asphalt — for projects in Layla, Al-Aflaj, Riyadh Region, Saudi Arabia. Our services cover both material supply and transportation, from sourcing through to delivery on site.",
      ar: "تقدم مؤسسة محور العبور للنقليات خدمات توريد ونقل مواد البناء - التربة والرمل والحصى والركام والبلوك والإسفلت - لمشاريع في ليلى والأفلاج ومنطقة الرياض. تغطي خدماتنا التوريد والنقل معًا، من التوريد وحتى التسليم في الموقع."
    },

    "services.headline": { en: "Our Services", ar: "خدماتنا" },
    "services.cta": { en: "Request a Quote", ar: "اطلب عرض سعر" },
    "services.soil.name": { en: "Soil Supply", ar: "توريد التربة" },
    "services.soil.desc": { en: "Construction soil supply for projects in Layla, Al-Aflaj, Riyadh Region, Saudi Arabia.", ar: "توريد تربة مناسبة لمتطلبات مشاريع البناء في ليلى والأفلاج والرياض." },
    "services.sand.name": { en: "Sand Supply", ar: "توريد الرمل" },
    "services.sand.desc": { en: "Sand supply for construction projects and work sites in the service area.", ar: "توريد الرمل لمشاريع البناء ومواقع العمل في نطاق الخدمة." },
    "services.stone.name": { en: "Stone & Aggregates", ar: "الحصى والركام" },
    "services.stone.desc": { en: "Stone, gravel and aggregates supply for construction needs.", ar: "توريد الحجر والحصى والركام لمشاريع واحتياجات البناء." },
    "services.block.name": { en: "Block Supply", ar: "توريد البلوك" },
    "services.block.desc": { en: "Construction block supply for projects and delivery sites in the region.", ar: "توريد بلوك البناء للمشاريع ومواقع التسليم في المنطقة." },
    "services.asphalt.name": { en: "Asphalt Supply", ar: "توريد الإسفلت" },
    "services.asphalt.desc": { en: "Asphalt supply for construction projects and road work.", ar: "توريد الإسفلت لمتطلبات مشاريع البناء وأعمال الطرق." },
    "services.transport.name": { en: "Transportation & Delivery", ar: "النقل والتوصيل" },
    "services.transport.desc": { en: "Construction material transportation and delivery to project sites in Layla, Al-Aflaj, Riyadh Region, Saudi Arabia.", ar: "نقل وتوصيل مواد البناء إلى مواقع المشاريع في ليلى والأفلاج والرياض." },
    "services.ops.name": { en: "Operations & Supply", ar: "العمليات والتوريد" },
    "services.ops.desc": { en: "Operations support and coordination for project material supply.", ar: "دعم عمليات التوريد وتنظيم احتياجات مواد البناء للمشاريع." },

    "materials.headline": { en: "Materials We Supply", ar: "المواد التي نوفرها" },
    "materials.note": { en: "Contact us for the type and quantity your project needs.", ar: "تواصل معنا لمعرفة النوع والكمية المناسبة لمشروعك." },
    "materials.soil": { en: "Soil", ar: "التربة" },
    "materials.sand": { en: "Sand", ar: "الرمل" },
    "materials.stone": { en: "Stone / Aggregates", ar: "الحصى والركام" },
    "materials.block": { en: "Blocks", ar: "البلوك" },
    "materials.asphalt": { en: "Asphalt", ar: "الإسفلت" },

    "process.headline": { en: "Supply & Delivery Process", ar: "خطوات التوريد والتسليم" },
    "process.s1.title": { en: "Requirement", ar: "المتطلبات" },
    "process.s1.desc": { en: "Customer provides the material or service requirement.", ar: "يزودنا العميل بمتطلبات المواد أو الخدمة." },
    "process.s2.title": { en: "Supply", ar: "التوريد" },
    "process.s2.desc": { en: "Required construction materials are arranged.", ar: "يتم تجهيز المواد المطلوبة." },
    "process.s3.title": { en: "Transportation", ar: "النقل" },
    "process.s3.desc": { en: "Materials are transported to the required location.", ar: "يتم نقل المواد إلى الموقع المطلوب." },
    "process.s4.title": { en: "Delivery", ar: "التسليم" },
    "process.s4.desc": { en: "Materials are delivered to the project site.", ar: "يتم تسليم المواد في موقع المشروع." },

    "why.headline": { en: "Why Mahawer Al-Aboor", ar: "لماذا محور العبور" },
    "why.w1.title": { en: "Construction Material Supply", ar: "توريد مواد البناء" },
    "why.w1.desc": { en: "Multiple confirmed material categories.", ar: "فئات متعددة من المواد المؤكدة." },
    "why.w2.title": { en: "Transportation & Delivery", ar: "النقل والتوصيل" },
    "why.w2.desc": { en: "Transportation support for supplied materials.", ar: "دعم نقل المواد الموردة." },
    "why.w3.title": { en: "Direct Communication", ar: "تواصل مباشر" },
    "why.w3.desc": { en: "Reach us directly by WhatsApp, phone, email, or Telegram.", ar: "تواصل مباشر عبر واتساب، الهاتف، البريد الإلكتروني وتيليجرام." },
    "why.w4.title": { en: "Local Service", ar: "خدمة محلية" },
    "why.w4.desc": { en: "Layla, Al-Aflaj, Riyadh Region, Saudi Arabia", ar: "ليلى، الأفلاج، منطقة الرياض، المملكة العربية السعودية" },

    "area.headline": { en: "Service Area", ar: "منطقة الخدمة" },
    "area.location": { en: "Layla, Al-Aflaj, Riyadh Region, Saudi Arabia", ar: "ليلى، الأفلاج، منطقة الرياض، المملكة العربية السعودية" },
    "area.body": { en: "Construction material supply and transportation services for projects in the surrounding region.", ar: "خدمات توريد ونقل مواد البناء للمشاريع في المنطقة المحيطة." },
    "area.mapCta": { en: "View on Google Maps ↗", ar: "عرض الموقع على خرائط Google ↗" },
    "area.mapCta": { en: "View on Google Maps", ar: "عرض الموقع على خرائط Google" },

    "quote.headline": { en: "Request a Quote", ar: "اطلب عرض سعر" },
    "quote.name": { en: "Full Name", ar: "الاسم الكامل" },
    "quote.company": { en: "Company Name (optional)", ar: "اسم الشركة (اختياري)" },
    "quote.phone": { en: "Phone Number", ar: "رقم الهاتف" },
    "quote.email": { en: "Email", ar: "البريد الإلكتروني" },
    "quote.service": { en: "Service / Material Required", ar: "الخدمة أو المادة المطلوبة" },
    "quote.otherDesc": { en: "Please describe your request", ar: "يرجى وصف طلبك" },
    "quote.qty": { en: "Quantity (optional)", ar: "الكمية (اختياري)" },
    "quote.location": { en: "Delivery Location", ar: "موقع التسليم" },
    "quote.details": { en: "Project Details (optional)", ar: "تفاصيل المشروع (اختياري)" },
    "quote.submit": { en: "Send Inquiry", ar: "إرسال الطلب" },
    "quote.altWhatsapp": { en: "WhatsApp Us", ar: "تواصل عبر واتساب" },
    "quote.altCall": { en: "Call Us", ar: "اتصل بنا" },
    "quote.err.required": { en: "This field is required", ar: "هذا الحقل مطلوب" },
    "quote.err.email": { en: "Please enter a valid email", ar: "يرجى إدخال بريد إلكتروني صحيح" },
    "quote.opt.placeholder": { en: "Select a service / اختر الخدمة", ar: "اختر الخدمة / Select a service" },
    "quote.opt.soil": { en: "Soil Supply", ar: "توريد التربة" },
    "quote.opt.sand": { en: "Sand Supply", ar: "توريد الرمل" },
    "quote.opt.stone": { en: "Stone & Aggregates Supply", ar: "توريد الحصى والركام" },
    "quote.opt.block": { en: "Block Supply", ar: "توريد البلوك" },
    "quote.opt.asphalt": { en: "Asphalt Supply", ar: "توريد الإسفلت" },
    "quote.opt.transport": { en: "Transportation & Delivery", ar: "النقل والتوصيل" },
    "quote.opt.ops": { en: "Operations and Supply", ar: "العمليات والتوريد" },
    "quote.opt.other": { en: "Other", ar: "أخرى" },

    "contact.headline": { en: "Contact Us", ar: "تواصل معنا" },
    "contact.locationLabel": { en: "Location", ar: "الموقع" },
    "contact.locationValue": { en: "Layla, Al-Aflaj, Riyadh Region, Saudi Arabia", ar: "ليلى، الأفلاج، منطقة الرياض، المملكة العربية السعودية" },
    "contact.phoneLabel": { en: "Phone", ar: "الهاتف" },
    "contact.whatsappLabel": { en: "WhatsApp", ar: "واتساب" },
    "contact.emailLabel": { en: "Email", ar: "البريد الإلكتروني" },
    "contact.telegramLabel": { en: "Telegram", ar: "تيليجرام" },

    "footer.copyright": { en: "© 2026 Mahawer Al-Aboor Transport Est. All rights reserved.", ar: "© 2026 مؤسسة محور العبور للنقليات. جميع الحقوق محفوظة." }
  };

  var statusMsgs = {
    sending: { en: "Sending...", ar: "جاري الإرسال..." },
    success: { en: "Your quote request was sent successfully!", ar: "تم إرسال طلبك بنجاح!" },
    error: { en: "Something went wrong. Please try again.", ar: "حدث خطأ، حاول مرة أخرى." },
    fixErrors: { en: "Please check the highlighted fields.", ar: "يرجى مراجعة الحقول المحددة." }
  };

  var STORAGE_KEY = "mahawer-lang";

  function applyLanguage(lang){
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      var entry = dict[key];
      if (entry) el.textContent = entry[lang];
    });

    var titleEntry = dict["meta.title"];
    if (titleEntry) document.title = titleEntry[lang];
    var descEntry = dict["meta.desc"];
    if (descEntry){
      document.querySelectorAll('meta[data-i18n-meta="meta.desc"]').forEach(function(m){
        m.setAttribute("content", descEntry[lang]);
      });
    }
    if (titleEntry){
      document.querySelectorAll('meta[data-i18n-meta="meta.title"]').forEach(function(m){
        m.setAttribute("content", titleEntry[lang]);
      });
    }
    var ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content", lang === "ar" ? "ar_SA" : "en_GB");

    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e){}
  }

  function initLanguage(){
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch(e){}
    applyLanguage(saved === "en" ? "en" : "ar");
  }

  function toggleLanguage(){
    var current = document.documentElement.lang === "ar" ? "ar" : "en";
    applyLanguage(current === "ar" ? "en" : "ar");
  }

  document.addEventListener("DOMContentLoaded", function(){
    initLanguage();

    var switches = [document.getElementById("langSwitch")];
    switches.forEach(function(btn){
      if (btn) btn.addEventListener("click", toggleLanguage);
    });

    /* ---- mobile nav ---- */
    var hamburger = document.getElementById("hamburger");
    var nav = document.getElementById("mainNav");
    if (hamburger && nav){
      hamburger.addEventListener("click", function(){
        var isOpen = nav.classList.toggle("open");
        hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
      nav.querySelectorAll("a").forEach(function(a){
        a.addEventListener("click", function(){ nav.classList.remove("open"); hamburger.setAttribute("aria-expanded","false"); });
      });
    }

    /* ---- service row "Request a Quote" -> scroll + preselect ---- */
    document.querySelectorAll(".service-row").forEach(function(row){
      var btn = row.querySelector(".s-quote");
      if (!btn) return;
      btn.addEventListener("click", function(){
        var serviceEn = row.getAttribute("data-service");
        var select = document.getElementById("q-service");
        if (select){
          Array.prototype.forEach.call(select.options, function(opt){
            if (opt.value === serviceEn) select.value = serviceEn;
          });
          select.dispatchEvent(new Event("change"));
        }
        var target = document.getElementById("quote");
        if (target) target.scrollIntoView({ behavior: "smooth" });
        var nameField = document.getElementById("q-name");
        if (nameField) setTimeout(function(){ nameField.focus(); }, 400);
      });
    });

    /* ---- "Other" service reveal ---- */
    var serviceSelect = document.getElementById("q-service");
    var otherField = document.getElementById("otherField");
    if (serviceSelect && otherField){
      serviceSelect.addEventListener("change", function(){
        otherField.hidden = serviceSelect.value !== "Other";
      });
    }

    /* ---- step the floating WhatsApp button aside near the quote form ---- */
    var floatingBtn = document.querySelector(".floating-whatsapp");
    var quoteSection = document.getElementById("quote");
    if (floatingBtn && quoteSection && "IntersectionObserver" in window){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          floatingBtn.classList.toggle("is-hidden", entry.isIntersecting);
        });
      }, { threshold: 0.15 });
      io.observe(quoteSection);
    }

    /* ---- quote form: validate + submit to Web3Forms ---- */
    var form = document.getElementById("quoteForm");
    var statusEl = document.getElementById("quoteStatus");
    var isSubmitting = false;
    if (form){
      form.addEventListener("submit", function(e){
        e.preventDefault();
        if (isSubmitting) return;
        var lang = document.documentElement.lang === "ar" ? "ar" : "en";
        var requiredIds = ["q-name", "q-phone", "q-email", "q-service", "q-location"];
        var valid = true;

        requiredIds.forEach(function(id){
          var input = document.getElementById(id);
          var field = input.closest(".field");
          var isEmail = id === "q-email";
          var value = input.value.trim();
          var ok = value.length > 0 && (!isEmail || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
          field.classList.toggle("invalid", !ok);
          if (!ok) valid = false;
        });

        if (!valid){
          if (statusEl) statusEl.textContent = statusMsgs.fixErrors[lang];
          return;
        }

        var submitButton = form.querySelector('button[type="submit"]');
        var honeypot = form.elements.botcheck;
        if (honeypot && honeypot.checked) return;

        var formData = new FormData(form);
        formData.set("replyto", document.getElementById("q-email").value.trim());
        isSubmitting = true;
        if (statusEl) statusEl.textContent = statusMsgs.sending[lang];
        if (submitButton) submitButton.disabled = true;

        fetch(form.action, {
          method: form.method,
          body: formData
        })
          .then(function(response){
            if (!response.ok) throw new Error("Web3Forms request failed");
            return response.json();
          })
          .then(function(data){
            if (!data.success) throw new Error("Web3Forms submission failed");
            if (statusEl) statusEl.textContent = statusMsgs.success[lang];
            form.reset();
            if (otherField) otherField.hidden = true;
            form.querySelectorAll(".invalid").forEach(function(field){ field.classList.remove("invalid"); });
          })
          .catch(function(){
            if (statusEl) statusEl.textContent = statusMsgs.error[lang];
          })
          .then(function(){
            isSubmitting = false;
            if (submitButton) submitButton.disabled = false;
          });
      });
    }
  });
})();
