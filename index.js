const os = require('os')
const express = require('express')
const app = express()
const port = 5000

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

app.get('/', (req, res) => {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;

  res.status(200).json({
      freememory_bytes:  freeMemory,
      freememory_formatted: formatBytes(freeMemory),
      totalmemory_bytes: totalMemory,
      totalmemory_formatted: formatBytes(totalMemory),
      usedmemory_bytes: usedMemory,
      usedmemory_formatted: formatBytes(usedMemory)
  });
})



app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})