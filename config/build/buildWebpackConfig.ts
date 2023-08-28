import { getBuildLoaders } from "./buildLoaders";
import { getBuildPlugins } from "./buildPlugins";
import { getBuildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import { Configuration } from "webpack";
import { getBuildServer } from "./buildServer";

export const getBuildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: getBuildPlugins(options),
    module: {
      rules: getBuildLoaders(options),
    },
    resolve: getBuildResolvers(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? getBuildServer(options) : undefined,
  };
};
