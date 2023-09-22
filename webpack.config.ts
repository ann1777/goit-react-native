import { Configuration } from "webpack";

export default async function (_: any, argv: any): Promise<Configuration> {
  const createExpoWebpackConfigAsync: any = require("@expo/webpack-config");
  const config = await createExpoWebpackConfigAsync(_, argv);
  return config;
}
