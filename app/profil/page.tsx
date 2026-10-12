import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";

export const metadata: Metadata = { title: "Profil Desa Dagen" };

const missions = [
  "Jadikan Desa Dagen sebagai industri, baik industri menengah maupun industri kecil yang maju.",
  "Menjadikan Desa Dagen daerah pertanian yang berwawasan Agro bisnis dan Agro industri dengan mengembangkan produk unggulan, andalan dan potensial yang kompetitif.",
  "Menjadikan Desa Dagen sebagai pusat pendidikan dan pengembangan sumber daya manusia yang menguasai ilmu pengetahuan dan teknologi, beriman dan bertaqwa, berkepribadian bangsa berbudi luhur dan berwawasan ke depan.",
  "Menjadikan Desa Dagen yang meningkat kesejahteraan.",
  "Mengembangkan sistem informasi yang selalu disesuaikan dengan perkembangan sarana telekomunikasi dan komunikasi sebagai promosi yang efektif bagi potensi dan perkembangan Desa Dagen.",
  "Meningkatkan upaya pemberantasan Korupsi, Kolusi dan Nepotisme (KKN).",
];

const demographics = [
  ["01", "Jumlah Dusun", "6", "Dusun", "Celep Kidul, Celep Lor, Dagen, Jetak, Songgorunggi, Turisari"],
  ["02", "Rukun Warga (RW)", "13", "RW", "Data administratif tahun 2024"],
  ["03", "Rukun Tetangga (RT)", "39", "RT", "Data administratif tahun 2024"],
  ["04", "Jumlah Penduduk Total", "5.810", "Jiwa", "Data kependudukan tahun 2024"],
  ["05", "Penduduk Laki-laki", "2.914", "Jiwa", "50,15% dari total penduduk Desa Dagen"],
  ["06", "Penduduk Perempuan", "2.896", "Jiwa", "49,85% dari total penduduk Desa Dagen"],
  ["07", "Persentase Penduduk Kecamatan Jaten", "7,09%", "Persen", "Proporsi penduduk Dagen terhadap penduduk Kecamatan Jaten"],
  ["08", "Kepadatan Penduduk", "2.049", "jiwa/km²", "Data tahun 2024"],
  ["09", "Rasio Jenis Kelamin", "100,62", "", "Laki-laki per 100 perempuan"],
];

const staff = [
  ["EKO MARWANTO, S.Sos.", "SEKRETARIS DESA", "Koordinator Administrasi Desa"],
  ["WAHID MUSTOFA", "KAUR TATA USAHA & UMUM", "Surat, Aset & Arsip Desa"],
  ["BUDI SANTOSO", "KAUR KEUANGAN", "Bendahara & Pengelolaan APBDes"],
  ["NGATMIN", "KAUR PERENCANAAN", "RPJMDes & RKPDes"],
  ["MOH NOER FATONI", "KASI PEMERINTAHAN", "Pembinaan ketertiban, batas desa & data kependudukan"],
  ["SUWARTO", "KASI KESEJAHTERAAN", "Pembangunan infrastruktur, bansos & pembinaan warga"],
  ["DIDIK NUGROHO", "KASI PELAYANAN", "Layanan surat menyurat, nikah, perizinan & keagamaan"],
];



export default function ProfilPage() {
  return <main className="figmaProfile">
    <SiteHeader page="profile" />

    <section className="historyHero"><Image src="/figma/profile-history.png" alt="Pemandangan Desa Dagen" fill priority sizes="100vw" /><div className="historyShade" /><div className="historyCard"><h1>Sejarah Desa Dagen</h1><p>Desa Dagen merupakan satu desa yang berada di Kecamatan Jaten, Kabupaten Karanganyar. Adapun sejarah berdirinya desa ini berasal dari sebuah kepercayaan terhadap adanya cikal bakal leluhur, yaitu makam Pangeran Dagi, Eyang Dagi, dan Mbah Dipo. Dari situlah maka kemudian muncul nama Dagen yang menurut masyarakat setempat adalah dusun pertama di Desa Dagen. Menurut kepercayaan masyarakat Desa Dagen. Oleh beberapa masyarakat, baik itu masyarakat dari luar maupun masyarakat Dagen sendiri, makam Pangeran Dagi, Eyang Dagi, dan Mbah Dipo dipercaya dapat mendatangkan berkat. Misalnya, Masyarakat yang memohon restu untuk mencari jabatan. Sampai saat ini banyak masyarakat yang masih meyakini bahwa orang yang memohon restu di makam Pangeran Dagi, Eyang Dagi and Mbah Dipo akan benar-benar-benar mendapatkan berkah yang dimintanya.</p></div></section>

    <section className="vmSection"><header className="profileSectionHeading"><h2>Visi</h2></header><div className="winePanel quote">&ldquo;Pembangunan Desa Dagen adalah terwujudnya daerah Desa yang maju, adil makmur dan mandiri dalam suasana tentram dengan industri, pertanian yang handal yang didukung oleh masyarakat yang sehat jasmani dan rohani, demokrasi berbudi luhur dan berkepribadian&rdquo;</div><header className="profileSectionHeading"><h2>Misi</h2></header><div className="winePanel missionPanel"><ol>{missions.map((mission) => <li key={mission}>{mission}</li>)}</ol></div></section>

    <section className="profileBlock"><header className="profileSectionHeading"><h2 className="ribbonTitle">Peta Administrasi Desa Dagen</h2></header><div className="mapFrame"><Image src="/figma/administrative-map.png" alt="Peta administrasi Desa Dagen" width={1755} height={1240} /></div></section>

    <section className="profileBlock orgBlock"><header className="profileSectionHeading"><h2 className="ribbonTitle">Struktur Organisasi</h2></header><div className="orgCanvas" role="region" aria-label="Diagram struktur organisasi Desa Dagen" tabIndex={0}><Image src="/strutur-organisasi.png" alt="Bagan struktur organisasi Desa Dagen" width={876} height={626} /><p className="orgScrollHint">Geser diagram ke samping untuk melihat seluruh struktur.</p></div></section>

    <section id="demografi" className="demography"><div className="demographyInner"><header className="profileSectionHeading"><h2>Wilayah & Demografi Kependudukan</h2><p>Desa Dagen terbagi menjadi 6 dusun, 13 RW, dan 39 RT. Pada tahun 2024, jumlah penduduk tercatat 5.810 jiwa dengan kepadatan 2.049 jiwa/km².</p></header><h3>Distribusi Berdasarkan Jenis Kelamin</h3><div className="genderCards"><article><p>Penduduk Laki-Laki</p><strong>2.914 <small>Jiwa</small></strong><div><span>Persentase Penduduk</span><b>50,15%</b></div><i><em style={{ width: "50.15%" }} /></i></article><article><p>Penduduk Perempuan</p><strong>2.896 <small>Jiwa</small></strong><div><span>Persentase Penduduk</span><b>49,85%</b></div><i><em style={{ width: "49.85%" }} /></i></article></div><h3 className="matrixTitle">Matriks Indikator Kependudukan</h3><div className="tableWrap" role="region" aria-label="Matriks indikator kependudukan, geser ke samping untuk melihat semua kolom" tabIndex={0}><table><thead><tr><th>No</th><th>Indikator Administratif / Demografi</th><th>Nilai Parameter</th><th>Satuan</th><th>Keterangan</th></tr></thead><tbody>{demographics.map((row) => <tr className={row[0] === "04" ? "populationTotal" : undefined} key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>)}</tbody></table></div></div></section>

    <section id="layanan" className="healthSection">
      <div className="healthSectionHeading"><h2>LAYANAN PUBLIK &amp; KESEHATAN</h2><p>Ringkasan fasilitas kesehatan, layanan masyarakat, dan data sosial Desa Dagen tahun 2024.</p></div><div className="healthHeading"><h2>Kesehatan dan Kesejahteraan Masyarakat</h2></div>
      <div className="healthInner">
        <div className="healthKpis">
          <article><div className="healthKpiLabel"><span>FASILITAS KESEHATAN</span></div><div className="healthKpiValue"><b>6</b><small>Unit</small></div><p>1 klinik, 1 puskesmas pembantu, 1 PKD, dan 3 apotek</p></article>
          <article><div className="healthKpiLabel"><span>POSYANDU &amp; POSBINDU</span></div><div className="healthKpiValue"><b>13</b><small>Pos</small></div><p>6 balita, 5 lansia, 1 remaja, dan 1 Posbindu PTM</p></article>
          <article><div className="healthKpiLabel"><span>KADER KESEHATAN</span></div><div className="healthKpiValue"><b>58</b><small>Orang</small></div><p>52 kader Posyandu dan 6 kader Posbindu PTM</p></article>
          <article><div className="healthKpiLabel"><span>PASANGAN USIA SUBUR</span></div><div className="healthKpiValue"><b>954</b><small>PUS</small></div><p>Data program keluarga berencana tahun 2024</p></article>
          <article><div className="healthKpiLabel"><span>AKSEPTOR KB</span></div><div className="healthKpiValue"><b>561</b><small>Orang</small></div><p>Akseptor KB tercatat pada data tahun 2024</p></article>
        </div>
        <div className="healthCards">
          <article className="posyanduCard">
            <header><div><h3>Fasilitas Kesehatan</h3><p>Sarana pelayanan kesehatan yang tercatat di wilayah Dagen pada tahun 2024.</p></div><span className="healthTag">Total 6 Unit</span></header>
            <div className="posyanduGrid">
              <div><small>KLINIK PRATAMA</small><strong>1 Unit</strong></div>
              <div><small>PUSKESMAS PEMBANTU</small><strong>1 Unit</strong></div>
              <div><small>POLIKLINIK KESEHATAN DESA / PKD</small><strong>1 Unit</strong></div>
              <div><small>APOTEK</small><strong>3 Unit</strong></div>
            </div>
            <div className="staffSummary"><strong>Fasilitas sesuai data kesehatan Desa Dagen tahun 2024.</strong></div>
          </article>
          <article className="kbCard">
            <header><div><h3>Posyandu & Keluarga Berencana</h3><p>Layanan kesehatan masyarakat dan program keluarga berencana tahun 2024.</p></div><span className="healthTag goldTag">561 Akseptor KB</span></header>
            <div className="posyanduGrid">
              <div><small>POSYANDU BALITA</small><strong>6 Posyandu</strong></div>
              <div><small>POSYANDU LANSIA</small><strong>5 Posyandu</strong></div>
              <div><small>POSYANDU REMAJA</small><strong>1 Posyandu</strong></div>
              <div><small>POSBINDU PTM</small><strong>1 Posbindu</strong></div>
            </div>
            <div className="staffSummary"><strong>Tenaga kader:</strong><span>52 kader Posyandu</span><span>6 kader Posbindu PTM</span></div>
            <div className="kbOverview"><div><small>PASANGAN USIA SUBUR (PUS)</small><strong>954</strong></div><div><small>AKSEPTOR KB</small><strong>561</strong></div></div>
            <small className="kbSource">Sumber: Data kesehatan dan KB Desa Dagen 2024</small>
          </article>
          <article className="kbCard">
            <header><div><h3>Kondisi Sosial</h3><p>Data penyandang disabilitas di Dagen pada tahun 2024.</p></div></header>
            <div className="posyanduGrid">
              <div><small>TUNA DAKSA</small><strong>2 Orang</strong></div>
              <div><small>CACAT GANDA</small><strong>3 Orang</strong></div>
            </div>
            <p>Jumlah tuna netra, tuna rungu, tuna grahita, dan tuna laras tidak tercatat pada tabel sumber.</p>
            <small className="kbSource">Sumber: Data sosial Desa Dagen 2024</small>
          </article>
        </div>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
