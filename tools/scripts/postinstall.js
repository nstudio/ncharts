#!/usr/bin/env node
/**
 * Postinstall script for nstreamdown-workspace
 * Creates symlinks for @nstudio packages to enable builds
 */
const fs = require('fs');
const path = require('path');

// Resolve to workspace root (two levels up from tools/scripts)
const rootDir = path.resolve(__dirname, '..', '..');
const packages = ['ncharts'];
const distPaths = packages.map((pkg) => path.join(rootDir, 'dist', 'packages', pkg));
const symlinkDir = path.join(rootDir, 'node_modules', '@nstudio');
const symlinkPaths = packages.map((pkg) => path.join(symlinkDir, pkg));

console.log('Setting up @nstudio package symlinks...');

// Ensure @nstudio directory exists
if (!fs.existsSync(symlinkDir)) {
  fs.mkdirSync(symlinkDir, { recursive: true });
  console.log('Created @nstudio directory in node_modules');
}

// Remove existing symlink if it exists
try {
  for (const symlinkPath of symlinkPaths) {
    const stat = fs.lstatSync(symlinkPath);
    if (stat.isSymbolicLink() || stat.isDirectory()) {
      fs.unlinkSync(symlinkPath);
      console.log('Removed existing symlink');
    }
  }
} catch (e) {
  // Path doesn't exist, which is fine
}

// Check if dist exists, if not create placeholder
for (let i = 0; i < distPaths.length; i++) {
  const distPath = distPaths[i];
  const symlinkPath = symlinkPaths[i];
  const pkgName = packages[i];

  if (!fs.existsSync(distPath)) {
    console.log(`dist/packages/${pkgName} not found - will be created on first build`);
    console.log(`Run: npx nx build ${pkgName}`);

    // Create placeholder directory so symlink works
    fs.mkdirSync(distPath, { recursive: true });

    // Create minimal package.json placeholder
    const placeholderPackage = {
      name: `@nstudio/${pkgName}`,
      version: '0.0.0-placeholder',
      main: 'index.js',
    };
    fs.writeFileSync(path.join(distPath, 'package.json'), JSON.stringify(placeholderPackage, null, 2));

    // Create empty index.js
    fs.writeFileSync(path.join(distPath, 'index.js'), `// Placeholder - run npx nx build ${pkgName}\n`);
  }
  // Create symlink
  try {
    fs.symlinkSync(distPath, symlinkPath, 'dir');
    console.log(`✓ Created symlink: node_modules/@nstudio/${pkgName} -> dist/packages/${pkgName}`);
  } catch (e) {
    console.error(`Failed to create symlink for ${pkgName}:`, e.message);
    process.exit(1);
  }
}

console.log('Symlink setup complete!');
