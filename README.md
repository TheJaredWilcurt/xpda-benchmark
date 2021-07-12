
# xpda-benchmark

A benchmark for launching NW.js and Electron.


## Notes about the benchmark process:

* NW.js actually loads more of the app before closing, where as Electron doesn't even attempt to do a paint of the page before closing, which gives Electron a slight advantage (basically has a head start on closing).
* Despite having like 30 badly named events that are all meant to convey when the page is "done", none of them actually tie to this, and the last one to fire is actually `console-message`, which still fires before the content is painted to the screen. Electron will be ever-annoying until the day it dies.
* I would have preferred to close the app from the Window in Electron, as that would be better for the benchmark, but Electron is "extremely limited" (aka, trash), so this is literally impossible with it.


## Results

**Lower is better.** Results use "Time Elapsed". It's interesting that sometimes Electron is just barely faster, and other times NW.js is more than twice as fast.

**OS**     | **Node.js** | **NW.js**  | **Electron** | **NW.js** | **Electron** | **Computer**        | **RAM** | **CPU**
:--        | :--         | :--        | :--          |      --:  |        --:   | :--                 | --:     | :--
Windows 7  | 13.13.0     | 0.54.1-SDK | 13.1.6       |  11.645s  |    11.346s   | Thinkpad X1 Carbon  | 16 GB   | Intel Core i7-6600U CPU @ 2.60GHz (2.70 GHz)
Windows 10 | 14.15.4     | 0.54.1-SDK | 13.1.6       |  15.585s  |    32.402s   | Latitude 6430u      | 16 GB   | Intel Core i7-3687U CPU @ 2.10GHz (2.60 GHz)
Windows 10 | 16.4.2      | 0.54.1-SDK | 13.1.6       |  15.891s  |    12.895s   | ZBook Firefly 15 G7 | 32 GB   | Intel Core i7-10610U CPU @ 1.80GHz (2.30 GHz)
Windows 10 | 15.11.0     | 0.54.1-SDK | 13.1.6       |   9.666s  |    23.566s   | Home Built PC       | 32 GB   | Intel Core i7-6700K CPU @ 4.00GHz (4.00 GHz)
Ubuntu 20  | 15.12.0     | 0.54.1-SDK | 13.1.6       |   7.251s  |    11.075s   | VM on Home Built PC |  8 GB   | Intel Core i7-6700K CPU @ 4.00GHz (4.00 GHz) (4/8 cores)
OSX 10.15  | 15.12.0     | 0.54.1-SDK | 13.1.6       |  23.448s  |    14.862s   | VM on Home Built PC |  8 GB   | Intel Core i7-6700K CPU @ 4.00GHz (4.00 GHz) (4/8 cores)
**TOTALS** |             |            |              |**84.486s**| **106.146s** |                     |         |

Based on the total times, **Electron is 21.66s slower** at launching/closing, across all platforms tested.


### Running the benchmark

1. Install [Node.js/npm](https://nodejs.org)
1. Download, fork, or clone this repo
1. Run `npm install`
1. On Windows run `npm t`, on Non-Windows run `npm start`
   * The initial run may be slightly worse for both, because it will be creating folders/files in the AppData folder on first run of any NW.js or Electron app (or anything based on Chromium)
   * You can run this multiple times. Depending on system resources you will get slightly different results (generally +/-1 second) 


### Submitting your results

1. Open a new issue using the "Submit Benchmark" template
1. Fill out all the questions

