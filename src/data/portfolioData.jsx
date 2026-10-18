export const skillsCategories = [
  {
    icon: 'bi-layout-text-window-reverse',
    title: 'Front-End Development',
    desc: 'Merancang antarmuka web yang responsif, interaktif, dan estetis. Fokus pada pengalaman pengguna yang mulus menggunakan teknologi modern.',
    sub: 'HTML · CSS · JS · ReactJS · VueJS · Bootstrap'
  },
  {
    icon: 'bi-server',
    title: 'Back-End Development',
    desc: 'Membangun logika server, API, dan manajemen database yang solid. Berpengalaman dalam arsitektur RESTful dan sistem autentikasi aman.',
    sub: 'Python · PHP · Flask · Django · PostgreSQL · SQLAlchemy'
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Data Engineering',
    desc: 'Mengolah, menganalisis, dan memvisualisasikan data untuk menghasilkan insight yang bermakna. Terbiasa membangun pipeline data dari mentah hingga siap saji.',
    sub: 'Pandas · Matplotlib · Streamlit · SQLAlchemy · PostgreSQL'
  },
  {
    icon: 'bi-cpu',
    title: 'AI Enthusiast',
    desc: 'Aktif mengeksplorasi dan mengintegrasikan model AI mutakhir ke dalam proyek nyata. Berpengalaman menggunakan berbagai platform AI untuk coding, analisis, dan otomasi.',
    sub: 'Gemini AI · ChatGPT · Claude AI · Ollama · Antigravity IDE'
  },
  {
    icon: 'bi-diagram-3',
    title: 'AI Algorithm Developer',
    desc: 'Merancang dan mengimplementasikan algoritma kecerdasan buatan, mulai dari computer vision, logika fuzzy, hingga deep learning untuk memecahkan masalah nyata.',
    sub: 'PyTorch · OpenCV · SkFuzzy · Sklearn · SpeechRecognition · Cryptography'
  },
  {
    icon: 'bi-palette2',
    title: 'Graphic Design',
    desc: 'Menciptakan materi visual yang menarik dan komunikatif. Berpengalaman dalam desain flyer, logo, banner, dan konten digital untuk kebutuhan organisasi dan event.',
    sub: 'Canva · Flyer · Logo · Banner · Poster · UI Design'
  }
];

export const programmingSkills = [
  {
    name: 'Python',
    img: '/image/python_pictures.png',
    desc: 'Bahasa pemrograman serba bisa, multifungsi, dan sangat bersahabat untuk AI & automation.',
    modalKey: 'python'
  },
  {
    name: 'Java',
    img: '/image/java.png',
    desc: 'Bahasa andalan untuk pengembangan aplikasi berbasis objek yang robust dan scalable.',
    modalKey: 'java'
  },
  {
    name: 'HTML · CSS · JS',
    img: '/image/html css js.png',
    desc: 'Tri-komponen utama perancangan web modern yang responsif dan interaktif.',
    modalKey: 'webdev'
  },
  {
    name: 'PHP',
    img: '/image/PHP.jpg',
    desc: 'Bahasa pemrograman back-end dan database yang solid untuk aplikasi web server-side.',
    modalKey: 'php'
  },
  {
    name: 'ReactJS',
    img: '/image/reactjs.png',
    desc: 'Framework front-end andalan para programmer untuk membangun UI yang dinamis.',
    modalKey: 'react'
  },
  {
    name: 'VueJS',
    img: '/image/VueJS.jpg',
    desc: 'Framework front-end progresif yang ringan dan fleksibel untuk membangun UI yang reaktif dan mudah diintegrasikan.',
    modalKey: 'vue'
  }
];

export const toolsAndLibraries = [
  {
    name: 'Flask',
    img: '/image/tools/flask.svg',
    fallbackImg: '/image/python_pictures.png',
    desc: 'Micro web framework Python yang ringan dan fleksibel untuk membangun API & aplikasi web.',
    modalKey: 'python',
    bg: '#1a1a2e',
    fit: 'contain',
    padding: '20px'
  },
  {
    name: 'Django',
    img: 'https://static.djangoproject.com/img/logos/django-logo-positive.png',
    fallbackImg: '/image/tools/django.svg',
    desc: 'Framework web Python high-level yang mendorong pengembangan cepat dan desain yang bersih.',
    modalKey: 'python',
    bg: '#0c4b33',
    fit: 'contain',
    padding: '20px'
  },
  {
    name: 'SQLAlchemy',
    img: 'https://www.sqlalchemy.org/img/sqla_logo.png',
    fallbackImg: '/image/tools/sqlalchemy.svg',
    desc: 'ORM Python yang powerful untuk berinteraksi dengan database SQL secara Pythonic.',
    modalKey: 'python',
    bg: '#fff',
    fit: 'contain',
    padding: '20px'
  },
  {
    name: 'Cryptography',
    img: '/image/tools/cryptography.svg',
    fallbackImg: '/image/python_pictures.png',
    desc: 'Library Python untuk enkripsi dan keamanan data — mendukung berbagai algoritma kriptografi modern.',
    modalKey: 'python',
    bg: '#0d1b2a',
    fit: 'contain',
    padding: '20px'
  },
  {
    name: 'Fernet',
    img: '/image/tools/fernet.svg',
    fallbackImg: '/image/python_pictures.png',
    desc: 'Skema enkripsi simetris dari library Cryptography Python — menjamin kerahasiaan dan integritas data.',
    modalKey: 'python',
    bg: '#161129',
    fit: 'contain',
    padding: '20px'
  },
  {
    name: 'Gemini AI',
    img: 'https://lh3.googleusercontent.com/1E500rkSh8Gqkz2l12tkrKkMgsDmbQot0h3afeiRukXNficphb2zEE8o6J3dSKkiDGOOCcQ8WtRYzEYudgiYK9FkoQeYg_SP92-C=e365-pa-nu-w1200-rj',
    fallbackImg: '/image/python_pictures.png',
    desc: 'Model AI multimodal Google — digunakan untuk generasi teks, kode, dan analisis gambar secara cerdas.',
    modalKey: 'java',
    bg: '#1a1a2e',
    fit: 'contain',
    padding: '24px'
  },
  {
    name: 'OpenAI (ChatGPT)',
    img: '/image/chatgpt.png',
    desc: 'Platform AI dari OpenAI — digunakan untuk prototyping, integrasi API, dan pengembangan chatbot cerdas.',
    modalKey: 'java',
    bg: '#10a37f',
    fit: 'contain',
    padding: '24px'
  },
  {
    name: 'Claude AI (Sonnet 4.6)',
    img: '/image/claude_4.6_sonnet.png',
    fallbackImg: '/image/java.png',
    desc: 'Model AI dari Anthropic — digunakan untuk coding assistant, analisis dokumen, dan pembuatan konten berkualitas.',
    modalKey: 'java',
    bg: '#cc785c',
    fit: 'contain',
    padding: '24px'
  },
  {
    name: 'Visual Studio Code',
    img: '/image/vscode.png',
    fallbackImg: '/image/tools/vscode.svg',
    desc: 'Editor kode ringan dan powerful dari Microsoft — editor utama untuk semua proyek pengembangan.',
    modalKey: 'webdev',
    bg: '#1a1a2e',
    fit: 'contain',
    padding: '24px'
  },
  {
    name: 'Antigravity IDE',
    img: '/image/antigravity.jpg',
    fallbackImg: '/image/tools/antigravity.svg',
    desc: 'IDE AI agentic berbasis Google Gemini — membantu membangun proyek secara cerdas dengan coding assistant.',
    modalKey: 'webdev',
    bg: '#1a1a2e',
    fit: 'contain',
    padding: '24px'
  },
  {
    name: 'Cursor',
    img: 'https://avatars.githubusercontent.com/u/126759922?s=200&v=4',
    fallbackImg: '/image/tools/cursor.png',
    desc: 'AI-powered code editor berbasis VSCode — mempercepat pengembangan dengan fitur autocomplete & chat AI.',
    modalKey: 'webdev',
    bg: '#1a1a2e',
    fit: 'contain',
    padding: '24px'
  },
  {
    name: 'GitHub',
    img: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    fallbackImg: '/image/tools/github.svg',
    desc: 'Platform kolaborasi dan version control berbasis Git — tempat menyimpan, mengelola, dan berbagi kode.',
    modalKey: 'php',
    bg: '#0d1117',
    fit: 'contain',
    padding: '24px'
  },
  {
    name: 'Mowes',
    img: '/image/Download-Mowes-Portable-II.webp',
    fallbackImg: '/image/tools/mowes.svg',
    desc: 'Portable web server environment untuk Windows — alternatif XAMPP yang ringan untuk pengembangan lokal.',
    modalKey: 'react',
    bg: '#f59d00',
    fit: 'contain',
    padding: '20px'
  },
  {
    name: 'PostgreSQL',
    img: 'https://www.postgresql.org/media/img/about/press/elephant.png',
    fallbackImg: '/image/tools/postgresql.svg',
    desc: 'Database relasional open-source yang powerful — digunakan sebagai backend database pada proyek berbasis Flask.',
    modalKey: 'react',
    bg: '#336791',
    fit: 'contain',
    padding: '24px'
  },
  {
    name: 'Streamlit',
    img: 'https://streamlit.io/images/brand/streamlit-logo-primary-colormark-darktext.png',
    fallbackImg: '/image/tools/streamlit.svg',
    desc: 'Framework Python untuk membuat web app data science & ML dengan cepat tanpa perlu keahlian front-end.',
    modalKey: 'react',
    bg: '#fff',
    fit: 'contain',
    padding: '20px'
  },
  {
    name: 'OpenCV',
    img: 'https://opencv.org/wp-content/uploads/2022/05/logo.png',
    fallbackImg: '/image/tools/opencv.svg',
    desc: 'Library computer vision open-source — digunakan untuk pengolahan gambar, deteksi wajah, dan analisis video.',
    modalKey: 'react',
    bg: '#1a1a2e',
    fit: 'contain',
    padding: '20px'
  },
  {
    name: 'PyTorch',
    img: 'https://pytorch.org/assets/images/pytorch-logo.png',
    fallbackImg: '/image/tools/pytorch.svg',
    desc: 'Framework deep learning dari Meta — digunakan untuk membangun dan melatih model neural network.',
    modalKey: 'react',
    bg: '#1a1a2e',
    fit: 'contain',
    padding: '20px'
  },
  {
    name: 'Sklearn',
    img: 'https://avatars.githubusercontent.com/u/17349883?s=280&v=4',
    fallbackImg: '/image/tools/sklearn.svg',
    desc: 'SkLearn merupakan library khusus Python yang berfungsi sebagai alat untuk membantu proses perancangan machine learning.',
    modalKey: 'react',
    fit: 'cover'
  },
  {
    name: 'XAMPP',
    img: '/image/xampp.jpeg',
    fallbackImg: '/image/tools/xampp.svg',
    desc: 'Paket server lokal yang mencakup Apache, MySQL, dan PHP — lingkungan pengembangan web yang lengkap.',
    modalKey: 'react',
    bg: '#f59d00',
    fit: 'contain',
    padding: '20px'
  },
  {
    name: 'SkFuzzy',
    img: '/image/tools/skfuzzy.svg',
    fallbackImg: '/image/python_pictures.png',
    desc: 'Library Python untuk logika fuzzy — digunakan dalam sistem rekomendasi dan pengambilan keputusan berbasis aturan.',
    modalKey: 'react',
    bg: '#0d1f2d',
    fit: 'contain',
    padding: '20px'
  },
  {
    name: 'Pandas',
    img: 'https://pandas.pydata.org/static/img/pandas_mark.svg',
    fallbackImg: '/image/tools/pandas.svg',
    desc: 'Library analisis data Python — powerful untuk manipulasi DataFrame, pembersihan data, dan eksplorasi dataset.',
    modalKey: 'react',
    bg: '#150458',
    fit: 'contain',
    padding: '24px'
  },
  {
    name: 'Matplotlib',
    img: 'https://matplotlib.org/_static/logo_dark.svg',
    fallbackImg: '/image/tools/matplotlib.svg',
    desc: 'Library visualisasi data Python — digunakan untuk membuat grafik, plot, dan chart secara programatik.',
    modalKey: 'react',
    bg: '#1a1a2e',
    fit: 'contain',
    padding: '24px'
  },
  {
    name: 'Ollama',
    img: 'https://avatars.githubusercontent.com/u/151674099?s=200&v=4',
    fallbackImg: '/image/tools/ollama.svg',
    desc: 'Platform untuk menjalankan model LLM secara lokal — memungkinkan inferensi AI offline tanpa cloud.',
    modalKey: 'react',
    bg: '#1a1a2e',
    fit: 'contain',
    padding: '24px'
  },
  {
    name: 'SpeechRecognition',
    img: '/image/tools/speech.svg',
    fallbackImg: '/image/python_pictures.png',
    desc: 'Library Python untuk konversi suara ke teks — digunakan pada asisten virtual dan aplikasi voice-controlled.',
    modalKey: 'react',
    bg: '#1a0b2e',
    fit: 'contain',
    padding: '20px'
  },
  {
    name: 'Google OAuth',
    img: '/image/oauth.jpg',
    fallbackImg: '/image/tools/google.svg',
    desc: 'Sistem autentikasi Google — diimplementasikan untuk login aman menggunakan akun Google pada aplikasi web.',
    modalKey: 'react',
    bg: '#fff',
    fit: 'contain',
    padding: '24px'
  },
  {
    name: 'Google API',
    img: '/image/google_api.jpg',
    fallbackImg: '/image/tools/google.svg',
    desc: 'Ekosistem API Google — digunakan untuk integrasi Maps, Calendar, Sheets, dan layanan Google lainnya.',
    modalKey: 'react',
    bg: '#fff',
    fit: 'contain',
    padding: '24px'
  },
  {
    name: 'FastAPI',
    img: '/image/fastapi.png',
    fallbackImg: '/image/python_pictures.png',
    desc: 'Library Python yang digunakan untuk membantu proses pembuatan API pada proyek-proyek yang menggunakan Python sebagai backend.',
    modalKey: 'react',
    bg: '#fff',
    fit: 'contain',
    padding: '24px'
  },
  {
    name: 'Firebase',
    img: '/image/firebase.png',
    fallbackImg: '/image/google_api.jpg',
    desc: 'Firebase adalah platform yang menyediakan berbagai layanan untuk membangun aplikasi web dan mobile, seperti database, autentikasi, dan hosting.',
    modalKey: 'react',
    bg: '#fff',
    fit: 'contain',
    padding: '24px'
  },
];

export const portfolioProjects = [
  {
    title: 'Platform GMKI Cabang Padang',
    img: '/image/GMKI_Layers.jpeg',
    desc: 'Website resmi Organisasi Gerakan Mahasiswa Kristen Indonesia Cabang Padang.',
    link: 'https://github.com/EdwardChorintians1604',
    btnIcon: 'bi-github',
    btnText: 'Kunjungi'
  },
  {
    title: 'MathThon',
    img: '/image/Toko Masabuk Jaya.png',
    desc: 'Aplikasi website untuk membantu siapapun dalam mengerjakan matematika KABATAKU dengan fitur pembelajaran interaktif.',
    link: 'https://github.com/EdwardChorintians1604',
    btnIcon: 'bi-github',
    btnText: 'Kunjungi'
  },
  {
    title: 'GracePoint Church Management System',
    img: '/image/GracePoint.png',
    desc: 'Sistem Manajemen Gereja berbasis VPS dan SaaS dengan tampilan yang sederhana yang membantu pihak gereja dalam mengelola berbagai aspek dalam gereja dengan digital.',
    link: 'https://github.com/EdwardChorintians1604',
    btnIcon: 'bi-github',
    btnText: 'Kunjungi'
  },
  {
    title: 'Pyth-MBTI Psychology Detector',
    img: '/image/Pyth-MBTI.png',
    desc: 'Website ini menggunakan bahasa Python, Streamlit dan berbasis AI (menggunakan metode CBR) untuk menentukan karakter manusia berdasarkan MBTI.',
    link: 'https://pyth-mbtipsychologydetector-wnpxvxpkgr8txetxjs5qms.streamlit.app/',
    btnIcon: 'bi-globe',
    btnText: 'Kunjungi'
  },
  {
    title: 'Graphic Designing',
    img: '/image/UKM IT Cybernetix.png',
    desc: 'Koleksi karya desain grafis — Flyer, Logo, Banner — dirancang menggunakan Canva dengan estetika modern.',
    link: 'https://github.com/EdwardChorintians1604',
    btnIcon: 'bi-pencil-square',
    btnText: 'Kunjungi'
  }
];

export const socialLinks = [
  {
    title: 'Facebook',
    icon: 'bi-facebook',
    url: 'https://web.facebook.com/profile.php?id=100085449590343'
  },
  {
    title: 'GitHub',
    icon: 'bi-github',
    url: 'https://github.com/EdwardChorintians1604'
  },
  {
    title: 'LinkedIn',
    icon: 'bi-linkedin',
    url: 'https://www.linkedin.com/in/edward-james-kenway-24b660342/'
  },
  {
    title: 'Instagram',
    icon: 'bi-instagram',
    url: 'https://instagram.com/edward_kenway_1604'
  },
  {
    title: 'YouTube',
    icon: 'bi-youtube',
    url: 'https://www.youtube.com/@edwardchori'
  },
  {
    title: 'WhatsApp',
    icon: 'bi-whatsapp',
    url: 'https://wa.me/6282169762552'
  },
  {
    title: 'Google Developer',
    icon: 'bi-google',
    url: 'https://developers.google.com/profile/u/107920796383412821253?hl=id'
  }
];

export const skillsModalData = {
  python: {
    title: 'Python Programming',
    content: (
      <>
        <p>Bahasa pemrograman favorit untuk membangun AI Assistant dan otomasi. Library utama yang digunakan:</p>
        <ul>
          <li><strong>Pyttsx3</strong> — Text-to-Speech engine</li>
          <li><strong>SpeechRecognition</strong> — Speech-to-Text</li>
          <li><strong>NLTK</strong> — Pemrosesan bahasa alami</li>
          <li><strong>FuzzyWuzzy</strong> — Logika fuzzy matching</li>
          <li><strong>Tkinter</strong> — GUI development</li>
        </ul>
      </>
    )
  },
  java: {
    title: 'Java Programming',
    content: (
      <>
        <p>Bahasa andalan untuk pengembangan aplikasi berbasis objek yang robust. Tools yang digunakan:</p>
        <ul>
          <li><strong>Eclipse IDE & IntelliJ IDEA</strong></li>
          <li><strong>Maven</strong> — Manajemen proyek</li>
          <li><strong>JUnit</strong> — Unit testing</li>
          <li><strong>JavaFX</strong> — GUI development</li>
        </ul>
      </>
    )
  },
  webdev: {
    title: 'Web Development',
    content: (
      <>
        <p>Fondasi pengembangan web modern dengan HTML, CSS, dan JavaScript. Tools utama:</p>
        <ul>
          <li><strong>Visual Studio Code</strong> — Editor utama</li>
          <li><strong>Chrome DevTools</strong> — Debugging</li>
          <li><strong>Bootstrap</strong> — Desain responsif</li>
          <li><strong>jQuery</strong> — DOM manipulation</li>
          <li><strong>Git & GitHub</strong> — Version control</li>
        </ul>
      </>
    )
  },
  php: {
    title: 'PHP Back-End',
    content: (
      <>
        <p>Bahasa untuk pengembangan server-side dan manajemen database. Ekosistem yang digunakan:</p>
        <ul>
          <li><strong>XAMPP/WAMP</strong> — Server lokal</li>
          <li><strong>Composer</strong> — Dependency management</li>
          <li><strong>Laravel</strong> — PHP Framework</li>
          <li><strong>phpMyAdmin</strong> — Database MySQL</li>
          <li><strong>Postman</strong> — API testing</li>
        </ul>
      </>
    )
  },
  react: {
    title: 'ReactJS Framework',
    content: (
      <>
        <p>Framework front-end andalan untuk membangun UI yang dinamis dan reaktif. Tools yang digunakan:</p>
        <ul>
          <li><strong>Create React App / Vite</strong> — Project setup</li>
          <li><strong>React Router</strong> — Navigasi SPA</li>
          <li><strong>Redux</strong> — State management</li>
          <li><strong>Axios</strong> — HTTP requests</li>
          <li><strong>Jest + RTL</strong> — Testing</li>
        </ul>
      </>
    )
  },
  vue: {
    title: 'VueJS Framework',
    content: (
      <>
        <p>Framework JavaScript progresif yang ringan dan fleksibel untuk antarmuka web modern:</p>
        <ul>
          <li><strong>Vite / Vue CLI</strong> — Project scaffolding kilat</li>
          <li><strong>Vue Router</strong> — Navigasi Single Page Application</li>
          <li><strong>Pinia</strong> — State management modern dan intuitif</li>
          <li><strong>Composition API</strong> — Logika reaktif yang terstruktur dan scalable</li>
          <li><strong>Axios</strong> — Komunikasi data RESTful API</li>
        </ul>
      </>
    )
  }
};
