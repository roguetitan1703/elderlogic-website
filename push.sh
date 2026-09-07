#!/usr/bin/env bash
#
# Push everything, once, to both remotes.
#
#   ./push.sh                 commit as "Update site" and push
#   ./push.sh "your message"  commit with your own message and push
#
#   delpat  -> Delpat-Tech/elderlogic-website   (the record of the work)
#   origin  -> roguetitan1703/elderlogic-website (the one Vercel builds from)
#
# Commits carry no co-author or tool trailers. Whatever the message says is all
# the message says.

set -euo pipefail
cd "$(dirname "$0")"

MSG="${1:-Update site}"
BRANCH="$(git rev-parse --abbrev-ref HEAD)"

# Refuse to push a broken build to the remote Vercel deploys from.
if [ -d web/node_modules ]; then
  echo "→ building"
  ( cd web && npx --no-install next build >/dev/null 2>&1 ) \
    || { echo "✗ build failed — not pushing. Run 'cd web && npx next build' to see why."; exit 1; }
  echo "  build ok"
else
  echo "→ skipping build (web/node_modules missing; run npm install in web/)"
fi

git add -A

if git diff --cached --quiet; then
  echo "→ nothing new to commit"
else
  # --no-signoff and an explicit message keep trailers out of the log
  git commit --no-signoff -q -m "$MSG"
  echo "→ committed: $MSG"
fi

for remote in delpat origin; do
  printf '→ pushing to %-7s ' "$remote"
  if git push -q "$remote" "HEAD:$BRANCH" 2>/dev/null; then
    echo "ok"
  else
    # first push of a new branch needs an upstream
    git push -q -u "$remote" "HEAD:$BRANCH" && echo "ok (upstream set)"
  fi
done

echo "✓ $BRANCH is up to date on both remotes"
