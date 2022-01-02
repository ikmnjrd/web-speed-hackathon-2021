/**
 * @param {string} url
 * @returns {Promise<ArrayBuffer>}
 */
async function fetchBinary(url) {
  // const result = await $.ajax({
  //   async: false,
  //   dataType: 'binary',
  //   method: 'GET',
  //   responseType: 'arraybuffer',
  //   url,
  // });
  // return result;
  return fetch(url).then((res) => res.arrayBuffer());
}

/**
 * @template T
 * @param {string} url
 * @returns {Promise<T>}
 */
async function fetchJSON(url) {
  // const result = await $.ajax({
  //   async: false,
  //   dataType: 'json',
  //   method: 'GET',
  //   url,
  // });
  // return result;
  return fetch(url).then((res) => res.json());
}

/**
 * @template T
 * @param {string} url
 * @param {File} file
 * @returns {Promise<T>}
 */
async function sendFile(url, file) {
  // const result = await $.ajax({
  //   async: false,
  //   data: file,
  //   dataType: 'json',
  //   headers: {
  //     'Content-Type': 'application/octet-stream',
  //   },
  //   method: 'POST',
  //   processData: false,
  //   url,
  // });
  // return result;
  return fetch(url, {
    method: 'post',
    body: file,
    headers: {
          'Content-Type': 'application/octet-stream',
        },
  }).then((res) => res.json());
}

/**
 * @template T
 * @param {string} url
 * @param {object} data
 * @returns {Promise<T>}
 */
async function sendJSON(url, data) {
  // const jsonString = JSON.stringify(data);
  // const uint8Array = new TextEncoder().encode(jsonString);
  // const compressed = gzip(uint8Array);

  // const result = await $.ajax({
  //   async: false,
  //   data: compressed,
  //   dataType: 'json',
  //   headers: {
  //     'Content-Encoding': 'gzip',
  //     'Content-Type': 'application/json',
  //   },
  //   method: 'POST',
  //   processData: false,
  //   url,
  // });
  // return result;
  return fetch(url, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
}

export { fetchBinary, fetchJSON, sendFile, sendJSON };
