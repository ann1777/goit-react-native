import { Arguments, Environment } from "@expo/webpack-config";
import createExpoWebpackConfigAsync from "@expo/webpack-config/webpack";

export default async function (env: Environment, argv: Arguments) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  return config;
}
