// Database Gunung
const database = {
  "JAWA TIMUR": [
    {
      id: 1,
      rank: "#1",
      nama: "MT. SEMERU",
      mdpl: "3.676 MDPL",
      status: "pending",
      lokasi: "Lumajang",
      lagu: "NIDJI - Rahasia Hati",
      audioSrc: "audio/Nidji - Rahasia Hati.mp3",
      mapUrl: "https://maps.google.com/?q=Gunung+Semeru",
      deskripsi: "Atap tertinggi Pulau Jawa yang melegenda. Menawarkan keindahan danau Ranu Kumbolo, hamparan Oro-Oro Ombo, serta tantangan trek pasir terjal menuju Puncak Mahameru.",
      tanggal: "Pendakian : When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 2,
      rank: "#2",
      nama: "MT. ARJUNO",
      mdpl: "3.339 MDPL",
      status: "pending",
      lokasi: "Malang",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Arjuno",
      deskripsi: "Raksasa Jawa Timur dengan trek panjang dan terjal. Kaya akan situs sejarah peninggalan Kerajaan Singhasari serta pemandangan sabana Alas Lali Jiwo yang magis.",
      tanggal: "Pendakian : When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 3,
      rank: "#3",
      nama: "MT. RAUNG",
      mdpl: "3.332 MDPL",
      status: "done",
      lokasi: "Bondowoso",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Raung",
      deskripsi: "Jalur pendakian paling ekstrem di Jawa dengan kaldera terluas.",
      tanggal: "Pendakian: 25-26 Juli 2026",
      foto: ["image/raung1.jpg", "image/raung2.jpg", "image/raung3.jpg"]
    },
    {
      id: 4,
      rank: "#4",
      nama: "MT. LAWU",
      mdpl: "3.265 MDPL",
      status: "pending",
      lokasi: "Magetan",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Lawu",
      deskripsi: "Gunung sarat nilai sejarah dan spiritual di perbatasan Jatim-Jateng. Terkenal dengan Hargo Dumilah, situs purbakala Candi Cetho, dan Warung Mbok Yem di puncaknya.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 5,
      rank: "#5",
      nama: "MT. WELIRANG",
      mdpl: "3.156 MDPL",
      status: "pending",
      lokasi: "Mojokerto",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Welirang",
      deskripsi: "Kembaran Gunung Arjuno yang aktif dengan kawah belerang memukau. Menyajikan pemandangan unik aktivitas penambang belerang tradisional di sekitar puncaknya.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 6,
      rank: "#6",
      nama: "MT. ARGOPURO",
      mdpl: "3.088 MDPL",
      status: "pending",
      lokasi: "Probolinggo",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Argopuro",
      deskripsi: "Pemilik jalur pendakian terpanjang di Pulau Jawa (~40 km). Terkenal dengan keindahan sabana Cikasur yang membentang luas dan mitos Dewi Rengganis.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 7,
      rank: "#7",
      nama: "MT. BUTHAK",
      mdpl: "2.868 MDPL",
      status: "done",
      lokasi: "Malang",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Buthak",
      deskripsi: "Favorit para pendaki dengan hamparan sabana hijau yang sangat luas di dekat puncaknya. Memiliki jalur yang asri dan relatif ramah untuk penikmat camp santai.",
      tanggal: "Pendakian: 25-26 April 2026",
      foto: ["image/buthak1.jpg", "image/buthak2.jpg", "image/buthak3.jpg"]
    },
    {
      id: 8,
      rank: "DONE",
      nama: "MT. RANTE",
      mdpl: "2.601 MDPL",
      status: "done",
      lokasi: "Banyuwangi",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Rante",
      deskripsi: "Salah satu puncak tertinggi di komplek Pegunungan Ijen. Menawarkan panorama lautan awan yang menakjubkan, pemandangan Kawah Ijen dari ketinggian, serta trek tebing terjal yang menantang namun ramah untuk pendakian singkat/tektok.",
      tanggal: "Pendakian: 28-29 November 2025",
      foto: ["image/rante1.jpg", "image/rante2.jpg", "image/rante3.jpg"]
    },
    {
      id: 9,
      rank: "DONE",
      nama: "MT. IJEN",
      mdpl: "2.386 MDPL",
      status: "done",
      lokasi: "Banyuwangi",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Kawah+Ijen",
      deskripsi: "Gunung api aktif yang mendunia dengan fenomena Blue Fire langka, danau kawah asam terbesar di dunia berwarna pirus, serta lanskap penambangan belerang tradisional yang ikonik.",
      tanggal: "Pendakian: 26-27 Juni 2026",
      foto: ["image/ijen1.jpg", "image/ijen2.jpg", "image/ijen3.jpg"]
    },
    {
      id: 10,
      rank: "DONE",
      nama: "MT. PENANGGUNGAN",
      mdpl: "1.653 MDPL",
      status: "done",
      lokasi: "Mojokerto",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Penanggungan",
      deskripsi: "Dikenal sebagai miniatur Gunung Semeru karena puncaknya yang berbatu dan berpasir. Sangat kaya akan nilai sejarah dengan puluhan situs candi Hindu-Buddha peninggalan kerajaan purba di sepanjang jalur pendakiannya.",
      tanggal: "Pendakian: 20-21 Desember 2025",
      foto: ["image/penanggungan1.jpg", "image/penanggungan2.jpg", "image/penanggungan3.jpg"]
    },
    {
      id: 11,
      rank: "DONE",
      nama: "MT. GULGULAN",
      mdpl: "1.406 MDPL",
      status: "done",
      lokasi: "Bondowoso",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Gulgulan",
      deskripsi: "Bukit/gunung eksotis dengan hamparan savana hijau luas yang menawan. Populer sebagai tempat camping dan pendakian singkat dengan panorama megah deretan Pegunungan Argopuro dan Ijen dari kejauhan.",
      tanggal: "Pendakian : 7 - 8 April 2025",
      foto: ["image/gulgulan1.jpg", "image/gulgulan2.jpg", "image/gulgulan3.jpg"]
    },
    {
      id: 12,
      rank: "DONE",
      nama: "MT. TANGGUS",
      mdpl: "1.251 MDPL",
      status: "done",
      lokasi: "Bondowoso",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Tanggus",
      deskripsi: "Puncak hijau yang asri di kawasan Bondowoso dengan ketinggian 1.251 MDPL. Menawarkan rute pendakian yang relatif ringan, udara sejuk khas perbukitan, serta panorama alam pedesaan dan pegunungan sekitarnya.",
      tanggal: "Pendakian: 14 - 15 Desember 2024",
      foto: ["image/tanggus1.jpg", "image/tanggus2.jpg", "image/tanggus3.jpg"]
    }
  ],
  "JAWA TENGAH": [
    {
      id: 1,
      rank: "#1",
      nama: "MT. SLAMET",
      mdpl: "3.428 MDPL",
      status: "pending",
      lokasi: "Pemalang",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Slamet",
      deskripsi: "Atap tertinggi Jawa Tengah sekaligus raksasa kedua di Pulau Jawa. Terkenal dengan medan pasir yang terjal, jalur pembabat fisik, dan pesona kawah aktifnya yang megah.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 2,
      rank: "#2",
      nama: "MT. SUMBING",
      mdpl: "3.371 MDPL",
      status: "pending",
      lokasi: "Temanggung",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Sumbing",
      deskripsi: "Puncak tertinggi kedua di Jateng dengan kaldera raksasa yang menakjubkan. Menawarkan trek menanjak yang rapat dan panorama sabana hijau yang membentang indah.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 3,
      rank: "#3",
      nama: "MT. LAWU",
      mdpl: "3.265 MDPL",
      status: "pending",
      lokasi: "Karanganyar",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Lawu",
      deskripsi: "Gunung legendaris di perbatasan Jateng-Jatim yang kaya nilai spiritual dan sejarah. Terkenal dengan Puncak Hargo Dumilah dan pengalaman unik makan di Warung Mbok Yem.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 4,
      rank: "#4",
      nama: "MT. SINDORO",
      mdpl: "3.153 MDPL",
      status: "pending",
      lokasi: "Wonosobo",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Sindoro",
      deskripsi: "Kembaran Sumbing yang anggun di kawasan Temanggung-Wonosobo. Dikenal dengan kawah aktifnya yang luas, padang edelweis, dan panorama sunrise yang memanjakan mata.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 5,
      rank: "#5",
      nama: "MT. MERBABU",
      mdpl: "3.145 MDPL",
      status: "pending",
      lokasi: "Boyolali",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Merbabu",
      deskripsi: "Gunung dengan keindahan sabana terluas di Jawa Tengah.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 6,
      rank: "#6",
      nama: "MT. MERAPI",
      mdpl: "2.930 MDPL",
      status: "pending",
      lokasi: "Boyolali",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Merapi",
      deskripsi: "Salah satu gunung berapi paling aktif di dunia yang legendaris. Menawarkan trek pasir dan bebatuan yang menantang, dipadu lanskap kawah Pasarbubar yang sangat magis.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 7,
      rank: "#7",
      nama: "MT. PRAU",
      mdpl: "2.565 MDPL",
      status: "pending",
      lokasi: "Dieng",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Prau",
      deskripsi: "Favorit pendaki pemula di Dataran Tinggi Dieng. Menyajikan spot golden sunrise terbaik se-Asia Tenggara dengan latar lanskap Gunung Sindoro dan Sumbing yang ikonik.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    }
  ],
  "JAWA BARAT": [
    {
      id: 1,
      rank: "#1",
      nama: "MT. CIREMAI",
      mdpl: "3.078 MDPL",
      status: "pending",
      lokasi: "Kuningan",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Ciremai",
      deskripsi: "Atap tertinggi Jawa Barat dengan kawah ganda yang megah. Menawarkan trek menanjak yang konstan tanpa 'bonus' serta menjadi ujian fisik dan mental bagi para pendaki.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 2,
      rank: "#2",
      nama: "MT. PANGRANGO",
      mdpl: "3.019 MDPL",
      status: "pending",
      lokasi: "Bogor",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Pangrango",
      deskripsi: "Gunung tertinggi kedua di Jabar yang berada di kawasan TN TNGGP. Sangat ikonik dengan keindahan Lembah Mandalawangi yang dipenuhi hamparan bunga edelweis.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 3,
      rank: "#3",
      nama: "MT. GEDE",
      mdpl: "2.958 MDPL",
      status: "pending",
      lokasi: "Bogor",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Gede",
      deskripsi: "Tetangga dekat Pangrango dan favorit utama pendaki. Memiliki Alun-Alun Suryakencana, kawah aktif yang gagah, serta sumber air panas di sepanjang jalur pendakian.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 4,
      rank: "#4",
      nama: "MT. CIKURAY",
      mdpl: "2.818 MDPL",
      status: "pending",
      lokasi: "Garut",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Cikuray",
      deskripsi: "Gunung berbentuk kerucut simetris sempurna dan merupakan yang tertinggi di Garut. Dikenal dengan trek menanjak tanpa jeda dan pesona lapek / lautan awannya yang indah.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 5,
      rank: "#5",
      nama: "MT. GUNTUR",
      mdpl: "2.249 MDPL",
      status: "pending",
      lokasi: "Garut",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Guntur",
      deskripsi: "Sering dijuluki Semeru-nya Jawa Barat karena medan pasir dan bebatuan terjal menuju puncaknya. Menyajikan jalur terbuka dengan lanskap savana dan pemandangan Kota Garut.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 6,
      rank: "#6",
      nama: "MT. PAPANDAYAN",
      mdpl: "2.665 MDPL",
      status: "pending",
      lokasi: "Garut",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Papandayan",
      deskripsi: "Gunung api aktif dengan fasilitas pendakian sangat lengkap dan ramah pemula. Terkenal dengan lanskap Hutan Mati yang eksotis, kompleks kawah, dan sabana Pondok Saladah.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 7,
      rank: "#7",
      nama: "MT. PATUHA",
      mdpl: "2.434 MDPL",
      status: "pending",
      lokasi: "Bandung",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Patuha",
      deskripsi: "Gunung api yang sangat ikonik di Bandung Selatan. Terkenal dengan keindahan Danau Kawah Putih dan Kawah Saat, serta dikelilingi oleh hamparan perkebunan teh dan hutan pegunungan yang asri.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    }
  ],
  "BALI": [
    {
      id: 1,
      rank: "#1",
      nama: "MT. AGUNG",
      mdpl: "3.142 MDPL",
      status: "pending",
      lokasi: "Karangasem",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Agung",
      deskripsi: "Atap tertinggi sekaligus gunung paling suci di Pulau Bali. Menawarkan trek menanjak yang sangat terjal dan ekstrem, dipadu dengan panorama lautan awan yang spektakuler saat matahari terbit.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 2,
      rank: "#2",
      nama: "MT. BATUKARU",
      mdpl: "2.276 MDPL",
      status: "pending",
      lokasi: "Tabanan",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Batukaru",
      deskripsi: "Puncak tertinggi kedua di Bali yang dikelilingi hutan hujan tropis lebat. Memiliki suasana mistis yang tenang, jalur alami yang rapat, serta Pura Puncak Luhur Batukaru di lerengnya.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 3,
      rank: "#3",
      nama: "MT. ABANG",
      mdpl: "2.151 MDPL",
      status: "pending",
      lokasi: "Bangli",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Abang",
      deskripsi: "Puncak di pematang kaldera Purba Batur yang menyajikan pemandangan Danau dan Gunung Batur dari ketinggian, serta dikelilingi hutan yang asri.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 4,
      rank: "#4",
      nama: "MT. CATUR",
      mdpl: "2.096 MDPL",
      status: "pending",
      lokasi: "Buleleng",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Catur",
      deskripsi: "Puncak tertinggi keempat di Bali yang terkenal dengan keberadaan Pura Puncak Mangu di puncaknya. Menyajikan trek hutan asri dan pemandangan Danau Beratan serta Danau Buyan dari ketinggian.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 5,
      rank: "#5",
      nama: "MT. SANGHYANG",
      mdpl: "2.087 MDPL",
      status: "pending",
      lokasi: "Tabanan",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Sanghyang",
      deskripsi: "Gunung yang masih sangat alami dan sakral di kawasan Bedugul. Memiliki vegetasi hutan lumut yang rapat, jalur yang terjal, serta suasana hening yang cocok untuk pendaki pencari ketenangan.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 6,
      rank: "#6",
      nama: "MT. ADENG",
      mdpl: "1.826 MDPL",
      status: "pending",
      lokasi: "Tabanan",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Adeng",
      deskripsi: "Gunung api mati di kawasan Bedugul yang kaya akan situs spiritual dan pura. Memiliki rute pendakian yang rindang, kental dengan suasana mistis yang tenang, dan relatif singkat.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 7,
      rank: "#7",
      nama: "MT. BATUR",
      mdpl: "1.717 MDPL",
      status: "pending",
      lokasi: "Kintamani",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Batur",
      deskripsi: "Gunung api aktif paling populer di Bali untuk sunrise trekking. Menyajikan pemandangan kaldera raksasa, Danau Batur yang mempesona, serta kawah aktif yang ramah untuk pendaki dari berbagai tingkat keahlian.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    }
  ],
  "NTB": [
    {
      id: 1,
      rank: "#1",
      nama: "MT. RINJANI",
      mdpl: "3.726 MDPL",
      status: "pending",
      lokasi: "Lombok Timur",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Rinjani",
      deskripsi: "Atap NTB yang menyajikan lanskap luar biasa. Dari hamparan savana Sembalun, tanjakan penyiksaan menuju Puncak 3.726 MDPL, hingga tempat bersantai dan memancing di Danau Segara Anak.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    },
    {
      id: 2,
      rank: "#2",
      nama: "MT. TAMBORA",
      mdpl: "2.851 MDPL",
      status: "pending",
      lokasi: "Sumbawa",
      lagu: "-",
      audioSrc: "-",
      mapUrl: "https://maps.google.com/?q=Gunung+Tambora",
      deskripsi: "Gunung berapi legendaris dengan letusan dahsyat pada tahun 1815 yang menguncang dunia. Memiliki kaldera raksasa seluas 7 km dengan kedalaman 1,1 km, dipadu hamparan padang savana Doro Ncanga yang memukau.",
      tanggal: "Pendakian: When Yah",
      foto: ["image/kosong.jpg", "image/kosong.jpg", "image/kosong.jpg"]
    }
  ]
};

// Global Audio Manager
let currentAudio = null;
let currentPlayingId = null;

// State Variables
let activeWilayah = null;
let activeGunungId = null;

// SVG Icons
const gmapsIcon = `
  <svg class="gmaps-icon" viewBox="0 0 24 24" width="14" height="20">
    <path fill="#EA4335" d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74L12 22l4-7.26C17.81 13.47 19 11.38 19 9c0-3.87-3.13-7-7-7z"/>
    <path fill="#4285F4" d="M12 2c3.87 0 7 3.13 7 7 0 2.38-1.19 4.47-3 5.74L12 22V2z"/>
    <path fill="#FBBC04" d="M5 9c0 2.38 1.19 4.47 3 5.74L12 22V9H5z"/>
    <path fill="#34A853" d="M12 22l4-7.26C17.81 13.47 19 11.38 19 9H12v13z"/>
    <circle cx="12" cy="9" r="2.8" fill="#FFFFFF"/>
  </svg>
`;

// DOM Elements
const pageWilayah = document.getElementById("page-wilayah");
const pageGunung = document.getElementById("page-gunung");
const wilayahList = document.getElementById("wilayah-list");
const gunungList = document.getElementById("gunung-list");
const titleWilayah = document.getElementById("title-wilayah");
const btnBack = document.getElementById("btn-back");
const currentTimeEl = document.getElementById("current-time");
const searchWilayahInput = document.getElementById("search-wilayah");
const searchGunungInput = document.getElementById("search-gunung");

// --- FUNGSI MODAL IMAGE PREVIEW ---
function openImageModal(event, src) {
  if (event) {
    event.stopPropagation(); // Mencegah accordion/kartu terlipat kembali
  }
  
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('img-preview');
  
  if (modal && modalImg) {
    modalImg.src = src;
    modal.style.display = 'block';
  }
}

function closeImageModal() {
  const modal = document.getElementById('image-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// Helper Format Menit & Detik (e.g. 125 -> 2:05)
function formatTime(seconds) {
  if (isNaN(seconds) || seconds <= 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Helper untuk mendapatkan filter pencarian gunung saat ini
function getGunungFilter() {
  return searchGunungInput ? searchGunungInput.value : "";
}

// Logika Pemutar Musik MP3
function toggleAudio(event, id, audioSrc) {
  event.stopPropagation();

  if (!audioSrc || audioSrc === "-") return;

  // Jika lagu yang sama diklik (Toggle Play / Pause)
  if (currentPlayingId === id && currentAudio) {
    if (currentAudio.paused) {
      currentAudio.play();
    } else {
      currentAudio.pause();
    }
    updatePlayerUI(id);
    return;
  }

  // Hentikan lagu lain yang sedang diputar
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  // Mainkan audio baru
  currentAudio = new Audio(audioSrc);
  currentPlayingId = id;

  currentAudio.play().catch(err => {
    console.warn("File MP3 belum ditemukan atau diblokir browser:", err);
  });

  // Event handler untuk update detik & slider secara real-time
  currentAudio.ontimeupdate = () => updatePlayerUI(id);

  // Event handler saat durasi lagu selesai
  currentAudio.onended = () => {
    currentPlayingId = null;
    currentAudio = null;
    renderGunung(getGunungFilter());
  };

  renderGunung(getGunungFilter());
}

// Update Tampilan Player (Detik & Range Slider) secara Real-time
function updatePlayerUI(id) {
  const card = document.querySelector(`.purple-player-card[data-id="${id}"]`);
  if (!card || !currentAudio) return;

  const curEl = card.querySelector('.time-current');
  const durEl = card.querySelector('.time-duration');
  const progressSlider = card.querySelector('.player-progress-slider');
  const playBtn = card.querySelector('.btn-play');

  const cur = currentAudio.currentTime || 0;
  const dur = currentAudio.duration || 0;

  if (curEl) curEl.textContent = formatTime(cur);
  if (durEl) durEl.textContent = dur ? `-${formatTime(dur - cur)}` : "0:00";

  if (progressSlider) {
    progressSlider.max = dur || 100;
    progressSlider.value = cur;
    const pct = dur ? (cur / dur) * 100 : 0;
    progressSlider.style.background = `linear-gradient(to right, #d2a8ff ${pct}%, rgba(255, 255, 255, 0.15) ${pct}%)`;
  }

  if (playBtn) playBtn.textContent = currentAudio.paused ? '▶' : '⏸';
}

// Fungsi Skip/Seek Lagu Saat Slider Ditarik/Diklik
function seekAudio(event) {
  event.stopPropagation();
  if (currentAudio) {
    currentAudio.currentTime = event.target.value;
    updatePlayerUI(currentPlayingId);
  }
}

// Jam Realtime
function updateClock() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = now.toLocaleDateString('id-ID', options);
  const timeStr = now.toLocaleTimeString('id-ID').replace(/\./g, ':');

  if (currentTimeEl) {
    currentTimeEl.textContent = `${dateStr} pukul ${timeStr}`;
  }
}
setInterval(updateClock, 1000);
updateClock();

// Render Halaman Wilayah
function renderWilayah(filter = "") {
  wilayahList.innerHTML = "";
  const filteredKeys = Object.keys(database).filter(w =>
    w.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredKeys.length === 0) {
    wilayahList.innerHTML = `<p style="text-align:center; color:#8b949e;">Wilayah tidak ditemukan.</p>`;
    return;
  }

  filteredKeys.forEach(wilayah => {
    const card = document.createElement("div");
    card.className = "card card-wilayah";
    card.innerHTML = `
      <h2>${wilayah}</h2>
      <p>Ketuk untuk melihat info gunung</p>
    `;
    card.onclick = () => openWilayah(wilayah);
    wilayahList.appendChild(card);
  });
}

// Buka Halaman Gunung
function openWilayah(wilayah) {
  activeWilayah = wilayah;
  activeGunungId = null;
  titleWilayah.textContent = wilayah;

  pageWilayah.classList.add("hidden");
  pageGunung.classList.remove("hidden");

  if (searchGunungInput) searchGunungInput.value = "";
  renderGunung();
}

// Render Halaman Gunung
function renderGunung(filter = "") {
  gunungList.innerHTML = "";
  let data = database[activeWilayah] || [];

  if (filter) {
    data = data.filter(item => item.nama.toLowerCase().includes(filter.toLowerCase()));
  }

  if (data.length === 0) {
    gunungList.innerHTML = `<p style="text-align:center; color:#8b949e;">Belum ada data gunung untuk wilayah ini.</p>`;
    return;
  }

  data.forEach(item => {
    const isExpanded = item.id === activeGunungId;
    const isPlaying = (currentPlayingId === item.id) && currentAudio && !currentAudio.paused;

    const card = document.createElement("div");
    card.className = `card ${isExpanded ? 'expanded' : ''}`;

    const statusMark = item.status === "done"
      ? `<div class="status-badge done">✔</div>`
      : `<div class="status-badge pending">✕</div>`;

    // Widget Pemutar Musik Ungu Ringkas
    const songBadgeHTML = (isExpanded && item.lagu && item.lagu !== "-") ? `
      <div class="purple-player-card ${isPlaying ? 'playing' : ''}" data-id="${item.id}">
        <div class="player-top-row">
          <span class="player-song-text">${item.lagu}</span>
        </div>

        <div class="player-progress-container" onclick="event.stopPropagation()">
          <input type="range" 
                 class="player-progress-slider" 
                 min="0" 
                 max="100" 
                 value="0" 
                 oninput="seekAudio(event)">
        </div>

        <div class="player-bottom-row">
          <span class="player-time time-current">0:00</span>
          
          <div class="player-controls">
            <button class="btn-ctrl btn-play" onclick="toggleAudio(event, ${item.id}, '${item.audioSrc}')">
              ${isPlaying ? '⏸' : '▶'}
            </button>
          </div>

          <span class="player-time time-duration">0:00</span>
        </div>
      </div>
    ` : "";

    // Detail Galeri & Deskripsi
    const detailHTML = isExpanded ? `
      <div class="gunung-detail">
        <div class="gallery">
          ${item.foto.map(img => `<img src="${img}" alt="${item.nama}" onclick="openImageModal(event, '${img}')">`).join('')}
        </div>
        <div class="desc-box">
          <div class="desc-card">
            <p class="description">${item.deskripsi}</p>
          </div>

          <div class="date-badge">
            <span>📅</span> ${item.tanggal}
          </div>
        </div>
      </div>
    ` : "";

    // URL Google Maps Fallback yang valid
    const fallbackMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.nama)}`;
    const finalMapUrl = (item.mapUrl && item.mapUrl !== "-") ? item.mapUrl : fallbackMapUrl;

    card.innerHTML = `
      <div class="gunung-header">
        <div class="gunung-info-left">
          <div class="gunung-badge-group">
            <span class="badge-rank">${item.rank}</span>
            <div class="badge-title">
              <span class="gunung-title">${item.nama}</span>
            </div>
            <span class="badge-mdpl">${item.mdpl}</span>
          </div>

          <div class="location-container">
            <a href="${finalMapUrl}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="location-badge">
              <div class="loc-icon-cell">
                ${gmapsIcon}
              </div>
              <div class="loc-text-cell">
                <span>${item.lokasi || 'Lokasi'}</span>
              </div>
            </a>
            <span class="location-hint">ketuk untuk melihat info lokasi</span>
          </div>

          ${songBadgeHTML}
        </div>
        
        <div class="gunung-actions-right">
          ${statusMark}
          <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
      
      ${detailHTML}
    `;

    // Toggle expand kartu
    card.onclick = () => {
      activeGunungId = activeGunungId === item.id ? null : item.id;
      renderGunung(getGunungFilter());
    };

    // Cegah link lokasi memicu expand kartu
    const locationBtn = card.querySelector('.location-badge');
    if (locationBtn) {
      locationBtn.onclick = (e) => e.stopPropagation();
    }

    gunungList.appendChild(card);
  });
}

// Event Listeners Input Pencarian
if (searchWilayahInput) {
  searchWilayahInput.oninput = (e) => renderWilayah(e.target.value);
}
if (searchGunungInput) {
  searchGunungInput.oninput = (e) => renderGunung(e.target.value);
}

// Tombol Navigasi Kembali
btnBack.onclick = () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
    currentPlayingId = null;
  }
  pageGunung.classList.add("hidden");
  pageWilayah.classList.remove("hidden");
};

// Inisialisasi awal
renderWilayah();