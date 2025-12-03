import React from 'react';

export const Privacy: React.FC = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
      <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 bg-[#050507]/50 backdrop-blur-2xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-slate-500 mb-10 font-mono text-sm border-b border-white/10 pb-6">LAST_UPDATED: {currentDate}</p>

        <div className="prose prose-invert prose-lg max-w-none text-slate-300">
          <p className="lead text-xl text-slate-200 font-light">
            Welcome to ProCal (“we”, “us”, “our”). ProCal is an AI-powered nutrition app that helps users estimate calories and macronutrients from food photos and log daily intake to meet personalized goals. This Privacy Policy explains what data we collect, why we collect it, how we use it, and your rights.
          </p>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">1. Information We Collect</h3>
          <p>We collect the following categories of information for the purposes described below:</p>

          <h4 className="text-teal-400 font-medium mt-8 mb-4 uppercase tracking-wider text-sm">A. Personal Information (Optional/When Provided)</h4>
          <ul className="list-disc pl-6 space-y-2 marker:text-teal-500 text-slate-400">
            <li>Name (optional)</li>
            <li>Email address (if you create an account or subscribe)</li>
            <li>Profile information such as age and gender</li>
          </ul>

          <h4 className="text-teal-400 font-medium mt-8 mb-4 uppercase tracking-wider text-sm">B. Health & Fitness Data (Required for app features)</h4>
          <ul className="list-disc pl-6 space-y-2 marker:text-teal-500 text-slate-400">
            <li>Height</li>
            <li>Weight</li>
            <li>Activity level</li>
            <li>Fitness goals (e.g., lose/maintain/gain weight)</li>
            <li>Daily nutrition logs (calories, protein, carbs, fats)</li>
          </ul>

          <h4 className="text-teal-400 font-medium mt-8 mb-4 uppercase tracking-wider text-sm">C. Photos & Image Data</h4>
          <ul className="list-disc pl-6 space-y-2 marker:text-teal-500 text-slate-400">
            <li>Food photos uploaded by users for AI analysis.</li>
            <li>Photos are used to identify foods, estimate portion sizes and calculate macronutrients.</li>
            <li>Photos are deleted after processing unless you explicitly save them in your account (app behaviour described here — update according to your implementation).</li>
          </ul>

          <h4 className="text-teal-400 font-medium mt-8 mb-4 uppercase tracking-wider text-sm">D. Device & App Data</h4>
          <ul className="list-disc pl-6 space-y-2 marker:text-teal-500 text-slate-400">
            <li>App usage logs (meals logged, timestamps)</li>
            <li>Device type and operating system version (for analytics and debugging)</li>
            <li>Crash reports (if you enable crash reporting)</li>
          </ul>

          <h4 className="text-teal-400 font-medium mt-8 mb-4 uppercase tracking-wider text-sm">E. Cookies and Tracking</h4>
          <ul className="list-disc pl-6 space-y-2 marker:text-teal-500 text-slate-400">
            <li>We may use cookies or local storage for session management, preferences, and to provide a better user experience. We do not use cookies to collect sensitive health data.</li>
          </ul>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">2. How We Use the Data</h3>
          <p>We use your data to:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-teal-500 text-slate-400">
            <li>Provide the AI food recognition and calorie/macro estimation features.</li>
            <li>Calculate personalized daily calorie and protein targets.</li>
            <li>Save and display your meal logs and progress.</li>
            <li>Improve app features and AI models (aggregate and de-identified).</li>
            <li>Communicate with you about your account and app updates (if you opt in).</li>
          </ul>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">3. Data Sharing and Third Parties</h3>
          <p>We do NOT sell your personal data. We may share data under the following limited circumstances:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-teal-500 text-slate-400">
            <li><strong>Service providers:</strong> We may use third-party service providers to host data, analyze images, or provide analytics (e.g., cloud providers or AI APIs). These providers are bound by contract to protect your data.</li>
            <li><strong>Legal requirements:</strong> We may disclose data to comply with applicable law or protect our rights.</li>
            <li><strong>Aggregated/De-identified data:</strong> We may share anonymized aggregate data that cannot identify you.</li>
          </ul>
          <div className="mt-6 text-slate-400 text-sm p-6 bg-white/5 rounded-2xl border border-white/5">
            If we use any third-party AI/image recognition APIs that retain images or metadata, we will list them here and in-app (and obtain consent if required). If you want to avoid any third-party processing, use local-only mode (if available).
          </div>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">4. Data Retention</h3>
          <ul className="list-disc pl-6 space-y-2 marker:text-teal-500 text-slate-400">
            <li>Health, profile, and log data are retained until you delete your account or request deletion.</li>
            <li>Uploaded photos: retained temporarily for processing and then removed unless you elect to keep them. (If you plan to keep them, state how long.)</li>
          </ul>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">5. Security</h3>
          <p>We take reasonable measures to protect data in transit (HTTPS) and at rest. However, no method of transmission or storage is 100% secure. Report suspected breaches to: parthanand67@gmail.com</p>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">6. Your Rights</h3>
          <p>Depending on your jurisdiction, you may have rights to:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-teal-500 text-slate-400">
            <li>Access or request a copy of your personal data.</li>
            <li>Correct inaccurate data.</li>
            <li>Request deletion (“right to be forgotten”).</li>
            <li>Object to or restrict processing.</li>
          </ul>
          <p className="mt-4 text-slate-400">To exercise any rights, contact us at: parthanand67@gmail.com. We will respond within a reasonable time as required by law.</p>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">7. Children</h3>
          <p>ProCal is not intended for children under 13 (or applicable age in your country). We do not knowingly collect data from children. If we learn we collected data from a child without parental consent, we will delete it.</p>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">8. International Transfers</h3>
          <p>Data may be transferred & stored outside your country. By using the app you consent to this transfer. We implement safeguards required by law.</p>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">9. Changes to This Policy</h3>
          <p>We may update this Privacy Policy. We will post the date of last update at the top of the policy. Significant changes will be communicated via the app or email (if you provided it).</p>

          <h3 className="text-white mt-12 mb-6 text-2xl font-semibold">10. Contact Us</h3>
          <div className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-2xl border border-white/10 mt-6">
            <p className="mb-2">If you have questions or requests about this policy, contact:</p>
            <p className="text-xl font-bold text-white mt-4">ProCal</p>
            <p className="mt-1">Email: <span className="text-teal-400 font-mono">parthanand67@gmail.com</span></p>
            <p className="mt-1">Website: <span className="text-teal-400 font-mono">https://primestudios.co.in/</span></p>
          </div>
          <p className="mt-10 text-sm text-slate-500 border-t border-white/5 pt-6">By using ProCal, you agree to the terms of this Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};