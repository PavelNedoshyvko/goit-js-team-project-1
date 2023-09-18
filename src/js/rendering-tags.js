export function getTags(tags) {
  return tags
    .map(
      tag =>
        `<li class="tags-list-item"><button class="btn-tag-recipe" type="button">#${tag}</button></li>`
    )
    .join('');
}
