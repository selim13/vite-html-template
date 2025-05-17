#!/usr/bin/env bash

if [ $# -ne 3 ]; then
  echo "Usage: $0 path_to_icons path_to_css.css url"
  exit 1
fi

icons="$1"
output="$2"
url="$3"

cat <<EOT > "$output"
.i {
  display: block;
  vertical-align: text-bottom;
  background-color: currentcolor;
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
}
EOT

for size_path in "$icons"/*; do
  size=$(basename "$size_path")

  printf '%spx:\n' "$size"
  for icon_path in "$size_path"/*.svg; do
    name=$(basename "$icon_path" .svg)
    file=$(basename "$icon_path")

    echo "" >> "$output"
    echo ".i--${name}-${size} {" >> "$output"
    echo "  width: ${size}px;" >> "$output"
    echo "  height: ${size}px;" >> "$output"
    echo "  mask-image: url(${url}/${size}/${file});" >> "$output"
    echo "}" >> "$output"

    printf '\t%s\n' "$name"
  done
done
