
export const slugify = (text: string) => {
    return text.toString().toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w\-]+/g, "") // Remove all non-word chars
        .replace(/\-\-+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
};

export const unSlugify = (slug: string) => {
    var words = slug.split(/-|_/);
    return words.map(function(word) {
      return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    }).join(" ");
};


export const objectDeepClone = (obj: Object) => {
    return JSON.parse(JSON.stringify(obj));
}

export function acceptOnlyNumbers(str: string) {
    if (str) {
        return str.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')
    }
    return null
}
