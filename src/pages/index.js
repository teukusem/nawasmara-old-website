import Head from "next/head";

export default function Maintenance() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Head>
        <title>Maintenance Mode</title>
      </Head>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          We'll be back soon!
        </h1>
        <p className="text-lg text-gray-600">
          Sorry for the inconvenience but we're performing some maintenance at
          the moment.
          <br />
          If you need to, you can always{" "}
          <a
            href="https://wa.link/926698"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            contact us
          </a>
          , otherwise, we'll be back online shortly!
        </p>
      </div>
    </div>
  );
}
