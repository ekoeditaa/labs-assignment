import { z } from "zod";

const TechnologySchema = z.object({
  name: z.string(),
  version: z.string(),
});

const AssetSchema = z.object({
  id: z.string(),
  name: z.string(),
  version: z.string(),
  subdomain: z.string(),
  ip: z.string(),
  port: z.number(),
  technologies: z.array(TechnologySchema),
});

const TenantSchema = z.object({
  id: z.string(),
  name: z.string(),
  assets: z.array(AssetSchema),
});

const HuntSchema = z.object({
  id: z.string(),
  name: z.string(),
  tenant_ids: z.array(z.string()),
});

const VulnerabilitySchema = z.object({
  name: z.string(),
  affected_technologies: z.array(TechnologySchema),
  hunts: z.array(HuntSchema),
});

export type Tenant = z.infer<typeof TenantSchema>;
export type Asset = z.infer<typeof AssetSchema>;
export type Technology = z.infer<typeof TechnologySchema>;
export type Vulnerability = z.infer<typeof VulnerabilitySchema>;
export type Hunt = z.infer<typeof HuntSchema>;

export {
  TenantSchema,
  AssetSchema,
  TechnologySchema,
  VulnerabilitySchema,
  HuntSchema,
};
