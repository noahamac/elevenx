project_name: "viz-aster-marketplace"

constant: VIS_LABEL {
  value: "ElevenX"
  export: override_optional
}

constant: VIS_ID {
  value: "elevenx-marketplace"
  export:  override_optional
}

visualization: {
  id: "@{VIS_ID}"
  file: "elevenup.js"
  label: "@{VIS_LABEL}"
}
