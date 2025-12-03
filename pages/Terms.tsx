import React from 'react';

export const Terms: React.FC = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
      <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 bg-[#050507]/50 backdrop-blur-2xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Terms & Conditions</h1>
        <p className="text-slate-500 mb-10 font-mono text-sm border-b border-white/10 pb-6">LAST_UPDATED: {currentDate}</p>

        <div className="prose prose-invert prose-lg max-w-none text-slate-300">
          <p className="lead text-xl text-slate-200 font-light">
            Please read these Terms and Conditions (“Terms”) carefully before using the ProCal application (the “Service”) operated by ProCal (“we”, “us”, or “our”).
          </p>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">1. Acceptance of Terms</h3>
          <p>By using or accessing the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.</p>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">2. Eligibility</h3>
          <p>You must be at least 13 years old (or the minimum age in your jurisdiction) to use the Service. By using the Service, you represent that you meet the eligibility requirements.</p>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">3. Accounts</h3>
          <ul className="list-disc pl-6 space-y-2 marker:text-blue-500 text-slate-400">
            <li>You may use the Service without creating an account (local-only mode). Creating an account allows data sync and backup.</li>
            <li>You are responsible for safeguarding your account credentials.</li>
            <li>We may suspend or terminate accounts that violate these Terms.</li>
          </ul>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">4. Use of the Service</h3>
          <ul className="list-disc pl-6 space-y-2 marker:text-blue-500 text-slate-400">
            <li>ProCal provides tools for estimating calories and macronutrients from food photos and for tracking nutrition.</li>
            <li>Information provided by the Service is for informational purposes only and is not medical advice. Always consult a qualified health professional before making changes that affect your health.</li>
          </ul>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">5. User Content</h3>
          <ul className="list-disc pl-6 space-y-2 marker:text-blue-500 text-slate-400">
            <li>You retain ownership of the content you upload (e.g., food photos). By uploading content you grant ProCal a non-exclusive, worldwide, royalty-free license to use the content to provide the Service, improve the AI, and for aggregated analytics.</li>
            <li>You are responsible for the content you upload and must not upload illegal or infringing material.</li>
          </ul>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">6. Payments, Subscriptions & Refunds</h3>
          <ul className="list-disc pl-6 space-y-2 marker:text-blue-500 text-slate-400">
            <li>Currently, the Service is provided free of charge. If in the future we introduce paid features, they will be governed by additional terms and a refund policy that will be provided at purchase.</li>
          </ul>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">7. Privacy</h3>
          <p>Your privacy is important. Our Privacy Policy explains how we collect and use data. By using the Service, you agree to the Privacy Policy.</p>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">8. Intellectual Property</h3>
          <ul className="list-disc pl-6 space-y-2 marker:text-blue-500 text-slate-400">
            <li>All intellectual property related to the Service (excluding user content) is owned by ProCal or its licensors.</li>
            <li>You may not copy, modify, distribute, sell, or lease any part of our intellectual property.</li>
          </ul>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">9. Disclaimers</h3>
          <ul className="list-disc pl-6 space-y-2 marker:text-blue-500 text-slate-400">
            <li>THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND.</li>
            <li>WE DO NOT WARRANT THAT THE SERVICE IS ERROR-FREE OR SECURE.</li>
            <li>Nutrition estimates are approximate. We disclaim liability for decisions you make based on app content.</li>
          </ul>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">10. Limitation of Liability</h3>
          <ul className="list-disc pl-6 space-y-2 marker:text-blue-500 text-slate-400">
            <li>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL PROCAL BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE SERVICE.</li>
            <li>OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU HAVE PAID US IN THE PAST 12 MONTHS (IF ANY).</li>
          </ul>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">11. Indemnification</h3>
          <p>You agree to indemnify and hold ProCal harmless from claims arising from your use of the Service or violation of these Terms.</p>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">12. Termination</h3>
          <p>We may suspend or terminate your access for any reason, including violation of these Terms. You may delete your account at any time. Upon termination we will delete or anonymize your data as described in the Privacy Policy.</p>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">13. Governing Law and Dispute Resolution</h3>
          <p>These Terms are governed by the laws of [Your Country/State — insert jurisdiction]. Disputes will be resolved in the courts located in [City, State/Country], unless otherwise required by law.</p>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">14. Changes to Terms</h3>
          <p>We may modify these Terms. We will post the revised Terms on this page with the “Last updated” date. Continued use after changes constitutes acceptance.</p>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">15. Contact</h3>
          <div className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-2xl border border-white/10 mt-6">
            <p className="mb-2">If you have questions about these Terms, contact:</p>
            <p className="text-xl font-bold text-white mt-4">ProCal</p>
            <p className="mt-1">Email: <span className="text-blue-400 font-mono">parthanand67@gmail.com</span></p>
            <p className="mt-1">Website: <span className="text-blue-400 font-mono">https://primestudios.co.in/</span></p>
          </div>
          <p className="mt-10 text-sm text-slate-500 border-t border-white/5 pt-6">Thank you for using ProCal.</p>
        </div>
      </div>
    </div>
  );
};