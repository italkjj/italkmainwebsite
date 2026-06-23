// lang.js — multilingual support for ITALK website
// Supports KO (default), EN, ZH switching via setLang()
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     Translation dictionary
     Keys match data-i18n attributes used across all pages.
     KO is the DOM default — switching back to KO restores original text.
  ------------------------------------------------------------------ */
  var T = {
    en: {
      /* ── Navigation ── */
      'nav.home':      'Home',
      'nav.teachers':  'Teachers',
      'nav.videos':    'Videos',
      'nav.classvideo':'Class Videos',
      'nav.books':     'Books',
      'nav.guide':     'Guide',
      'nav.trial':     'Free Trial',
      'nav.login':     'Login / Sign Up',

      /* ── Index: Hero ── */
      'hero.badge':           '8 Years of Trust',
      'hero.h1.line1':        '8 Years of Excellence',
      'hero.h1.line2':        'ITALK Online English',
      'hero.p':               'Complete your English with personalized 1:1 lessons with native speakers. Experience growth through a tailored curriculum covering speaking, listening, and reading.',
      'hero.btn1':            'Start Free Trial',
      'hero.btn2':            'Meet Our Teachers',
      'hero.stat.students':   'Students',
      'hero.stat.students.suffix': '+',
      'hero.stat.hours':      'Total Lessons',
      'hero.stat.hours.suffix': ' hrs+',
      'hero.stat.rating':     'Average Rating 4.9 / 5',
      'hero.stat.since':      'Operating Since 2018',
      'hero.teachers.label':  'ITALK Teachers',
      'hero.teachers.count':  '7 Professional Native Instructors',
      'hero.teachers.sub':    'Verified teachers with an average of 15+ years experience',
      'hero.satisfaction.label': 'Student Satisfaction',

      /* ── Index: Features ── */
      'feat.badge':  'Why ITALK?',
      'feat.h2':     'A Brilliant Learning Experience',
      'feat.p':      'Reasons why thousands of students choose ITALK to master English.',
      'feat.c1.h3':  '8 Years of Proven Expertise',
      'feat.c1.p':   'ITALK has grown alongside thousands of Korean students since 2018. Experience the trust and quality that time has proven.',
      'feat.c1.tag1':'Founded 2018',
      'feat.c1.tag2':'Proven Method',
      'feat.c1.tag3':'Continuous Growth',
      'feat.c2.h3':  '1:1 Native Speaker Lessons',
      'feat.c2.p':   'Focused lessons with experienced native instructors who teach learners worldwide. Your first class is free.',
      'feat.c3.h3':  'Personalized Curriculum',
      'feat.c3.p':   'We design a learning path just for you — business English, exam prep, or everyday conversation.',
      'feat.c4.h3':  'Real-World Textbooks',
      'feat.c4.p':   'Learn practical, immediately usable English through up-to-date materials and our signature textbooks.',
      'feat.c5.h3':  'Instant Feedback',
      'feat.c5.p':   'Receive detailed, immediate feedback on pronunciation, grammar, and expression every lesson.',

      /* ── Index: Teachers preview ── */
      'tch.badge': 'Our Teachers',
      'tch.h2':    'Verified Native Instructors',
      'tch.p':     '7 professional native instructors with an average of 15+ years of teaching experience',
      'tch.more':  'See All Teachers',

      /* ── Index: Reviews ── */
      'rev.h2': 'Real Transformations',
      'rev.p':  'Stories from students who found their English confidence with ITALK',

      /* ── Index: How It Works ── */
      'how.badge':  'How to Get Started',
      'how.h2':     'Your Journey to English Mastery',
      'how.p':      'A systematic 4-step process that builds your confidence',
      'how.s1.h4':  'Apply for Free Trial',
      'how.s1.p':   'Book a 30-minute free trial lesson to assess your current level.',
      'how.s2.h4':  'Instructor Matching',
      'how.s2.p':   'Get connected with the ideal native instructor for your goals and style.',
      'how.s3.h4':  'Custom Curriculum',
      'how.s3.p':   'Receive a learning path and textbook recommendations tailored to your goals.',
      'how.s4.h4':  '30 Min Lessons Daily',
      'how.s4.p':   'Take 30-minute daily lessons via Google Meet and watch your skills improve.',

      /* ── Index: Google Meet banner ── */
      'meet.badge': 'Class Platform',
      'meet.h3':    'We Teach on Google Meet',
      'meet.p':     'No installation needed — join directly from your browser. The teacher sends the meeting link individually.',
      'meet.btn1':  'How to Use',
      'meet.btn2':  'Open Google Meet',

      /* ── Index: CTA ── */
      'cta.badge': 'Start Now',
      'cta.h2':    'Ready to Transform Your English?',
      'cta.p':     'Join the thousands of learners who have grown with ITALK over 8 years. Your first class is completely free.',
      'cta.btn1':  'Apply for Free Trial Lesson',
      'cta.btn2':  'See Teachers First',

      /* ── Index: Trial Modal ── */
      'modal.badge':    'Free Trial Application',
      'modal.h3':       'Book Your First Lesson',
      'modal.sub':      'Enter your details and we\'ll contact you within 24 hours.',
      'modal.name':     'Name',
      'modal.name.ph':  'Your Name',
      'modal.email':    'Email',
      'modal.email.ph': 'example@email.com',
      'modal.phone':    'Phone Number',
      'modal.level':    'Current English Level',
      'modal.level.ph': 'Select your level',
      'modal.level.1':  'Beginner',
      'modal.level.2':  'Elementary',
      'modal.level.3':  'Intermediate',
      'modal.level.4':  'Upper-Intermediate',
      'modal.level.5':  'Advanced',
      'modal.goals':    'Learning Goals (multiple select)',
      'modal.goal.biz': '💼 Business English',
      'modal.goal.trv': '✈️ Travel English',
      'modal.goal.tst': '📝 Exam Prep',
      'modal.goal.cvs': '💬 Everyday Conversation',
      'modal.agree':    'I agree to the collection and use of personal information.',
      'modal.agree.sub':'Used only for processing your trial application and not shared with third parties.',
      'modal.submit':   'Apply for Free Trial',
      'toast.title':    'Application Complete!',
      'toast.sub':      'We\'ll contact you within 24 hours.',

      /* ── Teachers Page ── */
      'tp.badge':  'Our Instructors',
      'tp.h1':     'Meet Our Teachers',
      'tp.p':      'Introducing 7 professional native instructors with an average of 15+ years of teaching experience.\nHover over a card to see detailed information.',
      'tp.chip1':  '👩‍🏫 7 Expert Teachers',
      'tp.chip2':  '📚 Avg. 15+ Years Experience',
      'tp.chip3':  '🇵🇭 Filipino Native Speakers',
      'tp.chip4':  '✅ TESOL/TEFL Certified',
      'tp.flip':   'Tap or hover to see details →',
      'tp.t1.badge': '18 Years Experience',
      'tp.t2.badge': 'Full-time ITALK Teacher',
      'tp.t3.badge': 'The Mom Teacher 🤍',
      'tp.t4.badge': 'International Teaching Experience',
      'tp.t5.badge': 'JD · Licensed Teacher',
      'tp.t6.badge': '🏆 Head Teacher',
      'tp.t7.badge': '17 Years Online ESL',
      'tp.label.edu':       'Education',
      'tp.label.cert':      'Certifications',
      'tp.label.cert2':     'Certification',
      'tp.label.career':    'Career',
      'tp.label.spec':      'Specialization',
      'tp.label.style':     'Teaching Style',
      'tp.label.philosophy':'Teaching Philosophy',
      'tp.label.role':      'Role',
      'tp.label.edu2':      'Education & Qualifications',
      'tp.chip.tesol':      'TESOL Certified',
      'tp.chip.lpt':        'Licensed Teacher',
      'tp.chip.masters':    'Master\'s Degree',
      'tp.chip.c2':         'C2 Proficient',
      'tp.chip.fulltime':   'Full-time',
      'tp.chip.exp17':      '17 Years',
      'tp.chip.korean':     'Korean Student Specialist',
      'tp.chip.japanese':   'Japanese Student Experience',
      'tp.chip.edumasters': 'MA in Education Mgmt',
      'tp.chip.telf':       'TELF/TESOL',
      'tp.chip.jd':         'Juris Doctor',
      'tp.chip.corp':       'Corporate Training',
      'tp.chip.head':       'Head Teacher',
      'tp.chip.exp18':      '18 Years',
      'tp.chip.practical':  'Practical English',
      'tp.t1.back.sub':  '18 Years Teaching Experience',
      'tp.t2.back.sub':  'Full-time ITALK Instructor (2023–)',
      'tp.t2.cert1':     'EF SET C2 Proficient English Certification',
      'tp.t2.career1':   'Started English teaching in 2007',
      'tp.t2.career2':   'Specialist instructor for Korean learners',
      'tp.t2.career3':   'Full-time ITALK instructor since 2023',
      'tp.t2.style1':    'Focused on fluency, pronunciation, and overall communication skills',
      'tp.t2.style2':    'Positive feedback approach that builds student confidence',
      'tp.t6.back.sub':  'Head Teacher · Manila',
      'tp.t1.edu1':      'B.S. Secondary Education (2007)',
      'tp.t1.edu2':      'M.S. Biology Education (2018)',
      'tp.t1.edu3':      'Ph.D. Science Education (36 credits completed)',
      'tp.t1.cert1':     'Licensed Professional Teacher (2007)',
      'tp.t1.cert2':     'TESOL Certified (2021)',
      'tp.t1.career1':   '18 years English & Science education, 10 years ESL',
      'tp.t1.career2':   'Taught Chinese, Korean, Japanese & Vietnamese learners',
      'tp.t1.career3':   'Public high school teacher (Earth Science, Biology, Research, English)',
      'tp.t3.career1':   'Started English teaching in 2011',
      'tp.t3.career2':   'Unhoop Philippines — taught Japanese learners',
      'tp.t3.career3':   'Currently dedicated to Korean students at ITALK',
      'tp.t3.philosophy1': 'Believes every student learns best when supported, valued, and inspired.',
      'tp.t3.philosophy2': 'Teaches with a warm "mom-teacher" style, creating a comfortable learning environment.',
      'tp.t4.edu1':      'M.A. Education Management (2015)',
      'tp.t4.cert1':     'TELF/TESOL Certified',
      'tp.t4.cert2':     'Promoted from Teacher I to Teacher III',
      'tp.t4.career1':   '10+ years of English education',
      'tp.t4.career2':   'International teaching experience in Bahrain',
      'tp.t4.career3':   'Currently teaching at a Philippine high school',
      'tp.t4.career4':   'Part-time instructor at ITALK',
      'tp.t4.spec1':     'English education tailored for Korean learners',
      'tp.t5.edu1':      'Juris Doctor (JD)',
      'tp.t5.edu2':      'Licensed Professional Teacher (LPT)',
      'tp.t5.cert1':     'TESOL/TEFL Certified',
      'tp.t5.cert2':     'UP Open University Graduate',
      'tp.t5.cert3':     'LET Score: 85.2',
      'tp.t5.career1':   '20+ years in education, training & facilitation',
      'tp.t5.career2':   'Public education, online learning & corporate training',
      'tp.t6.role1':     'ITALK Manila Head Teacher',
      'tp.t6.role2':     'Manages teaching staff and oversees lesson quality',
      'tp.t6.career1':   'Teaching Korean students since 2007',
      'tp.t6.career2':   '18 years as a Korean learner specialist',
      'tp.t6.philosophy1': 'Goes beyond teaching how to speak English — guides students to truly appreciate the language itself.',
      'tp.t7.edu1':      'Major in Nutrition & Dietetics',
      'tp.t7.cert1':     'TESOL Certified',
      'tp.t7.career1':   'Online ESL instructor since 2008',
      'tp.t7.career2':   'Specialist in online English for Korean learners',
      'tp.t7.style1':    'Focuses on practical English immediately usable in real life',
      'tp.t7.style2':    'Teaches with a realistic, goal-oriented approach',
      'tp.cta.h2':  'Found a Teacher You Like?',
      'tp.cta.p':   'Your first lesson is free. Try it now.',
      'tp.cta.btn1':'Apply for Free Trial',
      'tp.cta.btn2':'Watch Introduction Videos',
      'tp.footer.tagline': '1:1 Online English and 8 Years of Trust',

      /* ── Books Page ── */
      'bk.badge': 'Learning Materials',
      'bk.h1':    'Featured Textbooks',
      'bk.p':     'ITALK uses a variety of materials suited to your learning goals.\nYour teacher selects the best materials for your level and objectives.',
      'bk.card1.h3': 'Level Assessment First',
      'bk.card1.p':  'We assess your level in the first lesson, then select the most suitable materials.',
      'bk.card2.h3': 'Customized Pace',
      'bk.card2.p':  'The pace through the materials is flexibly adjusted to your speed and goals.',
      'bk.card3.h3': 'Supplementary Resources',
      'bk.card3.p':  'Beyond textbooks, we also use current news, videos, and contemporary materials.',
      'bk.conv.h2':  'Conversation & Speaking',
      'bk.conv.p':   'Core materials for building speaking confidence',
      'bk.biz.h2':   'Business English',
      'bk.biz.p':    'English that works in professional settings',
      'bk.exam.h2':  'Exam Preparation',
      'bk.exam.p':   'Strategic materials for high scores on recognized English exams',
      'bk.level.beginner':  'Beginner',
      'bk.level.intermediate': 'Intermediate',
      'bk.level.int-adv':   'Int–Advanced',
      'bk.level.advanced':  'Advanced',
      'bk.level.opic':      'OPIc Specialist',
      'bk.level.toeic':     'TOEIC Speaking',
      'bk.level.ielts':     'IELTS',
      'bk.book1.title': 'Essential Conversation Phrases 100',
      'bk.book1.p':     'Intensive practice of the 100 most commonly used daily expressions.',
      'bk.book2.title': 'Real English Conversation Patterns',
      'bk.book2.p':     'Learn the conversation patterns and nuances native speakers actually use.',
      'bk.book3.title': 'English Discussion & Opinion Speaking',
      'bk.book3.p':     'Express your opinions logically on a variety of topics in English.',
      'bk.book4.title': 'Advanced English Presentations & Speeches',
      'bk.book4.p':     'Practice advanced expressions and structure for persuasive presentations.',
      'bk.book5.title': 'Business Email English',
      'bk.book5.p':     'Master formal business English from composing to replying to work emails.',
      'bk.book6.title': 'English Meetings & Negotiation',
      'bk.book6.p':     'Practice expressions for meetings, negotiations, and networking with confidence.',
      'bk.book7.title': 'Presentation English',
      'bk.book7.p':     'Systematically learn the structure and delivery of persuasive English presentations.',
      'bk.book8.title': 'OPIc IM–AL Mastery',
      'bk.book8.p':     'OPIc exam analysis and high-score strategy with real-scenario role-play.',
      'bk.book9.title': 'TOEIC Speaking High-Score Strategy',
      'bk.book9.p':     'Section-by-section strategies and repetition training for rapid score improvement.',
      'bk.book10.title':'IELTS Speaking 7.0+',
      'bk.book10.p':    'Complete preparation for all 4 IELTS speaking parts targeting 7.0+.',
      'bk.note.h3': 'How are textbooks selected?',
      'bk.note.p':  'During your free trial, the teacher assesses your level, goals, and interests, then recommends the most suitable materials. There is no separate textbook fee — we use digital resources and teacher-created custom worksheets.',
      'bk.cta.h2':  'Start with the Right Materials',
      'bk.cta.p':   'After your free trial, the teacher will personally recommend the best materials for you.',
      'bk.cta.btn': 'Apply for Free Trial Lesson',

      /* ── Videos Page ── */
      'vid.badge':       'Instructor Introduction Videos',
      'vid.h1':          'Teacher Introduction Videos',
      'vid.sub':         'Watch the teacher videos before your lesson to find the right instructor for you.',
      'vid.card.badge':  'Intro Video',
      'vid.card.intro':  'Introduction',
      'vid.card.role':   'Full-time Instructor',
      'vid.close':       'Close',
      'vid.footer.tagline': '8 Years of Trusted Online English — ITALK',

      /* ── Use Meet Page ── */
      'um.badge':        'Class Platform Guide',
      'um.h1.sub':       'How to Use',
      'um.hero.p':       'ITALK has switched from Skype to Google Meet for classes. No installation needed — join directly in Chrome.',
      'um.hero.btn1':    'Open Google Meet',
      'um.hero.btn2':    'Apply for Free Trial',
      'um.hero.caption': 'Video Class Platform',
      'um.hero.badge':   'Free · No Installation',
      'um.device.h2':    'How to Connect by Device',
      'um.device.p':     'Select your device below',
      'um.tab.pc':       'PC · Laptop',
      'um.tab.ios':      'iPhone · iPad',
      'um.tab.and':      'Galaxy · Android',
      'um.pc.video.h':   'Video Guide (Windows · PC)',
      'um.pc.s1.h':      'Paste the Class Link in a New Tab',
      'um.pc.s1.p':      'Copy the Google Meet link sent by your teacher, paste it into a new Chrome tab address bar, and press Enter.',
      'um.pc.s1.tip':    'Recommended browser: Chrome gives the smoothest experience.',
      'um.pc.s2.h':      'Allow Camera & Microphone',
      'um.pc.s2.p':      'When the camera/microphone permission popup appears, click Allow.',
      'um.pc.s2.allow':  'Allow while using this site',
      'um.pc.s2.allow.sub': 'Permissions are remembered automatically for future lessons.',
      'um.pc.s2.once':   'Allow this time only (not recommended)',
      'um.pc.s2.once.sub': 'You\'ll need to approve permissions again before each lesson.',
      'um.pc.s3.h':      'Enter Your Name and Request to Join',
      'um.pc.s3.p':      'Type your English name in the "What\'s your name?" box, then click "Request to join".',
      'um.pc.s3.ex.label': '✏️ Name entry example',
      'um.pc.s3.ex.p':   'Hong Gildong → Gildong Hong, or use the name agreed with your teacher.',
      'um.pc.s4.h':      'Wait for Class to Start',
      'um.pc.s4.p':      'After requesting to join, a waiting screen appears. The teacher will admit you at class time.',
      'um.pc.s4.tip':    'Connecting 5 minutes early ensures a smooth start.',
      'um.ios.video.h':  'Video Guide (iPhone · iPad)',
      'um.ios.s1.h':     '① Install Google Meet App',
      'um.ios.s1.p':     'Install Google Meet from the App Store. Update to the latest version if already installed.',
      'um.ios.s2.h':     '② Join via Link',
      'um.ios.s2.p':     'Tap the Meet link from your teacher and the app opens automatically. Enter your name and tap Request to Join.',
      'um.ios.s3.h':     '③ Camera & Microphone Permissions',
      'um.ios.s3.p':     'On first launch, allow camera and microphone. Choose "Allow While Using App".',
      'um.ios.s4.h':     '④ Stable Network',
      'um.ios.s4.p':     'Wi-Fi is recommended for uninterrupted video. If using mobile data, check LTE/5G.',
      'um.and.video.h':  'Video Guide (Galaxy · Android)',
      'um.and.s1.h':     '① Install Google Meet App',
      'um.and.s1.p':     'Install Google Meet from the Play Store. Samsung Galaxy devices may have it pre-installed.',
      'um.and.s2.h':     '② Join via Link',
      'um.and.s2.p':     'Tap the link from your teacher and Google Meet opens automatically. Enter your name and request to join.',
      'um.and.s3.h':     '③ App Permissions',
      'um.and.s3.p':     'Go to Settings → Apps → Google Meet → Permissions and make sure Camera & Microphone are set to Allowed.',
      'um.and.s4.h':     '④ Use Earphones',
      'um.and.s4.p':     'Using wired or Bluetooth earphones during mobile lessons reduces echo for a clearer class.',
      'um.tips.h2':      'Tips for an Optimal Class Environment',
      'um.tips.p':       'These simple steps double your lesson effectiveness!',
      'um.tip1.h':       'Stable Internet',
      'um.tip1.p':       'Use a wired connection or strong Wi-Fi signal for lessons.',
      'um.tip2.h':       'Good Lighting',
      'um.tip2.p':       'Face the window — don\'t sit with light behind you.',
      'um.tip3.h':       'Earphones or Headset',
      'um.tip3.p':       'Earphones with a built-in mic reduce echo and background noise.',
      'um.tip4.h':       'Quiet Environment',
      'um.tip4.p':       'A quiet space improves focus and communication quality.',
      'um.faq.h2':       'Frequently Asked Questions',
      'um.faq.p':        'Common questions about Google Meet',
      'um.faq1.q':       'Is Google Meet paid?',
      'um.faq1.a':       'No. Basic Google Meet features are completely free. You can join a lesson via link even without a Google account.',
      'um.faq2.q':       'Where do I receive the class link?',
      'um.faq2.a':       'The teacher sends the Google Meet link via text message or KakaoTalk before each lesson.',
      'um.faq3.q':       'My camera or microphone isn\'t working.',
      'um.faq4.q':       'The connection keeps dropping during class.',
      'um.faq5.q':       'Can I record lessons?',
      'um.faq5.a':       'Recording is only possible with consent from both the teacher and student. Let your teacher know before class if you\'d like to record.',
      'um.contact.badge': 'Need Help?',
      'um.contact.h2':   'Contact Us for Technical Issues',
      'um.contact.p':    'For technical issues with Google Meet, camera, or microphone, please reach out through the contact details below.',
      'um.contact.btn1': 'Open Google Meet',
      'um.contact.btn2': 'Apply for Free Trial',
      'um.footer.biz':   'Business Reg: 130-47-60022 | Representative: Jeong Chanmi',

      /* ── Shared footer ── */
      'footer.links':       'Quick Links',
      'footer.contact.label': 'Contact',
      'footer.copy':        '© 2025 ITALK CO. LTD All Rights Reserved',
      'footer.tagline':     '1:1 online English with 8 years of trust — elevating the value of English education.',
      'footer.biz':         'Business Info',
      'footer.biz.rep':     'Representative',
      'footer.biz.reg':     'Business Reg. No.',
      'footer.biz.tel':     'Phone',
      'footer.biz.email':   'Email',
      'footer.addr':        'Address',
      'footer.addr.text':   'Nudezone Bldg. 9F, 9 Seocho-daero 77-gil, Seocho-gu, Seoul',
      'tp.footer.addr':     'Nudezone Bldg. 9F, 9 Seocho-daero 77-gil, Seocho-gu, Seoul',
      'footer.meet':        'Google Meet',
      'footer.email.link':  'Email Us',
      'idx.reviews.badge':  'Student Reviews',
    },

    /* ================================================================
       CHINESE (ZH) TRANSLATIONS
    ================================================================ */
    zh: {
      /* ── Navigation ── */
      'nav.home':      '首页',
      'nav.teachers':  '教师介绍',
      'nav.videos':    '介绍视频',
      'nav.classvideo':'课堂视频',
      'nav.books':     '主要教材',
      'nav.guide':     '使用指南',
      'nav.trial':     '免费体验',
      'nav.login':     '登录 / 注册',

      /* ── Index: Hero ── */
      'hero.badge':           '8年的信赖',
      'hero.h1.line1':        '深受喜爱已8年',
      'hero.h1.line2':        'ITALK 视频英语',
      'hero.p':               '与母语教师进行1对1定制课程，让您的英语更上一层楼。通过涵盖口语、听力、阅读的个性化课程体验成长。',
      'hero.btn1':            '开始免费体验',
      'hero.btn2':            '认识我们的老师',
      'hero.stat.students':   '学员',
      'hero.stat.students.suffix': '名+',
      'hero.stat.hours':      '累计课时',
      'hero.stat.hours.suffix': '小时+',
      'hero.stat.rating':     '平均评分 4.9 / 5',
      'hero.stat.since':      '2018年起运营',
      'hero.teachers.label':  'ITALK 教师团队',
      'hero.teachers.count':  '7名专业母语教师',
      'hero.teachers.sub':    '经过验证的教师，平均从教经验15年以上',
      'hero.satisfaction.label': '学员满意度',

      /* ── Index: Features ── */
      'feat.badge':  '为什么选择ITALK？',
      'feat.h2':     '闪耀的学习体验',
      'feat.p':      '无数学生选择ITALK征服英语的理由。',
      'feat.c1.h3':  '8年经验验证',
      'feat.c1.p':   '自2018年起，ITALK已与数千名韩国学生共同成长。感受时间见证的信任与品质。',
      'feat.c1.tag1':'2018年创立',
      'feat.c1.tag2':'经过验证的方法',
      'feat.c1.tag3':'持续成长',
      'feat.c2.h3':  '母语教师1对1定制课程',
      'feat.c2.p':   '与经验丰富的母语教师进行专注的1对1课程，第一节课免费。',
      'feat.c3.h3':  '个性化课程方案',
      'feat.c3.p':   '专为您设计学习路径——商务英语、考试备考或日常会话。',
      'feat.c4.h3':  '实战教材',
      'feat.c4.p':   '利用最新资料和代表性教材，学习日常生活中直接可用的英语。',
      'feat.c5.h3':  '即时反馈',
      'feat.c5.p':   '每节课都提供关于发音、语法和表达的即时详细反馈。',

      /* ── Index: Teachers preview ── */
      'tch.badge': '我们的老师',
      'tch.h2':    '经过验证的母语教师团队',
      'tch.p':     '7名平均从教经验15年以上的专业母语教师',
      'tch.more':  '查看全部教师',

      /* ── Index: Reviews ── */
      'rev.h2': '亲身经历的变化',
      'rev.p':  '与ITALK一起找回英语自信的学员故事',

      /* ── Index: How It Works ── */
      'how.badge':  '开始的方法',
      'how.h2':     '征服英语的旅程',
      'how.p':      '帮助您找回自信的系统4步流程',
      'how.s1.h4':  '申请免费体验',
      'how.s1.p':   '预约30分钟的免费体验课，诊断您当前的英语水平。',
      'how.s2.h4':  '匹配教师',
      'how.s2.p':   '为您匹配最符合学习目标和风格的最佳母语教师。',
      'how.s3.h4':  '定制课程',
      'how.s3.p':   '根据您的目标和兴趣，为您推荐学习路径和教材。',
      'how.s4.h4':  '每日30分钟课程',
      'how.s4.p':   '通过Google Meet每天上30分钟课，持续体验英语进步。',

      /* ── Index: CTA ── */
      'cta.badge': '立即开始',
      'cta.h2':    '准备好改变您的英语了吗？',
      'cta.p':     '与8年来和ITALK共同成长的数千名学员一起前进。第一节课完全免费。',
      'cta.btn1':  '申请免费体验课',
      'cta.btn2':  '先看看老师',

      /* ── Modal ── */
      'modal.badge':    '免费体验申请',
      'modal.h3':       '预约您的第一节课',
      'modal.sub':      '填写以下信息，我们将在24小时内与您联系。',
      'modal.name':     '姓名',
      'modal.name.ph':  '您的姓名',
      'modal.email':    '电子邮件',
      'modal.email.ph': 'example@email.com',
      'modal.phone':    '联系方式',
      'modal.level':    '当前英语水平',
      'modal.level.ph': '请选择水平',
      'modal.level.1':  '入门（Beginner）',
      'modal.level.2':  '初级（Elementary）',
      'modal.level.3':  '中级（Intermediate）',
      'modal.level.4':  '中高级（Upper-Intermediate）',
      'modal.level.5':  '高级（Advanced）',
      'modal.goals':    '学习目标（可多选）',
      'modal.goal.biz': '💼 商务英语',
      'modal.goal.trv': '✈️ 旅游英语',
      'modal.goal.tst': '📝 考试备考',
      'modal.goal.cvs': '💬 日常会话',
      'modal.agree':    '同意收集和使用个人信息。',
      'modal.agree.sub':'仅用于处理体验申请，不向第三方提供。',
      'modal.submit':   '申请免费体验',
      'toast.title':    '申请已完成！',
      'toast.sub':      '我们将在24小时内与您联系。',

      /* ── Teachers Page ── */
      'tp.badge':  '我们的教师团队',
      'tp.h1':     '教师介绍',
      'tp.p':      '介绍7名平均从教经验15年以上的专业母语教师。\n将鼠标悬停在卡片上可查看详细信息。',
      'tp.chip1':  '👩‍🏫 7名专业教师',
      'tp.chip2':  '📚 平均经验15年+',
      'tp.chip3':  '🇵🇭 菲律宾母语',
      'tp.chip4':  '✅ TESOL/TEFL认证',
      'tp.flip':   '点击或悬停查看详情 →',
      'tp.cta.h2': '找到您喜欢的老师了吗？',
      'tp.cta.p':  '第一节课免费，立即体验吧。',
      'tp.cta.btn1':'申请免费体验',
      'tp.cta.btn2':'观看介绍视频',
      'tp.t1.badge': '18年教学经验',
      'tp.t2.badge': '专职讲师',
      'tp.t3.badge': '妈妈老师 🤍',
      'tp.t4.badge': '国际教学经验',
      'tp.t5.badge': 'JD · 持牌教师',
      'tp.t6.badge': '🏆 首席教师',
      'tp.t7.badge': '17年在线ESL',
      'tp.label.edu':        '学历',
      'tp.label.cert':       '资格认证',
      'tp.label.cert2':      '认证',
      'tp.label.career':     '经历',
      'tp.label.spec':       '专业领域',
      'tp.label.style':      '教学风格',
      'tp.label.philosophy': '教学理念',
      'tp.label.role':       '职位',
      'tp.label.edu2':       '学历及资格',
      'tp.chip.tesol':       'TESOL认证',
      'tp.chip.lpt':         '持牌教师',
      'tp.chip.masters':     '硕士学位',
      'tp.chip.c2':          'C2级英语',
      'tp.chip.fulltime':    '专职',
      'tp.chip.exp17':       '17年经验',
      'tp.chip.korean':      '韩国学员专家',
      'tp.chip.japanese':    '日本学员经验',
      'tp.chip.edumasters':  '教育管理硕士',
      'tp.chip.telf':        'TELF/TESOL',
      'tp.chip.jd':          '法学博士',
      'tp.chip.corp':        '企业培训',
      'tp.chip.head':        '首席教师',
      'tp.chip.exp18':       '18年经验',
      'tp.chip.practical':   '实用英语',
      'tp.t1.back.sub':  '18年教学经验',
      'tp.t2.back.sub':  '专职讲师 (2023–)',
      'tp.t2.cert1':     'EF SET C2级英语认证',
      'tp.t2.career1':   '2007年开始英语教学',
      'tp.t2.career2':   '韩国学员专业讲师',
      'tp.t2.career3':   '2023年起担任ITALK专职讲师',
      'tp.t2.style1':    '专注于提升流利度、发音及整体交流能力',
      'tp.t2.style2':    '以积极的正向反馈帮助学生建立自信',
      'tp.t6.back.sub':  '首席教师 · 马尼拉',
      'tp.footer.tagline': '1对1在线英语，8年信赖',
      'tp.t1.edu1':      '中等教育学士 (2007)',
      'tp.t1.edu2':      '生物教育硕士 (2018)',
      'tp.t1.edu3':      '科学教育博士课程 (36学分)',
      'tp.t1.cert1':     '持牌专业教师 (2007年取得)',
      'tp.t1.cert2':     'TESOL认证 (2021)',
      'tp.t1.career1':   '英语·科学教育18年，ESL 10年',
      'tp.t1.career2':   '教授中国、韩国、日本、越南学员',
      'tp.t1.career3':   '公立高中任职（地球科学、生命科学、研究方法、英语）',
      'tp.t3.career1':   '2011年开始英语教学',
      'tp.t3.career2':   'Unhoop Philippines — 教授日本学员',
      'tp.t3.career3':   '目前专注于ITALK韩国学员',
      'tp.t3.philosophy1': '相信每个学生在被支持、被重视、被激励时学得最好。',
      'tp.t3.philosophy2': '以温暖的"妈妈老师"风格，营造舒适的学习环境。',
      'tp.t4.edu1':      '教育管理学硕士 (2015)',
      'tp.t4.cert1':     'TELF/TESOL认证',
      'tp.t4.cert2':     '教师晋升 Teacher I → Teacher III',
      'tp.t4.career1':   '英语教育10年以上',
      'tp.t4.career2':   '巴林海外教学经验',
      'tp.t4.career3':   '目前在菲律宾高中任职',
      'tp.t4.career4':   'ITALK兼职讲师',
      'tp.t4.spec1':     '针对韩国学员的定制英语教学',
      'tp.t5.edu1':      '法学博士 (Juris Doctor)',
      'tp.t5.edu2':      '持牌专业教师 (LPT)',
      'tp.t5.cert1':     'TESOL/TEFL认证',
      'tp.t5.cert2':     'UP开放大学结业',
      'tp.t5.cert3':     '教师资格考试成绩 85.2分',
      'tp.t5.career1':   '教育·培训·推进工作20年以上',
      'tp.t5.career2':   '公共教育、在线教育及企业培训全领域',
      'tp.t6.role1':     'ITALK马尼拉首席教师',
      'tp.t6.role2':     '负责教师管理及课程质量把控',
      'tp.t6.career1':   '自2007年起教授韩国学员',
      'tp.t6.career2':   '18年韩国学员专科讲师',
      'tp.t6.philosophy1': '不仅教会学生如何说英语，更引导他们感受英语语言本身的魅力。',
      'tp.t7.edu1':      '营养学专业 (Dietetics)',
      'tp.t7.cert1':     'TESOL认证',
      'tp.t7.career1':   '2008年起担任在线ESL讲师',
      'tp.t7.career2':   '韩国学员在线英语专业教学',
      'tp.t7.style1':    '专注于可在现实生活中立即运用的实用英语',
      'tp.t7.style2':    '以现实且目标导向的方式授课',

      /* ── Books Page ── */
      'bk.badge':    '学习教材',
      'bk.h1':       '主要教材',
      'bk.p':        'ITALK使用多种符合学习目标的教材。\n老师将根据学生的水平和目标选择最合适的教材。',
      'bk.conv.h2':  '会话·口语教材',
      'bk.conv.p':   '提升口语自信的核心教材',
      'bk.biz.h2':   '商务英语教材',
      'bk.biz.p':    '在职场和商务场合实用的英语',
      'bk.exam.h2':  '考试备考教材',
      'bk.exam.p':   '公认英语考试高分策略教材',
      'bk.cta.h2':   '用适合您的教材开始学习',
      'bk.cta.p':    '免费体验后，老师将亲自为您推荐最优教材。',
      'bk.cta.btn':  '申请免费体验课',

      /* ── Videos Page ── */
      'vid.badge':       '教师介绍视频',
      'vid.h1':          '教师介绍视频',
      'vid.sub':         '课前观看老师的视频，提前认识适合您的教师。',
      'vid.card.badge':  '介绍视频',
      'vid.card.intro':  '自我介绍',
      'vid.card.role':   '专职教师',
      'vid.close':       '关闭',

      /* ── Use Meet Page ── */
      'um.badge':        '课程平台指南',
      'um.h1.sub':       '使用方法',
      'um.hero.p':       'ITALK已从Skype切换到Google Meet上课。\n无需安装，直接在Chrome浏览器中即可访问。',
      'um.hero.btn1':    '前往Google Meet',
      'um.hero.btn2':    '申请免费体验',
      'um.hero.caption': '视频课程平台',
      'um.hero.badge':   '免费·无需安装',
      'um.device.h2':    '各设备连接方法',
      'um.device.p':     '请选择您使用的设备',
      'um.tab.pc':       'PC·笔记本',
      'um.tab.ios':      'iPhone·iPad',
      'um.tab.and':      '三星·Android',
      'um.tips.h2':      '课程环境优化技巧',
      'um.tips.p':       '做好这些准备，课程效果翻倍！',
      'um.faq.h2':       '常见问题',
      'um.faq.p':        '关于Google Meet的常见疑问',
      'um.faq1.q':       'Google Meet是收费的吗？',
      'um.faq1.a':       '不收费。Google Meet的基本功能完全免费。无需谷歌账号，通过链接即可参加课程。',
      'um.faq2.q':       '课程链接在哪里收到？',
      'um.faq2.a':       '老师会在课前通过短信或KakaoTalk发送Google Meet链接。',
      'um.faq5.q':       '可以录制课程吗？',
      'um.faq5.a':       '只有在老师和学生双方同意的情况下才能录制。如需复习，请在课前告知老师。',
      'um.contact.badge': '需要帮助吗？',
      'um.contact.h2':   '技术问题请联系我们',
      'um.contact.p':    '如有Google Meet连接、摄像头或麦克风等技术问题，请通过以下联系方式咨询。',
      'um.contact.btn1': '直接访问Google Meet',
      'um.contact.btn2': '申请免费体验课',

      /* ── Footer ── */
      'footer.copy':        '© 2025 ITALK CO. LTD 版权所有',
      'footer.links':       '快速导航',
      'footer.contact.label': '联系我们',
      'footer.tagline':     '1对1在线英语，用8年的信赖提升英语教育的价值。',
      'footer.biz':         '公司信息',
      'footer.biz.rep':     '代表人',
      'footer.biz.reg':     '营业执照号',
      'footer.biz.tel':     '电话',
      'footer.biz.email':   '邮箱',
      'footer.addr':        '地址',
      'footer.addr.text':   '首尔市瑞草区瑞草大路77街9号 Nudezone大厦9楼902室',
      'tp.footer.addr':     '首尔市瑞草区瑞草大路77街9号 Nudezone大厦9楼902室',
      'footer.meet':        'Google Meet',
      'footer.email.link':  '联系邮箱',
      'idx.reviews.badge':  '学员评价',
      'vid.footer.tagline': '8年信赖在线英语 — ITALK',
      'um.footer.biz':      '营业执照: 130-47-60022 | 代表: 郑赞美',
    }
  };

  /* ------------------------------------------------------------------
     Core engine
  ------------------------------------------------------------------ */

  // Save original DOM text on first run so we can restore for KO
  function saveOriginals() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (!el.dataset.origText) el.dataset.origText = el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      if (!el.dataset.origPh) el.dataset.origPh = el.placeholder || '';
    });
    document.querySelectorAll('[data-i18n-opt]').forEach(function (el) {
      if (!el.dataset.origOpt) el.dataset.origOpt = el.textContent;
    });
  }

  function applyLang(lang) {
    // Highlight active lang button
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('lang-active', btn.dataset.lang === lang);
    });

    if (lang === 'ko') {
      // Restore original Korean text
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        if (el.dataset.origText !== undefined) el.innerHTML = el.dataset.origText;
      });
      document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
        if (el.dataset.origPh !== undefined) el.placeholder = el.dataset.origPh;
      });
      document.querySelectorAll('[data-i18n-opt]').forEach(function (el) {
        if (el.dataset.origOpt !== undefined) el.textContent = el.dataset.origOpt;
      });
      return;
    }

    var data = T[lang] || {};

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      if (data[key] !== undefined) el.textContent = data[key];
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.dataset.i18nPh;
      if (data[key] !== undefined) el.placeholder = data[key];
    });

    document.querySelectorAll('[data-i18n-opt]').forEach(function (el) {
      var key = el.dataset.i18nOpt;
      if (data[key] !== undefined) el.textContent = data[key];
    });
  }

  function setLang(lang) {
    localStorage.setItem('italk-lang', lang);
    applyLang(lang);
  }

  function init() {
    saveOriginals();
    var saved = localStorage.getItem('italk-lang') || 'ko';
    applyLang(saved);
    // Reveal page hidden by the anti-FOUC inline script in <head>
    document.documentElement.style.visibility = '';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose globally (called via onclick="setLang('en')" etc.)
  window.setLang = setLang;
})();
