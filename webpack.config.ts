import createExpoWebpackConfigAsync from '@expo/webpack-config';
import { Configuration } from 'webpack';

export default async function (_: any, argv: any): Promise<Configuration> {
  const config = await createExpoWebpackConfigAsync(_, argv);
  return config;
}
