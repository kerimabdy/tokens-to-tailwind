function deepen(obj) {
  const result = {};

  // For each object path (property key) in the object
  for (const objectPath in obj) {
    // Split path into component parts
    const parts = objectPath.split('-');

    // Create sub-objects along path as needed
    let target = result;
    while (parts.length > 1) {
      const part = parts.shift();
      target = target[part] = target[part] || {};
    }

    // Set value at end of path
    target[parts[0]] = obj[objectPath]
  }

  return result;
}

function createArray({ dictionary, platform }) {
  const arr = dictionary.allTokens;
  return JSON.stringify(arr);
}

/**
 * 
 * @param {string} type 
 * @param {any[]} tokens 
 * @returns
 */

function filterTokensByType(type, tokens) {
  const filteredObj = tokens.filter(token => token.type === type);
  const obj = filteredObj.reduce((acc, cur) => {
    let value;

    switch (type) {
      case 'typography':
        value = typographyFormatter(cur.value);
        break;
      default:
        value = `${cur.value}`;
    }

    acc[cur.path.join("-")] = value
    return acc
  }, {})

  const deep = deepen(obj)
  return obj
}


function typographyFormatter(value) {

  return [
    value?.fontSize && `${value?.fontSize / 16}rem`, {
      ...(value?.lineHeight && { lineHeight: `${value?.lineHeight / 16}rem` }),
      ...(value?.fontWeight && { fontWeight: value?.fontWeight }),
    }
  ]
}

module.exports = { createArray, filterTokensByType };