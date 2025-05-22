import React from "react";

const Pricing = () => {
  return (
    <section className="py-10 dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <span className="font-bold tracking-wider uppercase text-green-600 text-sm md:text-base">
            Our Services
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Choose the perfect plan for your plant care journey
          </h2>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 on md, 3 on lg */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Watering Reminders */}
          <div className="flex flex-col h-full p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
            <div className="space-y-2">
              <h4 className="text-xl sm:text-2xl font-bold">Watering Reminders</h4>
              <span className="text-4xl sm:text-5xl font-bold">Free</span>
            </div>
            <p className="leading-relaxed text-sm sm:text-base dark:text-gray-600">
              Get timely notifications to water your plants and keep them healthy.
            </p>
            <ul className="flex-1 space-y-2 text-sm sm:text-base dark:text-gray-600">
              <li>Custom watering schedule</li>
              <li>Plant-specific needs</li>
              <li>Daily or weekly alerts</li>
            </ul>
            <button
              type="button"
              className="mt-auto px-5 py-3 rounded font-bold text-emerald-900 bg-gradient-to-l from-lime-200 to-transparent text-sm sm:text-base"
            >
              Enable Reminder
            </button>
          </div>

          {/* Growth Tracker */}
          <div className="flex flex-col h-full p-6 space-y-6 rounded shadow sm:p-8 bg-gray-50 dark:text-black">
            <div className="space-y-2">
              <h4 className="text-xl sm:text-2xl font-bold">Growth Tracker</h4>
              <span className="text-4xl sm:text-5xl font-bold">
                $3
                <span className="text-sm tracking-wide">/month</span>
              </span>
            </div>
            <p className="leading-relaxed text-sm sm:text-base">
              Log your plant’s height, leaves, flowers, and progress with photos.
            </p>
            <ul className="flex-1 space-y-2 text-sm sm:text-base">
              <li>Weekly growth logging</li>
              <li>Photo uploads and comparison</li>
              <li>Track by plant name</li>
              <li>Export growth report</li>
            </ul>
            <a
              href="#"
              className="mt-auto px-5 py-3 rounded font-bold text-emerald-900 bg-gradient-to-l from-lime-200 to-transparent text-sm sm:text-base text-center"
            >
              Track Now
            </a>
          </div>

          {/* Plant Care Pro */}
          <div className="flex flex-col h-full p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
            <div className="space-y-2">
              <h4 className="text-xl sm:text-2xl font-bold">Plant Care Pro</h4>
              <span className="text-4xl sm:text-5xl font-bold">
                $7
                <span className="text-sm tracking-wide">/month</span>
              </span>
            </div>
            <p className="leading-relaxed text-sm sm:text-base dark:text-gray-600">
              Get expert tips, care guides, and disease detection with AI support.
            </p>
            <ul className="space-y-2 text-sm sm:text-base dark:text-gray-600">
              <li>AI plant health check</li>
              <li>Soil & fertilizer suggestions</li>
              <li>Custom sunlight tracker</li>
              <li>Care tips by species</li>
            </ul>
            <button
              type="button"
              className="mt-auto px-5 py-3 rounded font-bold text-emerald-900 bg-gradient-to-l from-lime-200 to-transparent text-sm sm:text-base"
            >
              Go Pro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
