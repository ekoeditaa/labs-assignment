import { Asset, Technology } from "@/types/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useContext } from "react";
import { VulnerabilityContext } from "@/contexts";
import { Button } from "../ui/button";

type TechnologyWithAffectedProperties = Technology & {
  isAffected: boolean;
};

export default function AssetDisplay({ asset }: { asset: Asset }) {
  const selectedVulnerability = useContext(VulnerabilityContext);
  const affectedTechnologies = selectedVulnerability!.affected_technologies;

  const techWithAffectedProperties: TechnologyWithAffectedProperties[] =
    asset.technologies.map((technology) => {
      return {
        ...technology,
        isAffected: affectedTechnologies.some(
          (tech) =>
            tech.name === technology.name && tech.version === technology.version
        ),
      };
    });

  const isAssetAffected = techWithAffectedProperties.some(
    (tech) => tech.isAffected
  );

  const bgColor = isAssetAffected ? "bg-red-100" : "";

  return (
    <Card className={`w-80 ${bgColor}`}>
      <CardHeader>
        <CardTitle>{asset.name}</CardTitle>
        <CardDescription>
          Subdomain: {asset.subdomain}
          <br />
          IP: {asset.ip}
          <br />
          Port: {asset.port}
          <br />
          Version: {asset.version}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-2">Technologies:</p>
        {asset.technologies.map((tech, index) => (
          <div
            key={index}
            className={`mb-1 p-2 flex items-start rounded-sm last:mb-0 last:pb-0 ${
              techWithAffectedProperties[index].isAffected
                ? "bg-yellow-200"
                : ""
            }`}
          >
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500 mr-2" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {tech.name} {tech.version}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        {isAssetAffected && <Button>Add Asset to Hunt</Button>}
      </CardFooter>
    </Card>
  );
}
