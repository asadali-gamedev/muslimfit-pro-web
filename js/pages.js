/**
 * MuslimFit Pro - Page Content
 * All page HTML templates with real data integration
 */

window.PAGES = {

// ==========================================
// HOME PAGE
// ==========================================
home: `
<div class="page-container fade-in">
    <!-- Welcome & Next Prayer Card -->
    <div class="rounded-2xl overflow-hidden mb-6" style="background: linear-gradient(135deg, #0D7C66, #0A5C4F, #0D4A3F);">
        <div class="p-6 text-white">
            <p class="text-sm opacity-80 mb-1">As-salamu Alaykum</p>
            <h1 class="text-2xl font-bold mb-4">Welcome to MuslimFit Pro</h1>
            <div class="flex items-center gap-3 mb-4">
                <i class="fas fa-calendar-alt text-accent-gold"></i>
                <div>
                    <p class="text-xs opacity-70" id="home-hijri-date">Loading...</p>
                    <p class="text-sm opacity-90" id="home-gregorian-date">${new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
            </div>
            <!-- Next Prayer -->
            <div class="bg-white bg-opacity-15 rounded-xl p-4">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-xs opacity-70">Next Prayer</p>
                        <p class="text-2xl font-bold" id="home-next-prayer">Loading...</p>
                    </div>
                    <div class="text-right">
                        <p class="text-xs opacity-70">Time Remaining</p>
                        <p class="text-2xl font-bold font-mono" id="home-prayer-countdown">--:--:--</p>
                    </div>
                </div>
                <div class="w-full bg-white bg-opacity-20 rounded-full h-1.5 mt-3">
                    <div id="home-prayer-progress" class="h-1.5 rounded-full transition-all" style="width: 0%; background: #D4AF37;"></div>
                </div>
            </div>
        </div>
    </div>

    <!-- Quick Actions -->
    <div class="section-header">
        <i class="fas fa-bolt"></i>
        <h2>Quick Access</h2>
    </div>
    <div class="grid grid-cols-4 gap-3 mb-6">
        <a href="#quran" class="feature-card text-center py-3 px-2">
            <div class="w-12 h-12 mx-auto rounded-full bg-primary-light flex items-center justify-center mb-2">
                <i class="fas fa-quran text-primary-main text-lg"></i>
            </div>
            <h3 class="font-semibold text-gray-800 text-xs">Quran</h3>
        </a>
        <a href="#duas" class="feature-card text-center py-3 px-2">
            <div class="w-12 h-12 mx-auto rounded-full bg-accent-gold-light flex items-center justify-center mb-2">
                <i class="fas fa-hands-praying text-accent-gold text-lg"></i>
            </div>
            <h3 class="font-semibold text-gray-800 text-xs">Duas</h3>
        </a>
        <a href="#dhikr" class="feature-card text-center py-3 px-2">
            <div class="w-12 h-12 mx-auto rounded-full bg-primary-light flex items-center justify-center mb-2">
                <i class="fas fa-hand-sparkles text-primary-main text-lg"></i>
            </div>
            <h3 class="font-semibold text-gray-800 text-xs">Dhikr</h3>
        </a>
        <a href="#qibla" class="feature-card text-center py-3 px-2">
            <div class="w-12 h-12 mx-auto rounded-full bg-accent-gold-light flex items-center justify-center mb-2">
                <i class="fas fa-compass text-accent-gold text-lg"></i>
            </div>
            <h3 class="font-semibold text-gray-800 text-xs">Qibla</h3>
        </a>
    </div>

    <!-- Health Dashboard -->
    <div class="section-header">
        <i class="fas fa-heartbeat"></i>
        <h2>Today's Health</h2>
    </div>
    <div class="grid grid-cols-2 gap-3 mb-6">
        <a href="#step-counter" class="islamic-card flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-walking text-green-600"></i>
            </div>
            <div>
                <p class="text-lg font-bold text-gray-800" id="home-steps">0</p>
                <p class="text-xs text-gray-500">Steps</p>
            </div>
        </a>
        <a href="#water-tracker" class="islamic-card flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-tint text-blue-600"></i>
            </div>
            <div>
                <p class="text-lg font-bold text-gray-800" id="home-water">0/8</p>
                <p class="text-xs text-gray-500">Glasses</p>
            </div>
        </a>
        <a href="#sleep-tracker" class="islamic-card flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-bed text-purple-600"></i>
            </div>
            <div>
                <p class="text-lg font-bold text-gray-800" id="home-sleep">0h</p>
                <p class="text-xs text-gray-500">Sleep</p>
            </div>
        </a>
        <a href="#nutrition-tracker" class="islamic-card flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-utensils text-orange-600"></i>
            </div>
            <div>
                <p class="text-lg font-bold text-gray-800" id="home-calories">0</p>
                <p class="text-xs text-gray-500">Calories</p>
            </div>
        </a>
    </div>

    <!-- All Features Grid -->
    <div class="section-header">
        <i class="fas fa-th-large"></i>
        <h2>All Features</h2>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-4 gap-3">
        <a href="#quran" class="feature-card text-center py-3"><div class="feature-icon bg-primary-light mx-auto"><i class="fas fa-quran text-primary-main"></i></div><h3 class="font-semibold text-gray-800 text-xs mt-2">Quran</h3></a>
        <a href="#hadith" class="feature-card text-center py-3"><div class="feature-icon bg-secondary-light mx-auto"><i class="fas fa-book-open text-secondary-main"></i></div><h3 class="font-semibold text-gray-800 text-xs mt-2">Hadith</h3></a>
        <a href="#duas" class="feature-card text-center py-3"><div class="feature-icon bg-accent-gold-light mx-auto"><i class="fas fa-hands-praying text-accent-gold"></i></div><h3 class="font-semibold text-gray-800 text-xs mt-2">Duas</h3></a>
        <a href="#dhikr" class="feature-card text-center py-3"><div class="feature-icon bg-primary-light mx-auto"><i class="fas fa-hand-sparkles text-primary-main"></i></div><h3 class="font-semibold text-gray-800 text-xs mt-2">Dhikr</h3></a>
        <a href="#allah-names" class="feature-card text-center py-3"><div class="feature-icon bg-secondary-light mx-auto"><i class="fas fa-infinity text-secondary-main"></i></div><h3 class="font-semibold text-gray-800 text-xs mt-2">99 Names</h3></a>
        <a href="#kalmas" class="feature-card text-center py-3"><div class="feature-icon bg-accent-gold-light mx-auto"><i class="fas fa-star-and-crescent text-accent-gold"></i></div><h3 class="font-semibold text-gray-800 text-xs mt-2">6 Kalmas</h3></a>
        <a href="#prayer-times" class="feature-card text-center py-3"><div class="feature-icon bg-primary-light mx-auto"><i class="fas fa-clock text-primary-main"></i></div><h3 class="font-semibold text-gray-800 text-xs mt-2">Prayer Times</h3></a>
        <a href="#qibla" class="feature-card text-center py-3"><div class="feature-icon bg-secondary-light mx-auto"><i class="fas fa-compass text-secondary-main"></i></div><h3 class="font-semibold text-gray-800 text-xs mt-2">Qibla</h3></a>
        <a href="#namaz-guide" class="feature-card text-center py-3"><div class="feature-icon bg-accent-gold-light mx-auto"><i class="fas fa-mosque text-accent-gold"></i></div><h3 class="font-semibold text-gray-800 text-xs mt-2">Namaz Guide</h3></a>
        <a href="#hajj-guide" class="feature-card text-center py-3"><div class="feature-icon bg-primary-light mx-auto"><i class="fas fa-kaaba text-primary-main"></i></div><h3 class="font-semibold text-gray-800 text-xs mt-2">Hajj</h3></a>
        <a href="#umrah-guide" class="feature-card text-center py-3"><div class="feature-icon bg-secondary-light mx-auto"><i class="fas fa-kaaba text-secondary-main"></i></div><h3 class="font-semibold text-gray-800 text-xs mt-2">Umrah</h3></a>
        <a href="#pillars" class="feature-card text-center py-3"><div class="feature-icon bg-accent-gold-light mx-auto"><i class="fas fa-columns text-accent-gold"></i></div><h3 class="font-semibold text-gray-800 text-xs mt-2">5 Pillars</h3></a>
        <a href="#quran-player" class="feature-card text-center py-3"><div class="feature-icon bg-primary-light mx-auto"><i class="fas fa-headphones text-primary-main"></i></div><h3 class="font-semibold text-gray-800 text-xs mt-2">Quran Player</h3></a>
        <a href="#prophet-names" class="feature-card text-center py-3"><div class="feature-icon bg-secondary-light mx-auto"><i class="fas fa-star-and-crescent text-secondary-main"></i></div><h3 class="font-semibold text-gray-800 text-xs mt-2">Names of Muhammad</h3></a>
        <a href="#ramadan" class="feature-card text-center py-3"><div class="feature-icon bg-primary-light mx-auto"><i class="fas fa-moon text-primary-main"></i></div><h3 class="font-semibold text-gray-800 text-xs mt-2">Ramadan</h3></a>
        <a href="#zakat" class="feature-card text-center py-3"><div class="feature-icon bg-secondary-light mx-auto"><i class="fas fa-hand-holding-heart text-secondary-main"></i></div><h3 class="font-semibold text-gray-800 text-xs mt-2">Zakat</h3></a>
        <a href="#challenges" class="feature-card text-center py-3"><div class="feature-icon bg-green-100 mx-auto"><i class="fas fa-trophy text-green-600"></i></div><h3 class="font-semibold text-gray-800 text-xs mt-2">Challenges</h3></a>
        <a href="#exercises" class="feature-card text-center py-3"><div class="feature-icon bg-orange-100 mx-auto"><i class="fas fa-dumbbell text-orange-600"></i></div><h3 class="font-semibold text-gray-800 text-xs mt-2">Exercises</h3></a>
    </div>
</div>
`,

// ==========================================
// QURAN PAGE
// ==========================================
quran: () => {
    const meta = window.DATA.quranMeta;
    const surahs = meta ? meta.surahs : window.DATA.surahs;
    const juzInfo = meta ? meta.juzInfo : [];
    const useMeta = !!meta;

    return `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-quran" style="color:#0D7C66;"></i>
        <h1 style="color:#1F2937;">Holy Quran</h1>
        <p style="color:#6B7280;">114 Surahs • 30 Juz • 52 Languages</p>
    </div>

    <div class="search-bar mb-4">
        <i class="fas fa-search"></i>
        <input type="text" id="surah-search" placeholder="Search Surah by name or number..." onkeyup="filterSurahs(this.value)">
    </div>

    <!-- Tabs: By Surah / By Juz -->
    <div class="flex gap-2 mb-4">
        <button onclick="switchQuranTab('surah')" id="tab-surah" class="category-btn active flex-1 text-center">
            <i class="fas fa-book-open mr-1"></i>By Surah
        </button>
        <button onclick="switchQuranTab('juz')" id="tab-juz" class="category-btn flex-1 text-center">
            <i class="fas fa-layer-group mr-1"></i>By Juz
        </button>
    </div>

    <!-- Surah Reader (hidden by default) -->
    <div id="surah-reader" class="hidden mb-6">
        <div class="flex items-center gap-3 mb-4">
            <button onclick="closeQuranReader()" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <i class="fas fa-arrow-left" style="color:#374151;"></i>
            </button>
            <div class="flex-1">
                <h2 class="font-bold text-xl" style="color:#1F2937;" id="reader-surah-name"></h2>
                <p class="text-sm" style="color:#6B7280;" id="reader-surah-info"></p>
            </div>
            <p class="text-2xl font-arabic" style="color:#0D7C66;" id="reader-surah-arabic"></p>
        </div>
        <!-- Language Selector -->
        <div class="flex items-center gap-2 mb-4">
            <label class="text-sm font-semibold" style="color:#374151;">Translation:</label>
            <select id="quran-lang" onchange="changeQuranLang()" class="text-sm border rounded-lg px-3 py-1.5" style="border-color:#E5E7EB;">
                <option value="en.asad">English (M. Asad)</option>
                <option value="en.sahih">English (Sahih Intl)</option>
                <option value="en.pickthall">English (Pickthall)</option>
                <option value="en.yusufali">English (Yusuf Ali)</option>
                <option value="ur.jalandhry">Urdu (Jalandhry)</option>
                <option value="ur.maududi">Urdu (Maududi)</option>
                <option value="ur.qadri">Urdu (Tahir ul Qadri)</option>
                <option value="ar.muyassar">Arabic (Tafseer Muyassar)</option>
                <option value="fr.hamidullah">French</option>
                <option value="de.bubenheim">German</option>
                <option value="tr.ates">Turkish</option>
                <option value="tr.diyanet">Turkish (Diyanet)</option>
                <option value="id.indonesian">Indonesian</option>
                <option value="bn.bengali">Bengali</option>
                <option value="ml.abdulhameed">Malayalam</option>
                <option value="hi.hindi">Hindi</option>
                <option value="ta.tamil">Tamil</option>
                <option value="te.telugu">Telugu</option>
                <option value="gu.gujarati">Gujarati</option>
                <option value="kn.kannada">Kannada</option>
                <option value="pa.punjabi">Punjabi</option>
                <option value="as.assamese">Assamese</option>
                <option value="fa.makarem">Farsi</option>
                <option value="fa.ansarian">Farsi (Ansarian)</option>
                <option value="ps.pashto">Pashto</option>
                <option value="ku.kurdish">Kurdish</option>
                <option value="es.cortes">Spanish</option>
                <option value="pt.elhayek">Portuguese</option>
                <option value="ru.kuliev">Russian</option>
                <option value="nl.siregar">Dutch</option>
                <option value="ro.grigore">Romanian</option>
                <option value="sq.ahmeti">Albanian</option>
                <option value="bs.korkut">Bosnian</option>
                <option value="hr.croatian">Croatian</option>
                <option value="sr.serbian">Serbian</option>
                <option value="mk.macedonian">Macedonian</option>
                <option value="lt.lithuanian">Lithuanian</option>
                <option value="az.musayev">Azerbaijani</option>
                <option value="uz.sodik">Uzbek</option>
                <option value="ky.kyrgyz">Kyrgyz</option>
                <option value="tg.tajik">Tajik</option>
                <option value="ug.uyghur">Uyghur</option>
                <option value="zh.majian">Chinese</option>
                <option value="ja.japanese">Japanese</option>
                <option value="ko.korean">Korean</option>
                <option value="km.khmer">Khmer</option>
                <option value="vi.vietnamese">Vietnamese</option>
                <option value="tl.tagalog">Tagalog</option>
                <option value="ceb.cebuano">Cebuano</option>
                <option value="sw.swahili">Swahili</option>
                <option value="ha.hausa">Hausa</option>
                <option value="so.abduh">Somali</option>
                <option value="am.amharic">Amharic</option>
                <option value="yo.yoruba">Yoruba</option>
                <option value="si.sinhala">Sinhala</option>
            </select>
        </div>
        <div id="reader-content" class="space-y-4">
            <div class="text-center py-8">
                <i class="fas fa-spinner fa-spin text-3xl mb-3" style="color:#0D7C66;"></i>
                <p style="color:#6B7280;">Loading Surah...</p>
            </div>
        </div>
        <div class="flex gap-3 mt-6">
            <button onclick="prevSurah()" id="prev-surah-btn" class="flex-1 py-3 rounded-lg hover:bg-gray-200" style="background:#F3F4F6;color:#374151;">
                <i class="fas fa-chevron-left mr-2"></i>Previous
            </button>
            <button onclick="nextSurah()" id="next-surah-btn" class="flex-1 py-3 rounded-lg text-white" style="background:#0D7C66;">
                Next<i class="fas fa-chevron-right ml-2"></i>
            </button>
        </div>
    </div>

    <!-- Surah List -->
    <div id="surah-list" class="space-y-3">
        ${(useMeta ? surahs : []).map(surah => `
            <div class="islamic-card surah-item cursor-pointer hover:shadow-lg transition-all" data-name="${(surah.transliteration || '').toLowerCase()} ${(surah.englishName || '').toLowerCase()}" data-number="${surah.number}" onclick="openQuranReader(${surah.number})">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background:rgba(13,124,102,0.08);">
                            <span class="font-bold" style="color:#0D7C66;">${surah.number}</span>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg" style="color:#1F2937;">${surah.transliteration}</h3>
                            <p class="text-sm" style="color:#6B7280;">${surah.englishName} • ${surah.verses} Verses • ${surah.revelation}</p>
                        </div>
                    </div>
                    <div class="text-right flex items-center gap-2">
                        <p class="text-2xl font-arabic" style="color:#0D7C66;">${surah.name}</p>
                        <i class="fas fa-chevron-right text-sm" style="color:#9CA3AF;"></i>
                    </div>
                </div>
            </div>
        `).join('')}
        ${!useMeta ? window.DATA.surahs.map(surah => `
            <div class="islamic-card surah-item cursor-pointer hover:shadow-lg transition-all" data-name="${surah.n.toLowerCase()}" data-number="${surah.num}" onclick="openQuranReader(${surah.num})">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background:rgba(13,124,102,0.08);">
                            <span class="font-bold" style="color:#0D7C66;">${surah.num}</span>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg" style="color:#1F2937;">${surah.n}</h3>
                            <p class="text-sm" style="color:#6B7280;">${surah.tr} • ${surah.v} Verses</p>
                        </div>
                    </div>
                    <div class="text-right flex items-center gap-2">
                        <p class="text-2xl font-arabic" style="color:#0D7C66;">${surah.ar}</p>
                        <i class="fas fa-chevron-right text-sm" style="color:#9CA3AF;"></i>
                    </div>
                </div>
            </div>
        `).join('') : ''}
    </div>

    <!-- Juz List (hidden by default) -->
    <div id="juz-list" class="space-y-3 hidden">
        ${juzInfo.map(juz => {
            const startSurah = surahs.find(s => s.number === juz.startSurah);
            const endSurah = surahs.find(s => s.number === juz.endSurah);
            return `
            <div class="islamic-card cursor-pointer hover:shadow-lg transition-all" onclick="openJuzReader(${juz.number})">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background:rgba(212,175,55,0.1);">
                            <span class="font-bold" style="color:#D4AF37;">${juz.number}</span>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg" style="color:#1F2937;">Juz ${juz.number}</h3>
                            <p class="text-sm" style="color:#6B7280;">${startSurah ? startSurah.transliteration : ''} ${juz.startVerse}:${juz.startVerse} → ${endSurah ? endSurah.transliteration : ''} ${juz.endSurah}:${juz.endVerse}</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="text-xl font-arabic" style="color:#D4AF37;">${juz.name}</p>
                        <p class="text-xs" style="color:#9CA3AF;">${juz.transliteration}</p>
                    </div>
                </div>
            </div>
            `;
        }).join('')}
    </div>
</div>
`;
},

// ==========================================
// HADITH PAGE
// ==========================================
hadith: () => {
    const books = window.DATA.hadithBooks;
    return `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-book-open" style="color:#0D7C66;"></i>
        <h1 style="color:#1F2937;">Hadith Collections</h1>
        <p style="color:#6B7280;">Authentic Hadith from ${books.length} major books</p>
    </div>

    <!-- Book List -->
    <div id="hadith-books-list" class="space-y-4">
        ${books.map(book => `
            <div class="islamic-card cursor-pointer hover:shadow-lg transition-all" onclick="openHadithBook('${book.bookSlug}')">
                <div class="flex items-start justify-between">
                    <div class="flex-1">
                        <h3 class="font-bold text-xl mb-2" style="color:#1F2937;">${book.bookName}</h3>
                        <p class="mb-3" style="color:#6B7280;">By ${book.writerName}</p>
                        <div class="flex flex-wrap gap-3 text-sm">
                            <div class="flex items-center gap-2">
                                <i class="fas fa-book" style="color:#0D7C66;"></i>
                                <span style="color:#374151;">${book.hadiths_count} Hadiths</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <i class="fas fa-list" style="color:#D4AF37;"></i>
                                <span style="color:#374151;">${book.chapters_count} Chapters</span>
                            </div>
                            ${book.writerDeath ? `<div class="flex items-center gap-2"><i class="fas fa-calendar" style="color:#D4AF37;"></i><span style="color:#374151;">Death: ${book.writerDeath}</span></div>` : ''}
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="w-14 h-14 rounded-full flex items-center justify-center" style="background:rgba(13,124,102,0.08);">
                            <i class="fas fa-book-open text-xl" style="color:#0D7C66;"></i>
                        </div>
                        <i class="fas fa-chevron-right text-sm" style="color:#9CA3AF;"></i>
                    </div>
                </div>
            </div>
        `).join('')}
    </div>

    <!-- Chapters List (hidden) -->
    <div id="hadith-chapters" class="hidden">
        <div class="flex items-center gap-3 mb-4">
            <button onclick="closeHadithBook()" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <i class="fas fa-arrow-left" style="color:#374151;"></i>
            </button>
            <div class="flex-1">
                <h2 class="font-bold text-xl" style="color:#1F2937;" id="hadith-book-title"></h2>
                <p class="text-sm" style="color:#6B7280;" id="hadith-book-info"></p>
            </div>
        </div>
        <div id="hadith-chapters-list" class="space-y-3"></div>
    </div>

    <!-- Hadith Reader (hidden) -->
    <div id="hadith-reader" class="hidden">
        <div class="flex items-center gap-3 mb-4">
            <button onclick="closeHadithReader()" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <i class="fas fa-arrow-left" style="color:#374151;"></i>
            </button>
            <div class="flex-1">
                <h2 class="font-bold text-lg" style="color:#1F2937;" id="hadith-chapter-title"></h2>
                <p class="text-sm" style="color:#6B7280;" id="hadith-chapter-info"></p>
            </div>
        </div>
        <div id="hadith-content" class="space-y-4"></div>
        <div class="flex gap-3 mt-6">
            <button onclick="prevHadithChapter()" id="prev-chapter-btn" class="flex-1 py-3 rounded-lg hover:bg-gray-200" style="background:#F3F4F6;color:#374151;">
                <i class="fas fa-chevron-left mr-2"></i>Previous
            </button>
            <button onclick="nextHadithChapter()" id="next-chapter-btn" class="flex-1 py-3 rounded-lg text-white" style="background:#0D7C66;">
                Next<i class="fas fa-chevron-right ml-2"></i>
            </button>
        </div>
    </div>
</div>
`;
},

// ==========================================
// DUAS PAGE
// ==========================================
duas: () => {
    // Use azkar_data for proper Urdu support
    const azkar = window.DATA.azkar;
    const duas = window.DATA.duas;
    let allItems = [];

    // Build items from azkar_data (has Urdu) - azkar has .azkar.sections and .duas.sections
    const allSections = [];
    if (azkar && azkar.azkar && azkar.azkar.sections) allSections.push(...azkar.azkar.sections);
    if (azkar && azkar.duas && azkar.duas.sections) allSections.push(...azkar.duas.sections);

    if (allSections.length > 0) {
        allSections.forEach(section => {
            const catMap = {
                'morning': 'morning', 'evening': 'evening', 'night': 'night',
                'صبح': 'morning', 'شام': 'evening', 'رات': 'night',
                'سونے': 'sleep', 'sleep': 'sleep', 'travel': 'travel', 'سفر': 'travel',
                'iman': 'iman', 'daily': 'daily', 'quranic': 'quranic', 'family': 'family'
            };
            let cat = 'daily';
            const titleLow = (section.title_en || section.id || '').toLowerCase();
            for (const [key, val] of Object.entries(catMap)) {
                if (titleLow.includes(key)) { cat = val; break; }
            }
            if (section.points) {
                section.points.forEach(pt => {
                    allItems.push({
                        id: pt.point_id || pt.title_en,
                        title_en: pt.title_en || section.title_en || '',
                        title_ur: pt.title_urdu || section.title_urdu || '',
                        arabic: pt.arabic_text || '',
                        translation_en: pt.translation_en || '',
                        translation_ur: pt.translation_urdu || '',
                        benefits_en: pt.fawaid_en || '',
                        benefits_ur: pt.fawaid_urdu || '',
                        category: cat,
                        section: section.title_en || ''
                    });
                });
            }
        });
    }

    // Fallback to duasData if azkar empty
    if (allItems.length === 0 && duas && duas.length > 0) {
        allItems = duas.map(d => ({
            id: d.id, title_en: d.title, title_ur: '', arabic: d.arabic,
            translation_en: d.translation, translation_ur: '', benefits_en: '', benefits_ur: '',
            category: d.category, section: d.category
        }));
    }

    const categories = [...new Set(allItems.map(d => d.category))];
    const catIcons = {morning:'sun',evening:'moon',night:'moon-stars',sleep:'bed',food:'utensils',travel:'plane',ramadan:'star-and-crescent',daily:'hands-praying',iman:'heart',quranic:'quran',family:'users'};
    const catColors = {morning:'#F59E0B',evening:'#8B5CF6',night:'#6366F1',sleep:'#6366F1',food:'#10B981',travel:'#3B82F6',ramadan:'#D4AF37',daily:'#0D7C66',iman:'#EC4899',quranic:'#0D7C66',family:'#10B981'};

    return `
<div class="page-container fade-in">
    <div class="page-header">
        <div class="flex items-center justify-between w-full">
            <div>
                <div class="flex items-center gap-2">
                    <i class="fas fa-hands-praying"></i>
                    <h1>Daily Azkar & Duas</h1>
                </div>
                <p>${allItems.length} Authentic Supplications</p>
            </div>
            <div class="flex bg-gray-100 rounded-lg overflow-hidden" id="lang-toggle">
                <button onclick="setDuaLang('en')" class="px-3 py-1.5 text-sm font-semibold bg-primary-main text-white" data-lang="en">EN</button>
                <button onclick="setDuaLang('ur')" class="px-3 py-1.5 text-sm font-semibold text-gray-600" data-lang="ur">اردو</button>
            </div>
        </div>
    </div>

    <div class="mb-4">
        <div class="flex gap-2 overflow-x-auto pb-2" id="dua-categories">
            <button onclick="filterDuaCategory('all')" class="category-btn active" data-category="all">All</button>
            ${categories.map(cat => `
                <button onclick="filterDuaCategory('${cat}')" class="category-btn" data-category="${cat}">
                    <i class="fas fa-${catIcons[cat] || 'hands-praying'} mr-1"></i>${cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
            `).join('')}
        </div>
    </div>

    <div id="duas-list" class="space-y-4">
        ${allItems.map((item, idx) => {
            const icon = catIcons[item.category] || 'hands-praying';
            const color = catColors[item.category] || '#0D7C66';
            return `
            <div class="islamic-card dua-item" data-category="${item.category}" data-idx="${idx}">
                <div class="flex items-start gap-3">
                    <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style="background-color: ${color}15;">
                        <i class="fas fa-${icon}" style="color: ${color};"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-start justify-between mb-2">
                            <div>
                                <h3 class="font-bold dua-title-en" style="color:#1F2937;">${item.title_en}</h3>
                                ${item.title_ur ? `<p class="text-sm font-urdu dua-title-ur hidden" style="direction:rtl;color:#4B5563;">${item.title_ur}</p>` : ''}
                            </div>
                            <div class="flex gap-1 ml-2 flex-shrink-0">
                                <button onclick="copyDua(${idx})" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100" style="background:#f9fafb;" title="Copy">
                                    <i class="fas fa-copy text-xs" style="color:#9CA3AF;"></i>
                                </button>
                                <button onclick="shareDua(${idx})" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100" style="background:#f9fafb;" title="Share">
                                    <i class="fas fa-share-alt text-xs" style="color:#9CA3AF;"></i>
                                </button>
                            </div>
                        </div>
                        ${item.section ? `<span class="inline-block text-xs px-2 py-0.5 rounded-full mb-2" style="background:#F3F4F6;color:#6B7280;">${item.section}</span>` : ''}
                        <div class="dua-arabic-section mb-3">
                            <p class="text-xl text-right leading-loose font-arabic" style="direction: rtl; line-height: 2.2; color: #0A5C4F;">
                                ${item.arabic}
                            </p>
                        </div>
                        <div class="mb-2">
                            <p class="text-sm dua-trans-en" style="color:#374151;">${item.translation_en}</p>
                            ${item.translation_ur ? `<p class="text-sm font-urdu dua-trans-ur hidden" style="direction:rtl;line-height:2;color:#374151;">${item.translation_ur}</p>` : ''}
                        </div>
                        ${item.benefits_en ? `
                        <details class="mt-2">
                            <summary class="text-xs text-primary-main cursor-pointer font-semibold"><i class="fas fa-star mr-1"></i>Benefits & Virtues</summary>
                            <div class="mt-2 p-3 bg-accent-gold-light rounded-lg text-xs text-gray-600">
                                <p class="dua-benefit-en">${item.benefits_en}</p>
                                ${item.benefits_ur ? `<p class="dua-benefit-ur hidden font-urdu mt-2" style="direction:rtl;line-height:2">${item.benefits_ur}</p>` : ''}
                            </div>
                        </details>
                        ` : ''}
                    </div>
                </div>
            </div>
            `;
        }).join('')}
    </div>
</div>
`;
},

// ==========================================
// DHIKR COUNTER PAGE
// ==========================================
dhikr: () => {
    const dhikrList = window.DATA.dhikrList || [];
    const categories = window.DATA.dhikrCategories || [];
    const catIcons = {all:'th-large',essential:'star',forgiveness:'heart',praise:'hands-praying',protection:'shield-alt',salawat:'heart',tawheed:'moon',trust:'hand-holding-heart',names:'star-and-crescent',quran:'quran',morning:'sun',evening:'moon',occasion:'calendar',dua:'hands-praying',gratitude:'gift',seeking:'graduation-cap'};

    return `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-hand-sparkles" style="color:#0D7C66;"></i>
        <h1 style="color:#1F2937;">Dhikr & Tasbih</h1>
        <p style="color:#6B7280;">${dhikrList.length} Adhkar with Counter</p>
    </div>

    <!-- Counter Section -->
    <div id="dhikr-counter-section" class="max-w-md mx-auto mb-6">
        <div class="islamic-card text-center">
            <p class="text-lg font-arabic mb-2" style="color:#0D7C66;direction:rtl;line-height:2;" id="dhikr-current-arabic">سبحان الله</p>
            <p class="text-xs mb-3" style="color:#6B7280;" id="dhikr-current-meaning">Glory be to Allah</p>
            <div class="mb-3">
                <div class="text-5xl font-bold mb-1" style="color:#0D7C66;" id="dhikr-count">0</div>
                <div class="text-sm" style="color:#6B7280;">out of <span id="dhikr-target">33</span></div>
            </div>
            <div class="w-full rounded-full h-2.5 mb-4" style="background:#E5E7EB;">
                <div id="dhikr-progress" class="h-2.5 rounded-full transition-all duration-300" style="width:0%;background:linear-gradient(90deg,#0D7C66,#D4AF37);"></div>
            </div>
            <button type="button" onclick="incrementDhikr()" class="w-full py-5 text-white rounded-2xl text-xl font-bold hover:shadow-xl transition-all active:scale-95 mb-3" style="background:linear-gradient(135deg,#0D7C66,#0A5C4F);-webkit-tap-highlight-color:transparent;touch-action:manipulation;user-select:none;">
                <i class="fas fa-hand-point-up mr-2"></i>Tap to Count
            </button>
            <div class="flex gap-3">
                <button onclick="resetDhikr()" class="flex-1 py-2.5 rounded-lg hover:bg-gray-200" style="background:#F3F4F6;color:#374151;">
                    <i class="fas fa-redo mr-1"></i>Reset
                </button>
                <button onclick="toggleSound()" class="flex-1 py-2.5 rounded-lg hover:bg-gray-200" style="background:#F3F4F6;color:#374151;" id="sound-btn">
                    <i class="fas fa-volume-up mr-1"></i>Sound
                </button>
            </div>
        </div>
    </div>

    <!-- Search -->
    <div class="search-bar mb-4">
        <i class="fas fa-search"></i>
        <input type="text" id="dhikr-search" placeholder="Search dhikr..." onkeyup="filterDhikrPresets(this.value)">
    </div>

    <!-- Category Filters -->
    <div class="mb-4">
        <div class="flex gap-2 overflow-x-auto pb-2" id="dhikr-categories" style="-webkit-overflow-scrolling:touch;">
            ${categories.map(cat => `
                <button onclick="filterDhikrCategory('${cat.id}')" class="category-btn ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}" style="white-space:nowrap;">
                    <i class="fas fa-${catIcons[cat.id] || 'circle'} mr-1"></i>${cat.label}
                </button>
            `).join('')}
        </div>
    </div>

    <!-- Dhikr Presets -->
    <div id="dhikr-presets" class="space-y-3">
        ${dhikrList.map((d, idx) => `
            <div class="dhikr-preset-card dhikr-item" data-category="${d.category}" data-idx="${idx}" data-search="${(d.transliteration + ' ' + d.meaning + ' ' + d.arabic).toLowerCase()}" onclick="selectDhikrPreset(${idx})">
                <div class="flex items-start gap-3">
                    <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style="background:rgba(13,124,102,0.08);">
                        <i class="fas fa-${catIcons[d.category] || 'circle'} text-sm" style="color:#0D7C66;"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-lg font-arabic text-right mb-1" style="direction:rtl;line-height:1.8;color:#0A5C4F;">${d.arabic}</p>
                        <p class="text-sm font-semibold" style="color:#374151;">${d.transliteration}</p>
                        <p class="text-xs" style="color:#6B7280;">${d.meaning}</p>
                        <div class="flex items-center gap-3 mt-2 flex-wrap">
                            <span class="text-xs px-2 py-0.5 rounded-full" style="background:rgba(13,124,102,0.08);color:#0D7C66;">${d.category}</span>
                            <span class="text-xs" style="color:#9CA3AF;">Goal: ${d.defaultGoal}×</span>
                            ${d.virtue ? `<span class="text-xs" style="color:#D4AF37;"><i class="fas fa-star mr-1"></i>${d.virtue}</span>` : ''}
                        </div>
                        <p class="text-xs mt-1" style="color:#9CA3AF;"><i class="fas fa-book mr-1"></i>${d.source}</p>
                    </div>
                </div>
            </div>
        `).join('')}
    </div>
</div>
`;
},

// ==========================================
// 99 NAMES OF ALLAH PAGE
// ==========================================
'allah-names': () => {
    const names = window.DATA.allahNames;
    return `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-infinity"></i>
        <h1>99 Names of Allah</h1>
        <p>Al-Asma Al-Husna</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${names.map(name => `
            <div class="islamic-card hover:shadow-lg transition-all">
                <div class="flex items-center gap-4">
                    <div class="w-14 h-14 rounded-full bg-gradient-to-br from-primary-main to-secondary-main text-white flex items-center justify-center font-bold text-xl">
                        ${name.number}
                    </div>
                    <div class="flex-1">
                        <h3 class="text-2xl font-arabic text-primary-main mb-1">${name.arabic}</h3>
                        <p class="text-sm font-semibold text-gray-700">${name.transliteration}</p>
                        <p class="text-sm text-gray-600">${name.english}</p>
                        <p class="text-sm text-gray-500 font-urdu">${name.urdu}</p>
                    </div>
                </div>
            </div>
        `).join('')}
    </div>
</div>
`;
},

// ==========================================
// 6 KALMAS PAGE
// ==========================================
kalmas: () => {
    const kalmas = window.DATA.kalmas;
    return `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-star-and-crescent"></i>
        <h1>6 Kalmas of Islam</h1>
        <p>Essential declarations of faith</p>
    </div>

    <div class="space-y-6">
        ${kalmas.map(kalma => `
            <div class="islamic-card">
                <div class="mb-4">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="w-10 h-10 rounded-full bg-primary-main text-white flex items-center justify-center font-bold">
                            ${kalma.id}
                        </div>
                        <div>
                            <h3 class="font-bold text-xl text-gray-800">${kalma.name_en}</h3>
                            <p class="text-sm text-gray-600 font-urdu">${kalma.name_ur}</p>
                        </div>
                    </div>
                </div>

                <div class="bg-gradient-to-br from-primary-light to-secondary-light p-6 rounded-xl mb-4">
                    <p class="text-3xl leading-loose text-center font-arabic" style="direction: rtl;">
                        ${kalma.arabic}
                    </p>
                </div>

                <div class="space-y-3">
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <p class="text-sm text-gray-500 mb-1">Transliteration:</p>
                        <p class="text-gray-700 italic">${kalma.transliteration}</p>
                    </div>

                    <div class="bg-gray-50 p-4 rounded-lg">
                        <p class="text-sm text-gray-500 mb-1">Translation (English):</p>
                        <p class="text-gray-700">${kalma.translation_en}</p>
                    </div>

                    <div class="bg-gray-50 p-4 rounded-lg">
                        <p class="text-sm text-gray-500 mb-1">Translation (Urdu):</p>
                        <p class="text-gray-700 font-urdu">${kalma.translation_ur}</p>
                    </div>

                    ${kalma.meaning_en ? `
                    <div class="bg-accent-gold-light p-4 rounded-lg">
                        <p class="text-sm text-gray-700 mb-1"><strong>Meaning & Significance:</strong></p>
                        <p class="text-sm text-gray-600">${kalma.meaning_en}</p>
                    </div>
                    ` : ''}
                </div>
            </div>
        `).join('')}
    </div>
</div>
`;
},

// ==========================================
// PRAYER TIMES PAGE
// ==========================================
'prayer-times': `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-clock"></i>
        <h1>Prayer Times</h1>
        <p id="prayer-location">Loading location...</p>
    </div>

    <div id="prayer-times-content">
        <div class="text-center py-12">
            <i class="fas fa-spinner fa-spin text-4xl text-primary-main mb-4"></i>
            <p class="text-gray-600">Loading prayer times...</p>
        </div>
    </div>

    <div class="mt-6">
        <button onclick="refreshPrayerTimes()" class="w-full py-3 bg-primary-main text-white rounded-lg hover:bg-primary-dark transition-all">
            <i class="fas fa-sync-alt mr-2"></i>
            Refresh Prayer Times
        </button>
    </div>
</div>
`,

// ==========================================
// QIBLA FINDER PAGE
// ==========================================
qibla: `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-compass"></i>
        <h1>Qibla Finder</h1>
        <p>Find the direction to Ka'bah</p>
    </div>

    <div class="max-w-md mx-auto">
        <div class="islamic-card text-center mb-6">
            <div id="qibla-compass" class="relative w-64 h-64 mx-auto mb-6">
                <div class="absolute inset-0 rounded-full border-8 border-primary-light"></div>
                <div id="compass-needle" class="absolute inset-0 flex items-center justify-center transition-transform duration-500">
                    <div class="w-2 h-32 bg-gradient-to-t from-red-600 to-primary-main rounded-full"></div>
                </div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <i class="fas fa-kaaba text-4xl text-primary-main"></i>
                </div>
                <div class="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-gray-600">N</div>
                <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-gray-600">S</div>
                <div class="absolute left-2 top-1/2 transform -translate-y-1/2 text-sm font-bold text-gray-600">W</div>
                <div class="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm font-bold text-gray-600">E</div>
            </div>

            <div id="qibla-direction" class="mb-4">
                <div class="text-4xl font-bold text-primary-main mb-2">--°</div>
                <p class="text-gray-600">Qibla Direction</p>
            </div>

            <div id="qibla-status" class="text-sm text-gray-500">
                Allow location access to find Qibla direction
            </div>
        </div>

        <div class="islamic-card">
            <h3 class="font-bold text-lg mb-3 text-gray-800">Instructions</h3>
            <ol class="space-y-2 text-sm text-gray-600">
                <li class="flex items-start gap-2">
                    <span class="font-bold text-primary-main">1.</span>
                    <span>Allow location access when prompted</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="font-bold text-primary-main">2.</span>
                    <span>Hold your device flat and level</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="font-bold text-primary-main">3.</span>
                    <span>Rotate your device until the compass points to the Qibla direction</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="font-bold text-primary-main">4.</span>
                    <span>Face the direction indicated by the red needle</span>
                </li>
            </ol>
        </div>
    </div>
</div>
`,

// ==========================================
// NAMAZ GUIDE PAGE
// ==========================================
'namaz-guide': () => {
    const steps = window.DATA.namazSteps;
    return `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-mosque"></i>
        <h1>How to Pray Namaz</h1>
        <p>Step-by-step prayer guide</p>
    </div>

    <div class="space-y-4">
        ${steps.map((step, index) => `
            <div class="islamic-card">
                <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-full bg-primary-main text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                        ${step.step}
                    </div>
                    <div class="flex-1">
                        <h3 class="font-bold text-lg text-gray-800 mb-1">${step.title_en}</h3>
                        <p class="text-sm text-gray-600 font-urdu mb-3">${step.title_ur}</p>

                        <p class="text-gray-700 mb-3">${step.description_en}</p>
                        <p class="text-sm text-gray-600 font-urdu mb-3">${step.description_ur}</p>

                        ${step.arabic ? `
                        <div class="bg-gradient-to-br from-primary-light to-secondary-light p-4 rounded-lg mb-3">
                            <p class="text-2xl leading-loose text-center font-arabic" style="direction: rtl;">
                                ${step.arabic}
                            </p>
                        </div>
                        ` : ''}

                        ${step.transliteration ? `
                        <div class="bg-gray-50 p-3 rounded-lg mb-2">
                            <p class="text-sm text-gray-600 italic">${step.transliteration}</p>
                        </div>
                        ` : ''}

                        ${step.translation_en ? `
                        <div class="bg-gray-50 p-3 rounded-lg">
                            <p class="text-sm text-gray-700">${step.translation_en}</p>
                        </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `).join('')}
    </div>
</div>
`;
},

// ==========================================
// HAJJ GUIDE PAGE
// ==========================================
'hajj-guide': () => {
    const hajj = window.DATA.hajj;
    if (!hajj) return '<div class="page-container"><p>Loading Hajj guide...</p></div>';

    return `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-kaaba"></i>
        <h1>${hajj.title_en}</h1>
        <p>${hajj.summary_en}</p>
    </div>

    <div class="islamic-card mb-6">
        <h3 class="font-bold text-lg mb-2 text-gray-800">About Hajj</h3>
        <p class="text-gray-700 mb-2">${hajj.summary_en}</p>
        <p class="text-gray-600 font-urdu text-sm">${hajj.summary_ur}</p>
    </div>

    <div class="space-y-4">
        ${hajj.days.map((day, index) => `
            <div class="islamic-card">
                <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-full bg-accent-gold text-white flex items-center justify-center font-bold flex-shrink-0">
                        ${index + 1}
                    </div>
                    <div class="flex-1">
                        <div class="mb-3">
                            <h3 class="font-bold text-xl text-gray-800">${day.name_en}</h3>
                            <p class="text-sm text-gray-600 font-urdu">${day.name_ur}</p>
                            <p class="text-sm text-accent-gold font-semibold mt-1">${day.date}</p>
                        </div>

                        <div class="mb-2">
                            <p class="text-sm text-gray-500 mb-1"><i class="fas fa-map-marker-alt mr-2"></i>Location:</p>
                            <p class="text-gray-700 font-semibold">${day.location}</p>
                        </div>

                        <div class="bg-gray-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-500 mb-2"><strong>Actions to Perform:</strong></p>
                            <p class="text-gray-700 mb-2">${day.actions_en}</p>
                            <p class="text-sm text-gray-600 font-urdu">${day.actions_ur}</p>
                        </div>
                    </div>
                </div>
            </div>
        `).join('')}
    </div>
</div>
`;
},

// ==========================================
// UMRAH GUIDE PAGE
// ==========================================
'umrah-guide': () => {
    const umrah = window.DATA.umrah;
    if (!umrah) return '<div class="page-container"><p>Loading Umrah guide...</p></div>';

    return `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-kaaba"></i>
        <h1>${umrah.title_en}</h1>
        <p>${umrah.summary_en}</p>
    </div>

    <div class="islamic-card mb-6">
        <h3 class="font-bold text-lg mb-2 text-gray-800">About Umrah</h3>
        <p class="text-gray-700 mb-2">${umrah.summary_en}</p>
        <p class="text-gray-600 font-urdu text-sm">${umrah.summary_ur}</p>
    </div>

    <div class="space-y-4">
        ${umrah.steps.map(step => `
            <div class="islamic-card">
                <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-full bg-secondary-main text-white flex items-center justify-center font-bold flex-shrink-0">
                        ${step.step_no}
                    </div>
                    <div class="flex-1">
                        <div class="mb-3">
                            <h3 class="font-bold text-xl text-gray-800">${step.name_en}</h3>
                            <p class="text-sm text-gray-600 font-urdu">${step.name_ur}</p>
                        </div>

                        ${step.location_en ? `
                        <div class="mb-3">
                            <p class="text-sm text-gray-500 mb-1"><i class="fas fa-map-marker-alt mr-2"></i>Location:</p>
                            <p class="text-gray-700">${step.location_en} / <span class="font-urdu">${step.location_ur}</span></p>
                        </div>
                        ` : ''}

                        ${step.niyyah_en ? `
                        <div class="bg-gradient-to-br from-primary-light to-secondary-light p-4 rounded-lg mb-3">
                            <p class="text-sm text-gray-600 mb-2"><strong>Intention (Niyyah):</strong></p>
                            <p class="text-gray-700 mb-2">${step.niyyah_en}</p>
                            <p class="text-sm font-urdu text-gray-600">${step.niyyah_ur}</p>
                        </div>
                        ` : ''}

                        ${step.talbiyah ? `
                        <div class="bg-accent-gold-light p-4 rounded-lg mb-3">
                            <p class="text-sm text-gray-600 mb-2"><strong>Talbiyah:</strong></p>
                            <p class="text-xl font-arabic text-center leading-loose mb-2" style="direction: rtl;">${step.talbiyah}</p>
                            <p class="text-sm text-gray-600 italic mb-2">${step.talbiyah_transliteration}</p>
                            <p class="text-sm text-gray-700">${step.talbiyah_en}</p>
                        </div>
                        ` : ''}

                        ${step.procedure_en ? `
                        <div class="bg-gray-50 p-4 rounded-lg mb-3">
                            <p class="text-sm text-gray-500 mb-2"><strong>Procedure:</strong></p>
                            <p class="text-gray-700 mb-2">${step.procedure_en}</p>
                            <p class="text-sm font-urdu text-gray-600">${step.procedure_ur}</p>
                        </div>
                        ` : ''}

                        ${step.post_actions_en ? `
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-500 mb-2"><strong>After Completion:</strong></p>
                            <ul class="list-disc list-inside space-y-1 text-sm text-gray-700">
                                ${step.post_actions_en.map(action => `<li>${action}</li>`).join('')}
                            </ul>
                        </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `).join('')}
    </div>
</div>
`;
},

// ==========================================
// 5 PILLARS PAGE
// ==========================================
pillars: () => {
    const pillars = window.DATA.pillarsOfIslam;
    return `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-columns"></i>
        <h1>Five Pillars of Islam</h1>
        <p>The foundation of Islamic practice</p>
    </div>

    <div class="space-y-6">
        ${pillars.map(pillar => `
            <div class="islamic-card">
                <div class="mb-4">
                    <div class="flex items-start gap-4 mb-3">
                        <div class="w-14 h-14 rounded-full bg-gradient-to-br from-primary-main to-secondary-main text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                            ${pillar.id}
                        </div>
                        <div class="flex-1">
                            <h3 class="font-bold text-2xl text-gray-800 mb-1">${pillar.title_en}</h3>
                            <p class="text-lg text-gray-600 font-urdu mb-1">${pillar.title_ur}</p>
                            ${pillar.title_ar ? `<p class="text-xl font-arabic text-primary-main">${pillar.title_ar}</p>` : ''}
                            <p class="text-sm text-gray-500 mt-2">${pillar.subtitle_en}</p>
                        </div>
                    </div>
                </div>

                ${pillar.arabic ? `
                <div class="bg-gradient-to-br from-primary-light to-secondary-light p-6 rounded-xl mb-4">
                    <p class="text-2xl leading-loose text-center font-arabic" style="direction: rtl;">
                        ${pillar.arabic}
                    </p>
                    ${pillar.transliteration ? `
                    <p class="text-sm text-center text-gray-600 italic mt-3">${pillar.transliteration}</p>
                    ` : ''}
                </div>
                ` : ''}

                <div class="prose max-w-none">
                    <p class="text-gray-700 leading-relaxed">${pillar.description_en}</p>
                </div>

                ${pillar.sections && pillar.sections.length > 0 ? `
                <div class="mt-4 space-y-3">
                    ${pillar.sections.map(section => `
                        <details class="bg-gray-50 rounded-lg overflow-hidden">
                            <summary class="p-4 cursor-pointer hover:bg-gray-100 font-semibold text-gray-800">
                                ${section.heading_en}
                            </summary>
                            <div class="p-4 pt-0 text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                                ${section.content_en}
                            </div>
                        </details>
                    `).join('')}
                </div>
                ` : ''}
            </div>
        `).join('')}
    </div>
</div>
`;
},

// ==========================================
// RAMADAN TRACKER PAGE
// ==========================================
ramadan: () => {
    const ramadanStart = new Date(2026, 1, 19); // Feb 19, 2026
    const ramadanEnd = new Date(2026, 2, 20); // Mar 20, 2026
    const now = new Date();
    const isRamadan = now >= ramadanStart && now <= ramadanEnd;
    const dayNum = isRamadan ? Math.ceil((now - ramadanStart) / 86400000) + 1 : 0;
    const daysLeft = isRamadan ? Math.ceil((ramadanEnd - now) / 86400000) : Math.max(0, Math.ceil((ramadanStart - now) / 86400000));

    // Load saved data
    const savedFasts = JSON.parse(localStorage.getItem('ramadan_fasts') || '[]');
    const savedTaraweeh = JSON.parse(localStorage.getItem('ramadan_taraweeh') || '[]');
    const savedCharity = JSON.parse(localStorage.getItem('ramadan_charity') || '[]');
    const selectedCurrency = localStorage.getItem('ramadan_currency') || 'USD';
    const totalCharity = savedCharity.reduce((sum, c) => sum + (c.amount || 0), 0);

    const currencies = [
        {code:'USD',symbol:'$',name:'US Dollar'},{code:'EUR',symbol:'€',name:'Euro'},{code:'GBP',symbol:'£',name:'Pound'},
        {code:'SAR',symbol:'SR',name:'Saudi Riyal'},{code:'AED',symbol:'د.إ',name:'Dirham'},{code:'PKR',symbol:'₨',name:'Pak Rupee'},{code:'INR',symbol:'₹',name:'Indian Rupee'}
    ];
    const curSymbol = currencies.find(c => c.code === selectedCurrency)?.symbol || '$';

    return `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-moon" style="color:#D4AF37;"></i>
        <h1 style="color:#1F2937;">Ramadan 1447</h1>
        <p style="color:#6B7280;">Feb 19 - Mar 20, 2026</p>
    </div>

    <div class="max-w-2xl mx-auto space-y-6">
        <!-- Hero Card -->
        <div class="rounded-2xl overflow-hidden" style="background:linear-gradient(135deg,#0D7C66,#0A5C4F,#0D4A3F);">
            <div class="p-6 text-center text-white relative">
                <i class="fas fa-star" style="position:absolute;top:12px;left:20px;color:rgba(212,175,55,0.3);font-size:10px;"></i>
                <i class="fas fa-star" style="position:absolute;top:30px;right:30px;color:rgba(212,175,55,0.4);font-size:8px;"></i>
                <i class="fas fa-star" style="position:absolute;bottom:20px;left:40px;color:rgba(212,175,55,0.25);font-size:6px;"></i>
                ${isRamadan ? `
                    <p class="text-sm opacity-80 mb-2">Current Day</p>
                    <div class="text-6xl font-bold mb-1" style="color:#D4AF37;">${dayNum}</div>
                    <p class="text-sm opacity-80 mb-4">${dayNum} of 30</p>
                    <div class="w-full rounded-full h-2" style="background:rgba(255,255,255,0.2);">
                        <div class="h-2 rounded-full transition-all" style="width:${(dayNum/30)*100}%;background:linear-gradient(90deg,#D4AF37,#F1C40F);"></div>
                    </div>
                ` : `
                    <p class="text-sm opacity-80 mb-2">Ramadan Starts In</p>
                    <div class="grid grid-cols-4 gap-3 max-w-xs mx-auto">
                        <div class="p-2 rounded-lg" style="background:rgba(255,255,255,0.15);">
                            <div class="text-2xl font-bold" id="ramadan-countdown-days">${daysLeft}</div>
                            <div class="text-xs opacity-70">Days</div>
                        </div>
                        <div class="p-2 rounded-lg" style="background:rgba(255,255,255,0.15);">
                            <div class="text-2xl font-bold" id="ramadan-countdown-hours">0</div>
                            <div class="text-xs opacity-70">Hours</div>
                        </div>
                        <div class="p-2 rounded-lg" style="background:rgba(255,255,255,0.15);">
                            <div class="text-2xl font-bold" id="ramadan-countdown-mins">0</div>
                            <div class="text-xs opacity-70">Mins</div>
                        </div>
                        <div class="p-2 rounded-lg" style="background:rgba(255,255,255,0.15);">
                            <div class="text-2xl font-bold" id="ramadan-countdown-secs">0</div>
                            <div class="text-xs opacity-70">Secs</div>
                        </div>
                    </div>
                `}
            </div>
        </div>

        <!-- Prayer Times (Sehri / Iftar) -->
        <div class="grid grid-cols-2 gap-4">
            <div class="islamic-card text-center">
                <i class="fas fa-sun text-2xl mb-2" style="color:#D4AF37;"></i>
                <p class="text-xs mb-1" style="color:#6B7280;">Sehri (Fajr)</p>
                <p class="text-xl font-bold" style="color:#1F2937;" id="ramadan-sehri">--:--</p>
            </div>
            <div class="islamic-card text-center">
                <i class="fas fa-moon text-2xl mb-2" style="color:#D4AF37;"></i>
                <p class="text-xs mb-1" style="color:#6B7280;">Iftar (Maghrib)</p>
                <p class="text-xl font-bold" style="color:#1F2937;" id="ramadan-iftar">--:--</p>
            </div>
        </div>

        <!-- Quick Stats -->
        <div class="grid grid-cols-3 gap-3">
            <div class="islamic-card text-center p-3">
                <i class="fas fa-utensils mb-1" style="color:#0D7C66;"></i>
                <div class="text-xl font-bold" style="color:#1F2937;">${savedFasts.length}/30</div>
                <p class="text-xs" style="color:#6B7280;">Fasts</p>
            </div>
            <div class="islamic-card text-center p-3">
                <i class="fas fa-mosque mb-1" style="color:#8E44AD;"></i>
                <div class="text-xl font-bold" style="color:#1F2937;">${savedTaraweeh.length}/30</div>
                <p class="text-xs" style="color:#6B7280;">Taraweeh</p>
            </div>
            <div class="islamic-card text-center p-3">
                <i class="fas fa-hand-holding-heart mb-1" style="color:#27AE60;"></i>
                <div class="text-xl font-bold" style="color:#1F2937;">${curSymbol}${totalCharity.toLocaleString()}</div>
                <p class="text-xs" style="color:#6B7280;">Charity</p>
            </div>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-2 gap-4">
            <div class="islamic-card cursor-pointer hover:shadow-lg transition-all" onclick="openRamadanModal('fasting')">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background:linear-gradient(135deg,#D4AF37,#F1C40F);">
                        <i class="fas fa-utensils text-white"></i>
                    </div>
                    <div>
                        <p class="font-bold" style="color:#1F2937;">Fasting</p>
                        <p class="text-sm" style="color:#6B7280;">${savedFasts.length}/30</p>
                    </div>
                </div>
            </div>
            <div class="islamic-card cursor-pointer hover:shadow-lg transition-all" onclick="openRamadanModal('taraweeh')">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background:linear-gradient(135deg,#8E44AD,#9B59B6);">
                        <i class="fas fa-mosque text-white"></i>
                    </div>
                    <div>
                        <p class="font-bold" style="color:#1F2937;">Taraweeh</p>
                        <p class="text-sm" style="color:#6B7280;">${savedTaraweeh.length}/30</p>
                    </div>
                </div>
            </div>
            <div class="islamic-card cursor-pointer hover:shadow-lg transition-all" onclick="openRamadanModal('charity')">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background:linear-gradient(135deg,#27AE60,#2ECC71);">
                        <i class="fas fa-hand-holding-heart text-white"></i>
                    </div>
                    <div>
                        <p class="font-bold" style="color:#1F2937;">Charity</p>
                        <p class="text-sm" style="color:#6B7280;">${curSymbol}${totalCharity.toLocaleString()}</p>
                    </div>
                </div>
            </div>
            <div class="islamic-card cursor-pointer hover:shadow-lg transition-all" onclick="openRamadanModal('laylatul-qadr')">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background:linear-gradient(135deg,#6366F1,#8B5CF6);">
                        <i class="fas fa-star text-white"></i>
                    </div>
                    <div>
                        <p class="font-bold" style="color:#1F2937;">Laylatul Qadr</p>
                        <p class="text-sm" style="color:#6B7280;">Night of Power</p>
                    </div>
                </div>
            </div>
            <a href="#quran" class="islamic-card hover:shadow-lg transition-all">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background:linear-gradient(135deg,#F39C12,#E67E22);">
                        <i class="fas fa-quran text-white"></i>
                    </div>
                    <div>
                        <p class="font-bold" style="color:#1F2937;">Quran</p>
                        <p class="text-sm" style="color:#6B7280;">Read & Listen</p>
                    </div>
                </div>
            </a>
            <a href="#duas" class="islamic-card hover:shadow-lg transition-all">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background:linear-gradient(135deg,#E74C3C,#C0392B);">
                        <i class="fas fa-hands-praying text-white"></i>
                    </div>
                    <div>
                        <p class="font-bold" style="color:#1F2937;">Duas</p>
                        <p class="text-sm" style="color:#6B7280;">Prayers</p>
                    </div>
                </div>
            </a>
            <a href="#zakat" class="islamic-card hover:shadow-lg transition-all">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background:linear-gradient(135deg,#16A085,#1ABC9C);">
                        <i class="fas fa-calculator text-white"></i>
                    </div>
                    <div>
                        <p class="font-bold" style="color:#1F2937;">Fitrana</p>
                        <p class="text-sm" style="color:#6B7280;">Calculator</p>
                    </div>
                </div>
            </a>
            <a href="#zakat" class="islamic-card hover:shadow-lg transition-all">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background:linear-gradient(135deg,#3498DB,#2980B9);">
                        <i class="fas fa-coins text-white"></i>
                    </div>
                    <div>
                        <p class="font-bold" style="color:#1F2937;">Zakat</p>
                        <p class="text-sm" style="color:#6B7280;">Calculator</p>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <!-- Fasting Modal -->
    <div id="ramadan-fasting-modal" class="hidden fixed inset-0 z-50" style="background:rgba(0,0,0,0.5);">
        <div class="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[80vh] overflow-y-auto p-6">
            <div class="flex items-center justify-between mb-4">
                <h3 class="font-bold text-xl" style="color:#1F2937;">Fasting Tracker</h3>
                <button onclick="closeRamadanModal('fasting')" class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"><i class="fas fa-times" style="color:#6B7280;"></i></button>
            </div>
            <p class="text-sm mb-4" style="color:#6B7280;"><span id="fasting-count">${savedFasts.length}</span> / 30 Fasts (<span id="fasting-pct">${Math.round(savedFasts.length/30*100)}</span>%)</p>
            <div class="ramadan-calendar mb-4" id="fasting-calendar">
                ${Array.from({length:30}, (_, i) => {
                    const day = i + 1;
                    const completed = savedFasts.includes(day);
                    const isToday = day === dayNum;
                    return `<div class="ramadan-day-cell ${completed ? 'completed' : ''} ${isToday ? 'today' : ''}" onclick="toggleRamadanDay('fasting',${day})" style="background:${completed ? 'rgba(13,124,102,0.15)' : '#f9fafb'};">
                        ${completed ? '<i class="fas fa-check text-xs"></i>' : day}
                    </div>`;
                }).join('')}
            </div>
        </div>
    </div>

    <!-- Taraweeh Modal -->
    <div id="ramadan-taraweeh-modal" class="hidden fixed inset-0 z-50" style="background:rgba(0,0,0,0.5);">
        <div class="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[80vh] overflow-y-auto p-6">
            <div class="flex items-center justify-between mb-4">
                <h3 class="font-bold text-xl" style="color:#1F2937;">Taraweeh Tracker</h3>
                <button onclick="closeRamadanModal('taraweeh')" class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"><i class="fas fa-times" style="color:#6B7280;"></i></button>
            </div>
            <p class="text-sm mb-4" style="color:#6B7280;"><span id="taraweeh-count">${savedTaraweeh.length}</span> / 30 Nights (<span id="taraweeh-pct">${Math.round(savedTaraweeh.length/30*100)}</span>%)</p>
            <div class="ramadan-calendar mb-4" id="taraweeh-calendar">
                ${Array.from({length:30}, (_, i) => {
                    const day = i + 1;
                    const completed = savedTaraweeh.includes(day);
                    const isToday = day === dayNum;
                    return `<div class="ramadan-day-cell ${completed ? 'completed' : ''} ${isToday ? 'today' : ''}" onclick="toggleRamadanDay('taraweeh',${day})" style="background:${completed ? 'rgba(142,68,173,0.15)' : '#f9fafb'};${completed ? 'color:#8E44AD;border-color:#8E44AD;' : ''}">
                        ${completed ? '<i class="fas fa-check text-xs"></i>' : day}
                    </div>`;
                }).join('')}
            </div>
        </div>
    </div>

    <!-- Charity Modal -->
    <div id="ramadan-charity-modal" class="hidden fixed inset-0 z-50" style="background:rgba(0,0,0,0.5);">
        <div class="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[80vh] overflow-y-auto p-6">
            <div class="flex items-center justify-between mb-4">
                <h3 class="font-bold text-xl" style="color:#1F2937;">Charity Tracker</h3>
                <button onclick="closeRamadanModal('charity')" class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"><i class="fas fa-times" style="color:#6B7280;"></i></button>
            </div>
            <p class="text-lg font-bold mb-4" style="color:#0D7C66;">Total: <span id="charity-total">${curSymbol}${totalCharity.toLocaleString()}</span></p>
            <div class="flex gap-2 overflow-x-auto pb-2 mb-4">
                ${currencies.map(c => `<button onclick="setRamadanCurrency('${c.code}')" class="px-3 py-1.5 rounded-full text-sm font-semibold flex-shrink-0 ${c.code === selectedCurrency ? '' : ''}" style="background:${c.code === selectedCurrency ? 'rgba(212,175,55,0.15)' : '#f3f4f6'};color:${c.code === selectedCurrency ? '#D4AF37' : '#6B7280'};border:1px solid ${c.code === selectedCurrency ? '#D4AF37' : 'transparent'};" data-currency="${c.code}">${c.symbol} ${c.code}</button>`).join('')}
            </div>
            <div class="flex gap-2 mb-3">
                <input type="number" id="charity-amount" placeholder="Amount" class="flex-1 border rounded-lg px-3 py-2" style="border-color:#E5E7EB;">
                <input type="text" id="charity-desc" placeholder="Description (optional)" class="flex-1 border rounded-lg px-3 py-2" style="border-color:#E5E7EB;">
            </div>
            <button onclick="addCharityDonation()" class="w-full py-3 text-white rounded-lg font-bold mb-4" style="background:linear-gradient(135deg,#D4AF37,#F1C40F);">
                <i class="fas fa-plus mr-2"></i>Add Donation
            </button>
            <div id="charity-list" class="space-y-2">
                ${savedCharity.map((c, i) => `<div class="flex items-center justify-between p-3 rounded-lg" style="background:#f9fafb;">
                    <div><i class="fas fa-hand-holding-heart mr-2" style="color:#27AE60;"></i><span class="font-semibold" style="color:#1F2937;">${c.symbol || curSymbol}${c.amount}</span> <span class="text-sm" style="color:#6B7280;">${c.desc || ''}</span></div>
                    <button onclick="removeCharity(${i})" class="text-red-400 hover:text-red-600"><i class="fas fa-trash text-xs"></i></button>
                </div>`).join('')}
            </div>
        </div>
    </div>

    <!-- Laylatul Qadr Modal -->
    <div id="ramadan-laylatul-qadr-modal" class="hidden fixed inset-0 z-50" style="background:rgba(0,0,0,0.5);">
        <div class="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[80vh] overflow-y-auto p-6">
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-2">
                    <i class="fas fa-star" style="color:#D4AF37;"></i>
                    <h3 class="font-bold text-xl" style="color:#1F2937;">Laylatul Qadr</h3>
                </div>
                <button onclick="closeRamadanModal('laylatul-qadr')" class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"><i class="fas fa-times" style="color:#6B7280;"></i></button>
            </div>
            <p class="text-sm mb-2" style="color:#6B7280;">The Night of Power</p>
            <p class="text-sm italic mb-4" style="color:#9CA3AF;">"Better than a thousand months" - Al-Qadr 97:3</p>
            <div class="p-4 rounded-xl mb-4" style="background:rgba(212,175,55,0.06);border-left:4px solid #D4AF37;">
                <p class="text-xl font-arabic text-right mb-2" style="direction:rtl;line-height:2;color:#0A5C4F;">اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي</p>
                <p class="text-sm italic" style="color:#6B7280;">O Allah, You are the Most Forgiving, You love forgiveness, so forgive me.</p>
            </div>
            <h4 class="font-bold mb-3" style="color:#1F2937;">Special Nights</h4>
            <div class="space-y-2">
                ${[21,23,25,27,29].map(n => `<div class="flex items-center justify-between p-3 rounded-lg" style="background:#f9fafb;">
                    <div class="flex items-center gap-3">
                        <i class="fas fa-star" style="color:#D4AF37;"></i>
                        <span class="font-semibold" style="color:#1F2937;">Night ${n}</span>
                        ${n === 27 ? '<span class="text-xs px-2 py-0.5 rounded-full" style="background:rgba(212,175,55,0.15);color:#D4AF37;">(Most likely)</span>' : ''}
                    </div>
                </div>`).join('')}
            </div>
        </div>
    </div>
</div>
`;
},

// ==========================================
// ZAKAT CALCULATOR PAGE
// ==========================================
zakat: `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-hand-holding-heart"></i>
        <h1>Zakat Calculator</h1>
        <p>Calculate your obligatory charity</p>
    </div>

    <div class="max-w-2xl mx-auto">
        <div class="islamic-card mb-6">
            <h3 class="font-bold text-lg mb-3 text-gray-800">What is Zakat?</h3>
            <p class="text-gray-700 text-sm mb-3">
                Zakat is one of the Five Pillars of Islam. It is an obligatory charitable payment that purifies one's wealth.
                Muslims who possess wealth above a certain threshold (Nisab) must pay 2.5% of their total savings and assets annually.
            </p>
            <div class="bg-accent-gold-light p-3 rounded-lg">
                <p class="text-sm text-gray-700">
                    <strong>Nisab Threshold:</strong> Approximately $4,000 USD (equivalent to 87.48g of gold or 612.36g of silver)
                </p>
            </div>
        </div>

        <div class="islamic-card mb-6">
            <h3 class="font-bold text-lg mb-4 text-gray-800">Calculate Your Zakat</h3>

            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Cash & Bank Savings</label>
                    <input type="number" id="zakat-cash" class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary-main" placeholder="0.00" oninput="calculateZakat()">
                </div>

                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Gold & Silver (current value)</label>
                    <input type="number" id="zakat-gold" class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary-main" placeholder="0.00" oninput="calculateZakat()">
                </div>

                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Business Assets/Inventory</label>
                    <input type="number" id="zakat-business" class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary-main" placeholder="0.00" oninput="calculateZakat()">
                </div>

                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Investments & Stocks</label>
                    <input type="number" id="zakat-investments" class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary-main" placeholder="0.00" oninput="calculateZakat()">
                </div>

                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Other Assets</label>
                    <input type="number" id="zakat-other" class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary-main" placeholder="0.00" oninput="calculateZakat()">
                </div>

                <div class="border-t-2 border-gray-200 pt-4">
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Deductible Debts (optional)</label>
                    <input type="number" id="zakat-debts" class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary-main" placeholder="0.00" oninput="calculateZakat()">
                </div>
            </div>
        </div>

        <div class="islamic-card bg-gradient-to-br from-primary-main to-secondary-main text-white">
            <div class="flex items-center justify-between mb-4">
                <div>
                    <p class="text-sm opacity-90 mb-1">Total Zakatable Wealth</p>
                    <p class="text-3xl font-bold" id="total-wealth">$0.00</p>
                </div>
                <i class="fas fa-calculator text-4xl opacity-50"></i>
            </div>

            <div class="bg-white bg-opacity-20 p-4 rounded-lg">
                <p class="text-sm opacity-90 mb-2">Your Zakat Due (2.5%)</p>
                <p class="text-4xl font-bold" id="zakat-amount">$0.00</p>
            </div>

            <div class="mt-4 text-sm opacity-90" id="zakat-status">
                Enter your assets to calculate Zakat
            </div>
        </div>

        <div class="mt-4 islamic-card">
            <h4 class="font-bold text-gray-800 mb-2">Who Can Receive Zakat?</h4>
            <ul class="text-sm text-gray-600 space-y-1">
                <li>• The poor and needy</li>
                <li>• Those in debt</li>
                <li>• Travelers in need</li>
                <li>• New Muslims</li>
                <li>• Those working to free slaves</li>
                <li>• Those collecting and distributing Zakat</li>
                <li>• Those fighting in the path of Allah</li>
            </ul>
        </div>
    </div>
</div>
`,

// ==========================================
// CHALLENGES PAGE
// ==========================================
challenges: `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-trophy"></i>
        <h1>Challenges</h1>
        <p>Complete daily & weekly fitness challenges</p>
    </div>

    <div class="max-w-4xl mx-auto space-y-6">
        <!-- Stats Overview -->
        <div class="grid grid-cols-3 gap-4">
            <div class="islamic-card text-center">
                <i class="fas fa-fire text-3xl text-orange-500 mb-2"></i>
                <div class="text-2xl font-bold text-gray-800" id="challenge-streak">0</div>
                <p class="text-sm text-gray-600">Day Streak</p>
            </div>
            <div class="islamic-card text-center">
                <i class="fas fa-star text-3xl text-yellow-500 mb-2"></i>
                <div class="text-2xl font-bold text-gray-800" id="challenge-points">0</div>
                <p class="text-sm text-gray-600">Total Points</p>
            </div>
            <div class="islamic-card text-center">
                <i class="fas fa-check-circle text-3xl text-green-500 mb-2"></i>
                <div class="text-2xl font-bold text-gray-800" id="challenges-completed">0</div>
                <p class="text-sm text-gray-600">Completed</p>
            </div>
        </div>

        <!-- Daily Challenges -->
        <div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">
                <i class="fas fa-calendar-day text-primary-main mr-2"></i>
                Daily Challenges
            </h3>
            <div class="space-y-3" id="daily-challenges">
                <div class="islamic-card">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-4 flex-1">
                            <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                <i class="fas fa-walking text-green-600 text-xl"></i>
                            </div>
                            <div class="flex-1">
                                <h4 class="font-bold text-gray-800">Walk 5,000 Steps</h4>
                                <p class="text-sm text-gray-600">Get moving today</p>
                                <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div class="bg-green-500 h-2 rounded-full" style="width: 0%" id="steps-progress"></div>
                                </div>
                            </div>
                        </div>
                        <div class="text-right ml-4">
                            <span class="text-2xl font-bold text-yellow-500">+50</span>
                            <p class="text-xs text-gray-500">points</p>
                        </div>
                    </div>
                </div>

                <div class="islamic-card">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-4 flex-1">
                            <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                <i class="fas fa-tint text-blue-600 text-xl"></i>
                            </div>
                            <div class="flex-1">
                                <h4 class="font-bold text-gray-800">Drink 8 Glasses of Water</h4>
                                <p class="text-sm text-gray-600">Stay hydrated</p>
                                <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div class="bg-blue-500 h-2 rounded-full" style="width: 0%" id="water-progress"></div>
                                </div>
                            </div>
                        </div>
                        <div class="text-right ml-4">
                            <span class="text-2xl font-bold text-yellow-500">+30</span>
                            <p class="text-xs text-gray-500">points</p>
                        </div>
                    </div>
                </div>

                <div class="islamic-card">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-4 flex-1">
                            <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                                <i class="fas fa-dumbbell text-purple-600 text-xl"></i>
                            </div>
                            <div class="flex-1">
                                <h4 class="font-bold text-gray-800">30-Minute Workout</h4>
                                <p class="text-sm text-gray-600">Exercise for 30 minutes</p>
                                <button onclick="markChallengeComplete('workout')" class="mt-2 px-4 py-1 bg-purple-500 text-white text-sm rounded-lg hover:bg-purple-600">
                                    Complete
                                </button>
                            </div>
                        </div>
                        <div class="text-right ml-4">
                            <span class="text-2xl font-bold text-yellow-500">+100</span>
                            <p class="text-xs text-gray-500">points</p>
                        </div>
                    </div>
                </div>

                <div class="islamic-card">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-4 flex-1">
                            <div class="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
                                <i class="fas fa-mosque text-primary-main text-xl"></i>
                            </div>
                            <div class="flex-1">
                                <h4 class="font-bold text-gray-800">Pray All 5 Salah On Time</h4>
                                <p class="text-sm text-gray-600">Complete all prayers today</p>
                                <button onclick="markChallengeComplete('prayers')" class="mt-2 px-4 py-1 bg-primary-main text-white text-sm rounded-lg hover:bg-primary-dark">
                                    Complete
                                </button>
                            </div>
                        </div>
                        <div class="text-right ml-4">
                            <span class="text-2xl font-bold text-yellow-500">+150</span>
                            <p class="text-xs text-gray-500">points</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Weekly Challenges -->
        <div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">
                <i class="fas fa-calendar-week text-secondary-main mr-2"></i>
                Weekly Challenges
            </h3>
            <div class="space-y-3" id="weekly-challenges">
                <div class="islamic-card">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-4 flex-1">
                            <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                <i class="fas fa-running text-green-600 text-xl"></i>
                            </div>
                            <div class="flex-1">
                                <h4 class="font-bold text-gray-800">Walk 35,000 Steps This Week</h4>
                                <p class="text-sm text-gray-600">5,000 steps per day</p>
                                <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div class="bg-green-500 h-2 rounded-full" style="width: 0%"></div>
                                </div>
                                <p class="text-xs text-gray-500 mt-1">0 / 35,000 steps</p>
                            </div>
                        </div>
                        <div class="text-right ml-4">
                            <span class="text-2xl font-bold text-yellow-500">+500</span>
                            <p class="text-xs text-gray-500">points</p>
                        </div>
                    </div>
                </div>

                <div class="islamic-card">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-4 flex-1">
                            <div class="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                                <i class="fas fa-fire-alt text-orange-600 text-xl"></i>
                            </div>
                            <div class="flex-1">
                                <h4 class="font-bold text-gray-800">Exercise 4 Days This Week</h4>
                                <p class="text-sm text-gray-600">Maintain consistency</p>
                                <div class="flex gap-2 mt-2">
                                    <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">M</div>
                                    <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">T</div>
                                    <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">W</div>
                                    <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">T</div>
                                    <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">F</div>
                                </div>
                            </div>
                        </div>
                        <div class="text-right ml-4">
                            <span class="text-2xl font-bold text-yellow-500">+400</span>
                            <p class="text-xs text-gray-500">points</p>
                        </div>
                    </div>
                </div>

                <div class="islamic-card">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-4 flex-1">
                            <div class="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
                                <i class="fas fa-book-quran text-primary-main text-xl"></i>
                            </div>
                            <div class="flex-1">
                                <h4 class="font-bold text-gray-800">Read Quran Daily</h4>
                                <p class="text-sm text-gray-600">At least 15 minutes each day</p>
                                <div class="flex gap-2 mt-2">
                                    <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">S</div>
                                    <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">M</div>
                                    <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">T</div>
                                    <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">W</div>
                                    <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">T</div>
                                    <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">F</div>
                                    <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">S</div>
                                </div>
                            </div>
                        </div>
                        <div class="text-right ml-4">
                            <span class="text-2xl font-bold text-yellow-500">+600</span>
                            <p class="text-xs text-gray-500">points</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`,

// ==========================================
// EXERCISES PAGE
// ==========================================
exercises: `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-dumbbell"></i>
        <h1>Exercise Guide</h1>
        <p>Comprehensive workout routines</p>
    </div>

    <div class="max-w-4xl mx-auto space-y-6">
        <!-- Exercise Categories -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button onclick="filterExercises('all')" class="category-btn active" data-category="all">
                <i class="fas fa-th mr-2"></i>All
            </button>
            <button onclick="filterExercises('cardio')" class="category-btn" data-category="cardio">
                <i class="fas fa-running mr-2"></i>Cardio
            </button>
            <button onclick="filterExercises('strength')" class="category-btn" data-category="strength">
                <i class="fas fa-dumbbell mr-2"></i>Strength
            </button>
            <button onclick="filterExercises('flexibility')" class="category-btn" data-category="flexibility">
                <i class="fas fa-child mr-2"></i>Flexibility
            </button>
        </div>

        <!-- Cardio Exercises -->
        <div class="exercise-section" data-category="cardio">
            <h3 class="text-xl font-bold text-gray-800 mb-4">
                <i class="fas fa-running text-orange-500 mr-2"></i>
                Cardio Exercises
            </h3>
            <div class="space-y-3">
                <div class="islamic-card">
                    <div class="flex items-start gap-4">
                        <div class="w-16 h-16 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                            <i class="fas fa-walking text-orange-600 text-2xl"></i>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-bold text-lg text-gray-800 mb-1">Brisk Walking</h4>
                            <p class="text-sm text-gray-600 mb-2">Low-impact cardio suitable for all fitness levels</p>
                            <div class="flex flex-wrap gap-2 text-xs">
                                <span class="px-2 py-1 bg-gray-100 rounded">30 mins</span>
                                <span class="px-2 py-1 bg-gray-100 rounded">Beginner</span>
                                <span class="px-2 py-1 bg-gray-100 rounded">200 cal</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="islamic-card">
                    <div class="flex items-start gap-4">
                        <div class="w-16 h-16 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                            <i class="fas fa-running text-orange-600 text-2xl"></i>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-bold text-lg text-gray-800 mb-1">Jogging</h4>
                            <p class="text-sm text-gray-600 mb-2">Moderate-intensity running for cardiovascular health</p>
                            <div class="flex flex-wrap gap-2 text-xs">
                                <span class="px-2 py-1 bg-gray-100 rounded">20-30 mins</span>
                                <span class="px-2 py-1 bg-gray-100 rounded">Intermediate</span>
                                <span class="px-2 py-1 bg-gray-100 rounded">300 cal</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="islamic-card">
                    <div class="flex items-start gap-4">
                        <div class="w-16 h-16 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                            <i class="fas fa-biking text-orange-600 text-2xl"></i>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-bold text-lg text-gray-800 mb-1">Cycling</h4>
                            <p class="text-sm text-gray-600 mb-2">Joint-friendly cardio workout</p>
                            <div class="flex flex-wrap gap-2 text-xs">
                                <span class="px-2 py-1 bg-gray-100 rounded">30-45 mins</span>
                                <span class="px-2 py-1 bg-gray-100 rounded">All Levels</span>
                                <span class="px-2 py-1 bg-gray-100 rounded">250 cal</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Strength Exercises -->
        <div class="exercise-section" data-category="strength">
            <h3 class="text-xl font-bold text-gray-800 mb-4">
                <i class="fas fa-dumbbell text-blue-500 mr-2"></i>
                Strength Training
            </h3>
            <div class="space-y-3">
                <div class="islamic-card">
                    <div class="flex items-start gap-4">
                        <div class="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <i class="fas fa-hand-fist text-blue-600 text-2xl"></i>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-bold text-lg text-gray-800 mb-1">Push-ups</h4>
                            <p class="text-sm text-gray-600 mb-2">Upper body strength, chest, shoulders, triceps</p>
                            <div class="flex flex-wrap gap-2 text-xs mb-2">
                                <span class="px-2 py-1 bg-gray-100 rounded">3 sets × 10-15 reps</span>
                                <span class="px-2 py-1 bg-gray-100 rounded">Beginner</span>
                            </div>
                            <p class="text-xs text-gray-600">Start in plank position, lower body, push back up</p>
                        </div>
                    </div>
                </div>

                <div class="islamic-card">
                    <div class="flex items-start gap-4">
                        <div class="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <i class="fas fa-person-running text-blue-600 text-2xl"></i>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-bold text-lg text-gray-800 mb-1">Squats</h4>
                            <p class="text-sm text-gray-600 mb-2">Lower body strength, quads, glutes, hamstrings</p>
                            <div class="flex flex-wrap gap-2 text-xs mb-2">
                                <span class="px-2 py-1 bg-gray-100 rounded">3 sets × 15-20 reps</span>
                                <span class="px-2 py-1 bg-gray-100 rounded">Beginner</span>
                            </div>
                            <p class="text-xs text-gray-600">Feet shoulder-width apart, lower hips, stand back up</p>
                        </div>
                    </div>
                </div>

                <div class="islamic-card">
                    <div class="flex items-start gap-4">
                        <div class="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <i class="fas fa-person-walking text-blue-600 text-2xl"></i>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-bold text-lg text-gray-800 mb-1">Lunges</h4>
                            <p class="text-sm text-gray-600 mb-2">Leg strength and balance</p>
                            <div class="flex flex-wrap gap-2 text-xs mb-2">
                                <span class="px-2 py-1 bg-gray-100 rounded">3 sets × 10 each leg</span>
                                <span class="px-2 py-1 bg-gray-100 rounded">Intermediate</span>
                            </div>
                            <p class="text-xs text-gray-600">Step forward, lower back knee, return to start</p>
                        </div>
                    </div>
                </div>

                <div class="islamic-card">
                    <div class="flex items-start gap-4">
                        <div class="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <i class="fas fa-bars text-blue-600 text-2xl"></i>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-bold text-lg text-gray-800 mb-1">Plank</h4>
                            <p class="text-sm text-gray-600 mb-2">Core strength and stability</p>
                            <div class="flex flex-wrap gap-2 text-xs mb-2">
                                <span class="px-2 py-1 bg-gray-100 rounded">3 sets × 30-60 sec</span>
                                <span class="px-2 py-1 bg-gray-100 rounded">All Levels</span>
                            </div>
                            <p class="text-xs text-gray-600">Hold body straight in push-up position</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Flexibility Exercises -->
        <div class="exercise-section" data-category="flexibility">
            <h3 class="text-xl font-bold text-gray-800 mb-4">
                <i class="fas fa-child text-purple-500 mr-2"></i>
                Flexibility & Stretching
            </h3>
            <div class="space-y-3">
                <div class="islamic-card">
                    <div class="flex items-start gap-4">
                        <div class="w-16 h-16 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                            <i class="fas fa-spa text-purple-600 text-2xl"></i>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-bold text-lg text-gray-800 mb-1">Morning Stretches</h4>
                            <p class="text-sm text-gray-600 mb-2">Wake up your body gently</p>
                            <div class="flex flex-wrap gap-2 text-xs">
                                <span class="px-2 py-1 bg-gray-100 rounded">10 mins</span>
                                <span class="px-2 py-1 bg-gray-100 rounded">Beginner</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="islamic-card">
                    <div class="flex items-start gap-4">
                        <div class="w-16 h-16 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                            <i class="fas fa-person-rays text-purple-600 text-2xl"></i>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-bold text-lg text-gray-800 mb-1">Yoga Flow</h4>
                            <p class="text-sm text-gray-600 mb-2">Improve flexibility and mindfulness</p>
                            <div class="flex flex-wrap gap-2 text-xs">
                                <span class="px-2 py-1 bg-gray-100 rounded">20-30 mins</span>
                                <span class="px-2 py-1 bg-gray-100 rounded">All Levels</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`,

// ==========================================
// ACHIEVEMENTS PAGE
// ==========================================
achievements: `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-award"></i>
        <h1>Achievements</h1>
        <p>Earn badges and rewards for your progress</p>
    </div>

    <div class="max-w-4xl mx-auto space-y-6">
        <!-- Progress Overview -->
        <div class="islamic-card">
            <div class="flex items-center justify-between mb-4">
                <div>
                    <h3 class="text-2xl font-bold text-gray-800">Level <span id="user-level">1</span></h3>
                    <p class="text-sm text-gray-600">Keep going to unlock more badges!</p>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-bold text-yellow-500" id="total-badges">0</div>
                    <p class="text-xs text-gray-600">Badges Earned</p>
                </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3">
                <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 h-3 rounded-full" style="width: 35%" id="level-progress"></div>
            </div>
            <p class="text-xs text-gray-600 mt-2">350 / 1000 XP to Level 2</p>
        </div>

        <!-- Fitness Badges -->
        <div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">
                <i class="fas fa-dumbbell text-green-500 mr-2"></i>
                Fitness Badges
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="islamic-card text-center">
                    <div class="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-3">
                        <i class="fas fa-walking text-4xl text-green-600"></i>
                    </div>
                    <h4 class="font-bold text-gray-800 mb-1">First Steps</h4>
                    <p class="text-xs text-gray-600 mb-2">Walk 1,000 steps</p>
                    <span class="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-semibold">Unlocked</span>
                </div>

                <div class="islamic-card text-center opacity-50">
                    <div class="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-3">
                        <i class="fas fa-running text-4xl text-gray-400"></i>
                    </div>
                    <h4 class="font-bold text-gray-800 mb-1">Marathon</h4>
                    <p class="text-xs text-gray-600 mb-2">Walk 50,000 steps</p>
                    <span class="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Locked</span>
                </div>

                <div class="islamic-card text-center opacity-50">
                    <div class="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-3">
                        <i class="fas fa-fire text-4xl text-gray-400"></i>
                    </div>
                    <h4 class="font-bold text-gray-800 mb-1">7-Day Streak</h4>
                    <p class="text-xs text-gray-600 mb-2">Exercise 7 days in a row</p>
                    <span class="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Locked</span>
                </div>

                <div class="islamic-card text-center opacity-50">
                    <div class="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-3">
                        <i class="fas fa-trophy text-4xl text-gray-400"></i>
                    </div>
                    <h4 class="font-bold text-gray-800 mb-1">Champion</h4>
                    <p class="text-xs text-gray-600 mb-2">Complete 50 challenges</p>
                    <span class="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Locked</span>
                </div>
            </div>
        </div>

        <!-- Islamic Badges -->
        <div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">
                <i class="fas fa-mosque text-primary-main mr-2"></i>
                Islamic Badges
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="islamic-card text-center">
                    <div class="w-20 h-20 mx-auto rounded-full bg-primary-light flex items-center justify-center mb-3">
                        <i class="fas fa-quran text-4xl text-primary-main"></i>
                    </div>
                    <h4 class="font-bold text-gray-800 mb-1">Quran Reader</h4>
                    <p class="text-xs text-gray-600 mb-2">Read 1 Juz</p>
                    <span class="inline-block px-3 py-1 bg-primary-light text-primary-main text-xs rounded-full font-semibold">Unlocked</span>
                </div>

                <div class="islamic-card text-center opacity-50">
                    <div class="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-3">
                        <i class="fas fa-book text-4xl text-gray-400"></i>
                    </div>
                    <h4 class="font-bold text-gray-800 mb-1">Hafiz</h4>
                    <p class="text-xs text-gray-600 mb-2">Complete Quran reading</p>
                    <span class="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Locked</span>
                </div>

                <div class="islamic-card text-center opacity-50">
                    <div class="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-3">
                        <i class="fas fa-moon text-4xl text-gray-400"></i>
                    </div>
                    <h4 class="font-bold text-gray-800 mb-1">Ramadan Warrior</h4>
                    <p class="text-xs text-gray-600 mb-2">Complete 30 fasts</p>
                    <span class="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Locked</span>
                </div>

                <div class="islamic-card text-center opacity-50">
                    <div class="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-3">
                        <i class="fas fa-hands-praying text-4xl text-gray-400"></i>
                    </div>
                    <h4 class="font-bold text-gray-800 mb-1">Dhikr Master</h4>
                    <p class="text-xs text-gray-600 mb-2">Complete 10,000 counts</p>
                    <span class="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Locked</span>
                </div>
            </div>
        </div>

        <!-- Health Badges -->
        <div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">
                <i class="fas fa-heart text-red-500 mr-2"></i>
                Health Badges
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="islamic-card text-center opacity-50">
                    <div class="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-3">
                        <i class="fas fa-tint text-4xl text-gray-400"></i>
                    </div>
                    <h4 class="font-bold text-gray-800 mb-1">Hydration Hero</h4>
                    <p class="text-xs text-gray-600 mb-2">Track water 30 days</p>
                    <span class="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Locked</span>
                </div>

                <div class="islamic-card text-center opacity-50">
                    <div class="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-3">
                        <i class="fas fa-bed text-4xl text-gray-400"></i>
                    </div>
                    <h4 class="font-bold text-gray-800 mb-1">Sleep Champion</h4>
                    <p class="text-xs text-gray-600 mb-2">8 hours for 7 days</p>
                    <span class="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Locked</span>
                </div>

                <div class="islamic-card text-center opacity-50">
                    <div class="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-3">
                        <i class="fas fa-utensils text-4xl text-gray-400"></i>
                    </div>
                    <h4 class="font-bold text-gray-800 mb-1">Nutrition Pro</h4>
                    <p class="text-xs text-gray-600 mb-2">Track meals 30 days</p>
                    <span class="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Locked</span>
                </div>

                <div class="islamic-card text-center opacity-50">
                    <div class="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-3">
                        <i class="fas fa-weight text-4xl text-gray-400"></i>
                    </div>
                    <h4 class="font-bold text-gray-800 mb-1">Weight Goal</h4>
                    <p class="text-xs text-gray-600 mb-2">Reach target weight</p>
                    <span class="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Locked</span>
                </div>
            </div>
        </div>
    </div>
</div>
`,

// ==========================================
// STEP COUNTER PAGE
// ==========================================
'step-counter': `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-walking"></i>
        <h1>Step Counter</h1>
        <p>Track your daily steps and activity</p>
    </div>

    <div class="max-w-2xl mx-auto space-y-6">
        <!-- Today's Steps -->
        <div class="islamic-card text-center">
            <div class="mb-4">
                <i class="fas fa-shoe-prints text-5xl text-green-500 mb-3"></i>
                <div class="text-6xl font-bold text-gray-800 mb-2" id="step-count">0</div>
                <p class="text-gray-600">steps today</p>
            </div>

            <!-- Progress Circle or Bar -->
            <div class="relative w-48 h-48 mx-auto mb-6">
                <svg class="transform -rotate-90" width="192" height="192">
                    <circle cx="96" cy="96" r="88" stroke="#E5E7EB" stroke-width="12" fill="none"/>
                    <circle id="step-progress-circle" cx="96" cy="96" r="88" stroke="#10B981" stroke-width="12" fill="none"
                        stroke-dasharray="553" stroke-dashoffset="553" stroke-linecap="round"/>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="text-center">
                        <div class="text-3xl font-bold text-green-600" id="step-percentage">0%</div>
                        <div class="text-sm text-gray-600">of goal</div>
                    </div>
                </div>
            </div>

            <!-- Goal Setting -->
            <div class="flex items-center justify-center gap-4 mb-4">
                <label class="text-sm text-gray-600">Daily Goal:</label>
                <input type="number" id="step-goal" value="10000" min="1000" max="50000" step="1000"
                    class="w-24 px-3 py-2 border-2 border-gray-200 rounded-lg text-center font-bold"
                    onchange="updateStepGoal(this.value)">
                <span class="text-sm text-gray-600">steps</span>
            </div>

            <!-- Add Steps Button -->
            <div class="flex gap-3">
                <button onclick="addSteps(100)" class="flex-1 py-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200">
                    +100 steps
                </button>
                <button onclick="addSteps(500)" class="flex-1 py-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200">
                    +500 steps
                </button>
                <button onclick="addSteps(1000)" class="flex-1 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
                    +1000 steps
                </button>
            </div>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-3 gap-4">
            <div class="islamic-card text-center">
                <i class="fas fa-fire text-2xl text-orange-500 mb-2"></i>
                <div class="text-2xl font-bold text-gray-800" id="calories-burned">0</div>
                <p class="text-xs text-gray-600">Calories</p>
            </div>
            <div class="islamic-card text-center">
                <i class="fas fa-route text-2xl text-blue-500 mb-2"></i>
                <div class="text-2xl font-bold text-gray-800" id="distance-walked">0.0</div>
                <p class="text-xs text-gray-600">km</p>
            </div>
            <div class="islamic-card text-center">
                <i class="fas fa-clock text-2xl text-purple-500 mb-2"></i>
                <div class="text-2xl font-bold text-gray-800" id="active-time">0</div>
                <p class="text-xs text-gray-600">minutes</p>
            </div>
        </div>

        <!-- Weekly Progress -->
        <div class="islamic-card">
            <h3 class="font-bold text-lg mb-4 text-gray-800">This Week</h3>
            <div class="space-y-3">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600 w-12">Mon</span>
                    <div class="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                        <div class="bg-green-500 h-2 rounded-full" style="width: 85%"></div>
                    </div>
                    <span class="text-sm font-semibold text-gray-800 w-16 text-right">8,500</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600 w-12">Tue</span>
                    <div class="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                        <div class="bg-green-500 h-2 rounded-full" style="width: 100%"></div>
                    </div>
                    <span class="text-sm font-semibold text-gray-800 w-16 text-right">10,200</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600 w-12">Wed</span>
                    <div class="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                        <div class="bg-green-500 h-2 rounded-full" style="width: 70%"></div>
                    </div>
                    <span class="text-sm font-semibold text-gray-800 w-16 text-right">7,000</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600 w-12">Thu</span>
                    <div class="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                        <div class="bg-green-500 h-2 rounded-full" style="width: 95%"></div>
                    </div>
                    <span class="text-sm font-semibold text-gray-800 w-16 text-right">9,500</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600 w-12">Fri</span>
                    <div class="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                        <div class="bg-green-500 h-2 rounded-full" style="width: 60%"></div>
                    </div>
                    <span class="text-sm font-semibold text-gray-800 w-16 text-right">6,000</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600 w-12">Sat</span>
                    <div class="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                        <div class="bg-green-500 h-2 rounded-full" style="width: 110%"></div>
                    </div>
                    <span class="text-sm font-semibold text-green-600 w-16 text-right">11,000</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-sm font-semibold text-primary-main w-12">Today</span>
                    <div class="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                        <div class="bg-primary-main h-2 rounded-full" style="width: 0%" id="today-progress"></div>
                    </div>
                    <span class="text-sm font-semibold text-primary-main w-16 text-right" id="today-steps">0</span>
                </div>
            </div>
        </div>
    </div>
</div>
`,

// ==========================================
// WATER TRACKER PAGE
// ==========================================
'water-tracker': `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-tint"></i>
        <h1>Water Tracker</h1>
        <p>Monitor your daily hydration</p>
    </div>

    <div class="max-w-2xl mx-auto space-y-6">
        <!-- Today's Water Intake -->
        <div class="islamic-card text-center">
            <i class="fas fa-glass-water text-5xl text-blue-500 mb-4"></i>
            <div class="text-6xl font-bold text-gray-800 mb-2" id="water-glasses">0</div>
            <p class="text-gray-600">out of <span id="water-goal">8</span> glasses</p>

            <div class="w-full bg-gray-200 rounded-full h-4 mt-6 mb-4">
                <div id="water-progress-bar" class="bg-gradient-to-r from-blue-400 to-blue-600 h-4 rounded-full transition-all duration-300" style="width: 0%"></div>
            </div>

            <!-- Glass Grid -->
            <div class="grid grid-cols-4 gap-3 mt-6 mb-6" id="water-glass-grid">
                ${[...Array(8)].map((_, i) => `
                    <button onclick="toggleGlass(${i})" class="water-glass-btn bg-gray-100 p-4 rounded-lg hover:bg-blue-50 transition-all" data-glass="${i}">
                        <i class="fas fa-glass-water text-3xl text-gray-300"></i>
                    </button>
                `).join('')}
            </div>

            <button onclick="resetWaterTracker()" class="w-full py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                <i class="fas fa-redo mr-2"></i>
                Reset Today
            </button>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 gap-4">
            <div class="islamic-card text-center">
                <i class="fas fa-droplet text-2xl text-blue-500 mb-2"></i>
                <div class="text-2xl font-bold text-gray-800" id="water-ml">0</div>
                <p class="text-xs text-gray-600">ml consumed</p>
            </div>
            <div class="islamic-card text-center">
                <i class="fas fa-fire text-2xl text-orange-500 mb-2"></i>
                <div class="text-2xl font-bold text-gray-800" id="hydration-streak">0</div>
                <p class="text-xs text-gray-600">day streak</p>
            </div>
        </div>

        <!-- Weekly Progress -->
        <div class="islamic-card">
            <h3 class="font-bold text-lg mb-4 text-gray-800">This Week</h3>
            <div class="space-y-3">
                ${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => `
                    <div class="flex items-center gap-3">
                        <span class="text-sm text-gray-600 w-12">${day}</span>
                        <div class="flex gap-1 flex-1">
                            ${[...Array(8)].map(() => `
                                <div class="flex-1 h-8 bg-blue-${Math.random() > 0.3 ? '500' : '200'} rounded"></div>
                            `).join('')}
                        </div>
                        <span class="text-sm font-semibold text-gray-800 w-12 text-right">${Math.floor(Math.random() * 8) + 1}/8</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- Tips -->
        <div class="islamic-card bg-blue-50">
            <h4 class="font-bold text-gray-800 mb-2">
                <i class="fas fa-lightbulb text-yellow-500 mr-2"></i>
                Hydration Tips
            </h4>
            <ul class="text-sm text-gray-700 space-y-1">
                <li>• Drink a glass of water first thing in the morning</li>
                <li>• Keep a water bottle with you throughout the day</li>
                <li>• Drink before, during, and after exercise</li>
                <li>• Drink water before each meal</li>
            </ul>
        </div>
    </div>
</div>
`,

// ==========================================
// SLEEP TRACKER PAGE
// ==========================================
'sleep-tracker': `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-bed"></i>
        <h1>Sleep Tracker</h1>
        <p>Monitor your sleep quality</p>
    </div>

    <div class="max-w-2xl mx-auto space-y-6">
        <!-- Last Night's Sleep -->
        <div class="islamic-card text-center">
            <i class="fas fa-moon text-5xl text-purple-500 mb-4"></i>
            <div class="text-6xl font-bold text-gray-800 mb-2" id="sleep-hours">0</div>
            <p class="text-gray-600">hours of sleep</p>

            <div class="mt-6 flex justify-center gap-4">
                <div class="text-center">
                    <p class="text-sm text-gray-600 mb-1">Bedtime</p>
                    <input type="time" id="bedtime" class="px-3 py-2 border-2 border-gray-200 rounded-lg" value="23:00">
                </div>
                <div class="text-center">
                    <p class="text-sm text-gray-600 mb-1">Wake Up</p>
                    <input type="time" id="wake-time" class="px-3 py-2 border-2 border-gray-200 rounded-lg" value="07:00">
                </div>
            </div>

            <button onclick="logSleep()" class="w-full mt-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
                <i class="fas fa-save mr-2"></i>
                Log Sleep
            </button>
        </div>

        <!-- Sleep Quality -->
        <div class="islamic-card">
            <h3 class="font-bold text-lg mb-4 text-gray-800">How was your sleep?</h3>
            <div class="grid grid-cols-5 gap-3">
                <button onclick="setSleepQuality(1)" class="sleep-quality-btn p-4 bg-gray-100 rounded-lg hover:bg-red-100 transition-all">
                    <i class="fas fa-face-frown text-3xl text-red-500"></i>
                    <p class="text-xs mt-2">Poor</p>
                </button>
                <button onclick="setSleepQuality(2)" class="sleep-quality-btn p-4 bg-gray-100 rounded-lg hover:bg-orange-100 transition-all">
                    <i class="fas fa-face-meh text-3xl text-orange-500"></i>
                    <p class="text-xs mt-2">Fair</p>
                </button>
                <button onclick="setSleepQuality(3)" class="sleep-quality-btn p-4 bg-gray-100 rounded-lg hover:bg-yellow-100 transition-all">
                    <i class="fas fa-face-smile text-3xl text-yellow-500"></i>
                    <p class="text-xs mt-2">Good</p>
                </button>
                <button onclick="setSleepQuality(4)" class="sleep-quality-btn p-4 bg-gray-100 rounded-lg hover:bg-green-100 transition-all">
                    <i class="fas fa-face-smile-beam text-3xl text-green-500"></i>
                    <p class="text-xs mt-2">Great</p>
                </button>
                <button onclick="setSleepQuality(5)" class="sleep-quality-btn p-4 bg-gray-100 rounded-lg hover:bg-purple-100 transition-all">
                    <i class="fas fa-face-grin-stars text-3xl text-purple-500"></i>
                    <p class="text-xs mt-2">Excellent</p>
                </button>
            </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-4">
            <div class="islamic-card text-center">
                <i class="fas fa-chart-line text-2xl text-purple-500 mb-2"></i>
                <div class="text-2xl font-bold text-gray-800">7.5</div>
                <p class="text-xs text-gray-600">Avg. hours</p>
            </div>
            <div class="islamic-card text-center">
                <i class="fas fa-bed text-2xl text-blue-500 mb-2"></i>
                <div class="text-2xl font-bold text-gray-800">11:30 PM</div>
                <p class="text-xs text-gray-600">Avg. bedtime</p>
            </div>
            <div class="islamic-card text-center">
                <i class="fas fa-sun text-2xl text-yellow-500 mb-2"></i>
                <div class="text-2xl font-bold text-gray-800">7:00 AM</div>
                <p class="text-xs text-gray-600">Avg. wake up</p>
            </div>
        </div>

        <!-- Weekly Chart -->
        <div class="islamic-card">
            <h3 class="font-bold text-lg mb-4 text-gray-800">Sleep This Week</h3>
            <div class="space-y-3">
                ${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => {
                    const hours = Math.floor(Math.random() * 4) + 6;
                    const percentage = (hours / 10) * 100;
                    return `
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-600 w-12">${day}</span>
                            <div class="flex-1 mx-3 bg-gray-200 rounded-full h-3">
                                <div class="bg-purple-500 h-3 rounded-full" style="width: ${percentage}%"></div>
                            </div>
                            <span class="text-sm font-semibold text-gray-800 w-16 text-right">${hours}h</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>

        <!-- Tips -->
        <div class="islamic-card bg-purple-50">
            <h4 class="font-bold text-gray-800 mb-2">
                <i class="fas fa-lightbulb text-yellow-500 mr-2"></i>
                Better Sleep Tips
            </h4>
            <ul class="text-sm text-gray-700 space-y-1">
                <li>• Stick to a consistent sleep schedule</li>
                <li>• Create a relaxing bedtime routine</li>
                <li>• Keep your bedroom cool, dark, and quiet</li>
                <li>• Avoid screens 1 hour before bed</li>
                <li>• Pray Tahajjud for spiritual connection</li>
            </ul>
        </div>
    </div>
</div>
`,

// ==========================================
// NUTRITION TRACKER PAGE
// ==========================================
'nutrition-tracker': `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-utensils"></i>
        <h1>Nutrition Tracker</h1>
        <p>Log your meals and track calories</p>
    </div>

    <div class="max-w-2xl mx-auto space-y-6">
        <!-- Calories Today -->
        <div class="islamic-card text-center">
            <i class="fas fa-fire text-5xl text-orange-500 mb-4"></i>
            <div class="text-6xl font-bold text-gray-800 mb-2" id="calories-today">0</div>
            <p class="text-gray-600">of <span id="calorie-goal">2000</span> calories</p>

            <div class="w-full bg-gray-200 rounded-full h-4 mt-6 mb-2">
                <div id="calorie-progress-bar" class="bg-gradient-to-r from-orange-400 to-orange-600 h-4 rounded-full transition-all duration-300" style="width: 0%"></div>
            </div>
            <p class="text-sm text-gray-600"><span id="calories-remaining">2000</span> calories remaining</p>
        </div>

        <!-- Macros -->
        <div class="grid grid-cols-3 gap-4">
            <div class="islamic-card text-center">
                <div class="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center mb-2">
                    <i class="fas fa-drumstick-bite text-red-600 text-2xl"></i>
                </div>
                <div class="text-2xl font-bold text-gray-800" id="protein-grams">0</div>
                <p class="text-xs text-gray-600">Protein (g)</p>
            </div>
            <div class="islamic-card text-center">
                <div class="w-16 h-16 mx-auto rounded-full bg-yellow-100 flex items-center justify-center mb-2">
                    <i class="fas fa-bread-slice text-yellow-600 text-2xl"></i>
                </div>
                <div class="text-2xl font-bold text-gray-800" id="carbs-grams">0</div>
                <p class="text-xs text-gray-600">Carbs (g)</p>
            </div>
            <div class="islamic-card text-center">
                <div class="w-16 h-16 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-2">
                    <i class="fas fa-cheese text-orange-600 text-2xl"></i>
                </div>
                <div class="text-2xl font-bold text-gray-800" id="fats-grams">0</div>
                <p class="text-xs text-gray-600">Fats (g)</p>
            </div>
        </div>

        <!-- Add Meal -->
        <div class="islamic-card">
            <h3 class="font-bold text-lg mb-4 text-gray-800">Log a Meal</h3>
            <div class="space-y-3">
                <select id="meal-type" class="w-full p-3 border-2 border-gray-200 rounded-lg">
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="snack">Snack</option>
                </select>
                <input type="text" id="meal-name" placeholder="Meal name" class="w-full p-3 border-2 border-gray-200 rounded-lg">
                <input type="number" id="meal-calories" placeholder="Calories" class="w-full p-3 border-2 border-gray-200 rounded-lg">
                <button onclick="logMeal()" class="w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                    <i class="fas fa-plus mr-2"></i>
                    Add Meal
                </button>
            </div>
        </div>

        <!-- Today's Meals -->
        <div class="islamic-card">
            <h3 class="font-bold text-lg mb-4 text-gray-800">Today's Meals</h3>
            <div id="meals-list" class="space-y-3">
                <p class="text-center text-gray-500 text-sm py-8">No meals logged yet. Start adding your meals!</p>
            </div>
        </div>

        <!-- Quick Add -->
        <div class="islamic-card">
            <h3 class="font-bold text-lg mb-4 text-gray-800">Quick Add</h3>
            <div class="grid grid-cols-2 gap-3">
                <button onclick="quickAddMeal('Apple', 95)" class="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 text-left">
                    <i class="fas fa-apple-alt text-red-500 mr-2"></i>
                    Apple (95 cal)
                </button>
                <button onclick="quickAddMeal('Banana', 105)" class="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 text-left">
                    <i class="fas fa-lemon text-yellow-500 mr-2"></i>
                    Banana (105 cal)
                </button>
                <button onclick="quickAddMeal('Chicken Breast', 165)" class="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 text-left">
                    <i class="fas fa-drumstick-bite text-orange-500 mr-2"></i>
                    Chicken (165 cal)
                </button>
                <button onclick="quickAddMeal('Rice Bowl', 200)" class="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 text-left">
                    <i class="fas fa-bowl-rice text-green-500 mr-2"></i>
                    Rice (200 cal)
                </button>
            </div>
        </div>
    </div>
</div>
`,

// ==========================================
// PROFILE PAGE
// ==========================================
profile: `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-user"></i>
        <h1>Profile</h1>
        <p>Your progress and achievements</p>
    </div>

    <div class="max-w-2xl mx-auto space-y-6">
        <!-- Profile Header -->
        <div class="islamic-card text-center">
            <div class="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary-main to-secondary-main flex items-center justify-center mb-4">
                <i class="fas fa-user text-white text-4xl"></i>
            </div>
            <h2 class="text-2xl font-bold text-gray-800 mb-1">Muslim Fitness User</h2>
            <p class="text-gray-600 mb-4">Member since January 2026</p>

            <div class="flex justify-center gap-4">
                <div>
                    <div class="text-2xl font-bold text-primary-main">Level 5</div>
                    <p class="text-xs text-gray-600">Your Level</p>
                </div>
                <div class="w-px bg-gray-300"></div>
                <div>
                    <div class="text-2xl font-bold text-yellow-500">1,250</div>
                    <p class="text-xs text-gray-600">Total Points</p>
                </div>
                <div class="w-px bg-gray-300"></div>
                <div>
                    <div class="text-2xl font-bold text-green-500">15</div>
                    <p class="text-xs text-gray-600">Badges</p>
                </div>
            </div>
        </div>

        <!-- Streaks -->
        <div class="grid grid-cols-2 gap-4">
            <div class="islamic-card text-center">
                <i class="fas fa-fire text-4xl text-orange-500 mb-3"></i>
                <div class="text-3xl font-bold text-gray-800 mb-1">7</div>
                <p class="text-sm text-gray-600">Day Streak</p>
                <p class="text-xs text-gray-500 mt-2">Keep it up!</p>
            </div>
            <div class="islamic-card text-center">
                <i class="fas fa-calendar-check text-4xl text-green-500 mb-3"></i>
                <div class="text-3xl font-bold text-gray-800 mb-1">45</div>
                <p class="text-sm text-gray-600">Days Active</p>
                <p class="text-xs text-gray-500 mt-2">This month</p>
            </div>
        </div>

        <!-- Stats Overview -->
        <div class="islamic-card">
            <h3 class="font-bold text-lg mb-4 text-gray-800">Your Statistics</h3>
            <div class="grid grid-cols-2 gap-4">
                <div class="p-3 bg-green-50 rounded-lg">
                    <i class="fas fa-walking text-green-600 mb-2"></i>
                    <p class="text-2xl font-bold text-gray-800">52,345</p>
                    <p class="text-xs text-gray-600">Total Steps</p>
                </div>
                <div class="p-3 bg-blue-50 rounded-lg">
                    <i class="fas fa-tint text-blue-600 mb-2"></i>
                    <p class="text-2xl font-bold text-gray-800">56</p>
                    <p class="text-xs text-gray-600">Glasses of Water</p>
                </div>
                <div class="p-3 bg-purple-50 rounded-lg">
                    <i class="fas fa-moon text-purple-600 mb-2"></i>
                    <p class="text-2xl font-bold text-gray-800">7.5</p>
                    <p class="text-xs text-gray-600">Avg. Sleep (hrs)</p>
                </div>
                <div class="p-3 bg-orange-50 rounded-lg">
                    <i class="fas fa-dumbbell text-orange-600 mb-2"></i>
                    <p class="text-2xl font-bold text-gray-800">12</p>
                    <p class="text-xs text-gray-600">Workouts</p>
                </div>
            </div>
        </div>

        <!-- Islamic Stats -->
        <div class="islamic-card">
            <h3 class="font-bold text-lg mb-4 text-gray-800">Islamic Progress</h3>
            <div class="space-y-3">
                <div class="flex items-center justify-between p-3 bg-primary-light rounded-lg">
                    <div class="flex items-center gap-3">
                        <i class="fas fa-quran text-primary-main text-xl"></i>
                        <span class="font-semibold text-gray-800">Quran Reading</span>
                    </div>
                    <span class="text-primary-main font-bold">5 Juz</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-secondary-light rounded-lg">
                    <div class="flex items-center gap-3">
                        <i class="fas fa-hands-praying text-secondary-main text-xl"></i>
                        <span class="font-semibold text-gray-800">Dhikr Count</span>
                    </div>
                    <span class="text-secondary-main font-bold">2,450</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-accent-gold-light rounded-lg">
                    <div class="flex items-center gap-3">
                        <i class="fas fa-mosque text-accent-gold text-xl"></i>
                        <span class="font-semibold text-gray-800">Prayers On Time</span>
                    </div>
                    <span class="text-accent-gold font-bold">95%</span>
                </div>
            </div>
        </div>

        <!-- Recent Achievements -->
        <div class="islamic-card">
            <div class="flex items-center justify-between mb-4">
                <h3 class="font-bold text-lg text-gray-800">Recent Achievements</h3>
                <a href="#achievements" class="text-sm text-primary-main hover:underline">View All</a>
            </div>
            <div class="grid grid-cols-4 gap-3">
                <div class="text-center p-3 bg-green-50 rounded-lg">
                    <i class="fas fa-walking text-3xl text-green-600 mb-2"></i>
                    <p class="text-xs font-semibold">First Steps</p>
                </div>
                <div class="text-center p-3 bg-primary-light rounded-lg">
                    <i class="fas fa-quran text-3xl text-primary-main mb-2"></i>
                    <p class="text-xs font-semibold">Quran Reader</p>
                </div>
                <div class="text-center p-3 bg-blue-50 rounded-lg">
                    <i class="fas fa-tint text-3xl text-blue-600 mb-2"></i>
                    <p class="text-xs font-semibold">Hydrated</p>
                </div>
                <div class="text-center p-3 bg-orange-50 rounded-lg">
                    <i class="fas fa-fire text-3xl text-orange-600 mb-2"></i>
                    <p class="text-xs font-semibold">7-Day Streak</p>
                </div>
            </div>
        </div>
    </div>
</div>
`,

// ==========================================
// SETTINGS PAGE
// ==========================================
settings: `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-cog"></i>
        <h1>Settings</h1>
        <p>Customize your app experience</p>
    </div>

    <div class="max-w-2xl mx-auto space-y-6">
        <!-- Notifications -->
        <div class="islamic-card">
            <h3 class="font-bold text-lg mb-4 text-gray-800">
                <i class="fas fa-bell text-primary-main mr-2"></i>
                Notifications
            </h3>
            <div class="space-y-3">
                <label class="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                    <span class="text-gray-700">Prayer Reminders</span>
                    <input type="checkbox" checked class="w-12 h-6 rounded-full appearance-none bg-primary-main cursor-pointer">
                </label>
                <label class="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                    <span class="text-gray-700">Azan Notifications</span>
                    <input type="checkbox" checked class="w-12 h-6 rounded-full appearance-none bg-primary-main cursor-pointer">
                </label>
                <label class="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                    <span class="text-gray-700">Challenge Reminders</span>
                    <input type="checkbox" class="w-12 h-6 rounded-full appearance-none bg-gray-300 cursor-pointer">
                </label>
                <label class="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                    <span class="text-gray-700">Water Reminders</span>
                    <input type="checkbox" class="w-12 h-6 rounded-full appearance-none bg-gray-300 cursor-pointer">
                </label>
                <label class="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                    <span class="text-gray-700">Dhikr Reminders</span>
                    <input type="checkbox" class="w-12 h-6 rounded-full appearance-none bg-gray-300 cursor-pointer">
                </label>
            </div>
        </div>

        <!-- Language -->
        <div class="islamic-card">
            <h3 class="font-bold text-lg mb-4 text-gray-800">
                <i class="fas fa-globe text-secondary-main mr-2"></i>
                Language
            </h3>
            <select class="w-full p-3 border-2 border-gray-200 rounded-lg">
                <option value="en">English</option>
                <option value="ur">اردو (Urdu)</option>
                <option value="ar">العربية (Arabic)</option>
            </select>
        </div>

        <!-- Prayer Times Settings -->
        <div class="islamic-card">
            <h3 class="font-bold text-lg mb-4 text-gray-800">
                <i class="fas fa-mosque text-accent-gold mr-2"></i>
                Prayer Times
            </h3>
            <div class="space-y-3">
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Calculation Method</label>
                    <select class="w-full p-3 border-2 border-gray-200 rounded-lg">
                        <option>Islamic Society of North America (ISNA)</option>
                        <option>Muslim World League</option>
                        <option>Egyptian General Authority</option>
                        <option>Umm Al-Qura University, Makkah</option>
                        <option>University of Islamic Sciences, Karachi</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Juristic Method</label>
                    <select class="w-full p-3 border-2 border-gray-200 rounded-lg">
                        <option>Shafi, Maliki, Hanbali</option>
                        <option>Hanafi</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- App Settings -->
        <div class="islamic-card">
            <h3 class="font-bold text-lg mb-4 text-gray-800">
                <i class="fas fa-sliders-h text-primary-main mr-2"></i>
                App Settings
            </h3>
            <div class="space-y-3">
                <label class="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                    <span class="text-gray-700">Dark Mode</span>
                    <input type="checkbox" class="w-12 h-6 rounded-full appearance-none bg-gray-300 cursor-pointer">
                </label>
                <label class="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                    <span class="text-gray-700">Sound Effects</span>
                    <input type="checkbox" checked class="w-12 h-6 rounded-full appearance-none bg-primary-main cursor-pointer">
                </label>
                <label class="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                    <span class="text-gray-700">Haptic Feedback</span>
                    <input type="checkbox" checked class="w-12 h-6 rounded-full appearance-none bg-primary-main cursor-pointer">
                </label>
            </div>
        </div>

        <!-- Data & Privacy -->
        <div class="islamic-card">
            <h3 class="font-bold text-lg mb-4 text-gray-800">
                <i class="fas fa-shield-alt text-green-500 mr-2"></i>
                Data & Privacy
            </h3>
            <div class="space-y-2">
                <button class="w-full p-3 bg-gray-100 rounded-lg text-left hover:bg-gray-200">
                    <i class="fas fa-download mr-2"></i>
                    Export My Data
                </button>
                <button class="w-full p-3 bg-gray-100 rounded-lg text-left hover:bg-gray-200">
                    <i class="fas fa-trash mr-2"></i>
                    Clear Local Data
                </button>
            </div>
        </div>

        <!-- About -->
        <div class="islamic-card text-center">
            <h3 class="font-bold text-lg mb-2 text-gray-800">MuslimFit Pro</h3>
            <p class="text-sm text-gray-600 mb-4">Version 1.0.0</p>
            <p class="text-xs text-gray-500">Faith • Fitness • Wellness</p>
        </div>
    </div>
</div>
`,

// ==========================================
// HEALTH DASHBOARD PAGE
// ==========================================
health: `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-heartbeat"></i>
        <h1>Health Dashboard</h1>
        <p>Track all your wellness metrics</p>
    </div>

    <div class="max-w-4xl mx-auto space-y-6">
        <!-- Quick Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#step-counter" class="islamic-card text-center hover:shadow-lg transition-all">
                <i class="fas fa-walking text-4xl text-green-500 mb-2"></i>
                <div class="text-2xl font-bold text-gray-800">8,543</div>
                <p class="text-xs text-gray-600">Steps Today</p>
            </a>
            <a href="#water-tracker" class="islamic-card text-center hover:shadow-lg transition-all">
                <i class="fas fa-tint text-4xl text-blue-500 mb-2"></i>
                <div class="text-2xl font-bold text-gray-800">6/8</div>
                <p class="text-xs text-gray-600">Glasses</p>
            </a>
            <a href="#sleep-tracker" class="islamic-card text-center hover:shadow-lg transition-all">
                <i class="fas fa-bed text-4xl text-purple-500 mb-2"></i>
                <div class="text-2xl font-bold text-gray-800">7.5h</div>
                <p class="text-xs text-gray-600">Sleep</p>
            </a>
            <a href="#nutrition-tracker" class="islamic-card text-center hover:shadow-lg transition-all">
                <i class="fas fa-utensils text-4xl text-orange-500 mb-2"></i>
                <div class="text-2xl font-bold text-gray-800">1,450</div>
                <p class="text-xs text-gray-600">Calories</p>
            </a>
        </div>

        <!-- All Health Features -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <a href="#step-counter" class="feature-card">
                <div class="feature-icon" style="background: #E8F5E9;">
                    <i class="fas fa-walking" style="color: #4CAF50;"></i>
                </div>
                <h3 class="font-semibold text-gray-800">Step Counter</h3>
                <p class="text-xs text-gray-600">Daily steps tracking</p>
            </a>
            <a href="#water-tracker" class="feature-card">
                <div class="feature-icon" style="background: #E0F7FA;">
                    <i class="fas fa-tint" style="color: #00BCD4;"></i>
                </div>
                <h3 class="font-semibold text-gray-800">Water Tracker</h3>
                <p class="text-xs text-gray-600">Hydration monitoring</p>
            </a>
            <a href="#sleep-tracker" class="feature-card">
                <div class="feature-icon" style="background: #EDE7F6;">
                    <i class="fas fa-bed" style="color: #673AB7;"></i>
                </div>
                <h3 class="font-semibold text-gray-800">Sleep Tracker</h3>
                <p class="text-xs text-gray-600">Sleep quality</p>
            </a>
            <a href="#nutrition-tracker" class="feature-card">
                <div class="feature-icon" style="background: #FFF8E1;">
                    <i class="fas fa-utensils" style="color: #FFC107;"></i>
                </div>
                <h3 class="font-semibold text-gray-800">Nutrition</h3>
                <p class="text-xs text-gray-600">Meal tracking</p>
            </a>
            <a href="#challenges" class="feature-card">
                <div class="feature-icon" style="background: #E8F5E9;">
                    <i class="fas fa-trophy" style="color: #4CAF50;"></i>
                </div>
                <h3 class="font-semibold text-gray-800">Challenges</h3>
                <p class="text-xs text-gray-600">Daily goals</p>
            </a>
            <a href="#exercises" class="feature-card">
                <div class="feature-icon" style="background: #FFF3E0;">
                    <i class="fas fa-dumbbell" style="color: #FF9800;"></i>
                </div>
                <h3 class="font-semibold text-gray-800">Exercises</h3>
                <p class="text-xs text-gray-600">Workout guide</p>
            </a>
        </div>
    </div>
</div>
`,

// ==========================================
// MORE PAGE
// ==========================================
more: `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-th"></i>
        <h1>All Features</h1>
        <p>Explore everything MuslimFit Pro offers</p>
    </div>

    <div class="space-y-6">
        <!-- Islamic Content Section -->
        <div>
            <div class="section-header">
                <i class="fas fa-book-quran"></i>
                <h2>Islamic Content</h2>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <a href="#quran" class="feature-card">
                    <div class="feature-icon bg-primary-light">
                        <i class="fas fa-quran text-primary-main"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">Quran</h3>
                    <p class="text-xs text-gray-600">All 114 Surahs</p>
                </a>
                <a href="#hadith" class="feature-card">
                    <div class="feature-icon bg-secondary-light">
                        <i class="fas fa-book-open text-secondary-main"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">Hadith</h3>
                    <p class="text-xs text-gray-600">6 Major Books</p>
                </a>
                <a href="#duas" class="feature-card">
                    <div class="feature-icon bg-accent-gold-light">
                        <i class="fas fa-hands-praying text-accent-gold"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">Duas</h3>
                    <p class="text-xs text-gray-600">Daily Supplications</p>
                </a>
                <a href="#allah-names" class="feature-card">
                    <div class="feature-icon bg-primary-light">
                        <i class="fas fa-infinity text-primary-main"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">99 Names</h3>
                    <p class="text-xs text-gray-600">Names of Allah</p>
                </a>
                <a href="#kalmas" class="feature-card">
                    <div class="feature-icon bg-secondary-light">
                        <i class="fas fa-star-and-crescent text-secondary-main"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">6 Kalmas</h3>
                    <p class="text-xs text-gray-600">Declarations of Faith</p>
                </a>
                <a href="#pillars" class="feature-card">
                    <div class="feature-icon bg-accent-gold-light">
                        <i class="fas fa-columns text-accent-gold"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">5 Pillars</h3>
                    <p class="text-xs text-gray-600">Foundation of Islam</p>
                </a>
            </div>
        </div>

        <!-- Prayer & Worship Section -->
        <div>
            <div class="section-header">
                <i class="fas fa-mosque"></i>
                <h2>Prayer & Worship</h2>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <a href="#prayer-times" class="feature-card">
                    <div class="feature-icon bg-primary-light">
                        <i class="fas fa-clock text-primary-main"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">Prayer Times</h3>
                    <p class="text-xs text-gray-600">Daily Salah Times</p>
                </a>
                <a href="#qibla" class="feature-card">
                    <div class="feature-icon bg-secondary-light">
                        <i class="fas fa-compass text-secondary-main"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">Qibla Finder</h3>
                    <p class="text-xs text-gray-600">Direction to Ka'bah</p>
                </a>
                <a href="#namaz-guide" class="feature-card">
                    <div class="feature-icon bg-accent-gold-light">
                        <i class="fas fa-mosque text-accent-gold"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">Namaz Guide</h3>
                    <p class="text-xs text-gray-600">How to Pray</p>
                </a>
                <a href="#dhikr" class="feature-card">
                    <div class="feature-icon bg-primary-light">
                        <i class="fas fa-hand-sparkles text-primary-main"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">Dhikr Counter</h3>
                    <p class="text-xs text-gray-600">Digital Tasbih</p>
                </a>
            </div>
        </div>

        <!-- Fitness & Health -->
        <div>
            <div class="section-header">
                <i class="fas fa-heartbeat"></i>
                <h2>Fitness & Health</h2>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <a href="#challenges" class="feature-card">
                    <div class="feature-icon" style="background: #E8F5E9;">
                        <i class="fas fa-trophy" style="color: #4CAF50;"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">Challenges</h3>
                    <p class="text-xs text-gray-600">Daily & Weekly</p>
                </a>
                <a href="#exercises" class="feature-card">
                    <div class="feature-icon" style="background: #FFF3E0;">
                        <i class="fas fa-dumbbell" style="color: #FF9800;"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">Exercises</h3>
                    <p class="text-xs text-gray-600">Workout Guide</p>
                </a>
                <a href="#achievements" class="feature-card">
                    <div class="feature-icon" style="background: #F3E5F5;">
                        <i class="fas fa-award" style="color: #9C27B0;"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">Achievements</h3>
                    <p class="text-xs text-gray-600">Badges & Rewards</p>
                </a>
                <a href="#step-counter" class="feature-card">
                    <div class="feature-icon" style="background: #E3F2FD;">
                        <i class="fas fa-walking" style="color: #2196F3;"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">Step Counter</h3>
                    <p class="text-xs text-gray-600">Track Steps</p>
                </a>
                <a href="#water-tracker" class="feature-card">
                    <div class="feature-icon" style="background: #E0F7FA;">
                        <i class="fas fa-tint" style="color: #00BCD4;"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">Water Tracker</h3>
                    <p class="text-xs text-gray-600">Hydration</p>
                </a>
                <a href="#sleep-tracker" class="feature-card">
                    <div class="feature-icon" style="background: #EDE7F6;">
                        <i class="fas fa-bed" style="color: #673AB7;"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">Sleep Tracker</h3>
                    <p class="text-xs text-gray-600">Sleep Quality</p>
                </a>
                <a href="#nutrition-tracker" class="feature-card">
                    <div class="feature-icon" style="background: #FFF8E1;">
                        <i class="fas fa-utensils" style="color: #FFC107;"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">Nutrition</h3>
                    <p class="text-xs text-gray-600">Meal Tracking</p>
                </a>
            </div>
        </div>

        <!-- Pilgrimage Section -->
        <div>
            <div class="section-header">
                <i class="fas fa-kaaba"></i>
                <h2>Hajj & Umrah</h2>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <a href="#hajj-guide" class="feature-card">
                    <div class="feature-icon bg-primary-light">
                        <i class="fas fa-kaaba text-primary-main"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">Hajj Guide</h3>
                    <p class="text-xs text-gray-600">Complete Pilgrimage</p>
                </a>
                <a href="#umrah-guide" class="feature-card">
                    <div class="feature-icon bg-secondary-light">
                        <i class="fas fa-kaaba text-secondary-main"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">Umrah Guide</h3>
                    <p class="text-xs text-gray-600">Lesser Pilgrimage</p>
                </a>
            </div>
        </div>

        <!-- Ramadan & Charity Section -->
        <div>
            <div class="section-header">
                <i class="fas fa-hand-holding-heart"></i>
                <h2>Ramadan & Charity</h2>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <a href="#ramadan" class="feature-card">
                    <div class="feature-icon bg-primary-light">
                        <i class="fas fa-moon text-primary-main"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">Ramadan Tracker</h3>
                    <p class="text-xs text-gray-600">Track Your Fasting</p>
                </a>
                <a href="#zakat" class="feature-card">
                    <div class="feature-icon bg-secondary-light">
                        <i class="fas fa-hand-holding-heart text-secondary-main"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">Zakat Calculator</h3>
                    <p class="text-xs text-gray-600">Calculate Charity</p>
                </a>
            </div>
        </div>

        <!-- Account Section -->
        <div>
            <div class="section-header">
                <i class="fas fa-user"></i>
                <h2>Account</h2>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <a href="#profile" class="feature-card">
                    <div class="feature-icon bg-primary-light">
                        <i class="fas fa-user text-primary-main"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">Profile</h3>
                    <p class="text-xs text-gray-600">Your Stats</p>
                </a>
                <a href="#settings" class="feature-card">
                    <div class="feature-icon bg-secondary-light">
                        <i class="fas fa-cog text-secondary-main"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800">Settings</h3>
                    <p class="text-xs text-gray-600">Preferences</p>
                </a>
            </div>
        </div>
    </div>
</div>
`,

// ==========================================
// QURAN PLAYER / RECITER PAGE
// ==========================================
'quran-player': () => {
    const meta = window.DATA.quranMeta;
    const surahs = meta ? meta.surahs : window.DATA.surahs;
    const reciters = [
        {id:2,name:'Abdul Basit',server:'https://server7.mp3quran.net/basit/'},
        {id:221,name:'Raad Al Kurdi',server:'https://server6.mp3quran.net/kurdi/'},
        {id:3,name:'Mishary Alafasy',server:'https://server8.mp3quran.net/afs/'},
        {id:4,name:'Abdur-Rahman As-Sudais',server:'https://server11.mp3quran.net/sds/'},
        {id:5,name:'Mahmoud Al-Husary',server:'https://server13.mp3quran.net/husr/'},
        {id:6,name:'Al-Minshawi',server:'https://server10.mp3quran.net/minsh/'},
        {id:7,name:'Saud Al-Shuraim',server:'https://server12.mp3quran.net/shr/'},
        {id:8,name:'Saad Al-Ghamdi',server:'https://server7.mp3quran.net/s_gmd/'}
    ];
    return `
<div class="page-container fade-in">
    <div class="page-header">
        <i class="fas fa-headphones" style="color:#0D7C66;"></i>
        <h1 style="color:#1F2937;">Quran Player</h1>
        <p style="color:#6B7280;">Listen with ${reciters.length} reciters • 114 Surahs</p>
    </div>

    <!-- Player Card (hidden until surah selected) -->
    <div id="qp-player" class="hidden mb-6">
        <div class="player-card">
            <div class="flex items-center justify-between mb-3">
                <div>
                    <h3 class="font-bold text-lg" id="qp-surah-name">--</h3>
                    <p class="text-sm opacity-80" id="qp-reciter-name">--</p>
                </div>
                <button onclick="cyclePlaybackSpeed()" class="px-3 py-1 rounded-full text-sm font-bold" style="background:rgba(255,255,255,0.2);" id="qp-speed-btn">1.0x</button>
            </div>
            <div class="flex items-center gap-3 mb-3">
                <span class="text-xs opacity-80" id="qp-current-time">0:00</span>
                <input type="range" min="0" max="100" value="0" class="audio-progress flex-1" id="qp-progress" oninput="seekAudio(this.value)">
                <span class="text-xs opacity-80" id="qp-duration">0:00</span>
            </div>
            <div class="flex items-center justify-center gap-6">
                <button onclick="qpPrevSurah()" class="w-10 h-10 rounded-full flex items-center justify-center" style="background:rgba(255,255,255,0.15);">
                    <i class="fas fa-step-backward"></i>
                </button>
                <button onclick="togglePlayPause()" class="w-14 h-14 rounded-full flex items-center justify-center" style="background:rgba(255,255,255,0.25);" id="qp-play-btn">
                    <i class="fas fa-play text-xl" id="qp-play-icon"></i>
                </button>
                <button onclick="qpNextSurah()" class="w-10 h-10 rounded-full flex items-center justify-center" style="background:rgba(255,255,255,0.15);">
                    <i class="fas fa-step-forward"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- Reciters -->
    <div class="mb-6">
        <h3 class="font-bold mb-3" style="color:#1F2937;"><i class="fas fa-microphone mr-2" style="color:#D4AF37;"></i>Reciters (${reciters.length})</h3>
        <div class="flex gap-3 overflow-x-auto pb-2" style="-webkit-overflow-scrolling:touch;">
            ${reciters.map((r, i) => `
                <div class="reciter-card ${i === 0 ? 'active' : ''}" data-reciter-id="${r.id}" onclick="selectReciter(${i})">
                    <div class="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center" style="background:rgba(13,124,102,0.08);">
                        <i class="fas fa-user" style="color:#0D7C66;"></i>
                    </div>
                    <p class="text-xs font-semibold" style="color:#374151;line-height:1.2;">${r.name}</p>
                </div>
            `).join('')}
        </div>
    </div>

    <!-- Tabs -->
    <div class="flex gap-2 mb-4">
        <button onclick="switchQPTab('popular')" id="qp-tab-popular" class="category-btn active flex-1 text-center">Popular</button>
        <button onclick="switchQPTab('all')" id="qp-tab-all" class="category-btn flex-1 text-center">All Surahs (114)</button>
    </div>

    <!-- Popular Surahs -->
    <div id="qp-popular-list" class="space-y-3">
        ${[1,2,3,18,36,55,56,67,73,78,87,112,113,114].map(num => {
            const s = surahs.find(x => (x.number || x.num) === num);
            if (!s) return '';
            const name = s.transliteration || s.n;
            const ar = s.name || s.ar;
            const verses = s.verses || s.v;
            return `<div class="islamic-card cursor-pointer hover:shadow-lg transition-all" onclick="playQuranSurah(${num})">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background:rgba(212,175,55,0.1);"><span class="text-sm font-bold" style="color:#D4AF37;">${num}</span></div>
                        <div><p class="font-bold" style="color:#1F2937;">${name}</p><p class="text-xs" style="color:#6B7280;">${verses} verses</p></div>
                    </div>
                    <div class="flex items-center gap-3">
                        <p class="text-lg font-arabic" style="color:#0D7C66;">${ar}</p>
                        <i class="fas fa-play-circle text-lg" style="color:#0D7C66;"></i>
                    </div>
                </div>
            </div>`;
        }).join('')}
    </div>

    <!-- All Surahs -->
    <div id="qp-all-list" class="space-y-3 hidden">
        ${surahs.map(s => {
            const num = s.number || s.num;
            const name = s.transliteration || s.n;
            const ar = s.name || s.ar;
            const verses = s.verses || s.v;
            return `<div class="islamic-card cursor-pointer hover:shadow-lg transition-all" onclick="playQuranSurah(${num})">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background:rgba(212,175,55,0.1);"><span class="text-sm font-bold" style="color:#D4AF37;">${num}</span></div>
                        <div><p class="font-bold" style="color:#1F2937;">${name}</p><p class="text-xs" style="color:#6B7280;">${verses} verses</p></div>
                    </div>
                    <div class="flex items-center gap-3">
                        <p class="text-lg font-arabic" style="color:#0D7C66;">${ar}</p>
                        <i class="fas fa-play-circle text-lg" style="color:#0D7C66;"></i>
                    </div>
                </div>
            </div>`;
        }).join('')}
    </div>
</div>
`;
},

// ==========================================
// 99 NAMES OF PROPHET MUHAMMAD ﷺ
// ==========================================
'prophet-names': () => {
    const names = window.DATA.prophetNames || [];
    return `
<div class="page-container fade-in">
    <div class="page-header">
        <div class="text-center">
            <p class="text-2xl font-arabic mb-1" style="color:#0D7C66;line-height:2;">أَسْمَاءُ ٱلنَّبِيِّ مُحَمَّدٍ ﷺ</p>
            <h1 style="color:#1F2937;">Names of Prophet Muhammad ﷺ</h1>
            <p style="color:#6B7280;">${names.length} Beautiful Names • Peace Be Upon Him</p>
        </div>
    </div>

    <!-- Controls -->
    <div class="flex items-center justify-between mb-4">
        <button onclick="copyAllProphetNames()" class="px-4 py-2 rounded-lg text-sm font-semibold" style="background:#f3f4f6;color:#374151;">
            <i class="fas fa-copy mr-1"></i>Copy All
        </button>
        <div class="flex items-center gap-2">
            <button onclick="changeProphetFontSize(-2)" class="w-8 h-8 rounded-full flex items-center justify-center" style="background:#f3f4f6;">
                <i class="fas fa-minus text-xs" style="color:#6B7280;"></i>
            </button>
            <span class="text-sm font-semibold" style="color:#374151;" id="prophet-font-size">18</span>
            <button onclick="changeProphetFontSize(2)" class="w-8 h-8 rounded-full flex items-center justify-center" style="background:#f3f4f6;">
                <i class="fas fa-plus text-xs" style="color:#6B7280;"></i>
            </button>
        </div>
    </div>

    <!-- Search -->
    <div class="search-bar mb-4">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search names..." onkeyup="filterProphetNames(this.value)">
    </div>

    <!-- Names List -->
    <div class="space-y-4" id="prophet-names-list">
        ${names.map(name => `
            <div class="islamic-card prophet-name-card" data-search="${(name.transliteration + ' ' + name.english + ' ' + name.urdu + ' ' + name.arabic).toLowerCase()}">
                <div class="flex items-start justify-between mb-3">
                    <div class="w-9 h-9 rounded-full flex items-center justify-center" style="background:rgba(13,124,102,0.08);">
                        <span class="text-sm font-bold" style="color:#0D7C66;">${name.number}</span>
                    </div>
                    <div class="flex gap-1">
                        <button onclick="copyProphetName(${name.number})" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100" style="background:#f9fafb;">
                            <i class="fas fa-copy text-xs" style="color:#9CA3AF;"></i>
                        </button>
                        <button onclick="shareProphetName(${name.number})" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100" style="background:#f9fafb;">
                            <i class="fas fa-share-alt text-xs" style="color:#9CA3AF;"></i>
                        </button>
                    </div>
                </div>
                <p class="text-center font-arabic mb-2 prophet-arabic-name" style="direction:rtl;line-height:2;color:#D4AF37;font-size:22px;">${name.arabic}</p>
                <p class="text-center font-bold mb-1" style="color:#1F2937;">${name.transliteration}</p>
                <p class="text-center text-sm" style="color:#6B7280;">${name.english}</p>
                <p class="text-center text-sm font-urdu" style="color:#9CA3AF;direction:rtl;">${name.urdu}</p>
            </div>
        `).join('')}
    </div>
</div>
`;
},

};

// Export PAGES object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.PAGES;
}
