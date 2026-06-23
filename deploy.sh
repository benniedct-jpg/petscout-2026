#!/bin/bash
set -e

# 1. Build on main
npm run build

# 2. Save dist outside repo
rm -rf /tmp/deploy-dist
cp -r dist /tmp/deploy-dist

# 3. Switch to gh-pages, replace only build output
git checkout gh-pages
git rm -rf . --quiet
cp -r /tmp/deploy-dist/. .
git add index.html favicon.svg icons.svg assets/
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M')"
git push origin gh-pages

# 4. Back to main
git checkout main
echo "✅ 배포 완료: https://benniedct-jpg.github.io/petscout-2026/"
