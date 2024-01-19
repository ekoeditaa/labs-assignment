interface Tenant {
  id: string;
  name: string;
  assets: Asset[];
}

interface Asset {
  id: string;
  name: string;
  version: string;
  subdomain: string;
  ip: string;
  port: number;
  technologies: Technology[];
}

interface Technology {
  name: string;
  version: string;
}

interface Vulnerability {
  name: string;
  affected_technologies: Technology[];
  hunts: Hunt[];
}

interface Technology {
  name: string;
  version: string;
}

interface Hunt {
  id: string;
  name: string;
  tenant_ids: string[];
}
