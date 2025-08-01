# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **TagoIO Builder** - a CLI tool that bundles JavaScript/TypeScript analysis scripts for the TagoIO IoT platform. It takes user analysis code and creates bundled `.tago-io.js` files that can run on TagoIO's cloud platform.

### Key Architecture Components

- **index.js**: Main CLI entry point using Commander.js for argument parsing and esbuild for bundling
- **externals.js**: Defines modules that should be excluded from bundling (available in TagoIO runtime)
- **package.json**: ES module with `"type": "module"`, requires Node.js >=20.19.0
- **.github/workflows/ci.yml**: Full CI/CD pipeline with testing, linting, and auto-publishing

### Core Functionality

The CLI accepts user analysis files and:
1. Bundles them with esbuild, excluding TagoIO-provided modules
2. Adds metadata banner with build info
3. Outputs optimized `.tago-io.js` file for TagoIO platform
4. Supports TypeScript compilation, watch mode, and obfuscation

## Development Commands

```bash
# Install dependencies
npm install

# Lint and format code
npm run lint
npm run lint:fix
npm run format

# Manual CLI testing
node index.js --help
node index.js myfile.js          # Bundle JS file
node index.js myfile.ts          # Bundle TS file
node index.js --tsconfig         # Generate tsconfig.json

# Type checking
npx tsc --noEmit
```

## Important Implementation Details

### External Modules System
The `externals.js` file defines modules that should NOT be bundled (available in TagoIO runtime). When adding new external modules, update this list. The `--force` flag can override this behavior.

### CLI Option Changes
Recent Commander.js updates require proper option formatting. Use long-form options (e.g., `--removeBanner`) rather than short multi-character options (avoid `-rb`).

### ES Module Configuration
This project uses ES modules (`"type": "module"`). All imports use `node:` protocol for built-ins. Files with `.LOCAL.*` and `.NOTE.*` patterns are for manual testing and ignored by git/biome.

### Build Target Updates
esbuild targets `node20` to match the minimum engine requirement. Update both package.json engines and esbuild target when changing Node.js requirements.

### Biome Configuration
Uses Biome for linting/formatting instead of ESLint. Configuration excludes test files, build outputs, and local development files. Auto-organizes imports and enforces consistent code style.