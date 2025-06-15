export async function getServerSideProps({ params }) {
  const { subdomain } = params;

  const res = await fetch(`https://your-api.com/sites/${subdomain}`);
  if (!res.ok) return { notFound: true };

  const site = await res.json();
  return { props: { site } };
}

export default function SubdomainSite({ site }) {
  return (
    <div>
      <h1>{site.title}</h1>
      <p>{site.description}</p>
    </div>
  );
}
