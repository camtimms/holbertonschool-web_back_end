export default function createInt8TypedArray(length = 0, position = 0, value = 0) {
  // Create buffer
  const buffer = new ArrayBuffer(length);

  // Create typed array view
  const int8View = new Int8Array(buffer)

  // Check if position is valid
  if (position >= length || position < 0) {
    throw new Error('Postition outside range')
  }

  int8View[position] = value;

  return int8View;
}