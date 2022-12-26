import * as s from "../settings/template_settings";

function Canvas() {
  return (
    <canvas
      className="canvas"
      style={{
        position: "absolute",
        background: s.canvasColor,
        border: "1px solid",
        zIndex: 0,
      }}
    ></canvas>
  );
}

export { Canvas };
