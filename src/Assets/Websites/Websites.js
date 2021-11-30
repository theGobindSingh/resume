import SketchDsk from "../Images/sketch.png";
import SketchMob from "../Images/sketch_mob.png";

import SPFSDesk from "../Images/spfs.png";
import SPFSMob from "../Images/spfs_mob.png";

import PPDesk from "../Images/PP.png";
import PPMob from "../Images/PP_mob.png";

// Title, link, image
var Sketch,
  SPFS,
  PP = null;

if (window.screen.width <= 768) {
  Sketch = SketchMob;
  SPFS = SPFSMob;
  PP = PPMob;
} else {
  Sketch = SketchDsk;
  SPFS = SPFSDesk;
  PP = PPDesk;
}

export const Websites = [
  ["Sketch Club", "https://thegobindsingh.github.io/SketchTesting", Sketch],
  ["Prathima Pramod", "https://thegobindsingh.github.io/PrathimaPramod", PP],
  ["Sample Website", "https://thegobindsingh.github.io/spfs/", SPFS],
];
