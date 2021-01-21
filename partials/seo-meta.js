import Head from "next/head";
const Meta = (props) => (
  <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.desc} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={props.title} />
    <meta
      name="og:description"
      property="og:description"
      content={props.desc}
    />
    <meta property="og:site_name" content="Jake Kile" />
    <meta property="og:url" content={`${props.canonical}`} />
    {/* <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.desc} />
    <meta name="twitter:site" content="@ProstructSolar" />
    <meta name="twitter:creator" content="@ProstructSolar" /> */}
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="assets/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="assets/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="assets/favicon-16x16.png"
    />

    {props.image ? (
      <meta property="og:image" content={`${props.image}`} />
    ) : (
      <meta property="og:image" content="./assets/hero-image" />
    )}
    {props.image && <meta name="twitter:image" content={`${props.image}`} />}
    {props.canonical && <link rel="canonical" href={`${props.canonical}`} />}
  </Head>
);
export default Meta;