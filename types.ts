export enum Language {
  // English Variants
  ENGLISH_US = 'English (US)',
  ENGLISH_UK = 'English (UK)',
  ENGLISH_AU = 'English (Australia)',
  ENGLISH_CA = 'English (Canada)',
  ENGLISH_IN = 'English (India)',
  ENGLISH_IE = 'English (Ireland)',
  ENGLISH_NZ = 'English (New Zealand)',
  ENGLISH_ZA = 'English (South Africa)',

  // Spanish Variants
  SPANISH_ES = 'Spanish (Spain)',
  SPANISH_MX = 'Spanish (Mexico)',
  SPANISH_US = 'Spanish (US)',
  SPANISH_AR = 'Spanish (Argentina)',
  SPANISH_CO = 'Spanish (Colombia)',
  SPANISH_CL = 'Spanish (Chile)',
  SPANISH_PE = 'Spanish (Peru)',

  // French Variants
  FRENCH_FR = 'French (France)',
  FRENCH_CA = 'French (Canada)',
  FRENCH_CH = 'French (Switzerland)',
  FRENCH_BE = 'French (Belgium)',

  // Portuguese Variants
  PORTUGUESE_BR = 'Portuguese (Brazil)',
  PORTUGUESE_PT = 'Portuguese (Portugal)',

  // Chinese Variants
  CHINESE_MANDARIN_SIMPLIFIED = 'Chinese (Mandarin, Simplified)',
  CHINESE_MANDARIN_TRADITIONAL = 'Chinese (Mandarin, Traditional)',
  CHINESE_CANTONESE = 'Chinese (Cantonese)',

  // German Variants
  GERMAN = 'German (Germany)',
  GERMAN_AT = 'German (Austria)',
  GERMAN_CH = 'German (Switzerland)',

  // Italian
  ITALIAN = 'Italian',
  ITALIAN_CH = 'Italian (Switzerland)',

  // Asian
  JAPANESE = 'Japanese',
  KOREAN = 'Korean',
  THAI = 'Thai',
  VIETNAMESE = 'Vietnamese',
  INDONESIAN = 'Indonesian',
  MALAY = 'Malay',
  TAGALOG = 'Tagalog (Filipino)',
  CEBUANO = 'Cebuano',

  // Indic
  HINDI = 'Hindi',
  BENGALI = 'Bengali',
  TAMIL = 'Tamil',
  TELUGU = 'Telugu',
  MARATHI = 'Marathi',
  GUJARATI = 'Gujarati',
  KANNADA = 'Kannada',
  MALAYALAM = 'Malayalam',
  PUNJABI = 'Punjabi',
  URDU_IN = 'Urdu (India)',
  URDU_PK = 'Urdu (Pakistan)',

  // Middle Eastern
  ARABIC_SA = 'Arabic (Saudi Arabia)',
  ARABIC_AE = 'Arabic (UAE)',
  ARABIC_EG = 'Arabic (Egypt)',
  ARABIC_QA = 'Arabic (Qatar)',
  ARABIC_KW = 'Arabic (Kuwait)',
  ARABIC_IQ = 'Arabic (Iraq)',
  ARABIC_JO = 'Arabic (Jordan)',
  ARABIC_LB = 'Arabic (Lebanon)',
  TURKISH = 'Turkish',
  PERSIAN = 'Persian (Farsi)',
  HEBREW = 'Hebrew',

  // European / Slavic / Nordic
  RUSSIAN = 'Russian',
  POLISH = 'Polish',
  UKRAINIAN = 'Ukrainian',
  CZECH = 'Czech',
  DUTCH = 'Dutch',
  DUTCH_BE = 'Dutch (Belgium)',
  SWEDISH = 'Swedish',
  NORWEGIAN = 'Norwegian',
  DANISH = 'Danish',
  FINNISH = 'Finnish',
  GREEK = 'Greek',
  HUNGARIAN = 'Hungarian',
  ROMANIAN = 'Romanian',
  SLOVAK = 'Slovak',
  BULGARIAN = 'Bulgarian',
  CROATIAN = 'Croatian',
  SERBIAN = 'Serbian',

  // African
  SWAHILI = 'Swahili',
  AMHARIC = 'Amharic',
  ZULU = 'Zulu'
}

export type MessageStatus = 'sending' | 'sent' | 'delivered' | 'read';

export interface User {
  id: string;
  name: string;
  avatar: string; // Emoji or URL
  language: Language;
  voice?: string; // TTS Voice Name (e.g. Fenrir, Kore)
}

export interface ChatMessage {
  id: string;
  senderId: string; // User ID
  senderName: string;
  text: string;
  translatedText?: string; // Localized for the viewer
  timestamp: number;
  status: MessageStatus;
  isDirect?: boolean; // If true, bypass translation
}

export interface Group {
  id: string;
  name: string;
  members: User[]; // Includes the local user
  messages: ChatMessage[];
  lastActive: number;
}

export interface VoiceTrainingData {
  id?: string;
  user_id: string;
  original_text: string;
  audio_url?: string;
  created_at?: string;
  style_tag?: 'singing' | 'rapping' | 'speaking';
}