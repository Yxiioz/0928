const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1000,   // 視窗寬度，可以自己調整
    height: 800,  // 視窗高度，可以自己調整
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 讓 Electron 載入你原本就有的 index.html
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})