/**
 * Created by kelly on 06/06/17.
 */

/**
 * Convert Date (new Date type) to string format (yyyymmdd),
 * each element separated by joinStr.
 *
 * @param date: Date
 * @param joinStr: String used to separate elements ('-' -> yyyy-mm-dd)
 * @returns {string}
 */
export const dateToYYYYMMDD = function(date, joinStr) {
  let mm = date.getMonth() + 1; // getMonth() is zero-based
  let dd = date.getDate();

  return [date.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
  ].join(joinStr);
};

/**
 * Convert Date (new Date type) to string format (ddmmyyyy),
 * each element separated by joinStr.
 *
 * @param date: Date
 * @param joinStr: String used to separate elements ('-' -> dd-mm-yyyy)
 * @returns {string}
 */
export const dateToDDMMYYYY = function(date, joinStr) {
  let mm = date.getMonth() + 1; // getMonth() is zero-based
  let dd = date.getDate();

  return [(dd > 9 ? '' : '0') + dd,
    (mm > 9 ? '' : '0') + mm,
    date.getFullYear()
  ].join(joinStr);
};


/**
 * Get yyyy-mm-dd from yyyy-MM-dd'T'HH:mm:ss.SSSZ
 */
export const getYYYYMMDD = function(dateStr) {
  return dateStr.substring(0, 10);
};

export const getTodayDateDDMMYYYY = function(joinStr) {
  return dateToDDMMYYYY(new Date(), joinStr);
};

let start = new Date();
console.log(dateToYYYYMMDD(start, '-'));