export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ: readonly FaqItem[] = [
  { question: 'Is it free?', answer: 'Yes. DoYouKnow is free during the beta. Paid plans are planned for later and will be announced before anything changes.' },
  { question: 'Is it iPhone only?', answer: 'The iPhone app is in beta on TestFlight. You can also play in your browser at app.playdoyouknow.com.' },
  { question: 'Is there an Android app?', answer: 'Not yet. For now, Android users can play in the mobile browser.' },
  { question: 'Who sees my answers?', answer: 'Only friends whose request you accepted, so they can guess and see the reveal. Your username and emoji avatar are visible to other signed-in players so friends can find you. No ads, no tracking.' },
  { question: 'How do I delete my account?', answer: 'In the app: Settings → Privacy & Account → Delete account. All your data is removed immediately and permanently.' },
  { question: 'Where is my data stored?', answer: 'In the EU: our database runs in Frankfurt, Germany.' },
  { question: 'How do I join the beta?', answer: 'Tap "Join the beta" to get the TestFlight invite. You need an iPhone with the free TestFlight app.' },
  { question: 'How old do I have to be?', answer: 'DoYouKnow is for people aged 16 and up.' },
];
