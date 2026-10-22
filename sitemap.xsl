<?xml version="1.0" encoding="UTF-8"?>
<!-- Renders sitemap.xml as a readable page in browsers. Search engines ignore this file and read the XML directly. -->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="sm">
<xsl:output method="html" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat"/>

<xsl:template match="/">
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta name="robots" content="noindex"/>
<title>XML Sitemap · Dylan Asdale</title>
<link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&amp;display=swap"/>
<link rel="stylesheet" href="/assets/site.css"/>
</head>
<body>
<div class="aurora" aria-hidden="true"></div>
<header class="wrap masthead">
  <nav class="topbar" aria-label="Main navigation">
    <a class="brand" href="/" aria-label="Dylan Asdale home"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5c.7 5.6 4.9 9.8 10.5 10.5-5.6.7-9.8 4.9-10.5 10.5C11.3 16.9 7.1 12.7 1.5 12 7.1 11.3 11.3 7.1 12 1.5Z" fill="#ff3fa4"/></svg><span>Dylan Asdale</span></a>
    <div class="top-nav"><a class="top-link" href="/books/">Books</a><a class="top-link" href="/guides/">Free Guides</a><a class="top-link" href="/aws-guides/">AWS Guides</a><a class="top-link" href="/projects/">Projects</a><a class="top-link" href="/connect/">Connect</a></div>
  </nav>
  <div class="hero page-hero">
    <div class="hero-copy">
      <p class="kicker">For search engines</p>
      <h1>XML <em>sitemap.</em></h1>
      <p class="lede">This file tells Google and other search engines about every page on the site. It lists <xsl:value-of select="count(sm:urlset/sm:url)"/> addresses. For a friendlier list, see the <a href="/sitemap/">sitemap page</a>.</p>
    </div>
  </div>
</header>
<main class="wrap" id="main">
  <section class="section site-map">
    <ul class="site-map-list">
      <xsl:for-each select="sm:urlset/sm:url">
        <xsl:variable name="path" select="substring-after(sm:loc, 'https://dylanasdale.github.io')"/>
        <li>
          <a href="{sm:loc}"><xsl:value-of select="$path"/></a>
          <span>Last updated <xsl:value-of select="sm:lastmod"/></span>
        </li>
      </xsl:for-each>
    </ul>
  </section>
</main>
<footer class="wrap foot">
  <p>© 2026 Dylan Asdale</p>
  <nav aria-label="Footer"><a href="/books/">Books</a><a href="/guides/">Free Guides</a><a href="/projects/">Projects</a><a href="/connect/">Connect</a></nav>
  <p class="foot-sitemap"><a href="/sitemap/">Sitemap</a></p>
</footer>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
