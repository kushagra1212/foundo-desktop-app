const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");
let mainWindow = null;

function onReady() {
  mainWindow = new BrowserWindow({ show: false, label: "Foundo" });
  mainWindow.maximize();
  mainWindow.show();
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "dist/foundo-app/index.html"),
      protocol: "file:",
      slashes: true,
    })
  );
}
try {
  require("electron-reloader")(module);
} catch (_) {}
app.on("ready", onReady);
app.on("window-all-closed", () => {
  app.quit();
});
console.log("size:", mainWindow?.getSize());
console.log("bounds:", mainWindow?.getBounds());
