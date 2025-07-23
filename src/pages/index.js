import Template001 from "@/components/template/001";
import Template002 from "@/components/template/002";

import Head from "next/head";

export default function Maintenance({ subdomain }) {
  const title = subdomain ? `${subdomain} - Maintenance Mode` : 'Maintenance Mode';

  if (subdomain === 'arief-nabilla') return <Template001 />
  if (subdomain === 'naufal-liza') return <Template002 />
  if (subdomain === 'iqbal-zahra') return <Template002 />

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Head>
        <title>{`Maintenance Mode`}</title>
        <title>{title}</title>
      </Head>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          {`We'll be back soon!`}
          {title}
        </h1>
        <p className="text-lg text-gray-600">
          {`Sorry for the inconvenience but we're performing some maintenance at
          the moment.`}
          {`If you need to, you can always `}
          <a
            href="https://wa.link/926698"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            {`contact us`}
          </a>
          {`, otherwise, we'll be back online shortly!`}
        </p>
        {subdomain && (
          <p className="mt-4 text-sm text-gray-500">
            Subdomain: {subdomain}
          </p>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const host = req.headers.host || '';

  // Extract subdomain from host
  const hostParts = host.split('.');
  let subdomain = null;

  // Check if we have a subdomain (more than 2 parts and not www)
  if (hostParts.length > 2 && hostParts[0] !== 'www') {
    subdomain = hostParts[0];
  }

  return {
    props: {
      subdomain,
    },
  };
}
