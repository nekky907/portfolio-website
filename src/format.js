import { projectsData } from './projectData'

// Two-digit index labels: 7 -> "07"
export const pad = n => String(n).padStart(2, '0')

export const TOTAL = pad(projectsData.length)

// A project's position in the index, as printed on its card and detail page
export const projectNumber = project => pad(projectsData.indexOf(project) + 1)

// How many projects carry each tag, and the tags in alphabetical order
export const tagCounts = projectsData
  .flatMap(project => project.tags)
  .reduce((counts, tag) => ({ ...counts, [tag]: (counts[tag] || 0) + 1 }), {})

export const allTags = Object.keys(tagCounts).sort()
