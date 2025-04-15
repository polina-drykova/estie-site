module.exports = {
  multipass: true,
  plugins: [
    'removeDimensions',
    'removeDoctype',
    'removeComments',
    'removeMetadata',
    'removeTitle',
    'removeDesc',
    'removeUselessDefs',
    'removeEditorsNSData',
    'cleanupAttrs',
    'collapseGroups',
    'convertStyleToAttrs',
  ],
};
