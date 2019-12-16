import { ServiceConfigurationOptions } from "aws-sdk/lib/service";

function awsConfig(
  options: ServiceConfigurationOptions
): ServiceConfigurationOptions;

declare module 'aws-config' {
  export = awsConfig;
}
