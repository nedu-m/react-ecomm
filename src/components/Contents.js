export default function Content() {
  return (
    <div>
      <div className="flex flex-col px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:flex-row">
        <div className="mb-5 lg:w-1/3 lg:mb-0 lg:mr-20">
          <h2 className="relative mb-4 font-sans text-bold text-indigo-600 font-semibold tracking-wide uppercase">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Category</span>
            </span>{' '}
            For Everyone
          </h2>
          <p className="mb-4 text-2xl leading-relaxed font-medium lg:mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            laudantium, totam rem aperiam, eaque ipsa quae explicabo.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </a>
        </div>
        <div className="flex-grow pt-1">
          <div className="grid grid-cols-2 row-gap-6 sm:grid-cols-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Accessories
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Bags
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Hoodies & Sweatshirts
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Jackets
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Jeans
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Shirts
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Shorts
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Shoes & Boots
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Sunglass
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Swimwears
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Skirts
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Lingerie & Nightwear
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Socks & Tights
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Jumpsuits & Playsuits
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Tops
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Underwears
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};