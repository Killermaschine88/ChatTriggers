import Settings from "./../data/Settings";

const Mc = Client.getMinecraft();
const player = Mc.field_71439_g;

let count = 0;
let running = false;
let draw = false;
let once = 0;

register("step", () => {
  if (!running) return;
  count = count + 1;
  if (count >= 120) {
    draw = true;
    if (count >= 125) {
      draw = false;
      count = 0;
      running = false;
    }
  }
}).setDelay(1);

register("playerInteract", (action) => {
  if (!Settings.bannerTimer) return;
  if (action.toString() === "RIGHT_CLICK_BLOCK") {
    if (once % 2) return;
    once += 1;
    let holding = player.func_70694_bm();
    if (holding === null) return;
    item = holding.func_82833_r();
    if (item === "§aTotem of Corruption") {
      running = true;
    }
  }
});

register("RenderOverlay", () => {
  if (!draw) return;
  drawBigStringOnScreen(Settings.bannerText);
});

function drawBigStringOnScreen(text) {
  let color = Renderer.color(Settings.bannerColor.getRed(), Settings.bannerColor.getGreen(), Settings.bannerColor.getBlue());
  let myText = new Text("", 0, 0).setString(text).setScale(10);
  myText.setX(Renderer.screen.getWidth() / 2 - ((Renderer.getStringWidth(text) * myText.getScale()) / 2 - 5));
  myText.setY(Renderer.screen.getHeight() / 2 - 45);
  myText.setShadow(true);
  myText.setColor(color);
  myText.draw();
}
