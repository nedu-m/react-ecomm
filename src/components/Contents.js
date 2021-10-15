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
          <p className="mb-4 text-2xl leading-relaxed font-sans subpixel-antialiased lg:mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            laudantium, totam rem aperiam, eaque ipsa quae explicabo.
          </p>
        </div>
        <div className="flex-grow pt-1">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Accessories
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Bags
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Hoodies
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Jackets
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Jeans
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Shirts
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Shorts
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Shoes
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Tees
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Swimwears
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Skirts
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Lingerie
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-5 p-4 mx-auto md:grid-cols-4">
		        <img src="https://source.unsplash.com/302x302/?random" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-coolGray-500" />
		        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500" src="https://source.unsplash.com/200x200/?random" />
		        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500" src="https://source.unsplash.com/201x201/?random" />
		        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500" src="https://source.unsplash.com/202x202/?random" />
		        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500" src="https://source.unsplash.com/203x203/?random" />
		        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500" src="https://source.unsplash.com/204x204/?random" />
		        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500" src="https://source.unsplash.com/205x205/?random" />
		        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500" src="https://source.unsplash.com/206x206/?random" />
          	<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500" src="https://source.unsplash.com/207x207/?random" />
		        <img src="https://source.unsplash.com/302x302/?random" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-coolGray-500" />
	        </div>
      </div>
    </div>
  );
};