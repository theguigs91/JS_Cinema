/**
 * Created by kelly on 06/06/17.
 */

  /**
   * Convert time string (hh:mm:ss) to seconds
   * @param hhmmss
   */
export const HHMMSSToSeconds = function(hhmmss) {
  let a = hhmmss.split(':');
  return (+a[0]) * 3600 + (+a[1]) * 60 + (+a[2]);
};

/**
 * Convert time string (hh:mm) to seconds
 * @param hhmm
 */
export const HHMMToSeconds = function(hhmm) {
  let a = hhmm.split(':');
  return (+a[0]) * 3600 + (+a[1]) * 60;
};

export const secondsToHHMMSS = function(seconds) {
  let hh = Math.floor(seconds / 3600);
  let mm = Math.floor((seconds - (hh * 3600)) / 60);
  let ss = seconds - (hh * 3600) - (mm * 60);

  if (hh < 10) { hh = "0" + hh; }
  if (mm < 10) { mm = "0" + mm; }
  if (ss < 10) { ss = "0" + ss; }

  return hh + ':' + mm + ':' + ss;
};

export const secondsToHHMM = function(seconds) {
  let hh = Math.floor(seconds / 3600);
  let mm = Math.floor((seconds - (hh * 3600)) / 60);

  if (hh < 10) { hh = "0" + hh; }
  if (mm < 10) { mm = "0" + mm; }

  return hh + ':' + mm;
};

let hhmmss = HHMMSSToSeconds("11:30:33");
console.log(hhmmss);
console.log(secondsToHHMMSS(hhmmss));

let hhmm = HHMMToSeconds("11:30");
console.log(hhmm);
console.log(secondsToHHMM(hhmm));