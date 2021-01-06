/**
 * @description 时间控制util
 * @author: 南歌子
 * @date 2021/01/05 16:36
 * @version V1.0.0
 *
 * Hello, humor
 */

/**
 * 获取本月第一天
 * @param date
 */
export const getFirstDayOfMonth = date => {
  const temp = new Date(date.getTime());
  temp.setDate(1);
  return temp.getDay();
};

/**
 * 获取本月天数
 * @param year
 * @param month
 */
export const getDayCountOfMonth = (year, month) => {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  }

  if (month === 1) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      return 29;
    } else {
      return 28;
    }
  }

  return 31;
};

/**
 * 往前补全42天
 * @param date
 * @param amount
 */
export const prevDate = (date, amount = 1) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - amount);
};

/**
 * 获取本月开始的日期位置
 * @param year
 * @param month
 */
export const getStartDateOfMonth = (year, month) => {
  const result = new Date(year, month, 1);
  const day = result.getDay();

  if (day === 0) {
    return prevDate(result, 7);
  } else {
    return prevDate(result, day);
  }
};

/**
 * 初始化日期
 * @param date
 */
export const clearTime = date => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

/**
 * 完后几天
 * @param date
 * @param amount
 */
export const nextDate = (date, amount = 1) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
};

export const arrayFindIndex = (arr, pred) => {
  for (let i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i;
    }
  }
  return -1;
};

export const arrayFind = (arr, pred) => {
  const idx = arrayFindIndex(arr, pred);
  return idx !== -1 ? arr[idx] : undefined;
};

/**
 * 格式化数组
 * @param val
 */
export const coerceTruthyValueToArray = val => {
  if (Array.isArray(val)) {
    return val;
  } else if (val) {
    return [val];
  } else {
    return [];
  }
};

/**
 * 判断是否为日期
 * @param date
 */
export const isDate = date => {
  if (date === null || date === undefined) return false;
  if (isNaN(new Date(date).getTime())) return false;
  if (Array.isArray(date)) return false;
  return true;
};

/**
 * 选择日期后 形成新的日期
 * @param date
 * @param y
 * @param m
 * @param d
 */
export const modifyDate = (date, y, m, d) => {
  return new Date(y, m, d, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
};

/**
 * 日期格式化
 * @param y
 * @param m
 * @param d
 */
export const setDate = (y, m, d) => {
  if (m < 10) {
    m = `0${m}`;
  }
  if (d < 10) {
    d = `0${d}`;
  }
  return `${y}-${m}-${d}`
};

/**
 * (2010-1-31, 2010, 2) => 2010-2-28
 * @param date
 * @param year
 * @param month
 */
export const changeYearMonthAndClampDate = (date, year, month) => {
  const monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month));
  return modifyDate(date, year, month, monthDate);
};

/**
 * 前一个月
 * @param date
 */
export const prevMonth = date => {
  const year = date.getFullYear();
  const month = date.getMonth();
  return month === 0
      ? changeYearMonthAndClampDate(date, year - 1, 11)
      : changeYearMonthAndClampDate(date, year, month - 1);
};

/**
 * 后一个月
 * @param date
 */
export const nextMonth = date => {
  const year = date.getFullYear();
  const month = date.getMonth();
  return month === 11
      ? changeYearMonthAndClampDate(date, year + 1, 0)
      : changeYearMonthAndClampDate(date, year, month + 1);
};

/**
 * 前一年
 * @param date
 * @param amount
 */
export const prevYear = (date, amount = 1) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  return changeYearMonthAndClampDate(date, year - amount, month);
};

/**
 * 后一年
 * @param date
 * @param amount
 */
export const nextYear = (date, amount = 1) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  return changeYearMonthAndClampDate(date, year + amount, month);
};
