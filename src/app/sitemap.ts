import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  // Core Master Pages
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/technology`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/drivers/apply`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  // Core Commercial Service Routes (5)
  const serviceRoutes: MetadataRoute.Sitemap = siteConfig.services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Industry Sector Solutions Routes (6)
  const sectorRoutes: MetadataRoute.Sitemap = siteConfig.sectors.map((sector) => ({
    url: `${baseUrl}/industries/${sector.slug || sector.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // Editorial Intelligence Guides (2)
  const articleRoutes: MetadataRoute.Sitemap = (siteConfig.articles || []).map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: new Date(article.publishedDate),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...coreRoutes, ...serviceRoutes, ...sectorRoutes, ...articleRoutes];
}
