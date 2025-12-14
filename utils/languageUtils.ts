import { Language } from '../types';

export const getSpeechRecognitionLanguage = (lang: Language): string => {
  switch (lang) {
    // English
    case Language.ENGLISH_US: return 'en-US';
    case Language.ENGLISH_UK: return 'en-GB';
    case Language.ENGLISH_AU: return 'en-AU';
    case Language.ENGLISH_CA: return 'en-CA';
    case Language.ENGLISH_IN: return 'en-IN';
    case Language.ENGLISH_IE: return 'en-IE';
    case Language.ENGLISH_NZ: return 'en-NZ';
    case Language.ENGLISH_ZA: return 'en-ZA';

    // Spanish
    case Language.SPANISH_ES: return 'es-ES';
    case Language.SPANISH_MX: return 'es-MX';
    case Language.SPANISH_US: return 'es-US';
    case Language.SPANISH_AR: return 'es-AR';
    case Language.SPANISH_CO: return 'es-CO';
    case Language.SPANISH_CL: return 'es-CL';
    case Language.SPANISH_PE: return 'es-PE';

    // French
    case Language.FRENCH_FR: return 'fr-FR';
    case Language.FRENCH_CA: return 'fr-CA';
    case Language.FRENCH_CH: return 'fr-CH';
    case Language.FRENCH_BE: return 'fr-BE';

    // Portuguese
    case Language.PORTUGUESE_BR: return 'pt-BR';
    case Language.PORTUGUESE_PT: return 'pt-PT';

    // Chinese
    case Language.CHINESE_MANDARIN_SIMPLIFIED: return 'zh-CN';
    case Language.CHINESE_MANDARIN_TRADITIONAL: return 'zh-TW';
    case Language.CHINESE_CANTONESE: return 'zh-HK';

    // German
    case Language.GERMAN: return 'de-DE';
    case Language.GERMAN_AT: return 'de-AT';
    case Language.GERMAN_CH: return 'de-CH';

    // Italian
    case Language.ITALIAN: return 'it-IT';
    case Language.ITALIAN_CH: return 'it-CH';

    // Asian
    case Language.JAPANESE: return 'ja-JP';
    case Language.KOREAN: return 'ko-KR';
    case Language.THAI: return 'th-TH';
    case Language.VIETNAMESE: return 'vi-VN';
    case Language.INDONESIAN: return 'id-ID';
    case Language.MALAY: return 'ms-MY';
    case Language.TAGALOG: return 'fil-PH';
    case Language.CEBUANO: return 'ceb-PH';

    // Indic
    case Language.HINDI: return 'hi-IN';
    case Language.BENGALI: return 'bn-IN';
    case Language.TAMIL: return 'ta-IN';
    case Language.TELUGU: return 'te-IN';
    case Language.MARATHI: return 'mr-IN';
    case Language.GUJARATI: return 'gu-IN';
    case Language.KANNADA: return 'kn-IN';
    case Language.MALAYALAM: return 'ml-IN';
    case Language.PUNJABI: return 'pa-IN';
    case Language.URDU_IN: return 'ur-IN';
    case Language.URDU_PK: return 'ur-PK';

    // Middle Eastern
    case Language.ARABIC_SA: return 'ar-SA';
    case Language.ARABIC_AE: return 'ar-AE';
    case Language.ARABIC_EG: return 'ar-EG';
    case Language.ARABIC_QA: return 'ar-QA';
    case Language.ARABIC_KW: return 'ar-KW';
    case Language.ARABIC_IQ: return 'ar-IQ';
    case Language.ARABIC_JO: return 'ar-JO';
    case Language.ARABIC_LB: return 'ar-LB';
    case Language.TURKISH: return 'tr-TR';
    case Language.PERSIAN: return 'fa-IR';
    case Language.HEBREW: return 'he-IL';

    // European / Slavic / Nordic
    case Language.RUSSIAN: return 'ru-RU';
    case Language.POLISH: return 'pl-PL';
    case Language.UKRAINIAN: return 'uk-UA';
    case Language.CZECH: return 'cs-CZ';
    case Language.DUTCH: return 'nl-NL';
    case Language.DUTCH_BE: return 'nl-BE';
    case Language.SWEDISH: return 'sv-SE';
    case Language.NORWEGIAN: return 'no-NO';
    case Language.DANISH: return 'da-DK';
    case Language.FINNISH: return 'fi-FI';
    case Language.GREEK: return 'el-GR';
    case Language.HUNGARIAN: return 'hu-HU';
    case Language.ROMANIAN: return 'ro-RO';
    case Language.SLOVAK: return 'sk-SK';
    case Language.BULGARIAN: return 'bg-BG';
    case Language.CROATIAN: return 'hr-HR';
    case Language.SERBIAN: return 'sr-RS';

    // African
    case Language.SWAHILI: return 'sw-KE';
    case Language.AMHARIC: return 'am-ET';
    case Language.ZULU: return 'zu-ZA';

    default: return 'en-US';
  }
};