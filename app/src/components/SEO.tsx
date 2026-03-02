import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://vantax.vantahire.com';

interface Breadcrumb {
  name: string;
  path: string;
}

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function SEO({ title, description, path, type = 'website', breadcrumbs }: SEOProps) {
  const url = `${BASE_URL}${path}`;

  const breadcrumbJsonLd = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: crumb.name,
          item: `${BASE_URL}${crumb.path}`,
        })),
      }
    : null;

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'VantaX',
      url: BASE_URL,
    },
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">{JSON.stringify(webPageJsonLd)}</script>
      {breadcrumbJsonLd && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      )}
    </Helmet>
  );
}
