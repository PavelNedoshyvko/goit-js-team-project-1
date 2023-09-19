export function getTags(tags) {
  return tags
    .map(tag =>
      tag.length > 0
        ? `<li class="tags-list-item"><button class="btn-tag-recipe" type="button">#${tag}</button></li>`
        : null
    )
    .join('');
}
