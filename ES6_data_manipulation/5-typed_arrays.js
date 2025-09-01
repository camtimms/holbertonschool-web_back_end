export default function createInt8TypedArray(length = 0, position = 0, value = 0) {
  // Create buffer
  const buffer = new ArrayBuffer(length);

  // Check if position is valid
  if (position >= length || position < 0) {
    throw new Error('Postition outside range')
  }

  // Create data view
  const dataView = new DataView(buffer)

  dataView.setInt8(position, value);

  return dataView;
}