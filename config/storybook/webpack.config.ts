import path from 'path';
import { BuildPaths } from '../build/types/config';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  if (config.module?.rules) {
    config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });
  }

  config.module?.rules?.push(buildCssLoaders(true));
  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.plugins?.push(new DefinePlugin({ _IS_DEV_: true }));

  return config;
};
