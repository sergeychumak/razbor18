module.exports = {
  dev: {
    mode: 'development',
    devTools: 'source-map',
    isMinificationJS: false,
    isPerformanceTip: true,
    isExtractCSS: false,
    isSourceMapCSS: true,
    isESLintCheck: true,
    isStyleLintCheck: true,
    isImageOptimize: false,
    env: {
      'process.env.NODE_ENV': '"development"',
      'process.env.NODE_MODE': '"local"',
      'process.env.NODE_SERVER': '"dev"',
      'process.env.NODE_API_MODE': '"api"'
    }
  },
  prod: {
    mode: 'production',
    devTools: false,
    isMinificationJS: true,
    isPerformanceTip: false,
    isExtractCSS: true,
    isSourceMapCSS: false,
    isESLintCheck: false,
    isStyleLintCheck: false,
    isImageOptimize: true,
    env: {
      'process.env.NODE_ENV': '"production"',
      'process.env.NODE_MODE': '"remote"',
      'process.env.NODE_SERVER': '"prod"',
      'process.env.NODE_API_MODE': '"api"'
    }
  }
}
