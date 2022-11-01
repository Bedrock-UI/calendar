function chunk<T>(array: Array<T>, chunkSize: number) {
  const chunks: Array<Array<T>> = [];
  let index = 0;

  while (index < array.length) {
    const sliced = array.slice(index, (index += chunkSize));

    // If the last chunk is not long enough, pad with -1's
    if (sliced.length < chunkSize) {
      chunks.push([...sliced, ...Array(chunkSize - sliced.length).fill(-1)]);
    } else {
      chunks.push(sliced);
    }
  }

  return chunks;
}

export default chunk;
