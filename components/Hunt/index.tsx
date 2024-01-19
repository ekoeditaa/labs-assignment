"use client";

import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import AssetDisplay from "../Asset";
import { VulnerabilityContext } from "@/contexts";

const HuntPage = ({
  vulnerabilities,
  tenants,
}: {
  vulnerabilities: Vulnerability[];
  tenants: Tenant[];
}) => {
  const [selectedTenant, setSelectedTenant] = useState<Tenant | null>(null);
  const [selectedVulnerability, setSelectedVulnerability] =
    useState<Vulnerability | null>(null);

  const handleTenantChange = (value: string) => {
    const tenant = tenants.find((tenant) => tenant.id === value)!;
    setSelectedTenant(tenant);
  };

  const handleVulnerabilityChange = (value: string) => {
    const vulnerability = vulnerabilities.find(
      (vulnerability) => vulnerability.name === value
    )!;
    setSelectedVulnerability(vulnerability);
  };

  return (
    <div className="p-20">
      <h2 className="text-3xl font-bold tracking-tight py-5">Assets Hunt</h2>
      <div className="p-2 flex flex-col gap-3">
        <Select onValueChange={handleVulnerabilityChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select a Vulnerability" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Vulnerabilities</SelectLabel>
              {vulnerabilities.map((vulnerability) => (
                <SelectItem key={vulnerability.name} value={vulnerability.name}>
                  {vulnerability.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select onValueChange={handleTenantChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select a Tenant" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Tenants</SelectLabel>
              {tenants.map((tenant) => (
                <SelectItem key={tenant.id} value={tenant.id}>
                  {tenant.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <VulnerabilityContext.Provider value={selectedVulnerability}>
          {selectedTenant && selectedVulnerability && (
            <div>
              <h3>Selected Tenant: {selectedTenant.name}</h3>
              <h3>Selected Vulnerability: {selectedVulnerability.name}</h3>
              {/* Render the data based on the selected tenant and vulnerability */}
              <div className="flex gap-4 p-4">
                {selectedTenant.assets.map((asset) => (
                  <AssetDisplay asset={asset} key={asset.id} />
                ))}
              </div>
            </div>
          )}
        </VulnerabilityContext.Provider>
      </div>
    </div>
  );
};

export default HuntPage;
