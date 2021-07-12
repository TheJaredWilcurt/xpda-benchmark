
# xpda-benchmark

A benchmark for launching NW.js and Electron

## Preliminary results:

* No major difference in launch speed, roughly the same
* NW.js actually loads more of the app before closing, where as Electron doesn't even attempt to do a paint of the page before closing, which is why I think it's marginally faster in these tests.
* Despite having like 30 badly named events that are all meant to convey when the page is "done", none of them actually tie to this, and the last one to fire is actually `console-message`. Electron will be ever-annoying until the day it dies.
* I would have preferred to close the app from the Window in Electron, as that would be better for the benchmark, but Electron is "extremely limited" (aka, trash), so this is literally not possible with it.
* Need to spend more time looking into various versions of each, and on different platforms to see if any patterns arise.
