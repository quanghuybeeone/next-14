'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function HomePage() {
  const t = useTranslations('HomePage');
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false, // Không dừng lại sau lần đầu tiên
    threshold: 0.1, // Bắt đầu khi 50% thẻ div xuất hiện trong viewport
  });

  // Khi inView thay đổi, đặt lại trạng thái đếm
  useEffect(() => {
    if (inView) {
      setStartCount(true);
    } else {
      setStartCount(false);
    }
  }, [inView]);
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1>{t("title")}</h1> */}
      <section
        className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Let us find your

              <strong className="block font-extrabold"> Forever Home. </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
              numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded-sm bg-black px-12 py-3 text-sm font-medium text-white shadow-sm  focus:ring-3 focus:outline-hidden sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded-sm bg-white px-12 py-3 text-sm font-medium text-black shadow-sm  focus:ring-3 focus:outline-hidden sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-foreground text-background p-8 md:p-12 lg:px-16 lg:py-24" data-aos="flip-right">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl font-bold md:text-3xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </h2>

                <p className="hidden sm:mt-4 sm:block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
                  sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
                  volutpat quisque ut interdum tincidunt duis.
                </p>

                <div className="mt-4 md:mt-8">
                  <a
                    href="#"
                    className="inline-block rounded-sm border bg-background text-foreground px-12 py-3 text-sm font-medium transition focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <Image
                data-aos="flip-left"
                alt=""
                width={100}
                height={100}
                src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />

              <Image
                data-aos="flip-left"
                alt=""
                width={100}
                height={100}
                src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="" data-aos="fade-up">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className="hidden text-gray-500 sm:mt-4 sm:block">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor officia blanditiis
              repellat in, vero, aperiam porro ipsum laboriosam consequuntur exercitationem incidunt
              tempora nisi?
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <form action="#" className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">Email</label>

                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-xs transition focus:border-white focus:ring-3 focus:ring-yellow-400 focus:outline-hidden border"
                />
              </div>

              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-foreground text-background px-5 py-3  transition focus:ring-3 focus:ring-yellow-400 focus:outline-hidden sm:mt-0 sm:w-auto"
              >
                <span className="text-sm font-medium"> Sign Up </span>

                <svg
                  className="size-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold  sm:text-4xl">Trusted by eCommerce Businesses</h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
            provident impedit esse recusandae facere libero harum sequi.
          </p>
        </div>
        <dl
          className="mg-6 grid grid-cols-1 gap-4 divide-y divide-gray-100 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
          ref={ref}
        >
          {startCount && (
            <>
              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">Total Sales</dt>

                <dd className="text-4xl font-extrabold md:text-5xl">$<CountUp
                  start={0}
                  end={4.8}
                  duration={1}
                  separator="."
                  decimals={0}
                  decimal=","
                ></CountUp>m</dd>
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">Official Addons</dt>

                <dd className="text-4xl font-extrabold md:text-5xl"><CountUp
                  start={0}
                  end={24}
                  duration={1}
                  separator="."
                  decimals={0}
                  decimal=","
                ></CountUp></dd>
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">Total Addons</dt>

                <dd className="text-4xl font-extrabold md:text-5xl"><CountUp
                  start={0}
                  end={86}
                  duration={1}
                  separator="."
                  decimals={0}
                  decimal=","
                ></CountUp></dd>
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">Downloads</dt>

                <dd className="text-4xl font-extrabold md:text-5xl"><CountUp
                  start={0}
                  end={86}
                  duration={1}
                  separator="."
                  decimals={0}
                  decimal=","
                ></CountUp>k</dd>
              </div>
            </>
          )}

        </dl>
      </div>
      <div className='h-[200px]'></div>
    </>
  );
}