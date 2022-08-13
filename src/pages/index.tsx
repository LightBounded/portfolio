import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-w-screen-lg">
      <Head>
        <title>Caleb Rivera</title>
        <meta
          name="description"
          content="UCF computer science student and web developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen flex-col justify-center px-8">
        <div className="mb-5 text-base">Hi. My name is</div>
        <div className="mb-3 text-4xl font-semibold md:text-5xl lg:text-6xl xl:text-7xl">
          Caleb Rivera.
        </div>
        <div className="mb-6 text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl">
          I&apos;m a Full-Stack Web Developer.
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="#projects">
            <a className="whitespace-nowrap border border-blue-200 bg-blue-200 px-6 py-3 font-bold text-gray-900 transition hover:bg-gray-900 hover:text-blue-200">
              Check Out My Projects
            </a>
          </Link>
          <Link href="resume.pdf">
            <a className="border border-blue-200 px-6 py-3 font-bold transition hover:bg-blue-200 hover:text-gray-900">
              View My Resume
            </a>
          </Link>
        </div>
      </div>
      <div className="mb-24 px-8">
        <div id="about" className="mb-8 pt-24 text-2xl font-bold">
          About Me
        </div>
        <div className="max-w-lg">
          <p className="mb-4">
            Hey there! My name is Caleb, and I&apos;m a Computer Science student
            at the University of Central Florida.
          </p>
          <p className="mb-4">
            I began my web development journey in 2020 during my junior year of
            high school, where I enrolled at a vocational college to study
            Database Application Development and Programming. Since then,
            I&apos;ve developed a great passion for building web applications
            using the latest tech.
          </p>
          <p className="mb-4">Here are some I&apos;ve been working with:</p>
          <ul className="grid grid-cols-2 whitespace-nowrap">
            <li className="list-inside list-disc">TypeScript</li>
            <li className="list-inside list-disc">NextJS</li>
            <li className="list-inside list-disc">tRPC</li>
            <li className="list-inside list-disc">SvelteKit</li>
            <li className="list-inside list-disc">Vue</li>
            <li className="list-inside list-disc">Express</li>
          </ul>
        </div>
      </div>
      <div className="mb-24 px-8">
        <div id="projects" className="mb-8 pt-24 text-2xl font-bold">
          Projects
        </div>
        <ul className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <li className="flex flex-col bg-gray-800 p-7 transition-transform hover:-translate-y-2">
            <Link href="https://github.com/LightBounded/astra">
              <a target="_blank">
                <div className="mb-4 text-lg font-bold">Astra</div>
                <p className="mb-6 text-sm">
                  A simple chat app built with Firebase where users must log in
                  with Google to access an online chatroom
                </p>
                <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-1.5 text-xs">
                  <li>React</li>
                  <li>Firebase</li>
                  <li>TailwindCSS</li>
                </ul>
              </a>
            </Link>
          </li>
          <li className="flex flex-col bg-gray-800 p-7 transition-transform hover:-translate-y-2">
            <Link href="https://github.com/LightBounded/vue-book-store-management-site">
              <a target="_blank">
                <div className="mb-4 text-lg font-bold">
                  Book Store Management Site
                </div>
                <p className="mb-6 text-sm">
                  A single page web app that utilizes an Express REST api to
                  handle CRUD operations and file uploads
                </p>
                <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-1.5 text-xs">
                  <li>Vue</li>
                  <li>Express</li>
                  <li>MySQL</li>
                  <li>TailwindCSS</li>
                </ul>
              </a>
            </Link>
          </li>
          <li className="flex flex-col bg-gray-800 p-7 transition-transform hover:-translate-y-2">
            <Link href="https://github.com/LightBounded/windows-forms-billing-system">
              <a target="_blank">
                <div className="mb-4 text-lg font-bold">Billing System</div>
                <p className="mb-6 text-sm">
                  A windows desktop app where users must log in to manage
                  orders, products, customers, and other users
                </p>
                <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-1.5 text-xs">
                  <li>Windows Forms</li>
                  <li>C#</li>
                  <li>.NET</li>
                  <li>MySQL</li>
                </ul>
              </a>
            </Link>
          </li>
          <li className="flex flex-col bg-gray-800 p-7 transition-transform hover:-translate-y-2">
            <Link href="https://github.com/LightBounded/sveltekit-clinic-management-site">
              <a target="_blank">
                <div className="mb-4 text-lg font-bold">
                  Clinic Management Site
                </div>
                <p className="mb-6 text-sm">
                  A CRUD app where users can manage patients, doctors,
                  appointments, and other users.
                </p>
                <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-1.5 text-xs">
                  <li>SvelteKit</li>
                  <li>MongoDB</li>
                  <li>TailwindCSS</li>
                </ul>
              </a>
            </Link>
          </li>
          <li className="flex flex-col bg-gray-800 p-7 transition-transform hover:-translate-y-2">
            <Link href="https://github.com/LightBounded/vanilla-ecommerce-site">
              <a target="_blank">
                <div className="mb-4 text-lg font-bold">E-Commerce Site</div>
                <p className="mb-6 text-sm">
                  An online shopping site where users can purchase art
                </p>
                <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-1.5 text-xs">
                  <li>HTML</li>
                  <li>Bootstrap</li>
                  <li>jQuery</li>
                </ul>
              </a>
            </Link>
          </li>
          <li className="flex flex-col bg-gray-800 p-7 transition-transform hover:-translate-y-2">
            <Link href="https://github.com/LightBounded/vue-computer-store-site">
              <a target="_blank">
                <div className="mb-4 text-lg font-bold">
                  Computer Store Management Site
                </div>
                <p className="mb-6 text-sm">
                  A CRUD app integrated with Supabase to manage various aspects
                  of a computer store, including orders, customers, and
                  employees.
                </p>
                <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-1.5 text-xs">
                  <li>Vue</li>
                  <li>Supabase</li>
                  <li>TailwindCSS</li>
                </ul>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto mb-48 max-w-2xl flex-col px-8">
        <div id="contact" className="mb-8 pt-24 text-center text-5xl font-bold">
          Contact
        </div>
        <p className="mb-12 text-center">
          I&apos;m always seeking for new ways to learn and grow as a developer,
          and the best way to get a hold of me is through my inbox. Whether you
          have a question or just want to stop by and say hello, I&apos;ll do my
          best to get back to you.
        </p>
        <Link href="mailto:calebrossr@gmail.com">
          <a className="mx-auto block w-max border border-blue-200 px-6 py-3 font-bold transition hover:bg-blue-200 hover:text-gray-900">
            Say Hi
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
