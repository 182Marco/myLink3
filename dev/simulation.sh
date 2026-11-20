#!/bin/sh
# TEMPORARY (see simulation-shim.js). Builds dev/simulation.html from
# src/index.html + the fake-playback shim, then open it in a browser.
cd "$(dirname "$0")" || exit 1
sed -e 's#<head>#<head><base href="../src/" />#' \
    -e 's#<body>#<body><script src="../dev/simulation-shim.js"></script>#' \
    ../src/index.html > simulation.html
echo "open dev/simulation.html"
