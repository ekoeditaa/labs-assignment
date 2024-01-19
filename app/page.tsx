import { TenantSchema, VulnerabilitySchema } from "@/types/schema";
import fs from "fs";
import path from "path";
import { z } from "zod";
import HuntPage from "../components/Hunt";

// Simulate a database reads for the data
async function getTenants() {
  const data = fs.readFileSync(path.join(process.cwd(), "data/tenants.json"));

  const tenants = JSON.parse(data.toString());

  return z.array(TenantSchema).parse(tenants);
}

async function getVulnerabilities() {
  const data = fs.readFileSync(
    path.join(process.cwd(), "data/vulnerabilities.json")
  );

  const vulnerabilities = JSON.parse(data.toString());

  return z.array(VulnerabilitySchema).parse(vulnerabilities);
}

export default async function IndexPage() {
  const vulnerabilities = await getVulnerabilities();
  const tenants = await getTenants();

  return <HuntPage tenants={tenants} vulnerabilities={vulnerabilities} />;
}
