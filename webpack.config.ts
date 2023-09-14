import { Configuration } from "@expo/webpack-config";
import createExpoWebpackConfigAsync from "@expo/webpack-config/webpack";

export default async function (_, argv) {
  const config: Configuration = await createExpoWebpackConfigAsync(_, argv);
  return config;
}
