// English version of src/data/privacyPolicy.ts in the DoYouKnow repo (branch ios-app).
// Keep content and date in sync with the app. If unsure, ask Moritz.
export const PRIVACY_CONTACT = {
  name: 'Moritz Götz',
  email: 'support@playdoyouknow.com',
  supabaseRegion: 'EU (Frankfurt, Germany)',
};

export const PRIVACY_POLICY_UPDATED = '28 September 2026';

export interface PrivacySection {
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
}

export const PRIVACY_POLICY: readonly PrivacySection[] = [
  {
    title: 'Controller',
    paragraphs: [`The controller for data processing in "Do You Know?" is ${PRIVACY_CONTACT.name}, reachable at ${PRIVACY_CONTACT.email}.`],
  },
  {
    title: 'What data we store',
    paragraphs: [],
    bullets: [
      'Account: email address and password (stored encrypted only), username, profile picture (emoji).',
      'Game: your answers to the daily cards with timestamp, your guesses about friends, which card you had on which day.',
      'Social: friendships and requests, favourites, people you blocked and reports you sent.',
      'Push: a device token, if you allow notifications.',
      'At sign-up: your confirmation that you are at least 16 years old and your consent to this policy (with timestamp).',
    ],
  },
  {
    title: 'Purpose and legal basis',
    paragraphs: [
      'We process this data to provide the game to you: account, daily cards, reveals, streaks and friends (Art. 6(1)(b) GDPR). ' +
        'We only send push notifications if you allow them (Art. 6(1)(a) GDPR); you can turn them off at any time in your device settings. ' +
        'We use reports and blocks to keep the app safe (Art. 6(1)(f) GDPR).',
    ],
  },
  {
    title: 'Who sees your data',
    paragraphs: [
      'Only people whose friend request you accepted (or who accepted yours) see your answers, so they can guess and see their reveal. ' +
        'Username and profile picture are visible to all signed-in users so people can find you as a friend. ' +
        'The person you block or report is not told. We do not sell data, show ads or use tracking.',
    ],
  },
  {
    title: 'Service providers',
    paragraphs: ['Transfers to the USA are based on the EU-US Data Privacy Framework or standard contractual clauses.'],
    bullets: [
      `Supabase (database, sign-in), server location: ${PRIVACY_CONTACT.supabaseRegion}.`,
      'Expo / 650 Industries, Inc. (USA) – forwards push notifications to Apple or Google; your device token is transmitted for this.',
      'GitHub, Inc. (USA) – hosts the web version; technically necessary server logs (e.g. IP address) are created.',
    ],
  },
  {
    title: 'Retention and deletion',
    paragraphs: [
      'We keep your data as long as your account exists. Under Settings → Privacy & Account → "Delete account" you can delete your account yourself at any time – ' +
        'all data listed above is then removed immediately and permanently.',
    ],
  },
  {
    title: 'Minimum age',
    paragraphs: ['The app is for ages 16 and up. At sign-up you confirm that you are at least 16.'],
  },
  {
    title: 'Your rights',
    paragraphs: [
      'You have the right to access, rectification, erasure, restriction of processing, data portability and objection, and to withdraw consent at any time. ' +
        `Write to ${PRIVACY_CONTACT.email}. You can also lodge a complaint with a data protection authority.`,
    ],
  },
];
