import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-extrabold sm:text-6xl">
            Welcome to Our Platform
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            Discover amazing features that make your life easier
          </p>
          <div className="mt-6 space-x-4">
            <a
              href="#features"
              className="bg-secondary hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              Learn More
            </a>
            <a
              href="#"
              className="bg-white hover:bg-gray-100 text-primary px-6 py-3 rounded-lg font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Features
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Explore what makes our platform unique and powerful.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Feature One
              </h3>
              <p className="mt-2 text-gray-600">
                A brief description of Feature One.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Feature Two
              </h3>
              <p className="mt-2 text-gray-600">
                A brief description of Feature Two.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Feature Three
              </h3>
              <p className="mt-2 text-gray-600">
                A brief description of Feature Three.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            What Our Users Say
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Hear from some of our satisfied users.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600">
                This platform has completely changed the way I work!
              </p>
              <h4 className="mt-4 text-lg font-semibold text-gray-800">
                - User A
              </h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600">
                I love the simplicity and efficiency. Highly recommend!
              </p>
              <h4 className="mt-4 text-lg font-semibold text-gray-800">
                - User B
              </h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600">
                The best decision I made for my business. Amazing support!
              </p>
              <h4 className="mt-4 text-lg font-semibold text-gray-800">
                - User C
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-primary text-white py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
      <Link href="/product" scroll={true}>
        home
      </Link>
    </div>
  )
}
