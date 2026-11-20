#!/bin/sh
# Rebuilds dist/ from src/ only. Run before every deploy.
set -eu
cd "$(dirname "$0")"
rm -rf dist
mkdir dist
cp -R src/. dist/
# drop hidden files (e.g. .DS_Store) from the output
find dist -name '.*' ! -name . ! -name .. -exec rm -rf {} + 2>/dev/null || true
echo "dist/ ready:"
find dist -type f | sort
