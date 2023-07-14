import { Server, ServerIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge, BadgeProps } from "@/components/ui/badge";

interface APIAlertProps {
  title: string;
  description: string;
  variant: "public" | "admin";
}

const textMap: Record<APIAlertProps["variant"], string> = {
  public: "Public",
  admin: "Admin",
};

const variantMap: Record<APIAlertProps["variant"], BadgeProps["variant"]> = {
  public: "secondary",
  admin: "destructive",
};

export const APIAlert: React.FC<APIAlertProps> = ({
  title,
  description,
  variant = "public",
}) => {
  return (
    <Alert className="flex">
      <div className="h-4 w-4">
        <Server className="h-4 w-4" />
      </div>
      <div>
        <AlertTitle className="flex items-center gap-x-2">
          {title}
          <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
        </AlertTitle>
        <AlertDescription>
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            {description}
          </code>
        </AlertDescription>
      </div>
    </Alert>
  );
};