export async function getServerSideProps({ params }) {
  const { subdomain } = params;

  // For now, return mock data or redirect to main site
  // Remove the fetch call that was causing deployment errors
  
  const site = {
    title: `${subdomain} Wedding Site`,
    description: `Welcome to ${subdomain}'s wedding invitation`
  };
  
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
