const { app, BrowserWindow } = require("electron");
const path = require("path");
let mainWindow = null;

const isDev = true;

function onReady() {
  mainWindow = new BrowserWindow({
    show: false,
    label: "Foundo",
    minWidth: 1024,
    minHeight: 652,
  });
  mainWindow.maximize();
  mainWindow.show();

  mainWindow.loadURL(
    isDev
      ? "http://localhost:4200"
      : `file://${path.join(__dirname, "dist/foundo-app/index.html")}`
  );
  mainWindow?.webContents.on("did-fail-load", () =>
    mainWindow.loadURL(
      isDev
        ? "http://localhost:4200"
        : `file://${path.join(__dirname, "dist/foundo-app/index.html")}`
    )
  );
  console.log("size:", mainWindow?.getSize());
  console.log("bounds:", mainWindow?.getBounds());
}

app.on("ready", onReady);
app.on("activate", () => {
  if (win === null) {
    onReady();
  }
});
// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});
