/**
 * MuslimFit Pro - Data Loader
 * Loads all data from JSON/TS files and stores in global DATA object
 */

// Global DATA object to store all loaded data
window.DATA = {
    surahs: [],
    hadithBooks: [],
    duas: [],
    allahNames: [],
    kalmas: [],
    hajj: null,
    umrah: null,
    namazSteps: [],
    pillarsOfIslam: [],
    azkar: null,
    dhikrList: [],
    dhikrCategories: [],
    quranMeta: null,
    prophetNames: [],
    loading: true,
    error: null
};

// Parse TypeScript export to extract data
function parseTypeScriptExport(content) {
    try {
        // Remove TypeScript constructs before parsing
        let cleaned = content
            .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
            .replace(/\/\/.*$/gm, '') // Remove line comments
            .replace(/^import\s+.*$/gm, '') // Remove import statements
            .replace(/export\s+interface\s+\w+\s*\{[^}]*\}/g, '') // Remove interface declarations
            .replace(/export\s+type\s+\w+\s*=[^;]+;/g, ''); // Remove type declarations

        // Extract the data array from export const VARIABLE: Type[] = [...]
        const match = cleaned.match(/export\s+const\s+\w+\s*(?::\s*\w+(?:\[\])?\s*)?=\s*(\[[\s\S]*\])/);
        if (match) {
            let jsonStr = match[1]
                .replace(/theme\.[a-zA-Z0-9_.]+/g, "'#0D7C66'") // Replace theme.colors refs before quote swap
                .replace(/,(\s*[\]}])/g, '$1') // Remove trailing commas
                .replace(/'/g, '"') // Replace single quotes with double quotes
                .replace(/(\{|,)\s*(\w+)\s*:/g, '$1"$2":') // Quote unquoted object keys
                .replace(/\?\s*:/g, '":') // Handle optional property markers like reference?:
                .replace(/""/g, '"'); // Fix any double-quoted keys
            return JSON.parse(jsonStr);
        }
        return null;
    } catch (error) {
        console.error('Error parsing TypeScript:', error);
        return null;
    }
}

// Load individual data file
async function loadDataFile(path, parser = 'json') {
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Failed to load ${path}`);

        const text = await response.text();

        if (parser === 'typescript') {
            return parseTypeScriptExport(text);
        } else {
            return JSON.parse(text);
        }
    } catch (error) {
        console.error(`Error loading ${path}:`, error);
        return null;
    }
}

// Fallback data in case loading fails
const FALLBACK_DATA = {
    surahs: [
        {num:1,n:'Al-Fatihah',ar:'الفاتحة',tr:'The Opening',v:7,r:'M'},
        {num:2,n:'Al-Baqarah',ar:'البقرة',tr:'The Cow',v:286,r:'D'},
        {num:3,n:'Ali Imran',ar:'آل عمران',tr:'Family of Imran',v:200,r:'D'},
    ],
    hadithBooks: [
        {id:1,bookName:"Sahih Bukhari",writerName:"Imam Bukhari",bookSlug:"sahih-bukhari",hadiths_count:"7276",chapters_count:"99"},
        {id:2,bookName:"Sahih Muslim",writerName:"Imam Muslim",bookSlug:"sahih-muslim",hadiths_count:"7564",chapters_count:"56"}
    ],
    duas: [
        {
            id: 'm1',
            title: 'Morning Dua',
            category: 'morning',
            arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ',
            transliteration: 'Aṣbaḥnā wa aṣbaḥa-l-mulku lillāh, wal-ḥamdu lillāh',
            translation: 'We have entered the morning and the kingdom belongs to Allah, and all praise is for Allah',
            reference: 'Muslim 2723',
            icon: 'weather-sunset-up',
            color: '#FDB022'
        }
    ],
    allahNames: [
        {number:1,arabic:"ٱلرَّحْمَـٰنُ",transliteration:"Ar-Rahman",english:"The Most Compassionate",urdu:"بے حد رحم کرنے والا"},
        {number:2,arabic:"ٱلرَّحِيمُ",transliteration:"Ar-Raheem",english:"The Most Merciful",urdu:"بہت مہربان"}
    ],
    kalmas: [
        {
            id: 1,
            name_en: "First Kalma - Tayyab",
            name_ur: "پہلا کلمہ - طیب",
            arabic: "لَا إِلٰهَ إِلَّا اللهُ مُحَمَّدٌ رَسُولُ اللهِ",
            transliteration: "La ilaha illallahu Muhammadur Rasulullah",
            translation_en: "There is no god but Allah, Muhammad is the Messenger of Allah.",
            translation_ur: "اللہ کے سوا کوئی معبود نہیں، محمد اللہ کے رسول ہیں۔"
        }
    ],
    namazSteps: [
        {step:1,title_en:"Intention (Niyyah)",title_ur:"نیت",description_en:"Make sincere intention in your heart to pray to Allah",arabic:"نَوَيْتُ أَنْ أُصَلِّيَ",transliteration:"Nawaitu an usalli"}
    ],
    pillarsOfIslam: [
        {
            id: 1,
            title_en: "Shahadah",
            title_ur: "شہادت",
            subtitle_en: "Declaration of Faith",
            arabic: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللّٰهِ",
            transliteration: "Ash-hadu an la ilaha illallah, wa ash-hadu anna Muhammadan rasoolullah",
            description_en: "The Shahadah is the first and most fundamental pillar of Islam."
        }
    ]
};

// Load all data files
async function loadAllData() {
    console.log('🔄 Loading data files...');

    try {
        // Load Surahs (JSON file)
        const surahsData = await loadDataFile('data/surahs.json');
        if (surahsData && Array.isArray(surahsData)) {
            window.DATA.surahs = surahsData;
            console.log('✅ Loaded', surahsData.length, 'surahs');
        } else {
            window.DATA.surahs = FALLBACK_DATA.surahs;
            console.log('⚠️ Using fallback surahs data');
        }

        // Load Hadith Books
        const hadithData = await loadDataFile('data/hadithBooks.json');
        if (hadithData && hadithData.books) {
            window.DATA.hadithBooks = hadithData.books;
            console.log('✅ Loaded', hadithData.books.length, 'hadith books');
        } else {
            window.DATA.hadithBooks = FALLBACK_DATA.hadithBooks;
            console.log('⚠️ Using fallback hadith data');
        }

        // Load Duas (JSON file)
        const duasData = await loadDataFile('data/duasData.json');
        if (duasData && Array.isArray(duasData)) {
            window.DATA.duas = duasData;
            console.log('✅ Loaded', duasData.length, 'duas');
        } else {
            window.DATA.duas = FALLBACK_DATA.duas;
            console.log('⚠️ Using fallback duas data');
        }

        // Load 99 Names of Allah
        const namesData = await loadDataFile('data/allahNames.json');
        if (namesData && Array.isArray(namesData)) {
            window.DATA.allahNames = namesData;
            console.log('✅ Loaded', namesData.length, 'names of Allah');
        } else {
            window.DATA.allahNames = FALLBACK_DATA.allahNames;
            console.log('⚠️ Using fallback Allah names data');
        }

        // Load Kalmas
        const kalmasData = await loadDataFile('data/kalmas_data.json');
        if (kalmasData && kalmasData.data) {
            window.DATA.kalmas = kalmasData.data;
            console.log('✅ Loaded', kalmasData.data.length, 'kalmas');
        } else {
            window.DATA.kalmas = FALLBACK_DATA.kalmas;
            console.log('⚠️ Using fallback kalmas data');
        }

        // Load Hajj & Umrah Guide
        const hajData = await loadDataFile('data/haj_data.json');
        if (hajData && hajData.data) {
            window.DATA.hajj = hajData.data.hajj_guide;
            window.DATA.umrah = hajData.data.umrah_guide;
            console.log('✅ Loaded Hajj & Umrah guide');
        } else {
            console.log('⚠️ Could not load Hajj/Umrah data');
        }

        // Load Namaz Steps
        const namazData = await loadDataFile('data/namazSteps.json');
        if (namazData && Array.isArray(namazData)) {
            window.DATA.namazSteps = namazData;
            console.log('✅ Loaded', namazData.length, 'namaz steps');
        } else {
            window.DATA.namazSteps = FALLBACK_DATA.namazSteps;
            console.log('⚠️ Using fallback namaz steps data');
        }

        // Load 5 Pillars of Islam
        const pillarsData = await loadDataFile('data/pillars_of_islam.json');
        if (pillarsData && Array.isArray(pillarsData)) {
            window.DATA.pillarsOfIslam = pillarsData;
            console.log('✅ Loaded', pillarsData.length, 'pillars of Islam');
        } else {
            window.DATA.pillarsOfIslam = FALLBACK_DATA.pillarsOfIslam;
            console.log('⚠️ Using fallback pillars data');
        }

        // Load Azkar Data
        const azkarData = await loadDataFile('data/azkar_data.json');
        if (azkarData && azkarData.data) {
            window.DATA.azkar = azkarData.data;
            console.log('✅ Loaded Azkar data');
        } else {
            console.log('⚠️ Could not load Azkar data');
        }

        // Load Dhikr List
        const dhikrData = await loadDataFile('data/dhikrList.json');
        if (dhikrData && dhikrData.dhikrList) {
            window.DATA.dhikrList = dhikrData.dhikrList;
            window.DATA.dhikrCategories = dhikrData.categories;
            console.log('✅ Loaded', dhikrData.dhikrList.length, 'dhikr presets');
        } else {
            console.log('⚠️ Could not load Dhikr list');
        }

        // Load Quran Meta (Surah names with Arabic harkat + Juz info)
        const quranMetaData = await loadDataFile('data/quranMeta.json');
        if (quranMetaData && quranMetaData.surahs) {
            window.DATA.quranMeta = quranMetaData;
            console.log('✅ Loaded Quran meta:', quranMetaData.surahs.length, 'surahs,', quranMetaData.juzInfo.length, 'juz');
        } else {
            console.log('⚠️ Could not load Quran meta');
        }

        // Load Prophet Names (99 Names of Muhammad ﷺ)
        const prophetNamesData = await loadDataFile('data/prophetNames.json');
        if (prophetNamesData && Array.isArray(prophetNamesData)) {
            window.DATA.prophetNames = prophetNamesData;
            console.log('✅ Loaded', prophetNamesData.length, 'names of Prophet Muhammad ﷺ');
        } else {
            console.log('⚠️ Could not load Prophet names');
        }

        window.DATA.loading = false;
        console.log('✅ All data loaded successfully!');

        // Dispatch event to notify app that data is ready
        window.dispatchEvent(new CustomEvent('dataLoaded'));

    } catch (error) {
        console.error('❌ Error loading data:', error);
        window.DATA.error = error.message;
        window.DATA.loading = false;

        // Use fallback data
        window.DATA.surahs = FALLBACK_DATA.surahs;
        window.DATA.hadithBooks = FALLBACK_DATA.hadithBooks;
        window.DATA.duas = FALLBACK_DATA.duas;
        window.DATA.allahNames = FALLBACK_DATA.allahNames;
        window.DATA.kalmas = FALLBACK_DATA.kalmas;
        window.DATA.namazSteps = FALLBACK_DATA.namazSteps;
        window.DATA.pillarsOfIslam = FALLBACK_DATA.pillarsOfIslam;

        window.dispatchEvent(new CustomEvent('dataLoaded'));
    }
}

// Helper function to get duas by category
window.getDuasByCategory = function(category) {
    return window.DATA.duas.filter(dua => dua.category === category);
};

// Helper function to get surah by number
window.getSurahByNumber = function(num) {
    return window.DATA.surahs.find(surah => surah.num === num);
};

// Helper function to get hadith book by slug
window.getHadithBookBySlug = function(slug) {
    return window.DATA.hadithBooks.find(book => book.bookSlug === slug);
};

// Start loading data when script loads
loadAllData();
