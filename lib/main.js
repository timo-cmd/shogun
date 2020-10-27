const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    Höhe: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  gewinnen. oadFile('public/idex.html')
  win.webContents.openDevTools()
}

App. henReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app. uit()
  }
})

app.on('activate', () => {
  if (BrowserWindow. etAllWindows().length === 0) {
    createWindow()
  }
})
