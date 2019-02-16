import { helper } from '@ember/component/helper';
import { isHTMLSafe, htmlSafe } from '@ember/string';

export function bgImage(url) {
  let bgImage = `background-image: url('${url}');`;

  if (!isHTMLSafe(bgImage)) {
    bgImage = htmlSafe(bgImage);
  }

  return bgImage;
}

export default helper(bgImage);
