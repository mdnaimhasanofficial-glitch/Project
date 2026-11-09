
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Banner */}
      <section className="bg-linear-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left Content */}
          <div className="max-w-xl">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Welcome to Our Website
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
              Build Your Future With Modern Technology
            </h1>

            <p className="mt-6 text-gray-200 text-lg">
              Learn new skills, explore technology and create
              amazing things with us.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Get Started
              </button>

              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
              alt="Web Development"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

    </div>
  );
}
