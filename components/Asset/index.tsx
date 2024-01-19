import { Asset } from "@/types/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AssetDisplay({ asset }: { asset: Asset }) {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>{asset.name}</CardTitle>
        <CardDescription>
          Subdomain: {asset.subdomain}
          <br />
          IP: {asset.ip}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-2">Technologies:</p>
        {asset.technologies.map((tech, index) => (
          <div
            key={index}
            className="mb-1 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
          >
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{tech.name}</p>
              <p className="text-sm text-muted-foreground">{tech.version}</p>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
